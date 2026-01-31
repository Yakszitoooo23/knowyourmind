# Testing the Payment Flow - Step by Step

## ✅ Prerequisites Checklist

Before testing, make sure:

- [x] Stripe CLI is installed and extracted
- [x] You've logged into Stripe CLI (`stripe login`)
- [x] Webhook secret is in `.env.local`
- [x] All Stripe keys are in `.env.local`
- [x] Price ID is in `.env.local`

---

## Step 1: Start Stripe Webhook Listener

**Open a PowerShell window** and run (keep this running!):

```powershell
cd "C:\Users\Bruger\Downloads\stripe_1.35.0_windows_x86_64"
.\stripe.exe listen --forward-to localhost:3000/api/webhook
```

You should see:
```
> Ready! Your webhook signing secret is whsec_...
```

**Keep this window open** - you'll see webhook events here when payments complete!

---

## Step 2: Start Your Dev Server

**Open another PowerShell window** (or terminal) and run:

```powershell
cd C:\Users\Bruger\Projects\know-your-mind
npm run dev
```

Wait for: `✓ Ready on http://localhost:3000`

---

## Step 3: Test the Complete Flow

### 3.1: Go to Quiz Page
- Open browser: http://localhost:3000/quiz

### 3.2: Complete the Quiz
- Answer all 25 questions
- Click through each question

### 3.3: Enter Email
- When quiz completes, enter:
  - Email: `test@example.com` (or any email)
  - First Name: `Test`
- Click "Submit"

### 3.4: Click Unlock
- You should be redirected to `/unlock?token=...`
- Click **"Unlock My Results — $1.99"**

### 3.5: Stripe Checkout
- You should see Stripe Checkout page
- Use test card: **`4242 4242 4242 4242`**
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any ZIP code (e.g., `12345`)
- Click **"Pay $1.99"**

### 3.6: Success!
- You should be redirected to `/reveal/[token]`
- You should see your intelligence type!

---

## Step 4: Verify Everything Worked

### Check Stripe CLI Window
You should see webhook events like:
```
2026-01-30 23:15:23   --> checkout.session.completed [evt_xxx]
2026-01-30 23:15:23  <--  [200] POST http://localhost:3000/api/webhook
```

### Check Database
1. Go to Supabase Dashboard
2. Check `users` table
3. Find your test user
4. Verify `reveal_paid = true`

### Check Stripe Dashboard
1. Go to https://dashboard.stripe.com/test/payments
2. You should see the test payment

---

## 🐛 Troubleshooting

### "Failed to create checkout session"
- Check that `STRIPE_SECRET_KEY` is correct in `.env.local`
- Check that `STRIPE_PRICE_ID_TIER_0` is correct
- Restart dev server after updating `.env.local`

### Payment succeeds but doesn't redirect
- Check Stripe CLI window for webhook errors
- Verify `STRIPE_WEBHOOK_SECRET` is correct
- Check browser console for errors

### Webhook not received
- Make sure Stripe CLI is still running
- Check that webhook URL is `localhost:3000/api/webhook`
- Verify webhook secret matches

### "Invalid token" error
- Make sure you're using a fresh quiz completion
- Check that database connection is working

---

## ✅ Success Indicators

You'll know it's working when:
1. ✅ Stripe Checkout page loads
2. ✅ Payment completes successfully
3. ✅ You're redirected to reveal page
4. ✅ Webhook events appear in Stripe CLI
5. ✅ Database shows `reveal_paid = true`
6. ✅ Reveal page shows your intelligence type

---

## 🎉 Next Steps After Testing

Once testing works:
- You're ready to deploy!
- Consider adding the other payment tiers (Tier 1, Tier 2)
- Set up email sending with Resend
- Deploy to production

---

**Ready to test?** Follow the steps above and let me know if you encounter any issues!
