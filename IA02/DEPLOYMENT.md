# Deployment Guide

This document provides step-by-step instructions for deploying the Photo Gallery application to various hosting platforms.

## Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment experience with automatic builds and deployments.

#### Method A: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project root:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press enter for default or type a custom name
   - Directory? Press enter (use `.`)
   - Override settings? **N**

5. Your app will be deployed! Vercel will provide a URL like `https://your-project.vercel.app`

#### Method B: Using Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 2: Netlify

#### Method A: Drag and Drop

1. Build the project:
```bash
npm run build
```

2. Visit [app.netlify.com](https://app.netlify.com)
3. Drag and drop the `dist` folder to the deployment area

#### Method B: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Select "Create & configure a new site"
5. When prompted for the publish directory, enter: `dist`

#### Method C: Connect to Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [app.netlify.com](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose your Git provider and repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages

1. Install the gh-pages package:
```bash
npm install -D gh-pages
```

2. Add the homepage field to `package.json`:
```json
{
  "homepage": "https://your-username.github.io/your-repo-name"
}
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select branch: `gh-pages`
   - Click Save

### Option 4: Cloudflare Pages

1. Push your code to GitHub or GitLab
2. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
3. Go to "Workers & Pages" → "Create application" → "Pages"
4. Connect to your Git repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

## Environment Variables

This application doesn't require any environment variables as it uses the public Lorem Picsum API.

If you need to add environment variables in the future:

### Vercel
Add them in the Vercel dashboard under Project Settings → Environment Variables

### Netlify
Add them in Site settings → Build & deploy → Environment

### Local Development
Create a `.env` file in the project root and prefix variables with `VITE_`:
```
VITE_API_URL=https://your-api.com
```

## Build Settings Summary

For all platforms, use these settings:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 16 or higher

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Troubleshooting

### Build Fails

1. Clear cache and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Try building locally:
```bash
npm run build
```

### Routes Not Working (404 on Refresh)

Make sure your hosting platform is configured for single-page applications:

- **Vercel**: The `vercel.json` file is already configured
- **Netlify**: The `public/_redirects` file is already configured
- **Other platforms**: Configure server to redirect all routes to `index.html`

### Images Not Loading

Check browser console for CORS errors. The Lorem Picsum API should not have CORS issues, but if you encounter problems:

1. Verify API endpoints are correct in `src/services/photoService.ts`
2. Check network connectivity
3. Try a different browser

## Performance Optimization

After deployment, consider these optimizations:

1. **Enable CDN**: Most platforms enable this by default
2. **Enable Compression**: Gzip/Brotli compression (usually automatic)
3. **Add Analytics**: Google Analytics, Vercel Analytics, or Netlify Analytics
4. **Set up monitoring**: Sentry, LogRocket, or similar services

## Updating Your Deployment

### Continuous Deployment (Recommended)

If you connected your repository to Vercel/Netlify/Cloudflare:
1. Push changes to your Git repository
2. Automatic deployment will trigger
3. Check deployment status in the platform dashboard

### Manual Deployment

If using CLI tools:
```bash
npm run build
vercel --prod
# or
netlify deploy --prod
```

## Cost

All mentioned platforms offer free tiers that are more than sufficient for this application:

- **Vercel**: Free tier includes unlimited projects
- **Netlify**: Free tier includes 100GB bandwidth/month
- **GitHub Pages**: Free for public repositories
- **Cloudflare Pages**: Free tier includes unlimited bandwidth

---

For more detailed information, refer to the platform-specific documentation:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
