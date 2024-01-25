Write-Output "Preparing for installation"
$OriginalPath = Get-Location
Set-Location ..
try {
    Set-Location WebApp/ClientApp
}
catch {
    Write-Output "Cannot find path to WebApp/ClientApp"
    Pause
    exit
}
try {
    npm install
}
catch {
    Write-Output "Npm is not installed. Install node.js"
    Set-Location $OriginalPath
    PAUSE
    exit
}
Set-Location $OriginalPath
Write-Output "Installation was completed successful"
PAUSE
exit
