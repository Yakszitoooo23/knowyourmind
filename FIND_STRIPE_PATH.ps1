# Run this in PowerShell to find Stripe CLI
# Copy and paste the entire output

Write-Host "Searching for stripe.exe..." -ForegroundColor Yellow

# Search in Downloads folder
$downloadsPath = [System.Environment]::GetFolderPath('UserProfile') + '\Downloads'
if (Test-Path $downloadsPath) {
    Write-Host "`nChecking Downloads folder: $downloadsPath" -ForegroundColor Cyan
    Get-ChildItem -Path $downloadsPath -Filter "*stripe*" -Recurse -ErrorAction SilentlyContinue | Select-Object FullName, Name
}

# Also search in user profile
Write-Host "`nSearching entire user profile..." -ForegroundColor Cyan
Get-ChildItem -Path $env:USERPROFILE -Filter "stripe.exe" -Recurse -ErrorAction SilentlyContinue -Depth 3 | Select-Object -First 5 FullName

Write-Host "`nDone! Copy the output above." -ForegroundColor Green
