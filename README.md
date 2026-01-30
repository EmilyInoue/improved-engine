# improved-engine

A modern, responsive blog site built with MkDocs and Material theme, designed for deployment to GitHub Pages and Azure Static Web Apps.

## Features

- ✨ **Responsive Design**: Optimized for mobile, tablet, and desktop
- ♿ **Accessible**: Built following WCAG guidelines
- 🌓 **Light/Dark Mode**: Automatic theme switching based on system preferences
- 🎨 **Gradient Theme**: Beautiful purple gradient color scheme
- 🖼️ **Hero Images**: Eye-catching hero sections on every page
- 📝 **Blog Platform**: Easy-to-manage blog posts with categories
- 💬 **Contact Form**: Interactive contact page for user engagement

## Quick Start

### Prerequisites

- Python 3.x
- pip

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EmilyInoue/improved-engine.git
cd improved-engine
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

### Local Development

Start the development server:
```bash
mkdocs serve
```

Visit `http://localhost:8000` to preview the site.

### Building

Build the static site:
```bash
mkdocs build
```

The built site will be in the `site/` directory.

## Project Structure

```
improved-engine/
├── docs/
│   ├── blog/
│   │   ├── index.md              # Blog homepage
│   │   └── posts/                # Blog post articles
│   │       ├── getting-started-mkdocs.md
│   │       ├── designing-for-accessibility.md
│   │       └── responsive-design.md
│   ├── images/                   # Hero images and assets
│   │   ├── hero-home.svg
│   │   ├── hero-blog.svg
│   │   └── hero-contact.svg
│   ├── stylesheets/
│   │   └── extra.css            # Custom styles with gradient theme
│   ├── javascripts/
│   │   └── extra.js             # Custom JavaScript
│   ├── index.md                 # Home page
│   └── contact.md               # Contact page
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages deployment
├── mkdocs.yml                   # MkDocs configuration
└── requirements.txt             # Python dependencies
```

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

To enable GitHub Pages:
1. Go to repository Settings → Pages
2. Select "GitHub Actions" as the source
3. Push to the main branch to trigger deployment

### Azure Static Web Apps

To deploy to Azure Static Web Apps:

1. Create an Azure Static Web App in the Azure Portal
2. Configure the build settings:
   - App location: `/`
   - Output location: `site`
   - Build command: `pip install -r requirements.txt && mkdocs build`

## Customization

### Adding Blog Posts

Create a new Markdown file in `docs/blog/posts/`:

```markdown
---
date: 2026-01-30
categories:
  - Tutorial
authors:
  - admin
---

# Your Post Title

Your content here...
```

### Changing Colors

Edit the gradient colors in `docs/stylesheets/extra.css`:

```css
:root {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
  --gradient-accent: #f093fb;
}
```

### Modifying Navigation

Update the `nav` section in `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - Blog: 
    - blog/index.md
  - Contact: contact.md
```

## Technologies Used

- **MkDocs**: Static site generator
- **Material for MkDocs**: Theme with extensive features
- **Python**: Backend technology
- **Markdown**: Content format
- **CSS3**: Styling with gradients and animations
- **JavaScript**: Enhanced interactivity
- **GitHub Actions**: CI/CD pipeline

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

See the [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please open an issue on GitHub or use the contact form on the site.
