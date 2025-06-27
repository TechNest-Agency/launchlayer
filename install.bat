@echo off
echo ========================================
echo LaunchLayer - IT Firm Website Setup
echo ========================================
echo.

echo Installing backend dependencies...
npm install

echo.
echo Installing frontend dependencies...
cd client
npm install
cd ..

echo.
echo Creating environment file...
copy env.example .env

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env file with your email credentials
echo 2. Run: npm run dev
echo 3. Open http://localhost:3000
echo.
echo For production:
echo 1. Run: npm run build
echo 2. Run: npm start
echo.
pause 