#!/bin/bash

echo "========================================"
echo "LaunchLayer - Vercel Deployment Helper"
echo "========================================"
echo

echo "[1/4] Installing dependencies..."
npm run install-all
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo
echo "[2/4] Building client..."
cd client
npm run build
if [ $? -ne 0 ]; then
    echo "Error: Failed to build client"
    exit 1
fi
cd ..

echo
echo "[3/4] Testing server..."
npm run server &
SERVER_PID=$!
sleep 3
kill $SERVER_PID 2>/dev/null

echo
echo "[4/4] Deployment preparation complete!"
echo
echo "Next steps:"
echo "1. Push your code to GitHub/GitLab/Bitbucket"
echo "2. Go to vercel.com and create new project"
echo "3. Import your repository"
echo "4. Configure environment variables"
echo "5. Deploy!"
echo
echo "For detailed instructions, see DEPLOYMENT.md"
echo 