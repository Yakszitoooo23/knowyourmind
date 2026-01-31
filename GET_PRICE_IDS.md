# How to Get Stripe Price IDs

## Important: We need Price IDs, not Product IDs!

You provided a **Product ID** (`prod_TtByNMeV5KowAG`), but for Stripe Checkout we need **Price IDs** (which start with `price_`).

## Step-by-Step: Get Your Price IDs

### For the Product You Already Created:

1. Go to Stripe Dashboard: https://dashboard.stripe.com/test/products
2. Click on your product (the one with ID `prod_TtByNMeV5KowAG`)
3. Look for the **"Pricing"** section
4. You'll see a **Price ID** (starts with `price_...`)
5. **Copy that Price ID**

### Create the Other 2 Products:

We need **3 products total** for our 3 payment tiers:

#### Product 2: Tier 1 - Full Report ($9.99)

1. In Stripe Dashboard, go to **Products** → Click **"+ Add product"**
2. Fill in:
   - **Name:** `Intelligence Type Full Report`
   - **Description:** `Complete personalized report with strengths, learning style, and communication guide`
   - **Pricing:**
     - Select **"One time"**
     - Amount: `9.99`
     - Currency: `USD`
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_...`)

#### Product 3: Tier 2 - Complete Report ($19.99)

1. Click **"+ Add product"** again
2. Fill in:
   - **Name:** `Intelligence Type Complete Report`
   - **Description:** `Full deep dive report with blind spots, leadership style, careers, and 30-day plan`
   - **Pricing:**
     - Select **"One time"**
     - Amount: `19.99`
     - Currency: `USD`
3. Click **"Save product"**
4. **Copy the Price ID** (starts with `price_...`)

## What You Should Have:

After completing the above, you should have:
- ✅ **3 Price IDs** (all start with `price_...`)
  - One for $1.99 (Tier 0 - Reveal)
  - One for $9.99 (Tier 1 - Full Report)
  - One for $19.99 (Tier 2 - Complete Report)

## Next Steps:

Once you have all 3 Price IDs, share them with me and I'll:
1. Update the `.env.local` file
2. Create the Stripe Checkout API route
3. Create the webhook handler
4. Update the unlock page

---

**Quick Tip:** If you're not sure which Price ID belongs to which product, check the amount in the Stripe Dashboard. The Price ID will be listed next to the pricing information.
