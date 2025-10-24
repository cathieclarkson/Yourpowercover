# YourPowerCover

This is a Next.js app ready to deploy to Vercel. It provides a secure backend proxy to Anthropic (Claude) and exports real .docx cover letters.

## Quick setup
1. Create a Vercel account (https://vercel.com).
2. Create a new project from Git (or drag & drop this folder into Vercel).
3. In Vercel project settings -> Environment Variables, add:
   - `ANTHROPIC_API_KEY` = (your Anthropic API key)
   - `DEMO_TOKEN` = `DEMO_TOKEN` (or choose your own)
   - `CLIENT_TOKEN` = `CLIENT_TOKEN` (or choose your own)
4. Deploy. Your site will be available at `https://yourpowercover.vercel.app` (or similar). 
