# Finding Your Stripe CLI - Step by Step

## Option 1: Find Where You Extracted It

1. **Check your Downloads folder:**
   - Open File Explorer
   - Go to `C:\Users\YourUsername\Downloads`
   - Look for a folder that might be named:
     - `stripe_X.X.X_windows_x86_64`
     - `stripe-cli`
     - Or similar

2. **Check your Desktop:**
   - Look on your Desktop for a new folder

3. **Check where you extracted it:**
   - When you extracted, Windows might have asked "Extract to..."
   - Check that location

## Option 2: Extract It Again (Easier)

Let's extract it to a known location:

1. **Find the ZIP file:**
   - Go to your Downloads folder
   - Find the file like `stripe_X.X.X_windows_x86_64.zip`

2. **Extract to a simple location:**
   - Right-click the ZIP file
   - Select **"Extract All..."**
   - Click **"Browse"**
   - Navigate to `C:\`
   - Create a new folder called `stripe-cli`
   - Click **"OK"** then **"Extract"**

3. **Now you know it's at:** `C:\stripe-cli\stripe.exe`

## Option 3: Use PowerShell to Find It

Run this in PowerShell to search your entire user folder:

```powershell
Get-ChildItem -Path $env:USERPROFILE -Filter "stripe.exe" -Recurse -ErrorAction SilentlyContinue | Select-Object FullName
```

This might take a minute, but it will show you where `stripe.exe` is located.

## Once You Find It

Once you know the path (e.g., `C:\stripe-cli\stripe.exe`), you can:

1. **Navigate there:**
   ```powershell
   cd C:\stripe-cli
   .\stripe.exe --version
   ```

2. **Or use the full path from anywhere:**
   ```powershell
   C:\stripe-cli\stripe.exe --version
   ```

## Quick Test

Try this - it will search and show you where stripe.exe is:

```powershell
Get-ChildItem -Path $env:USERPROFILE -Filter "stripe.exe" -Recurse -ErrorAction SilentlyContinue | Select-Object FullName
```
