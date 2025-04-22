# Figmafolio - Product Design Portfolio

A responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Frontend Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Project Structure

```
figmafolio/
├── public/                  # Static files
│   ├── fonts/               # Custom fonts
│   └── images/              # Images and icons
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   ├── components/          # Reusable components
│   └── utils/               # Helper functions
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/figmafolio.git
   cd figmafolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `fonts` directory and add the required custom font:
   ```bash
   mkdir -p public/fonts
   ```
   
   You need to obtain the "Special Gothic Expanded One" font or replace it with a similar font from Google Fonts or another source.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

### Deploying to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com), the platform from the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Import your project into Vercel:
   - Sign up or log in to Vercel
   - Click "New Project"
   - Select your repository
   - Configure your project (default settings should work fine)
   - Click "Deploy"

### Other Deployment Options

You can also deploy to other platforms like:
- AWS Amplify
- Netlify
- DigitalOcean App Platform
- Traditional hosting with a Node.js server

## Customization

- Update content in `src/app/page.tsx` and related component files
- Modify styling in `src/app/globals.css` and the Tailwind configuration
- Add or remove components in the `src/components` directory

## Performance Optimization

The project is already optimized with:
- Server-side rendering via Next.js
- Image optimization with next/image
- Code splitting
- Lighthouse performance best practices

## Accessibility

The project includes:
- Semantic HTML
- Appropriate ARIA attributes
- Keyboard navigation support
- Sufficient color contrast

## License

This project is licensed under the MIT License - see the LICENSE file for details. 