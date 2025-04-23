# Portfolio Website - Product Requirements Document

## Overview
A modern, responsive portfolio website showcasing work, resume, and contact information with a clean, professional design and intuitive navigation system.

## Core Features

### Navigation System
- **Horizontal Scroll Navigation**: Users can navigate between sections using horizontal scroll
- **Keyboard Navigation**: Full keyboard control using:
  - Arrow keys (left/right) for section navigation
  - Direct access keys: H (Home), W (Work), R (Resume), C (Contact)
  - Page Up/Down and Home/End for alternative navigation
- **Visual Navigation Controls**: On-screen navigation buttons
- **Header Navigation**: Section indicators and direct access
- **Snap Scrolling**: Sections snap into place during navigation

### Section Structure
1. **Home Section**
   - Introduction and hero content
   - Visual styling with brand elements

2. **Work Section**
   - Project showcase in responsive grid layout (2 columns on desktop, 1 on mobile)
   - Project cards with:
     - Project image (16:9 ratio)
     - Project title
     - Project description
     - Consistent 16px padding and spacing
     - White background with subtle border
   - **Case Study Pages**
     - Detailed case study pages for individual projects
     - Vertical scrolling with standard web navigation
     - Sections for project overview, challenge, solution, and results
     - Back navigation to main Work section
     - Responsive layout adapting to different screen sizes

3. **Resume Section**
   - Professional experience and skills display
   - Downloadable resume option

4. **Contact Section**
   - Contact information and form
   - Social media links

### Responsive Design
- **Mobile-First Approach**: Layouts adapt to different screen sizes
- **Breakpoints**:
  - Mobile: Single-column layouts
  - Desktop: Multi-column layouts with increased spacing
- **Consistent Padding**: px-4 on mobile, md:px-[180px] on desktop
- **Flexible Image Sizing**: Images scale appropriately

### Visual Design
- **Typography**:
  - Primary Headings: Special Gothic Expanded One (64px on desktop)
    - Use for all h1-h6 elements, section titles, and navigation elements
    - Font file: SpecialGothicExpandedOne.ttf
  - Body Text: Red Hat Display (variable font)
    - Use for all paragraph text, descriptions, and general content
    - Font file: RedHatDisplay-VariableFont_wght.ttf
    - Variable weight range: 300-900
    - Regular weight (400) for body text
    - Medium weight (500) for emphasis
    - Bold weight (700) for strong emphasis
  - Font Implementation:
    - Local font files stored in public/fonts directory
    - Font preloading for optimal performance
    - Font-display: block to prevent FOUT (Flash of Unstyled Text)
    - High-specificity selectors to ensure proper inheritance
    - Consistent font application across all breakpoints
    - Variable font support for better performance and flexibility
- **Color Scheme**:
  - Background: #FAFAFA
  - Primary Text: #474747
  - Secondary Text: #4B4F50
  - Card Background: #FFFFFF
  - Card Border: #F2F4F5
  - Title Text: #212121
  - Accent: #FF8A65 (used sparingly for highlights and interactive elements)

### Development Architecture
- **Next.js App Router**: Modern routing system
- **React Server Components**: Where appropriate
- **Client Components**: For interactive elements
- **TypeScript**: Type-safe code throughout
- **Tailwind CSS**: Utility-first styling approach
- **Responsive Images**: Using Next.js Image component with optimization

## Technical Requirements

### Performance
- Optimized image loading
- Efficient animations and transitions
- Minimal layout shift during navigation
- Font optimization:
  - Preloading of font files
  - Appropriate font-display strategies
  - Tailwind class utility implementation
  - Efficient use of variable fonts to reduce file size

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Appropriate color contrast
- Alt text for images
- Legible typography across all device sizes

### SEO
- Proper metadata
- Semantic HTML
- Responsive design

### Browser Compatibility
- Support for modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive across desktop and mobile devices 
- Consistent font rendering across all browsers 