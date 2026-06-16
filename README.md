# ConnectWizard.tech

AI-powered device connection guide with Amazon affiliate integration and Google AdSense.

## Stack
- React + Vite (frontend)
- Vercel Serverless Functions (API proxy)
- Claude Sonnet (AI engine)
- Amazon Associates (affiliate)
- Google AdSense (ads)

## Local Development

```bash
npm install
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel dashboard
3. Add environment variable: ANTHROPIC_API_KEY
4. Deploy — Vercel auto-detects Vite

## After Deployment

1. Go to Vercel → Project → Settings → Domains
2. Add: connectwizard.tech
3. Update Namecheap DNS:
   - Type: CNAME | Host: www | Value: cname.vercel-dns.com
   - Type: A | Host: @ | Value: 76.76.21.21

## AdSense Slot IDs
Replace placeholders in src/App.jsx:
- ADSENSE_SLOT_TOP
- ADSENSE_SLOT_MID  
- ADSENSE_SLOT_BOTTOM

## Amazon Associates
Replace AMAZON_TAG in src/App.jsx with your real tag.
