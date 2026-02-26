param(
  [ValidateSet("firefox", "chrome", "all")]
  [string]$Target = "all"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$userScriptPath = Join-Path $repoRoot "ai-chat-exporter.user.js"
$shimPath = Join-Path $PSScriptRoot "content-shim.js"
$distRoot = Join-Path $PSScriptRoot "dist"

if (!(Test-Path $userScriptPath)) {
  throw "Missing userscript: $userScriptPath"
}
if (!(Test-Path $shimPath)) {
  throw "Missing shim: $shimPath"
}

$shim = Get-Content -Raw $shimPath
$userScript = Get-Content -Raw $userScriptPath
$bundle = "$shim`r`n`r`n$userScript"

if (Test-Path $distRoot) {
  Remove-Item -Recurse -Force $distRoot
}
New-Item -ItemType Directory -Path $distRoot | Out-Null

$targets = @()
if ($Target -eq "all") {
  $targets = @("firefox", "chrome")
} else {
  $targets = @($Target)
}

foreach ($t in $targets) {
  $manifestSrc = Join-Path $PSScriptRoot ("manifest." + $t + ".json")
  if (!(Test-Path $manifestSrc)) {
    throw "Missing manifest: $manifestSrc"
  }

  $outDir = Join-Path $distRoot $t
  New-Item -ItemType Directory -Path $outDir | Out-Null

  Copy-Item $manifestSrc (Join-Path $outDir "manifest.json")
  Set-Content -Path (Join-Path $outDir "content-script.js") -Value $bundle -Encoding UTF8
  Copy-Item (Join-Path $repoRoot "LICENSE") (Join-Path $outDir "LICENSE")

  Write-Host "Built extension package:" $outDir
}

Write-Host "Done."
