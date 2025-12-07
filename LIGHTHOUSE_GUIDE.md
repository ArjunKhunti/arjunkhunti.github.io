# How to Validate Lighthouse Scores

This guide shows you exactly how to run Google Lighthouse to validate your website's performance, accessibility, best practices, and SEO scores.

## Method 1: Using Chrome DevTools (Recommended)

### Step 1: Build for Production

```bash
# Install terser for minification (one-time setup)
npm install --save-dev terser

# Build the production version
npm run build
```

### Step 2: Preview Production Build

```bash
# Start the preview server
npm run preview
```

This will start a server at `http://localhost:4321` (or another port if 4321 is busy).

### Step 3: Run Lighthouse Audit

1. **Open Chrome Browser** and navigate to `http://localhost:4321`

2. **Open Chrome DevTools**:
   - Press `F12` (Windows/Linux)
   - Or `Cmd+Option+I` (Mac)
   - Or right-click anywhere → "Inspect"

3. **Navigate to Lighthouse Tab**:
   - Click the "Lighthouse" tab in DevTools
   - If you don't see it, click the `>>` icon and select "Lighthouse"

4. **Configure Audit**:
   - Mode: Select "Navigation (Default)"
   - Device: Select "Desktop" or "Mobile"
   - Categories: Check all boxes:
     - ✅ Performance
     - ✅ Accessibility
     - ✅ Best Practices
     - ✅ SEO

5. **Run Audit**:
   - Click "Analyze page load"
   - Wait for the audit to complete (30-60 seconds)

6. **Review Scores**:
   - **Target Scores**:
     - Performance: > 90
     - Accessibility: > 95
     - Best Practices: > 95
     - SEO: > 95

### Step 4: Review Recommendations

If any score is below target:
- Click on the category to see detailed recommendations
- Each issue will have:
  - Description of the problem
  - How to fix it
  - Estimated impact on score

---

## Method 2: Using Lighthouse CLI

### Install Lighthouse CLI

```bash
npm install -g lighthouse
```

### Run Audit

```bash
# Make sure preview server is running
npm run preview

# In a new terminal, run Lighthouse
lighthouse http://localhost:4321 --view
```

This will:
- Run the audit
- Generate an HTML report
- Automatically open it in your browser

### Save Report

```bash
# Save report to file
lighthouse http://localhost:4321 --output html --output-path ./lighthouse-report.html

# Save JSON for CI/CD
lighthouse http://localhost:4321 --output json --output-path ./lighthouse-report.json
```

---

## Method 3: Using PageSpeed Insights (After Deployment)

Once deployed to GitHub Pages:

1. Visit https://pagespeed.web.dev/
2. Enter your URL: `https://arjunkhunti.github.io`
3. Click "Analyze"
4. View scores for both Mobile and Desktop

**Advantages**:
- Tests from Google's servers (real-world conditions)
- No local setup required
- Shareable URL for reports

---

## Common Issues & Fixes

### Performance < 90

**Common Issues**:
- Large images
- Unoptimized fonts
- Too much JavaScript

**Quick Fixes**:
- Compress images
- Use WebP format
- Enable lazy loading
- Minimize JavaScript bundles

### Accessibility < 95

**Common Issues**:
- Missing alt text on images
- Low color contrast
- Missing ARIA labels

**Quick Fixes**:
- Add descriptive alt text to all images
- Ensure text has sufficient contrast
- Add aria-labels to interactive elements

### Best Practices < 95

**Common Issues**:
- Mixed content (HTTP/HTTPS)
- Missing security headers
- Console errors

**Quick Fixes**:
- Use HTTPS for all resources
- Add security headers (already done ✅)
- Fix any console errors

### SEO < 95

**Common Issues**:
- Missing meta description
- Non-crawlable links
- Missing robots.txt

**Quick Fixes**:
- Add meta descriptions (already done ✅)
- Ensure all links are crawlable
- Add robots.txt (already done ✅)

---

## Quick Validation Checklist

Before running Lighthouse:

- [ ] Build completed successfully: `npm run build`
- [ ] Preview server running: `npm run preview`
- [ ] No console errors in browser
- [ ] All images have alt text
- [ ] Forms are functional
- [ ] Navigation works correctly

---

## Expected Scores for This Portfolio

Based on the optimizations implemented:

| Category | Expected Score | Target |
|----------|---------------|--------|
| Performance | 90-95 | > 90 ✅ |
| Accessibility | 95-100 | > 95 ✅ |
| Best Practices | 95-100 | > 95 ✅ |
| SEO | 95-100 | > 95 ✅ |

**Note**: Scores may vary slightly based on:
- Network conditions
- Device performance
- Browser extensions (disable for accurate results)

---

## Continuous Monitoring

### For Local Development

Run Lighthouse before each deployment:

```bash
npm run build && npm run preview
# Then run Lighthouse in Chrome DevTools
```

### For Production

Set up automated monitoring:
- Use PageSpeed Insights API
- Integrate with CI/CD pipeline
- Monitor weekly/monthly

---

## Troubleshooting

### "Preview server not accessible"

```bash
# Check if port is in use
lsof -i :4321

# Kill process if needed
kill -9 <PID>

# Restart preview
npm run preview
```

### "Lighthouse tab not showing"

- Update Chrome to latest version
- Try incognito mode (disable extensions)
- Restart Chrome

### "Scores vary between runs"

This is normal. Lighthouse scores can vary ±5 points due to:
- Network fluctuations
- CPU usage
- Background processes

**Solution**: Run audit 3 times and take the average.

---

## Next Steps

1. **Install terser**: `npm install --save-dev terser`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`
4. **Open Chrome**: Navigate to `http://localhost:4321`
5. **Run Lighthouse**: F12 → Lighthouse tab → Analyze page load
6. **Review scores** and address any issues below target

Good luck! 🚀
