# 🚀 Go Live: Step-by-Step Production Guide

Follow these steps in order to get your Know Your Mind site live.

---

## Step 1: Prepare Your Code (5 min)

### 1.1 Initialize Git (if not already done)
```powershell
cd C:\Users\Bruger\Projects\know-your-mind
git init
git add .
git commit -m "Ready for production"
```

### 1.2 Push to GitHub
1. Create a new repository at https://github.com/new
2. Name it `know-your-mind` (or your choice)
3. Do **not** initialize with README
4. Run:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/know-your-mind.git
git branch -M main
git push -u origin main
```

### 1.3 Verify .env.local is ignored
- Open `.gitignore` and confirm `.env.local` is listed
- **Never** commit your `.env.local` file — it contains secrets

---

## Step 2: Stripe Production Setup (15 min)

### 2.1 Activate Live Mode
1. Go to https://dashboard.stripe.com
2. Toggle **"Test mode"** → **"Live mode"** (top right)
3. Complete any account verification Stripe asks for

### 2.2 Get Production API Keys
1. In Live mode: **Developers** → **API keys**
2. Copy **Publishable key** (`pk_live_...`)
3. Click **Reveal** and copy **Secret key** (`sk_live_...`)

### 2.3 Create Production Product
1. **Products** → **"+ Add product"**
2. Name: `Intelligence Type Reveal`
3. Description: `Unlock your intelligence type and full report`
4. Pricing: **One time**, **$1.99**, **USD**
5. **Save product**
6. Copy the **Price ID** (starts with `price_...`)

---

## Step 3: Deploy to Vercel (10 min)

### 3.1 Create Vercel Account & Project
1. Go to https://vercel.com
2. Sign up or log in (use **Continue with GitHub**)
3. Click **Add New Project**
4. Import your `know-your-mind` repository
5. Click **Import**

### 3.2 Add Environment Variables
Before deploying, add these in **Settings** → **Environment Variables**:

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase URL | From .env.local |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | From .env.local |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Step 2.2 |
| `STRIPE_SECRET_KEY` | `sk_live_...` | Step 2.2 |
| `STRIPE_PRICE_ID_TIER_0` | `price_...` | Step 2.3 |
| `NEXT_PUBLIC_APP_URL` | `https://your-project.vercel.app` | Update after deploy |
| `RESEND_API_KEY` | (optional) | Can leave empty |

**Important:** For each variable, select **Production** environment.

### 3.3 Deploy
1. Click **Deploy**
2. Wait 2–5 minutes for the build
3. Copy your live URL (e.g. `https://know-your-mind-xyz.vercel.app`)

### 3.4 Update App URL
1. **Settings** → **Environment Variables**
2. Edit `NEXT_PUBLIC_APP_URL` and set it to your Vercel URL
3. Redeploy: **Deployments** → three dots on latest → **Redeploy**

---

## Step 4: Stripe Production Webhook (5 min)

### 4.1 Create Webhook
1. Stripe Dashboard → **Live mode** → **Developers** → **Webhooks**
2. **Add endpoint**
3. Endpoint URL: `https://YOUR-VERCEL-URL.vercel.app/api/webhook`
4. Events: select `checkout.session.completed`
5. **Add endpoint**

### 4.2 Add Webhook Secret to Vercel
1. Open the new webhook → **Signing secret** → **Reveal**
2. Copy the secret (`whsec_...`)
3. Vercel → **Settings** → **Environment Variables**
4. Add: `STRIPE_WEBHOOK_SECRET` = `whsec_...`
5. Redeploy the project

---

## Step 5: Custom Domain (Optional, 15 min)

### 5.1 Add Domain in Vercel
1. Project → **Settings** → **Domains**
2. **Add** your domain (e.g. `knowyourmind.com`)

### 5.2 Update DNS
Vercel will show what to add. Typical setup:
- **A record:** `@` → `76.76.21.21`
- **CNAME:** `www` → `cname.vercel-dns.com`

(Exact values come from Vercel.)

### 5.3 Update URLs
1. In Vercel: set `NEXT_PUBLIC_APP_URL` to `https://yourdomain.com`
2. In Stripe: edit the webhook URL to `https://yourdomain.com/api/webhook`
3. Redeploy

---

## Step 6: Test the Full Flow (10 min)

1. Open your production URL
2. Complete the quiz
3. Enter email and name
4. On the unlock page, click **Reveal My Intelligence Type — $1.99**
5. Pay with a real card (you’ll be charged $1.99)
6. Confirm:
   - Redirect to reveal page
   - Type name, one-liner, and description appear
   - **Download PDF** works

### If Payment Fails
- Stripe **Developers** → **Webhooks** → check for failed events
- Vercel **Deployments** → **Functions** → inspect logs
- Confirm all env vars match (especially `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID_TIER_0`, `STRIPE_WEBHOOK_SECRET`)

---

## ✅ Pre-Launch Checklist

- [ ] Git repo on GitHub
- [ ] Stripe Live mode + production keys
- [ ] Production product and Price ID
- [ ] Deployed on Vercel
- [ ] All environment variables set
- [ ] Production webhook created
- [ ] Webhook secret in Vercel
- [ ] Successful test payment
- [ ] PDF download works
- [ ] Custom domain set (if used)

---

## 📋 Environment Variables Reference

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID_TIER_0=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://your-site.vercel.app
```

---

## 🐛 Common Issues

**Build fails:**  
- Check Vercel build logs  
- Run `npm run build` locally and fix any errors  

**Payment works but no reveal:**  
- Webhook not firing or wrong secret  
- Add `STRIPE_WEBHOOK_SECRET` and redeploy  

**Wrong content after payment:**  
- `NEXT_PUBLIC_APP_URL` must match the URL you’re actually using (including `www` or not)
