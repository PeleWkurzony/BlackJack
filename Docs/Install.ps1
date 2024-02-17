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
    $RemoveNodeModules = {
        $UserCondition = Read-Host "Do you want to reinstall all node_modules (Y/N)"
        if ($UserCondition -eq "y") {
            Write-Output "Preparing for removing node_modules"
            rm ./node_modules -r
        }
        if ($UserCondition -ne "n") {
            &$RemoveNodeModules
        }
        Write-Output "Node_modules will not be removed"
    }
    &$RemoveNodeModules
    Write-Output "Preparing for installation/updating node_modules"
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
