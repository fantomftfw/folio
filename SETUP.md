# Figmafolio Setup Guide

## Step 1: Install Dependencies

Run the following command to install all required dependencies:

```bash
npm install
```

## Step 2: Font Setup

### Option A: Use the Special Gothic Expanded One font

1. Obtain the "Special Gothic Expanded One" font from a font provider
2. Add the font file (in WOFF2 format) to the `public/fonts` directory with the name `special-gothic-expanded-one.woff2`

### Option B: Use a different font

1. Modify `src/app/globals.css` to use a different font
2. Update the `tailwind.config.js` file to reflect the new font family

## Step 3: Start Development Server

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Step 4: Customize Content

- Edit `src/app/page.tsx` to update the main content
- Modify components in `src/components/` as needed
- Update styling in `tailwind.config.js` and `src/app/globals.css`

## Step 5: Build and Deploy

### Build the project:

```bash
npm run build
```

### Deploy to Vercel (recommended):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Follow the deployment steps on Vercel

For more detailed instructions, refer to the README.md file. 