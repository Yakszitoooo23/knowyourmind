# Fixing Checkout API Error

## The Error

The checkout API is returning an error. Let's debug it step by step.

## Step 1: Check Browser Console

1. Open browser Developer Tools (F12)
2. Go to **Console** tab
3. Click "Unlock My Results" again
4. Look for the error message - it should show what's wrong

Common errors:
- `Stripe price ID not configured` → Missing `STRIPE_PRICE_ID_TIER_0` in `.env.local`
- `Invalid token` → Token issue with database
- `Failed to create checkout session` → Stripe API issue

## Step 2: Check Server Logs

Look at your terminal where `npm run dev` is running. You should see error messages like:

```
Error creating checkout session: ...
```

This will tell you the exact problem.

## Step 3: Verify Environment Variables

Make sure your `.env.local` has ALL these:

```env
# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY

# Stripe Price ID (get from Stripe Dashboard → Products)
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRICE_ID

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:** 
- No spaces around the `=` sign
- No quotes around the values
- Restart dev server after updating `.env.local`

## Step 4: Common Issues & Fixes

### Issue 1: "Stripe price ID not configured"
**Fix:** Add `STRIPE_PRICE_ID_TIER_0=price_1SvPakRqKyRDch1DC4NdRK0y` to `.env.local`

### Issue 2: "Invalid API Key"
**Fix:** Check that `STRIPE_SECRET_KEY` starts with `sk_test_` and is correct

### Issue 3: "No such price"
**Fix:** Verify the Price ID in Stripe Dashboard matches what's in `.env.local`

### Issue 4: "Invalid token"
**Fix:** Make sure you're using a valid token from a recent quiz completion

## Step 5: Test Again

After fixing the issue:
1. **Restart your dev server** (Ctrl+C, then `npm run dev`)
2. Complete quiz with a new email (or reset payment status)
3. Try payment again
4. Check console for the actual error message

## Quick Debug Command

Run this to check if environment variables are loaded:

```powershell
# This won't show secrets, but you can verify the file exists
Test-Path .env.local
```

---

**Next Step:** Check your browser console and server logs, then share the exact error message you see!
