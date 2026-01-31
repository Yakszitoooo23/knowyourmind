# Stripe Setup Guide - Step by Step

## Step 1: Create/Login to Stripe Account

1. Go to https://stripe.com
2. Click "Sign in" (if you have an account) or "Start now" (to create new account)
3. Complete the signup/login process
4. You'll be taken to the Stripe Dashboard

---

## Step 2: Get Your API Keys

### For Development (Test Mode):

1. In Stripe Dashboard, make sure you're in **Test mode** (toggle in top right should say "Test mode")
2. Click on **"Developers"** in the left sidebar
3. Click on **"API keys"**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`) - Click "Reveal test key" to see it

5. **Copy both keys** - you'll need them for `.env.local`

---

## Step 3: Create Products in Stripe

We need to create 3 products for our 3 payment tiers:

### Product 1: Tier 0 - Reveal ($1.99)

1. In Stripe Dashboard, click **"Products"** in the left sidebar
2. Click **"+ Add product"** button
3. Fill in:
   - **Name:** `Intelligence Type Reveal`
   - **Description:** `Unlock your intelligence type name and one-liner`
   - **Pricing:** 
     - Select "One time"
     - Amount: `1.99`
     - Currency: `USD`
   - **Product ID:** Leave as auto-generated (or set to `tier_0_reveal`)
4. Click **"Save product"**
5. **Copy the Price ID** (starts with `price_...`) - you'll need this later

### Product 2: Tier 1 - Full Report ($9.99)

1. Click **"+ Add product"** again
2. Fill in:
   - **Name:** `Intelligence Type Full Report`
   - **Description:** `Complete personalized report with strengths, learning style, and communication guide`
   - **Pricing:**
     - Select "One time"
     - Amount: `9.99`
     - Currency: `USD`
   - **Product ID:** Leave as auto-generated (or set to `tier_1_report`)
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_...`)

### Product 3: Tier 2 - Complete Report ($19.99)

1. Click **"+ Add product"** again
2. Fill in:
   - **Name:** `Intelligence Type Complete Report`
   - **Description:** `Full deep dive report with blind spots, leadership style, careers, and 30-day plan`
   - **Pricing:**
     - Select "One time"
     - Amount: `19.99`
     - Currency: `USD`
   - **Product ID:** Leave as auto-generated (or set to `tier_2_full_report`)
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_...`)

**📝 Note:** Write down all 3 Price IDs - you'll need them for the code!

---

## Step 4: Set Up Webhook Endpoint (For Local Development)

For local development, we'll use Stripe CLI. For production, you'll set up a webhook in the dashboard.

### Option A: Using Stripe CLI (Recommended for Development)

1. **Install Stripe CLI:**
   - Windows: Download from https://github.com/stripe/stripe-cli/releases
   - Or use: `winget install stripe.stripe-cli`
   - Or use: `scoop install stripe`

2. **Login to Stripe CLI:**
   ```powershell
   stripe login
   ```
   - This will open your browser to authorize

3. **Forward webhooks to localhost:**
   ```powershell
   stripe listen --forward-to localhost:3000/api/webhook
   ```
   - This will give you a **webhook signing secret** (starts with `whsec_...`)
   - **Copy this secret** - you'll need it for `.env.local`

### Option B: Using ngrok (Alternative)

1. Install ngrok: https://ngrok.com/download
2. Run: `ngrok http 3000`
3. Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`)
4. In Stripe Dashboard → Developers → Webhooks
5. Click "Add endpoint"
6. Endpoint URL: `https://your-ngrok-url.ngrok.io/api/webhook`
7. Select events: `checkout.session.completed`
8. Copy the webhook signing secret

---

## Step 5: Update .env.local File

1. Create/update `.env.local` in your project root
2. Add your Stripe keys:

```env
# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=https://hbsuzhspuslxbhetiorw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhic3V6aHNwdXNseGJoZXRpb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDk5NjAsImV4cCI6MjA4NTI4NTk2MH0.rxgIOLHlcjNIjC5oY5AB8ynDzbIxRTNnpnYgRsakQMg
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe (ADD YOUR KEYS HERE)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Stripe Price IDs (ADD YOUR PRICE IDs HERE)
STRIPE_PRICE_ID_TIER_0=price_YOUR_TIER_0_PRICE_ID
STRIPE_PRICE_ID_TIER_1=price_YOUR_TIER_1_PRICE_ID
STRIPE_PRICE_ID_TIER_2=price_YOUR_TIER_2_PRICE_ID

# Resend
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Replace the placeholder values with your actual keys and price IDs

---

## Step 6: Verify Installation

After setting up, we'll:
1. Create the Stripe Checkout API route
2. Create the webhook handler
3. Update the unlock page to use Stripe
4. Test the payment flow

---

## Quick Checklist

- [ ] Stripe account created/logged in
- [ ] Test mode API keys copied (Publishable + Secret)
- [ ] 3 products created in Stripe
- [ ] 3 Price IDs copied
- [ ] Webhook secret obtained (via Stripe CLI or ngrok)
- [ ] `.env.local` file updated with all keys
- [ ] Ready to implement code

---

## Need Help?

- Stripe Dashboard: https://dashboard.stripe.com
- Stripe Docs: https://stripe.com/docs
- Stripe CLI Docs: https://stripe.com/docs/stripe-cli
