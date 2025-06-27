@echo off
echo ========================================
echo LaunchLayer - Vercel Deployment Helper
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm run install-all
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/4] Building client...
cd client
call npm run build
if %errorlevel% neq 0 (
    echo Error: Failed to build client
    pause
    exit /b 1
)
cd ..

echo.
echo [3/4] Testing server...
call npm run server
timeout /t 3 /nobreak >nul
taskkill /f /im node.exe >nul 2>&1

echo.
echo [4/4] Deployment preparation complete!
echo.
echo Next steps:
echo 1. Push your code to GitHub/GitLab/Bitbucket
echo 2. Go to vercel.com and create new project
echo 3. Import your repository
echo 4. Configure environment variables
echo 5. Deploy!
echo.
echo For detailed instructions, see DEPLOYMENT.md
echo.
pause 