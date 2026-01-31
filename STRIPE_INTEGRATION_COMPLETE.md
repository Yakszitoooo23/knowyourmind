# Stripe Integration - Setup Complete! 🎉

I've created the Stripe Checkout and webhook handlers. Now you need to complete the setup:

## ✅ What's Been Created

1. **Stripe Checkout API Route** (`app/api/checkout/route.ts`)
   - Creates Stripe Checkout sessions
   - Handles payment initiation

2. **Stripe Webhook Handler** (`app/api/webhook/route.ts`)
   - Processes payment completion
   - Updates database payment status

3. **Updated Unlock Page** (`app/unlock/page.tsx`)
   - Now uses Stripe Checkout instead of direct database update
   - Redirects to Stripe payment page

## 📝 Final Setup Steps

### Step 1: Update `.env.local` File

Create or update `.env.local` in your project root with:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://hbsuzhspuslxbhetiorw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhic3V6aHNwdXNseGJoZXRpb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDk5NjAsImV4cCI6MjA4NTI4NTk2MH0.rxgIOLHlcjNIjC5oY5AB8ynDzbIxRTNnpnYgRsakQMg
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe (get from https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY

# Stripe Price ID (get from Stripe Dashboard → Products)
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRICE_ID

# Stripe Webhook Secret (get this in Step 2)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Resend
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 2: Set Up Webhook for Local Development

You have two options:

#### Option A: Stripe CLI (Recommended)

1. **Install Stripe CLI** (if not already installed):
   - Download from: https://github.com/stripe/stripe-cli/releases
   - Or use: `winget install stripe.stripe-cli`
   - Or use: `scoop install stripe`

2. **Login to Stripe CLI**:
   ```powershell
   stripe login
   ```
   (This will open your browser to authorize)

3. **Forward webhooks to localhost**:
   ```powershell
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   
4. **Copy the webhook secret** that appears (starts with `whsec_...`)
   - It will look like: `whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Add this to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

5. **Keep this terminal window open** while testing!

#### Option B: ngrok (Alternative)

1. Install ngrok: https://ngrok.com/download
2. Run: `ngrok http 3000`
3. Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)
4. In Stripe Dashboard → Developers → Webhooks
5. Click "Add endpoint"
6. Endpoint URL: `https://your-ngrok-url.ngrok.io/api/webhook`
7. Select events: `checkout.session.completed`
8. Copy the webhook signing secret

### Step 3: Test the Payment Flow

1. **Start your dev server** (if not already running):
   ```powershell
   npm run dev
   ```

2. **Start Stripe CLI** (in a separate terminal, if using Option A):
   ```powershell
   stripe listen --forward-to localhost:3000/api/webhook
   ```

3. **Test the flow**:
   - Go to http://localhost:3000/quiz
   - Complete the quiz
   - Enter email and name
   - Click "Unlock My Results"
   - You should be redirected to Stripe Checkout
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC
   - Any ZIP code
   - Complete the payment
   - You should be redirected back to the reveal page

## 🧪 Test Cards

Stripe provides test cards for testing:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires Authentication**: `4000 0025 0000 3155`

Use any future expiry date, any CVC, and any ZIP code.

## ✅ Verification

After completing a test payment, check:

1. **Database**: The `users` table should have `reveal_paid = true` for your test user
2. **Stripe Dashboard**: You should see the payment in Test mode → Payments
3. **Webhook Logs**: In Stripe CLI terminal, you should see webhook events

## 🐛 Troubleshooting

### Webhook not working?
- Make sure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhook`
- Check that `STRIPE_WEBHOOK_SECRET` in `.env.local` matches the secret from Stripe CLI
- Restart your dev server after updating `.env.local`

### Payment succeeds but database not updated?
- Check the Stripe CLI terminal for webhook errors
- Check browser console for errors
- Verify `STRIPE_WEBHOOK_SECRET` is correct

### Checkout page not loading?
- Verify `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` are correct
- Check that `STRIPE_PRICE_ID_TIER_0` matches your Stripe product price ID
- Check server logs for errors

## 🎉 Next Steps

Once this is working:
- We can add the other two payment tiers (Tier 1 and Tier 2) later
- Set up email sending with Resend
- Deploy to production

---

**Need help?** Check the Stripe Dashboard logs and your terminal for error messages.
