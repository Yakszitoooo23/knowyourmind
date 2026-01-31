# Debugging Payment Issue

## Problem: Payment Bypassed

If payment is being bypassed, it's likely because `reveal_paid = true` in the database from previous testing.

## Solution 1: Check Browser Console

1. Open your browser
2. Go to the unlock page
3. Press **F12** to open Developer Tools
4. Click the **"Console"** tab
5. Click "Unlock My Results"
6. Look for any errors (red text)

Common errors:
- `Failed to create checkout session` - Check API route
- `Stripe price ID not configured` - Check `.env.local`
- `Invalid token` - Token issue

## Solution 2: Reset Payment Status in Database

### Option A: Via Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to **Table Editor** → **users** table
4. Find your test user
5. Set `reveal_paid` to `false` (or `null`)
6. Save

### Option B: Via SQL

1. Go to Supabase Dashboard → **SQL Editor**
2. Run this query:

```sql
UPDATE users 
SET reveal_paid = false 
WHERE email = 'your-test-email@example.com';
```

Replace `your-test-email@example.com` with your actual test email.

## Solution 3: Use a New Test User

1. Complete the quiz again with a **different email**
2. This will create a new user with `reveal_paid = false`
3. Then test the payment flow

## Solution 4: Check Environment Variables

Make sure `.env.local` has:

```env
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRICE_ID
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:** Restart your dev server after updating `.env.local`!

## Solution 5: Check API Route

The checkout API should:
1. Fetch user by token
2. Create Stripe session
3. Return checkout URL

Check server logs for errors when clicking "Unlock".

---

## Quick Test

1. Reset payment status (Solution 2)
2. Go to unlock page
3. Click "Unlock My Results"
4. Should redirect to Stripe Checkout
5. If not, check browser console for errors
