UPSC ZONE AI - Vercel Fix

IMPORTANT: Extract this ZIP into a NEW folder. The ZIP is arranged so package.json is directly inside the extracted folder.

1. Open the extracted folder in VS Code (the folder containing package.json).
2. Open Terminal > New Terminal.
3. Run:
   npm install
   npm run build
4. If the build succeeds, copy these updated project files into your GitHub repository, commit, and push. Vercel will redeploy automatically.

The build script runs Vite through Node.js to avoid the executable permission issue seen in the Vercel logs.
