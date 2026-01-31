# Moving from Stripe Test Mode to Production

## ✅ Good News: It's Very Easy!

Stripe makes the transition simple - your code stays the same, you just switch API keys and create products in production mode.

---

## Step-by-Step: Test → Production

### Step 1: Get Production API Keys

1. Go to Stripe Dashboard: https://dashboard.stripe.com
2. **Toggle from "Test mode" to "Live mode"** (toggle in top right)
3. Click **"Developers"** → **"API keys"**
4. Copy your **production keys**:
   - **Publishable key** (starts with `pk_live_...`)
   - **Secret key** (starts with `sk_live_...`)

⚠️ **Important:** Production keys are different from test keys!

### Step 2: Create Products in Production Mode

1. Make sure you're in **"Live mode"** (not Test mode)
2. Go to **"Products"** → **"+ Add product"**
3. Create the same products you have in test mode:
   - Tier 0: $1.99 (Reveal)
   - Tier 1: $9.99 (Full Report) - when ready
   - Tier 2: $19.99 (Complete Report) - when ready
4. **Copy the production Price IDs** (they'll be different from test Price IDs)

### Step 3: Set Up Production Webhook

1. In **Live mode**, go to **"Developers"** → **"Webhooks"**
2. Click **"+ Add endpoint"**
3. Enter your production URL:
   - `https://yourdomain.com/api/webhook`
   - (Replace with your actual domain)
4. Select event: `checkout.session.completed`
5. Click **"Add endpoint"**
6. Click on the endpoint → **"Reveal"** the signing secret
7. Copy the production webhook secret (starts with `whsec_...`)

### Step 4: Update Environment Variables

Update your production `.env` file (or Vercel environment variables) with:

```env
# Production Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PRODUCTION_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_PRODUCTION_KEY

# Production Price IDs
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRODUCTION_PRICE_ID

# Production Webhook Secret
STRIPE_WEBHOOK_SECRET=whsec_YOUR_PRODUCTION_WEBHOOK_SECRET

# Production App URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## Key Differences: Test vs Production

| Feature | Test Mode | Production Mode |
|---------|-----------|-----------------|
| **API Keys** | `pk_test_...` / `sk_test_...` | `pk_live_...` / `sk_live_...` |
| **Price IDs** | Different IDs | Different IDs |
| **Webhook Secret** | Different secret | Different secret |
| **Payments** | Test cards only | Real payments |
| **Dashboard** | Test data | Real transactions |

---

## Best Practices

### 1. Keep Test Mode for Development
- Use test mode while developing
- Test all features with test cards
- Only switch to production when ready

### 2. Use Environment Variables
- Keep test keys in `.env.local` (for development)
- Use production keys in production environment (Vercel, etc.)
- Never commit production keys to Git!

### 3. Test Before Going Live
- Test the complete flow in test mode
- Verify webhooks work
- Test error scenarios

### 4. Gradual Rollout
- Start with test mode
- Switch to production when confident
- Monitor production dashboard for issues

---

## Your Code Stays the Same! 🎉

The beauty of Stripe is that your code doesn't change:
- Same API calls
- Same webhook handler
- Same checkout flow
- Just different keys!

---

## Deployment Checklist

Before going to production:

- [ ] Test complete flow in test mode
- [ ] Get production API keys
- [ ] Create products in production mode
- [ ] Set up production webhook endpoint
- [ ] Update production environment variables
- [ ] Test with a small real payment (if possible)
- [ ] Monitor Stripe Dashboard for errors
- [ ] Set up email notifications in Stripe (optional)

---

## Quick Switch Example

**Development (.env.local):**
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRICE_ID
```

**Production (Vercel Environment Variables):**
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51ABC123...
STRIPE_SECRET_KEY=sk_live_51ABC123...
STRIPE_PRICE_ID_TIER_0=price_1ABC123...
```

That's it! Same code, different keys.

---

## Need Help?

- Stripe Dashboard: https://dashboard.stripe.com
- Stripe Docs: https://stripe.com/docs
- Test vs Live Mode: https://stripe.com/docs/keys

---

**TL;DR:** Yes, it's super easy! Just switch your API keys and create products in production mode. Your code stays exactly the same! 🚀
