# Services Showcase - Quick Customization Guide

## 🎨 Common Customizations

### 1. Change Scroll Speed

**Location**: `src/components/ServicesShowcase.jsx` (line ~115)

```javascript
// SLOWER (more luxurious)
duration: 90  // 90 seconds per loop

// FASTER (more energetic)
duration: 40  // 40 seconds per loop

// CURRENT
duration: 60  // 60 seconds per loop
```

---

### 2. Update Service Images

**Location**: `src/components/ServicesShowcase.jsx` (services array)

```javascript
{
  id: 1,
  category: "DRINKS",
  title: "Liquid Artistry",
  icon: Wine,
  image: "YOUR_IMAGE_URL_HERE", // ← Change this
  items: [...]
}
```

**Recommended Image Sources**:
- Your own photography (best option)
- Unsplash (free, high-quality)
- Pexels (free stock photos)
- Custom illustrations

**Image Requirements**:
- **Resolution**: 1200x800px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 3:2 or 16:9
- **File Size**: < 500KB (optimized)

---

### 3. Add/Remove Service Items

**Location**: `src/components/ServicesShowcase.jsx` (services array)

```javascript
items: [
  "Signature Cocktails",
  "Craft Beers",
  "Premium Spirits",
  "YOUR NEW ITEM HERE", // ← Add here
  // Remove any line to delete an item
]
```

---

### 4. Change Card Size

**Location**: `src/components/ServicesShowcase.jsx` (ServiceCard component)

```javascript
// Desktop & Mobile sizes
className="w-[320px] md:w-[400px] h-[480px] md:h-[550px]"

// Make cards LARGER
className="w-[360px] md:w-[480px] h-[520px] md:h-[620px]"

// Make cards SMALLER
className="w-[280px] md:w-[360px] h-[420px] md:h-[500px]"
```

---

### 5. Modify Hover Effects

**Location**: `src/components/ServicesShowcase.jsx` (ServiceCard component)

```javascript
// Current hover animation
whileHover={{ scale: 1.05, y: -10 }}

// MORE dramatic
whileHover={{ scale: 1.08, y: -15 }}

// LESS dramatic
whileHover={{ scale: 1.03, y: -5 }}

// NO lift, only scale
whileHover={{ scale: 1.05 }}
```

---

### 6. Change Neon Glow Colors

**Location**: `src/components/ServicesShowcase.jsx` (ServiceCard hover effect)

```javascript
// Current: Gold glow
boxShadow: '0 0 40px rgba(255, 200, 87, 0.6)'

// Pink glow
boxShadow: '0 0 40px rgba(255, 0, 127, 0.6)'

// Blue glow
boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)'

// Purple glow
boxShadow: '0 0 40px rgba(138, 43, 226, 0.6)'
```

---

### 7. Adjust Pause Behavior

**Location**: `src/components/ServicesShowcase.jsx` (motion.div)

```javascript
// Current: Pause on hover/touch
onMouseEnter={() => setIsPaused(true)}
onMouseLeave={() => setIsPaused(false)}
onTouchStart={() => setIsPaused(true)}
onTouchEnd={() => setIsPaused(false)}

// NEVER pause (always scroll)
// Remove all pause handlers

// ALWAYS paused (manual scroll only)
const [isPaused, setIsPaused] = useState(true);
```

---

### 8. Change Section Background

**Location**: `src/components/ServicesShowcase.jsx` (section element)

```javascript
// Current gradient
className="bg-gradient-to-b from-[#0A0A0A] via-[#0b0b0f] to-[#0A0A0A]"

// Solid dark
className="bg-[#0A0A0A]"

// Purple gradient
className="bg-gradient-to-b from-[#0A0A0A] via-[#2D0A4A] to-[#0A0A0A]"

// Blue gradient
className="bg-gradient-to-b from-[#0A0A0A] via-[#0F2A4A] to-[#0A0A0A]"
```

---

### 9. Update Section Heading

**Location**: `src/components/ServicesShowcase.jsx` (Section Header)

```javascript
<h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
  Explore Our <span className="gradient-text">Signature Experiences</span>
</h2>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
  From handcrafted cocktails to unforgettable nights.
</p>

// Change to:
<h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
  Your Custom <span className="gradient-text">Heading Here</span>
</h2>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
  Your custom subtitle here.
</p>
```

---

### 10. Add New Service Category

**Location**: `src/components/ServicesShowcase.jsx` (services array)

```javascript
// Import new icon first
import { YourIcon } from 'lucide-react';

// Add to services array
{
  id: 8, // Next available ID
  category: "YOUR CATEGORY",
  title: "Your Title",
  icon: YourIcon,
  image: "your-image-url",
  items: [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
    "Service 7",
    "Service 8"
  ]
}
```

**Available Lucide Icons**:
- `Coffee`, `Beer`, `Pizza`, `Cake`
- `Mic`, `Guitar`, `Headphones`, `Radio`
- `Users`, `UserPlus`, `Heart`, `Star`
- `Gift`, `Sparkle`, `Zap`, `Flame`
- [Browse all icons](https://lucide.dev/icons/)

---

## 🎯 Quick Recipes

### Recipe 1: Make it Faster & More Energetic
```javascript
// 1. Increase scroll speed
duration: 40

// 2. More dramatic hover
whileHover={{ scale: 1.08, y: -15 }}

// 3. Brighter colors
text-[#FFD700] // Brighter gold
```

### Recipe 2: Make it Slower & More Luxurious
```javascript
// 1. Decrease scroll speed
duration: 90

// 2. Subtle hover
whileHover={{ scale: 1.03, y: -5 }}

// 3. Softer colors
text-[#D4AF37] // Softer gold
```

### Recipe 3: Mobile-First Optimization
```javascript
// 1. Smaller cards on mobile
className="w-[280px] md:w-[400px]"

// 2. Faster scroll on mobile
duration: 45

// 3. Larger touch targets
className="px-4 py-3" // Bigger badges
```

---

## 🔧 Advanced Customizations

### Add Click-to-Expand
```javascript
const [expandedCard, setExpandedCard] = useState(null);

// In ServiceCard
onClick={() => setExpandedCard(service.id)}

// Show modal or expanded view
{expandedCard === service.id && (
  <ExpandedView service={service} />
)}
```

### Add Category Filters
```javascript
const [activeFilter, setActiveFilter] = useState('all');

const filteredServices = services.filter(s => 
  activeFilter === 'all' || s.category === activeFilter
);

// Render filter buttons
<FilterButtons onChange={setActiveFilter} />
```

### Add Analytics Tracking
```javascript
// On card hover
onMouseEnter={() => {
  setIsHovered(true);
  trackEvent('service_card_hover', { category: service.category });
}}

// On card click
onClick={() => {
  trackEvent('service_card_click', { category: service.category });
}}
```

---

## 📱 Mobile-Specific Tweaks

### Disable Auto-Scroll on Mobile
```javascript
const isMobile = window.innerWidth < 768;

animate={!isMobile && controls}
```

### Snap Scrolling on Mobile
```javascript
className="snap-x snap-mandatory overflow-x-auto"
// Add to each card:
className="snap-center"
```

### Reduce Particle Count on Mobile
```javascript
{[...Array(isMobile ? 10 : 20)].map((_, i) => (
  <ParticleElement key={i} />
))}
```

---

## 🎨 Color Scheme Presets

### Preset 1: Gold Luxury
```javascript
Primary: #FFC857 (Gold)
Secondary: #D4AF37 (Soft Gold)
Accent: #FFD700 (Bright Gold)
```

### Preset 2: Neon Nights
```javascript
Primary: #00D4FF (Electric Blue)
Secondary: #FF007F (Hot Pink)
Accent: #39FF14 (Neon Green)
```

### Preset 3: Purple Reign
```javascript
Primary: #9D4EDD (Purple)
Secondary: #7209B7 (Deep Purple)
Accent: #F72585 (Pink)
```

### Preset 4: Tropical Vibes
```javascript
Primary: #06FFA5 (Mint)
Secondary: #FFFB00 (Yellow)
Accent: #FF006E (Magenta)
```

---

## 🚨 Common Issues & Fixes

### Issue: Cards jumping at loop end
**Fix**: Ensure `duplicatedServices` array is properly created
```javascript
const duplicatedServices = [...services, ...services];
```

### Issue: Hover not working on mobile
**Fix**: Add touch handlers
```javascript
onTouchStart={() => setIsHovered(true)}
onTouchEnd={() => setIsHovered(false)}
```

### Issue: Images loading slowly
**Fix**: Add lazy loading and optimize images
```javascript
loading="lazy"
// Use WebP format
// Compress to < 500KB
```

### Issue: Animation stuttering
**Fix**: Use GPU acceleration
```javascript
style={{ willChange: 'transform' }}
```

---

## 📞 Need Help?

1. Check `SERVICES_SHOWCASE_README.md` for full documentation
2. Review `IMPLEMENTATION_SUMMARY.md` for technical details
3. Inspect browser console for errors
4. Test on multiple devices/browsers

---

**Happy Customizing! 🎉**
