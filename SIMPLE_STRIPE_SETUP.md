# Simple Step-by-Step: Stripe CLI Setup

## Step 1: Extract the ZIP File

1. Go to your **Downloads** folder
2. Find the file: `stripe_X.X.X_windows_x86_64.zip`
3. **Right-click** on it
4. Click **"Extract All..."**
5. Click **"Browse"**
6. Go to **C:\** (just type `C:\` in the address bar)
7. Click **"New Folder"** and name it `stripe-cli`
8. Click **"OK"**
9. Click **"Extract"**

✅ **Done!** Stripe CLI is now at: `C:\stripe-cli\stripe.exe`

---

## Step 2: Open PowerShell

1. Press **Windows Key + X**
2. Click **"Windows PowerShell"** or **"Terminal"**

---

## Step 3: Test Stripe CLI Works

Type these commands one by one (press Enter after each):

```powershell
cd C:\stripe-cli
```

```powershell
.\stripe.exe --version
```

You should see something like: `stripe version 1.18.0` (or similar)

✅ **If you see a version number, it works!**

---

## Step 4: Login to Stripe

Type:

```powershell
.\stripe.exe login
```

This will:
- Open your browser
- Ask you to authorize
- Link Stripe CLI to your account

✅ **Click "Allow access" in the browser when it opens**

---

## Step 5: Get Your Webhook Secret

Type this command (keep this window open!):

```powershell
.\stripe.exe listen --forward-to localhost:3000/api/webhook
```

You'll see output like:

```
> Ready! Your webhook signing secret is whsec_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t (^C to quit)
```

**Copy the `whsec_...` part** (the long string starting with `whsec_`)

⚠️ **Keep this PowerShell window open** - you'll need it running when testing payments!

---

## Step 6: Add Webhook Secret to .env.local

1. Open your project folder in your code editor
2. Open or create `.env.local` file
3. Add this line (replace with your actual secret):

```env
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE
```

**Example:**
```env
STRIPE_WEBHOOK_SECRET=whsec_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
```

4. Save the file

---

## Step 7: Make Sure .env.local Has Everything

Your `.env.local` should have:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://hbsuzhspuslxbhetiorw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhic3V6aHNwdXNseGJoZXRpb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDk5NjAsImV4cCI6MjA4NTI4NTk2MH0.rxgIOLHlcjNIjC5oY5AB8ynDzbIxRTNnpnYgRsakQMg

# Stripe (get from https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY

# Stripe Price ID (get from Stripe Dashboard → Products)
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRICE_ID

# Stripe Webhook Secret (ADD YOUR SECRET HERE)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Step 8: Restart Your Dev Server

1. Stop your dev server (Ctrl+C if running)
2. Start it again:

```powershell
npm run dev
```

---

## Step 9: Test It!

1. Make sure Stripe CLI is still running (the `stripe listen` command from Step 5)
2. Go to http://localhost:3000/quiz
3. Complete the quiz
4. Click "Unlock My Results"
5. You should see Stripe Checkout page
6. Use test card: `4242 4242 4242 4242`
7. Any future date, any CVC, any ZIP
8. Complete payment
9. Check the Stripe CLI window - you should see webhook events!

---

## Troubleshooting

**"cd: cannot find path" error?**
- Make sure you extracted to `C:\stripe-cli`
- Or tell me where you extracted it and I'll help

**"stripe.exe not recognized" error?**
- Make sure you're in the right folder: `cd C:\stripe-cli`
- Use: `.\stripe.exe` (with the `.\` at the start)

**Webhook not working?**
- Make sure `stripe listen` is still running
- Check that `STRIPE_WEBHOOK_SECRET` in `.env.local` matches what you copied
- Restart your dev server after updating `.env.local`

---

## Quick Reference Commands

```powershell
# Navigate to Stripe CLI
cd C:\stripe-cli

# Login
.\stripe.exe login

# Start webhook forwarding (keep this running!)
.\stripe.exe listen --forward-to localhost:3000/api/webhook
```

---

That's it! You're ready to test payments! 🎉
