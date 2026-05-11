# 🚀 Netlify Deployment Guide - Midnight Monsoon

## 📋 **Step-by-Step Deployment Process**

### **Step 1: Verify Your Repository Structure**
Your repository should look like this:
```
Midnight Monsoon/
├── netlify.toml                    # ✅ Build configuration
├── frontend/
│   ├── src/                       # ✅ React source code
│   ├── public/
│   │   ├── _redirects             # ✅ SPA routing
│   │   └── _headers               # ✅ Performance headers
│   ├── package.json               # ✅ Dependencies
│   └── dist/                      # ✅ Build output (after build)
```

### **Step 2: Netlify Site Configuration**

#### **Option A: Connect via GitHub (Recommended)**
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `Midnight Monsoon`
5. Configure build settings:
   - **Base directory**: `(leave empty)`
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Publish directory**: `frontend/dist`
   - **Node version**: `18`

#### **Option B: Manual Deploy**
1. Build locally: `cd frontend && npm run build`
2. Drag and drop the `frontend/dist` folder to Netlify

### **Step 3: Environment Variables (if needed)**
In Netlify Dashboard → Site Settings → Environment Variables:
```
NODE_VERSION = 18
NPM_FLAGS = --legacy-peer-deps
```

### **Step 4: Build Settings Verification**
In Netlify Dashboard → Site Settings → Build & Deploy:

**Build Settings:**
- Repository: `your-github-username/midnight-monsoon`
- Base directory: `(empty)`
- Build command: `cd frontend && npm install && npm run build`
- Publish directory: `frontend/dist`
- Functions directory: `(empty)`

**Deploy Contexts:**
- Production branch: `main` (or your default branch)
- Branch deploys: `All`
- Deploy previews: `Any pull request`

### **Step 5: Custom Domain (Optional)**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS settings with your domain provider

## 🔧 **Troubleshooting Common Issues**

### **Issue 1: "Page Not Found" Error**
**Cause**: Missing _redirects file or incorrect SPA routing
**Solution**: 
- Ensure `frontend/public/_redirects` exists with content: `/*    /index.html   200`
- Check that _redirects is copied to dist folder during build

### **Issue 2: "Build Failed" Error**
**Cause**: Incorrect build configuration or missing dependencies
**Solution**:
1. Check build logs in Netlify Dashboard
2. Verify build command: `cd frontend && npm install && npm run build`
3. Ensure Node version is set to 18
4. Check for any missing environment variables

### **Issue 3: "Blank White Page"**
**Cause**: JavaScript errors or incorrect asset paths
**Solution**:
1. Open browser developer tools (F12)
2. Check Console tab for JavaScript errors
3. Check Network tab for failed asset requests
4. Verify all image paths are correct (case-sensitive)

### **Issue 4: "Assets Not Loading"**
**Cause**: Incorrect base path or missing files
**Solution**:
1. Check that all images exist in `frontend/public/` folder
2. Verify image paths start with `/` (e.g., `/Homepage-mainbanner2.jpg`)
3. Ensure case-sensitive file names match exactly

## 📊 **Build Verification Checklist**

Before deploying, run these commands locally:

```bash
# Navigate to frontend directory
cd "Midnight Monsoon/frontend"

# Install dependencies
npm install

# Build the project
npm run build

# Verify build output
ls dist/
```

**Expected build output:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
├── _redirects
├── _headers
└── [image-files]
```

## 🌐 **Post-Deployment Testing**

After successful deployment:

1. **✅ Test All Pages**:
   - Home: `https://your-site.netlify.app/`
   - Menu: `https://your-site.netlify.app/menu`
   - Gallery: `https://your-site.netlify.app/gallery`
   - Contact: `https://your-site.netlify.app/contact`

2. **✅ Test Mobile Navigation**:
   - Resize browser to mobile view
   - Test hamburger menu functionality
   - Verify all links work

3. **✅ Test Performance**:
   - Check loading speeds
   - Verify images load properly
   - Test scroll behavior

4. **✅ Test Browser Compatibility**:
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 **If Still Not Working**

### **Check Netlify Deploy Logs**:
1. Go to Netlify Dashboard
2. Click on your site
3. Go to "Deploys" tab
4. Click on the latest deploy
5. Check "Deploy log" for errors

### **Common Deploy Log Errors**:

**Error**: `npm: command not found`
**Solution**: Set Node version in environment variables

**Error**: `Module not found`
**Solution**: Check package.json dependencies and run `npm install`

**Error**: `Build script not found`
**Solution**: Verify build command in netlify.toml

**Error**: `Permission denied`
**Solution**: Check file permissions and build directory

### **Manual Debug Steps**:

1. **Test Local Build**:
   ```bash
   cd "Midnight Monsoon/frontend"
   npm run build
   npx serve dist
   ```

2. **Check File Paths**:
   - Verify all image files exist in `public/` folder
   - Check case sensitivity (Linux servers are case-sensitive)
   - Ensure no spaces or special characters in file names

3. **Verify Dependencies**:
   ```bash
   npm list --depth=0
   ```

## 📞 **Need Help?**

If you're still experiencing issues:

1. **Share the Netlify deploy log** (copy the error messages)
2. **Share your site URL** (the .netlify.app URL)
3. **Describe what you see** (blank page, error message, etc.)
4. **Check browser console** (F12 → Console tab for errors)

## 🎯 **Expected Result**

After following this guide, you should have:
- ✅ Fully functional website at your Netlify URL
- ✅ All 4 pages working (Home, Menu, Gallery, Contact)
- ✅ Mobile navigation working
- ✅ Fast loading times with optimizations
- ✅ Professional nightclub design preserved

**Your Midnight Monsoon website should be live and fully functional! 🎉**