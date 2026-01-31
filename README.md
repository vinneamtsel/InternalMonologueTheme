# Internal Monologue - Ghost Theme

A minimalist zen editorial Ghost theme with dark/light mode support.

## Overview

**Internal Monologue** is a custom Ghost theme designed for bloggers who appreciate clean, distraction-free reading experiences. Built on top of the official Ghost Starter theme, it features a modern minimalist aesthetic with a zen editorial style.

## Key Features

- **Minimalist Zen Editorial Design** - Clean typography with generous whitespace for focused reading

- **Dark/Light Theme Toggle** - Seamless switching between dark and light modes with system preference detection

- **Color Scheme** - Black, white, and minimal red accent colors for a sophisticated look

- **Fully Responsive** - Optimized for all devices from mobile to desktop

- **Fast Performance** - Built with Rollup for optimized asset compilation

- **Ghost Compliant** - Passes gscan validation with no errors

## Theme Settings

Customize your theme directly from Ghost Admin:

- **Color Scheme** - Light, Dark, or Auto (system preference)
- **Post Layout** - Grid or List view
- **Typography** - Serif or Sans-serif body text
- **Show/Hide Elements** - Toggle post excerpts, author info, dates, reading time
- **Post Image Style** - Portrait, Landscape, or Square

## File Structure

```
├── assets/
│   ├── built/          # Compiled CSS & JS
│   ├── css/            # Source stylesheets
│   └── js/             # Source JavaScript
├── members/            # Member account templates
├── partials/           # Reusable template components
├── default.hbs         # Main layout template
├── index.hbs           # Homepage template
├── post.hbs            # Single post template
├── page.hbs            # Static page template
└── package.json        # Theme configuration
```

## Development

```bash
# Install dependencies
npm install

# Start development mode with live reload
npm run dev

# Build for production
npm run build

# Zip theme for upload
npm run zip

# Test theme with gscan
npx gscan .
```

## Installation

1. Download the theme zip file
2. Upload to Ghost Admin → Settings → Design → Change theme
3. Activate "Internal Monologue"
4. Configure theme settings in Ghost Admin

## Credits

Built on the [Ghost Starter Theme](https://github.com/TryGhost/Starter) by Ghost Foundation.

## License

MIT License
