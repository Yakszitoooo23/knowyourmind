# Production Deployment Guide

## 🚀 Getting Your Website Live - Step by Step

This guide covers everything needed to deploy your MVP to production with all current features working.

---

## ✅ Pre-Deployment Checklist

### 1. Code Review
- [x] All features working in development
- [x] Payment flow tested
- [x] Database integration working
- [x] No console errors

### 2. Environment Variables Needed
Make sure you have all these ready for production:
- Supabase production keys (already have)
- Stripe production keys (need to get)
- Stripe production products (need to create)
- Stripe production webhook secret (need to set up)
- Resend API key (optional for now)
- Production app URL (your domain)

---

## Step 1: Set Up Production Stripe Account

### 1.1: Switch to Live Mode
1. Go to https://dashboard.stripe.com
2. **Toggle from "Test mode" to "Live mode"** (top right)
3. You'll see a warning - click "Activate"

### 1.2: Get Production API Keys
1. In **Live mode**, go to **Developers** → **API keys**
2. Copy your **production keys**:
   - **Publishable key** (starts with `pk_live_...`)
   - **Secret key** (starts with `sk_live_...`) - Click "Reveal live key"

⚠️ **Important:** These are different from test keys!

### 1.3: Create Production Products
1. Still in **Live mode**, go to **Products**
2. Click **"+ Add product"**
3. Create your product:
   - **Name:** `Intelligence Type Reveal`
   - **Description:** `Unlock your intelligence type name and one-liner`
   - **Pricing:** One time, $1.99, USD
4. Click **"Save product"**
5. **Copy the Price ID** (starts with `price_...`)

⚠️ **Note:** Production Price IDs are different from test Price IDs!

---

## Step 2: Deploy to Vercel

### 2.1: Prepare Your Code
1. Make sure all code is committed to Git:
   ```powershell
   git add .
   git commit -m "Ready for production"
   git push
   ```

2. **Important:** Make sure `.env.local` is in `.gitignore` (it should be by default)

### 2.2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign up/Login (use GitHub if possible)
3. Click **"Add New Project"**
4. Import your Git repository
5. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

### 2.3: Add Environment Variables in Vercel
Before deploying, add these in Vercel:

1. Go to **Settings** → **Environment Variables**
2. Add each variable:

```env
# Supabase (Production - same as you have)
NEXT_PUBLIC_SUPABASE_URL=https://hbsuzhspuslxbhetiorw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhic3V6aHNwdXNseGJoZXRpb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDk5NjAsImV4cCI6MjA4NTI4NTk2MH0.rxgIOLHlcjNIjC5oY5AB8ynDzbIxRTNnpnYgRsakQMg

# Stripe Production Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_PRODUCTION_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_PRODUCTION_KEY

# Stripe Production Price ID
STRIPE_PRICE_ID_TIER_0=price_YOUR_PRODUCTION_PRICE_ID

# Stripe Production Webhook Secret (get this in Step 3)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_PRODUCTION_WEBHOOK_SECRET

# Production App URL (your Vercel domain)
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app

# Resend (optional - can add later)
RESEND_API_KEY=your_resend_api_key
```

3. **Important:** Select **"Production"** environment for all variables
4. Click **"Save"**

### 2.4: Deploy
1. Click **"Deploy"**
2. Wait for build to complete (2-5 minutes)
3. You'll get a URL like: `https://your-project.vercel.app`

---

## Step 3: Set Up Production Webhook

### 3.1: Get Your Production URL
After Vercel deployment, you'll have a URL like:
- `https://your-project.vercel.app`

### 3.2: Create Webhook in Stripe
1. Go to Stripe Dashboard (in **Live mode**)
2. Go to **Developers** → **Webhooks**
3. Click **"+ Add endpoint"**
4. Enter endpoint URL:
   ```
   https://your-project.vercel.app/api/webhook
   ```
   (Replace with your actual Vercel URL)

5. Select events to listen to:
   - Check `checkout.session.completed`
6. Click **"Add endpoint"**

### 3.3: Get Webhook Secret
1. Click on the webhook endpoint you just created
2. Under **"Signing secret"**, click **"Reveal"**
3. Copy the secret (starts with `whsec_...`)

### 3.4: Add Webhook Secret to Vercel
1. Go back to Vercel
2. **Settings** → **Environment Variables**
3. Update `STRIPE_WEBHOOK_SECRET` with the production secret
4. **Redeploy** (or it will auto-update on next deploy)

---

## Step 4: Custom Domain (Optional but Recommended)

### 4.1: Buy a Domain
- Namecheap, Google Domains, or any registrar
- Common choices: `.com`, `.io`, `.co`

### 4.2: Add Domain to Vercel
1. In Vercel project, go to **Settings** → **Domains**
2. Add your domain (e.g., `knowyourmind.com`)
3. Follow DNS instructions
4. Update `NEXT_PUBLIC_APP_URL` in Vercel environment variables

### 4.3: Update Stripe Webhook
1. Go to Stripe Dashboard → Webhooks
2. Edit your webhook endpoint
3. Update URL to: `https://yourdomain.com/api/webhook`
4. Save

---

## Step 5: Final Testing

### 5.1: Test Production Flow
1. Go to your production URL
2. Complete the quiz
3. Test payment with a **real card** (small amount)
4. Verify:
   - ✅ Payment processes
   - ✅ Webhook updates database
   - ✅ Redirect to reveal page works
   - ✅ Results display correctly

### 5.2: Monitor
- Check Stripe Dashboard for payments
- Check Vercel logs for errors
- Check Supabase for data

---

## Step 6: Security & Best Practices

### 6.1: Environment Variables
- ✅ Never commit `.env.local` to Git
- ✅ Use Vercel environment variables for production
- ✅ Keep production keys secret

### 6.2: Database
- ✅ Supabase is already secure (cloud-hosted)
- ✅ Row Level Security (RLS) policies if needed
- ✅ Regular backups (Supabase handles this)

### 6.3: Stripe
- ✅ Use production keys only in production
- ✅ Monitor for failed payments
- ✅ Set up email notifications in Stripe

---

## 📋 Production Checklist

### Before Going Live
- [ ] Production Stripe account activated
- [ ] Production API keys obtained
- [ ] Production products created
- [ ] Code deployed to Vercel
- [ ] Environment variables set in Vercel
- [ ] Production webhook configured
- [ ] Webhook secret added to Vercel
- [ ] Domain configured (optional)
- [ ] Test payment completed successfully
- [ ] Database verified working
- [ ] All features tested in production

### After Going Live
- [ ] Monitor Stripe Dashboard
- [ ] Check Vercel logs regularly
- [ ] Set up error tracking (optional)
- [ ] Monitor Supabase usage
- [ ] Set up analytics (optional)

---

## 🐛 Troubleshooting

### Payment Not Working
- Check Stripe Dashboard → Payments
- Verify webhook is receiving events
- Check Vercel function logs
- Verify environment variables are correct

### Webhook Not Working
- Verify webhook URL is correct
- Check webhook secret matches
- Look at Stripe webhook logs
- Check Vercel function logs

### Database Issues
- Check Supabase Dashboard
- Verify connection strings
- Check RLS policies if enabled

---

## 💰 Costs (Estimated)

### Free Tier (MVP)
- **Vercel:** Free (hobby plan)
- **Supabase:** Free tier (500MB database)
- **Stripe:** 2.9% + $0.30 per transaction
- **Domain:** ~$10-15/year (optional)

### When You Scale
- Vercel Pro: $20/month (if needed)
- Supabase Pro: $25/month (if needed)
- Stripe: Pay-as-you-go (no monthly fee)

---

## 🎯 Quick Summary

**To go live, you need:**

1. ✅ **Stripe Production Setup** (15 min)
   - Activate live mode
   - Get production keys
   - Create production product

2. ✅ **Deploy to Vercel** (10 min)
   - Connect GitHub
   - Add environment variables
   - Deploy

3. ✅ **Set Up Webhook** (5 min)
   - Create webhook in Stripe
   - Add secret to Vercel

4. ✅ **Test** (10 min)
   - Complete flow in production
   - Verify everything works

**Total time: ~40 minutes**

---

## 🚀 You're Ready!

Once you complete these steps, your website will be live and accepting real payments!

**Need help with any step?** Let me know which part you'd like assistance with.
