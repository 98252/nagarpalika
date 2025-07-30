# Neo-Brutalist Design System Style Guide

## Overview

A professional Neo-Brutalist design system featuring heavy geometry, bold outlines, raw textures, and high-contrast visuals with a distinctive yellow accent.

## Color Tokens

### Primary Colors

- **Primary Neutral**: `#222222` - Main text and borders
- **Secondary Neutral**: `#F5F5F5` - Background and card surfaces
- **Accent Yellow**: `#FFD84C` - CTAs and highlights
- **Text Dark**: `#111111` - Primary text
- **Text Light**: `#EEEEEE` - Text on dark backgrounds

### Usage in Tailwind

```css
text-[#222222]    /* Primary Neutral */
bg-[#F5F5F5]      /* Secondary Neutral */
text-[#FFD84C]    /* Accent Yellow */
text-[#111111]    /* Text Dark */
text-[#EEEEEE]    /* Text Light */
```

## Typography

### Font Families

- **Headings**: Space Mono (monospaced, heavy weight)
- **Body**: Inter (sans-serif, regular weight)

### Typography Classes

#### Headings

```html
<h1 class="neo-heading-h1">Main Heading (4rem)</h1>
<h2 class="neo-heading-h2">Section Heading (3rem)</h2>
<h3 class="neo-heading-h3">Subsection Heading (2rem)</h3>
```

#### Body Text

```html
<p class="neo-body">Regular body text (1rem)</p>
<p class="neo-caption">Caption text (0.875rem)</p>
<p class="neo-label">Label text (0.875rem, uppercase)</p>
<p class="neo-subheading">Subheading (1.25rem)</p>
```

## Button Components

### Primary Button

```html
<button class="neo-button-primary">Primary Action</button>
```

**Features:**

- Solid yellow background (`#FFD84C`)
- 4px black border
- Uppercase text
- Hover: Black background with yellow text
- 4px drop shadow with hover animation

### Secondary Button

```html
<button class="neo-button-secondary">Secondary Action</button>
```

**Features:**

- Transparent background
- 2px black border
- Black text
- Hover: Yellow background
- 4px drop shadow with hover animation

### Disabled State

```html
<button class="neo-button-primary" disabled>Disabled Button</button>
```

**Features:**

- 50% opacity
- No hover effects
- Maintains shadow

## Card Components

### Basic Card

```html
<div class="neo-card">
  <h3 class="neo-card-title">Card Title</h3>
  <p class="neo-card-body">Card content goes here...</p>
</div>
```

**Features:**

- 6px black border
- Drop shadow (6px offset, 0 blur)
- Hover animation (2px translate)
- Yellow underline on title

### Feature Card with Number

```html
<div class="neo-card neo-feature-card">
  <div class="neo-feature-number">01.</div>
  <h3 class="neo-card-title neo-mt-lg">Feature Title</h3>
  <p class="neo-card-body">Feature description...</p>
</div>
```

### Card with Footer

```html
<div class="neo-card">
  <div class="neo-card-body neo-mb-md">Card content...</div>
  <div class="neo-card-footer">
    <div class="neo-subheading">Footer Title</div>
    <div class="neo-caption">Footer subtitle</div>
  </div>
</div>
```

## Form Components

### Input Field

```html
<input type="text" class="neo-input" placeholder="Enter text..." />
```

**Features:**

- 4px black border
- Drop shadow
- Focus: Yellow border with animation
- 12px padding

### Select Dropdown

```html
<select class="neo-select">
  <option value="">Select option</option>
  <option value="option1">Option 1</option>
</select>
```

**Features:**

- Same styling as input
- Custom cursor pointer
- Focus animation

## Layout Components

### Container

```html
<div class="neo-container">
  <!-- Content with max-width and padding -->
</div>
```

### Grid System

```html
<!-- 3-column grid -->
<div class="neo-grid neo-grid-3">
  <div class="neo-card">Item 1</div>
  <div class="neo-card">Item 2</div>
  <div class="neo-card">Item 3</div>
</div>

<!-- Custom grid -->
<div
  class="neo-grid"
  style="grid-template-columns: 1fr 1fr; gap: var(--spacing-xl);"
>
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Flexbox Utilities

```html
<div class="neo-flex">
  <!-- Items with gap -->
</div>

<div class="neo-flex-between">
  <!-- Space between items -->
</div>
```

## Hero Section

### Basic Hero

```html
<section class="neo-hero">
  <div class="neo-container">
    <div class="neo-hero-content">
      <h1 class="neo-heading-h1 neo-mb-md">Hero Title</h1>
      <p class="neo-body neo-mb-lg">Hero description...</p>
      <div class="neo-flex">
        <button class="neo-button-primary">Primary CTA</button>
        <button class="neo-button-secondary">Secondary CTA</button>
      </div>
    </div>
  </div>
</section>
```

**Features:**

- Geometric shape overlay (black triangle)
- Full-width background
- Responsive content positioning

## Navigation

### Main Navigation

```html
<nav class="neo-nav">
  <div class="neo-container">
    <div class="neo-flex-between">
      <Link href="/" class="neo-nav-link neo-heading-h3">Logo</Link>
      <div class="neo-flex">
        <Link href="/page1" class="neo-nav-link">Page 1</Link>
        <Link href="/page2" class="neo-nav-link">Page 2</Link>
      </div>
    </div>
  </div>
</nav>
```

**Features:**

- Black background
- White text
- Yellow hover effect
- Monospace font for links

## Footer

### Footer Structure

```html
<footer class="neo-footer">
  <div class="neo-container">
    <div
      class="neo-grid"
      style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
    >
      <div>
        <h3 class="neo-subheading neo-mb-md text-[#FFD84C]">Section Title</h3>
        <p class="neo-body neo-mb-md text-[#EEEEEE]">Content...</p>
      </div>
    </div>
  </div>
</footer>
```

**Features:**

- Black background
- Yellow section headers
- White text
- Yellow hover on links

## Spacing System

### Base Grid: 8px

- **XS**: 8px (`var(--spacing-xs)`)
- **SM**: 16px (`var(--spacing-sm)`)
- **MD**: 24px (`var(--spacing-md)`)
- **LG**: 48px (`var(--spacing-lg)`)
- **XL**: 96px (`var(--spacing-xl)`)

### Utility Classes

```html
<!-- Margins -->
<div class="neo-mb-xs">8px bottom margin</div>
<div class="neo-mb-sm">16px bottom margin</div>
<div class="neo-mb-md">24px bottom margin</div>
<div class="neo-mb-lg">48px bottom margin</div>
<div class="neo-mb-xl">96px bottom margin</div>

<!-- Padding -->
<div class="neo-p-xs">8px padding</div>
<div class="neo-p-sm">16px padding</div>
<div class="neo-p-md">24px padding</div>
<div class="neo-p-lg">48px padding</div>
<div class="neo-p-xl">96px padding</div>
```

## Section Layouts

### Standard Section

```html
<section class="neo-section">
  <div class="neo-container">
    <div class="neo-text-center neo-mb-xl">
      <h2 class="neo-heading-h2 neo-mb-md">Section Title</h2>
      <p class="neo-body">Section description...</p>
    </div>
    <!-- Section content -->
  </div>
</section>
```

### Two-Column Layout

```html
<section class="neo-section">
  <div class="neo-container">
    <div
      class="neo-grid"
      style="grid-template-columns: 1fr 1fr; gap: var(--spacing-xl);"
    >
      <div>Left column content</div>
      <div>Right column content</div>
    </div>
  </div>
</section>
```

## Responsive Design

### Mobile Breakpoints

- **Default**: Desktop styles
- **768px and below**: Mobile adaptations

### Mobile Adjustments

- Reduced heading sizes
- Single-column grids
- Stacked flex layouts
- Reduced container padding

## Animation & Interactions

### Hover Effects

- **Buttons**: 2px translate + shadow reduction
- **Cards**: 2px translate + shadow reduction
- **Links**: Color transitions
- **Form inputs**: Border color + 2px translate

### Transitions

- All interactive elements: `transition: all 0.2s ease`
- Smooth color changes
- Consistent timing

## Best Practices

### Do's

- Use the 8px grid system consistently
- Maintain high contrast ratios
- Use yellow sparingly for emphasis
- Keep typography hierarchy clear
- Use monospace fonts for headings and labels

### Don'ts

- Don't use gradients (except subtle ones)
- Don't use rounded corners
- Don't use soft shadows
- Don't mix too many colors
- Don't ignore the spacing system

## Implementation Notes

### CSS Variables

All design tokens are defined as CSS custom properties for easy theming and maintenance.

### Tailwind Integration

The system works seamlessly with Tailwind CSS v4, using both custom classes and Tailwind utilities.

### Font Loading

Fonts are loaded via Google Fonts and applied using CSS variables for optimal performance.

### Accessibility

- High contrast ratios maintained
- Focus states clearly defined
- Semantic HTML structure
- Screen reader friendly

## Example Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Fonts and meta tags -->
  </head>
  <body>
    <!-- Navigation -->
    <nav class="neo-nav">...</nav>

    <!-- Hero Section -->
    <section class="neo-hero">...</section>

    <!-- Features Section -->
    <section class="neo-section">
      <div class="neo-container">
        <div class="neo-grid neo-grid-3">...</div>
      </div>
    </section>

    <!-- About Section -->
    <section class="neo-section">
      <div class="neo-container">
        <div class="neo-grid" style="grid-template-columns: 1fr 1fr;">...</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="neo-footer">...</footer>
  </body>
</html>
```

This design system provides a cohesive, professional Neo-Brutalist aesthetic that's both visually striking and highly functional for modern web applications.
