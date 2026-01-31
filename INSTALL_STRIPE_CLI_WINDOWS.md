# Installing Stripe CLI on Windows - Step by Step

## Step 1: Extract the ZIP File

1. Find the downloaded ZIP file (usually in your `Downloads` folder)
2. Right-click on the ZIP file
3. Select **"Extract All..."** or **"Extract to..."**
4. Choose a location (e.g., `C:\stripe-cli` or your Desktop)
5. Click **"Extract"**

## Step 2: Find the Executable

After extracting, you should see:
- A folder with the Stripe CLI files
- Inside, there should be a file called `stripe.exe`

## Step 3: Test It Works

1. Open PowerShell or Command Prompt
2. Navigate to the folder where you extracted Stripe CLI:
   ```powershell
   cd C:\path\to\stripe-cli
   ```
   (Replace with your actual path)

3. Test it:
   ```powershell
   .\stripe.exe --version
   ```

   You should see something like: `stripe version X.X.X`

## Step 4: Add to PATH (Optional but Recommended)

This lets you run `stripe` from anywhere without typing the full path.

### Option A: Add to PATH via Settings (Easiest)

1. Copy the full path to the folder containing `stripe.exe`
   - Example: `C:\stripe-cli`
   
2. Press `Windows Key + X` and select **"System"**
3. Click **"Advanced system settings"** (on the right)
4. Click **"Environment Variables"** button
5. Under **"User variables"**, find and select **"Path"**
6. Click **"Edit"**
7. Click **"New"**
8. Paste the path to your Stripe CLI folder (e.g., `C:\stripe-cli`)
9. Click **"OK"** on all windows
10. **Close and reopen** your PowerShell/Command Prompt

### Option B: Use Full Path (Quick Test)

If you don't want to add to PATH, you can always use the full path:
```powershell
C:\stripe-cli\stripe.exe login
```

## Step 5: Login to Stripe

Now run:

```powershell
stripe login
```

(Or `C:\stripe-cli\stripe.exe login` if not in PATH)

This will:
- Open your browser
- Ask you to authorize
- Link the CLI to your Stripe account

## Step 6: Forward Webhooks

Once logged in, run:

```powershell
stripe listen --forward-to localhost:3000/api/webhook
```

You'll see output like:
```
> Ready! Your webhook signing secret is whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Copy that `whsec_...` secret!**

## Troubleshooting

**"stripe is not recognized" error?**
- Make sure you added it to PATH and restarted your terminal
- Or use the full path: `C:\stripe-cli\stripe.exe`

**"Access denied" error?**
- Try running PowerShell as Administrator
- Right-click PowerShell → "Run as administrator"

**Can't find stripe.exe?**
- Make sure you extracted the ZIP file
- Look for `stripe.exe` in the extracted folder
