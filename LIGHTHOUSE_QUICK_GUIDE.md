# Quick Guide: Validate Lighthouse Scores

![Lighthouse Steps](/home/arjun/.gemini/antigravity/brain/a075b2cb-1165-46fa-9d19-0d10e29144cf/lighthouse_guide_steps_1765036235232.png)

## Quick Steps

### 1. Build for Production ✅ (Already Done!)

```bash
npm run build
```

**Status**: ✅ Build completed successfully!

### 2. Preview the Build

```bash
npm run preview
```

This starts a local server at `http://localhost:4321`

### 3. Open Chrome & Run Lighthouse

1. Open Chrome and go to `http://localhost:4321`
2. Press **F12** to open DevTools
3. Click **Lighthouse** tab (or click `>>` to find it)
4. Select all categories:
   - ✅ Performance
   - ✅ Accessibility  
   - ✅ Best Practices
   - ✅ SEO
5. Click **"Analyze page load"**

### 4. Review Your Scores

**Target Scores**:
- Performance: **> 90**
- Accessibility: **> 95**
- Best Practices: **> 95**
- SEO: **> 95**

---

## Alternative: Use PageSpeed Insights (After Deployment)

Once deployed to GitHub Pages:

1. Visit: https://pagespeed.web.dev/
2. Enter: `https://arjunkhunti.github.io`
3. Click "Analyze"

---

## Troubleshooting

**Can't find Lighthouse tab?**
- Update Chrome to latest version
- Try incognito mode (disable extensions)

**Scores vary between runs?**
- Normal! Can vary ±5 points
- Run 3 times and take average

**Low performance score?**
- Check if Web3Forms API key is set (affects initial load)
- Disable browser extensions
- Close other tabs

---

## What's Already Optimized ✅

- ✅ Smooth animations with GPU acceleration
- ✅ Optimized font loading
- ✅ Security headers (CSP, X-Frame-Options)
- ✅ SEO files (robots.txt, sitemap.xml)
- ✅ Code minification and compression
- ✅ Prefetch for instant navigation
- ✅ Reduced motion support
- ✅ All images have alt text

---

## Next Steps

1. Run `npm run preview`
2. Open Chrome to `http://localhost:4321`
3. Press F12 → Lighthouse → Analyze
4. Share your scores! 🎉

For detailed instructions, see [LIGHTHOUSE_GUIDE.md](file:///home/arjun/Projects/personal/arjunkhunti.github.io/LIGHTHOUSE_GUIDE.md)
