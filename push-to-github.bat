@echo off
echo ========================================================
echo   Pushing Meghana Reddy Portfolio to GitHub
echo   Target: https://github.com/gmeghanareddy6/Meghana-Reddy-Portfolio.git
echo ========================================================
echo.
cd /d "C:\Users\Lenovo\Desktop\meghana-portfolio"
"C:\Users\Lenovo\.mingit\cmd\git.exe" push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Pushed to GitHub successfully!
    echo Next step: Go to https://vercel.com/new and import 'Meghana-Reddy-Portfolio'
) else (
    echo [INFO] If GitHub asked for a password, note that GitHub requires a Personal Access Token (PAT).
    echo You can create a free token at: https://github.com/settings/tokens
)
echo.
pause
