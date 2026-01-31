# 🚀 Production Deployment Checklist

## Complete checklist to get your website live with custom domain and PDF downloads

---

## Phase 1: Stripe Production Setup

### 1.1: Activate Stripe Live Mode
- [ ] Go to https://dashboard.stripe.com
- [ ] Toggle from "Test mode" to "Live mode"
- [ ] Complete account verification (if required)
- [ ] Add business information (if required)

### 1.2: Get Production API Keys
- [ ] In Live mode, go to **Developers** → **API keys**
- [ ] Copy **Publishable key** (`pk_live_...`)
- [ ] Copy **Secret key** (`sk_live_...`) - Click "Reveal live key"
- [ ] Save both keys securely

### 1.3: Create Production Product
- [ ] Go to **Products** → **"+ Add product"**
- [ ] Name: `Intelligence Type Reveal`
- [ ] Description: `Unlock your intelligence type name and one-liner`
- [ ] Pricing: One time, $1.99, USD
- [ ] Save product
- [ ] Copy **Price ID** (`price_...`)

---

## Phase 2: Code Updates

### 2.1: Install PDF Library
- [ ] Install `react-pdf` or `jspdf` package
- [ ] Add PDF generation utility
- [ ] Create PDF download component

### 2.2: Add PDF Download Feature
- [ ] Create PDF generation function
- [ ] Add "Download PDF" button to reveal page
- [ ] Test PDF generation locally
- [ ] Verify PDF includes all result data

### 2.3: Code Review
- [ ] Test all features locally
- [ ] Fix any bugs
- [ ] Commit all changes to Git
- [ ] Push to GitHub

---

## Phase 3: Domain Setup

### 3.1: Purchase Domain
- [ ] Choose domain registrar (Namecheap, Google Domains, etc.)
- [ ] Search for available domain name
- [ ] Purchase domain (recommended: `.com`, `.io`, or `.co`)
- [ ] Save domain login credentials

### 3.2: Domain Configuration
- [ ] Access domain DNS settings
- [ ] Note current DNS records (if any)
- [ ] Prepare for Vercel DNS configuration

---

## Phase 4: Deploy to Vercel

### 4.1: Prepare Repository
- [ ] Ensure all code is committed
- [ ] Push to GitHub (if not already)
- [ ] Verify `.env.local` is in `.gitignore`

### 4.2: Create Vercel Project
- [ ] Go to https://vercel.com
- [ ] Sign up/Login (use GitHub)
- [ ] Click **"Add New Project"**
- [ ] Import your GitHub repository
- [ ] Configure:
  - Framework: Next.js (auto-detected)
  - Root Directory: `./`
  - Build Command: `npm run build`
  - Output Directory: `.next`

### 4.3: Add Environment Variables
Add these in Vercel **Settings** → **Environment Variables**:

**Supabase (Production):**
- [ ] `NEXT_PUBLIC_SUPABASE_URL` = Your Supabase URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Your Supabase anon key

**Stripe (Production):**
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`
- [ ] `STRIPE_SECRET_KEY` = `sk_live_...`
- [ ] `STRIPE_PRICE_ID_TIER_0` = `price_...` (production)

**Stripe Webhook:**
- [ ] `STRIPE_WEBHOOK_SECRET` = `whsec_...` (get after webhook setup)

**App URL:**
- [ ] `NEXT_PUBLIC_APP_URL` = `https://yourdomain.com` (update after domain setup)

**Resend (Optional):**
- [ ] `RESEND_API_KEY` = Your Resend key (if using emails)

**Important:** Select **"Production"** environment for all variables

### 4.4: Initial Deploy
- [ ] Click **"Deploy"**
- [ ] Wait for build to complete
- [ ] Note the Vercel URL (e.g., `your-project.vercel.app`)

---

## Phase 5: Custom Domain Configuration

### 5.1: Add Domain to Vercel
- [ ] Go to Vercel project → **Settings** → **Domains**
- [ ] Click **"Add Domain"**
- [ ] Enter your domain (e.g., `knowyourmind.com`)
- [ ] Click **"Add"**

### 5.2: Configure DNS Records
Vercel will show you DNS records to add:

**Option A: Using Vercel Nameservers (Easiest)**
- [ ] Go to your domain registrar
- [ ] Find DNS/Nameserver settings
- [ ] Replace nameservers with Vercel's nameservers
- [ ] Save changes
- [ ] Wait 24-48 hours for propagation

**Option B: Using DNS Records (More Control)**
- [ ] Add A record: `@` → Vercel IP
- [ ] Add CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Save DNS changes
- [ ] Wait 24-48 hours for propagation

### 5.3: Verify Domain
- [ ] Wait for DNS propagation (check status in Vercel)
- [ ] Domain should show "Valid Configuration"
- [ ] Test accessing your domain in browser

### 5.4: Update Environment Variables
- [ ] Go to Vercel → **Settings** → **Environment Variables**
- [ ] Update `NEXT_PUBLIC_APP_URL` to your custom domain
- [ ] Redeploy (or wait for auto-deploy)

---

## Phase 6: Production Webhook Setup

### 6.1: Create Webhook in Stripe
- [ ] Go to Stripe Dashboard (Live mode)
- [ ] **Developers** → **Webhooks** → **"+ Add endpoint"**
- [ ] Endpoint URL: `https://yourdomain.com/api/webhook`
- [ ] Select event: `checkout.session.completed`
- [ ] Click **"Add endpoint"**

### 6.2: Get Webhook Secret
- [ ] Click on the webhook endpoint
- [ ] Under **"Signing secret"**, click **"Reveal"**
- [ ] Copy the secret (`whsec_...`)

### 6.3: Add Secret to Vercel
- [ ] Go to Vercel → **Settings** → **Environment Variables**
- [ ] Update `STRIPE_WEBHOOK_SECRET` with production secret
- [ ] Redeploy project

---

## Phase 7: SSL & Security

### 7.1: SSL Certificate
- [ ] Vercel automatically provides SSL (HTTPS)
- [ ] Verify SSL is active (lock icon in browser)
- [ ] Test accessing site via HTTPS

### 7.2: Security Headers
- [ ] Verify Vercel security headers (automatic)
- [ ] Check for any security warnings
- [ ] Test site security with security headers checker

---

## Phase 8: Final Testing

### 8.1: Test Complete Flow
- [ ] Visit your custom domain
- [ ] Complete the quiz
- [ ] Enter email and name
- [ ] Click "Unlock My Results"
- [ ] Complete payment with real card (small test amount)
- [ ] Verify redirect to reveal page
- [ ] Check PDF download works
- [ ] Verify database updates correctly

### 8.2: Test PDF Download
- [ ] Click "Download PDF" button
- [ ] Verify PDF downloads
- [ ] Check PDF contains:
  - [ ] Intelligence type name
  - [ ] One-liner
  - [ ] Description
  - [ ] User's name (if available)
  - [ ] Date generated

### 8.3: Verify Webhook
- [ ] Check Stripe Dashboard → Webhooks
- [ ] Verify events are being received
- [ ] Check Vercel function logs for webhook calls
- [ ] Verify database updates after payment

### 8.4: Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test on mobile devices

---

## Phase 9: Monitoring & Analytics

### 9.1: Set Up Monitoring
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up error tracking (Sentry, optional)
- [ ] Monitor Stripe Dashboard for payments
- [ ] Monitor Supabase for database usage

### 9.2: Set Up Alerts
- [ ] Configure Stripe email notifications
- [ ] Set up Vercel deployment notifications
- [ ] Monitor for failed payments

---

## Phase 10: Launch Checklist

### Pre-Launch
- [ ] All features tested in production
- [ ] Payment flow working
- [ ] PDF download working
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Webhook receiving events
- [ ] Database updating correctly
- [ ] No console errors
- [ ] Mobile responsive

### Launch Day
- [ ] Final production test
- [ ] Announce launch (social media, etc.)
- [ ] Monitor for issues
- [ ] Be ready to fix any problems

### Post-Launch
- [ ] Monitor first few transactions
- [ ] Check for any errors
- [ ] Gather user feedback
- [ ] Plan improvements

---

## 📋 Quick Reference

### Environment Variables Needed
```env
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID_TIER_0=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
RESEND_API_KEY=... (optional)
```

### Estimated Costs
- **Domain:** $10-15/year
- **Vercel:** Free (hobby plan)
- **Supabase:** Free tier
- **Stripe:** 2.9% + $0.30 per transaction
- **Total:** ~$10-15/year + transaction fees

### Estimated Time
- **Stripe Setup:** 15 min
- **PDF Feature:** 30-60 min
- **Domain Setup:** 10 min
- **Vercel Deploy:** 10 min
- **Webhook Setup:** 5 min
- **Testing:** 30 min
- **Total:** ~2-3 hours

---

## 🎯 You're Ready to Launch!

Once all items are checked, your website will be:
- ✅ Live on custom domain
- ✅ Accepting real payments
- ✅ Generating PDF downloads
- ✅ Fully production-ready

**Need help with any step?** Let me know which phase you're on!
