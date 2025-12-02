# Video Creator Submission Portal

A modern, professional GitHub Pages website for accepting video creator applications. Candidates submit video samples created with free tools to demonstrate their skills before getting access to premium software like Higgsfield.

## 🎯 Purpose

This portal serves as a screening tool to:
- Evaluate video creation skills before granting access to premium tools
- Collect organized submissions from candidates
- Present a professional brand image
- Streamline the application review process

## ✨ Features

- **Modern Dark Theme**: Premium design with gradients and animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Comprehensive Form**: Collects all necessary information and video samples
- **Smooth Animations**: Engaging micro-interactions and scroll effects
- **Form Validation**: Real-time validation with helpful error messages
- **Auto-Download**: Submissions are formatted and downloaded as text files
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right, select **New repository**
3. Name your repository (e.g., `video-creator-portal`)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Push Your Code

```bash
cd "/Users/tjeneh/Documents/compitition website"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Video Creator Submission Portal"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be published at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 📝 Receiving Submissions

Currently, submissions are:
1. **Logged to console** (visible in browser developer tools)
2. **Downloaded as text files** to the candidate's computer
3. **Formatted for easy reading**

### Integration Options

To receive submissions directly, you can integrate with:

#### Option 1: FormSubmit (Easiest - Email)
1. Sign up at [formsubmit.co](https://formsubmit.co)
2. Update line 62 in `script.js`:
   ```javascript
   const formSubmitURL = 'https://formsubmit.co/your-email@example.com';
   ```
3. Uncomment the `sendToFormSubmit(data)` call in the submit handler

#### Option 2: Google Sheets
1. Create a Google Apps Script to receive form data
2. Deploy as a web app
3. Update `script.js` with your script URL
4. Uncomment the `sendToGoogleSheets(data)` call

#### Option 3: EmailJS (Email with Templates)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Set up email templates
3. Add EmailJS library to `index.html`
4. Update `script.js` with your service details

#### Option 4: Netlify Forms
1. Deploy to Netlify instead of GitHub Pages
2. Add `netlify` attribute to the form
3. Submissions appear in Netlify dashboard

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css` (lines 2-21):
```css
--color-primary: hsl(250, 84%, 54%);
--color-secondary: hsl(280, 75%, 58%);
--color-accent: hsl(340, 82%, 52%);
```

### Content
- Edit text in `index.html`
- Modify opportunity cards, requirements, or form fields
- Add your logo or branding

### Form Fields
Add or remove fields in the form section of `index.html` (lines 120-280)

## 🔧 Technical Details

- **No build process required** - Pure HTML, CSS, and JavaScript
- **No dependencies** - Works standalone
- **Lightweight** - Fast loading times
- **Accessible** - Semantic HTML and proper ARIA labels
- **Browser Support** - Modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Mobile Responsive

The site automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Next Steps

1. **Deploy to GitHub Pages** (follow steps above)
2. **Choose a submission method** (FormSubmit, Google Sheets, etc.)
3. **Customize branding** (colors, text, images)
4. **Share the link** with potential candidates
5. **Review submissions** and invite top candidates

## 📧 Support

For questions or issues, check the inline comments in the code files or refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [FormSubmit Documentation](https://formsubmit.co)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

---

**Created with ❤️ for screening video talent**
