# Services Showcase - Component Structure

## 📐 Visual Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                     SECTION HEADER                              │
│  "Explore Our Signature Experiences"                            │
│  "From handcrafted cocktails to unforgettable nights."         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ [Fade] ←─────── INFINITE SCROLLING TRACK ──────→ [Fade]        │
│                                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  │
│  │ Card │  │ Card │  │ Card │  │ Card │  │ Card │  │ Card │  │
│  │  1   │  │  2   │  │  3   │  │  4   │  │  5   │  │  6   │  │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  │
│                                                                 │
│  ← Scrolls continuously (pause on hover/touch) →               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│              "Hover to pause • Swipe to explore"                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🃏 Card Anatomy

```
┌─────────────────────────────────────┐
│  ╔═══════════════════════════════╗  │ ← Neon border glow (on hover)
│  ║                               ║  │
│  ║   [Background Image]          ║  │ ← Zooms on hover (scale 1.15)
│  ║   with gradient overlay       ║  │
│  ║                               ║  │
│  ║   ┌─────────────────────┐     ║  │
│  ║   │ 🍷 DRINKS           │     ║  │ ← Category badge
│  ║   └─────────────────────┘     ║  │
│  ║                               ║  │
│  ║   Liquid Artistry             ║  │ ← Title (large, bold)
│  ║                               ║  │
│  ║   • Signature Cocktails       ║  │
│  ║   • Craft Beers               ║  │ ← Service items
│  ║   • Premium Spirits           ║  │   (expand on hover)
│  ║   • Fine Wines                ║  │
│  ║   +4 more experiences         ║  │
│  ║                               ║  │
│  ╚═══════════════════════════════╝  │
└─────────────────────────────────────┘
     ↑                           ↑
  Glassmorphism              Shimmer effect
  (frosted glass)            (on hover)
```

---

## 🏗️ Component Hierarchy

```
ServicesShowcase (Main Component)
│
├── Background Effects
│   ├── Gradient blobs (gold, blue)
│   └── Floating particles (20x)
│
├── Section Header
│   ├── Main heading with gradient text
│   └── Subtitle
│
├── Scrolling Container
│   ├── Gradient fade edges (left, right)
│   │
│   └── Motion Track (infinite scroll)
│       ├── ServiceCard (Drinks)
│       ├── ServiceCard (Foods)
│       ├── ServiceCard (Entertainment)
│       ├── ServiceCard (Lounge)
│       ├── ServiceCard (Events)
│       ├── ServiceCard (Premium)
│       ├── ServiceCard (Atmosphere)
│       └── [Duplicated cards for seamless loop]
│
└── Bottom Instruction Text
```

---

## 🎨 ServiceCard Component Breakdown

```javascript
ServiceCard
│
├── Container (motion.div)
│   ├── Hover state management
│   ├── Scale & lift animation
│   └── Cursor pointer
│
├── Background Layer (z-0)
│   ├── Image element
│   └── Zoom animation on hover
│
├── Gradient Overlay (z-10)
│   └── Black gradient (top to bottom)
│
├── Content Layer (z-20)
│   ├── Category Badge
│   │   ├── Icon (Lucide)
│   │   └── Category name
│   │
│   ├── Title (h3)
│   │
│   └── Services List
│       ├── Item 1 (with bullet)
│       ├── Item 2 (with bullet)
│       ├── Item 3 (with bullet)
│       ├── Item 4 (with bullet)
│       └── "+X more" (if collapsed)
│
├── Neon Border (z-30)
│   └── Animated glow on hover
│
└── Shimmer Effect (z-25)
    └── Sweep animation on hover
```

---

## 🔄 Animation Flow

### 1. Initial Load
```
Page loads
    ↓
Section fades in (opacity 0 → 1)
    ↓
Header slides up (y: 30 → 0)
    ↓
Cards start scrolling (x: 0 → -2940)
    ↓
Particles float (y: 0 → -30 → 0)
```

### 2. User Hovers Card
```
Mouse enters card
    ↓
Pause scrolling
    ↓
Card scales up (1 → 1.05)
    ↓
Card lifts (y: 0 → -10)
    ↓
Image zooms (1 → 1.15)
    ↓
Neon border glows
    ↓
Shimmer sweeps across
    ↓
Full service list reveals
```

### 3. User Leaves Card
```
Mouse leaves card
    ↓
Resume scrolling
    ↓
Card scales down (1.05 → 1)
    ↓
Card drops (y: -10 → 0)
    ↓
Image zooms out (1.15 → 1)
    ↓
Neon border fades
    ↓
Service list collapses
```

---

## 📊 Data Structure

```javascript
services = [
  {
    id: Number,           // Unique identifier
    category: String,     // "DRINKS", "FOODS", etc.
    title: String,        // "Liquid Artistry"
    icon: Component,      // Lucide icon component
    image: String,        // Image URL
    items: Array<String>  // ["Item 1", "Item 2", ...]
  },
  // ... more services
]

duplicatedServices = [...services, ...services]
// Creates seamless infinite loop
```

---

## 🎭 State Management

```javascript
// Component State
const [isPaused, setIsPaused] = useState(false)
// Controls: scroll animation pause/resume

// Card State
const [isHovered, setIsHovered] = useState(false)
// Controls: hover effects per card

// Animation Controls
const controls = useAnimation()
// Controls: programmatic animation start/stop

// Refs
const scrollRef = useRef(null)
// Reference: scrolling container DOM element
```

---

## 🎨 Styling Layers

### Layer 1: Base Styles (Tailwind)
```
- Layout: flex, relative, absolute
- Sizing: w-[400px], h-[550px]
- Spacing: p-8, gap-8, mb-4
- Colors: bg-[#0A0A0A], text-white
- Effects: rounded-3xl, overflow-hidden
```

### Layer 2: Glassmorphism
```
- Backdrop blur: backdrop-blur-md
- Transparency: bg-white/10
- Borders: border border-white/20
```

### Layer 3: Gradients
```
- Background: bg-gradient-to-t from-black
- Text: bg-clip-text bg-gradient-to-r
- Overlays: from-black/70 via-black/40
```

### Layer 4: Animations (Framer Motion)
```
- Transform: scale, translateY, translateX
- Opacity: 0 → 1
- Box shadow: neon glow effects
- Transitions: duration, ease, delay
```

---

## 📱 Responsive Breakpoints

```
Mobile (< 768px)
├── Card width: 320px
├── Card height: 480px
├── Text: smaller (text-2xl)
├── Spacing: reduced (p-6)
└── Fade edges: 16px

Desktop (≥ 768px)
├── Card width: 400px
├── Card height: 550px
├── Text: larger (text-3xl)
├── Spacing: normal (p-8)
└── Fade edges: 32px
```

---

## 🔌 Integration Points

### Parent Component (Home.jsx)
```javascript
import { ServicesShowcase } from '../components/ServicesShowcase'

<ServicesShowcase />
// Placed between hero and featured drinks sections
```

### CSS Dependencies (index.css)
```css
.gradient-text { ... }
.service-card-glow { ... }
```

### External Dependencies
```javascript
- framer-motion (animations)
- lucide-react (icons)
- react (hooks, components)
```

---

## 🎯 Key Features Map

```
Feature                    Implementation
─────────────────────────────────────────────────
Infinite scroll         → Framer Motion animate
Pause on hover          → useState + handlers
Glassmorphism          → backdrop-blur + opacity
Neon glow              → box-shadow animation
Image zoom             → scale transform
Card lift              → translateY transform
Shimmer effect         → gradient sweep animation
Floating particles     → Array.map + motion.div
Responsive design      → Tailwind breakpoints
Touch support          → onTouchStart/End handlers
Lazy loading           → loading="lazy" attribute
GPU acceleration       → transform properties
```

---

## 🧩 Customization Points

```
┌─────────────────────────────────────────┐
│ EASY TO CUSTOMIZE                       │
├─────────────────────────────────────────┤
│ ✓ Service items (text array)           │
│ ✓ Images (URL strings)                 │
│ ✓ Colors (Tailwind classes)            │
│ ✓ Scroll speed (duration value)        │
│ ✓ Card size (width/height)             │
│ ✓ Hover effects (scale/y values)       │
│ ✓ Section heading (text)               │
│ ✓ Icons (Lucide components)            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ MODERATE COMPLEXITY                     │
├─────────────────────────────────────────┤
│ ○ Add new categories                    │
│ ○ Change animation timing               │
│ ○ Modify gradient overlays              │
│ ○ Adjust responsive breakpoints         │
│ ○ Add click interactions                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ADVANCED MODIFICATIONS                  │
├─────────────────────────────────────────┤
│ ◆ Add category filters                  │
│ ◆ Integrate booking system              │
│ ◆ Add video backgrounds                 │
│ ◆ Implement analytics tracking          │
│ ◆ Create expanded modal views           │
└─────────────────────────────────────────┘
```

---

## 🎬 Performance Optimization

```
Technique                  Benefit
─────────────────────────────────────────────
GPU acceleration        → Smooth 60fps animations
Lazy loading images     → Faster initial load
Transform-based anims   → No layout reflow
Duplicate array         → Seamless infinite loop
Conditional rendering   → Reduced DOM updates
useRef for DOM access   → Avoid re-renders
Optimized images        → Reduced bandwidth
```

---

This structure ensures a **premium, performant, and maintainable** component! 🚀
