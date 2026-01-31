# How to Get Your Stripe Webhook Secret

## For Local Development (Recommended)

### Step 1: Install Stripe CLI

**Windows:**
- Download from: https://github.com/stripe/stripe-cli/releases/latest
- Look for `stripe_X.X.X_windows_x86_64.zip`
- Extract and add to your PATH, OR
- Use package manager:
  ```powershell
  # Using winget
  winget install stripe.stripe-cli
  
  # OR using scoop
  scoop install stripe
  ```

### Step 2: Login to Stripe CLI

Open PowerShell or Command Prompt and run:

```powershell
stripe login
```

This will:
- Open your browser
- Ask you to authorize the CLI
- Link it to your Stripe account

### Step 3: Forward Webhooks to Localhost

Run this command (keep this terminal open while testing):

```powershell
stripe listen --forward-to localhost:3000/api/webhook
```

### Step 4: Copy the Webhook Secret

When you run the command above, you'll see output like this:

```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (^C to quit)
```

**Copy the `whsec_...` secret** - this is your webhook secret!

It will look something like:
```
whsec_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```

### Step 5: Add to .env.local

Add this line to your `.env.local` file:

```env
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE
```

Replace `whsec_YOUR_SECRET_HERE` with the actual secret you copied.

---

## Alternative: Using Stripe Dashboard (For Production)

If you're using ngrok or deploying to production:

1. Go to: https://dashboard.stripe.com/test/webhooks
2. Click **"+ Add endpoint"**
3. Enter your endpoint URL:
   - Local with ngrok: `https://your-ngrok-url.ngrok.io/api/webhook`
   - Production: `https://yourdomain.com/api/webhook`
4. Select event: `checkout.session.completed`
5. Click **"Add endpoint"**
6. Click on the endpoint you just created
7. Under **"Signing secret"**, click **"Reveal"**
8. Copy the secret (starts with `whsec_...`)

---

## Quick Test

After adding the secret to `.env.local`:

1. Make sure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhook`
2. Restart your Next.js dev server
3. Complete a test payment
4. Check the Stripe CLI terminal - you should see webhook events being received!

---

## Troubleshooting

**"Command not found" error?**
- Make sure Stripe CLI is installed and in your PATH
- Try restarting your terminal
- Verify installation: `stripe --version`

**Webhook secret not working?**
- Make sure you copied the ENTIRE secret (it's long!)
- Check for extra spaces in `.env.local`
- Restart your dev server after updating `.env.local`

**No webhook events showing?**
- Make sure Stripe CLI is still running
- Check that your dev server is running on port 3000
- Verify the webhook URL in Stripe CLI matches your server
