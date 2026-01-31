# Supabase Database Setup - Step by Step Guide

## Step 1: Create Supabase Account

1. Go to https://supabase.com
2. Click **"Start your project"** or **"Sign up"**
3. Sign up with:
   - GitHub (recommended)
   - OR Email
   - OR Google
4. Verify your email if needed

---

## Step 2: Create a New Project

1. Once logged in, click **"New Project"** button
2. Fill in the project details:
   - **Name**: `know-your-mind` (or any name you prefer)
   - **Database Password**: Create a strong password (SAVE THIS - you'll need it)
   - **Region**: Choose closest to you (e.g., `West US (N. California)`)
   - **Pricing Plan**: Select **Free** (for MVP)
3. Click **"Create new project"**
4. Wait 2-3 minutes for project to be created

---

## Step 3: Get Your API Keys

1. In your Supabase project dashboard, click on **Settings** (gear icon in left sidebar)
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)
4. **Copy both of these** - you'll need them in Step 6

---

## Step 4: Open SQL Editor

1. In your Supabase project, click on **SQL Editor** in the left sidebar
2. Click **"New query"** button

---

## Step 5: Create the `users` Table

Copy and paste this SQL into the SQL Editor, then click **"Run"**:

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  reveal_paid BOOLEAN DEFAULT FALSE,
  tier1_paid BOOLEAN DEFAULT FALSE,
  tier2_paid BOOLEAN DEFAULT FALSE,
  reveal_token TEXT UNIQUE,
  report_token TEXT UNIQUE,
  full_report_token TEXT UNIQUE
);
```

You should see: **"Success. No rows returned"**

---

## Step 6: Create the `quiz_results` Table

In the same SQL Editor, create a new query and paste this:

```sql
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  analyst_score INTEGER DEFAULT 0,
  creative_score INTEGER DEFAULT 0,
  strategist_score INTEGER DEFAULT 0,
  connector_score INTEGER DEFAULT 0,
  practical_score INTEGER DEFAULT 0,
  reflector_score INTEGER DEFAULT 0,
  primary_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Click **"Run"**

You should see: **"Success. No rows returned"**

---

## Step 7: Verify Tables Were Created

1. Click on **Table Editor** in the left sidebar
2. You should see two tables:
   - `users`
   - `quiz_results`
3. Click on each table to verify the columns are correct

---

## Step 8: Create .env.local File

1. In your project root folder (`C:\Users\Bruger\Projects\know-your-mind`), create a new file called `.env.local`
2. Add the following content (replace with YOUR actual values from Step 3):

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

**Example:**
```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.abcdefghijklmnopqrstuvwxyz1234567890
```

3. **Save the file**

---

## Step 9: Restart Dev Server

1. Stop your current dev server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

---

## Step 10: Verify Connection (Optional Test)

Once I update the code to save to database, you can test by:
1. Taking the quiz
2. Entering your email
3. Checking Supabase Table Editor to see if data was saved

---

## ✅ Checklist

- [ ] Created Supabase account
- [ ] Created new project
- [ ] Got Project URL and anon key
- [ ] Created `users` table
- [ ] Created `quiz_results` table
- [ ] Verified tables in Table Editor
- [ ] Created `.env.local` file with keys
- [ ] Restarted dev server

---

## Need Help?

If you get stuck:
- Supabase docs: https://supabase.com/docs
- SQL errors: Check the error message in Supabase SQL Editor
- Connection issues: Verify your `.env.local` file has correct values

---

**Once you complete these steps, let me know and I'll update the code to save quiz results to the database!**
