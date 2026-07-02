# 💼 Work Experience Section - Interactive Feature

## 🎯 Overview

WorkingProcessSection telah diubah menjadi section untuk menampilkan **Work Experience** dengan fitur expand/collapse yang interaktif. Setiap experience card dapat di-expand untuk melihat detail atau di-collapse untuk menyembunyikan detail.

## ✨ Fitur

### 1. **Interactive Expand/Collapse**
- ✅ Semua card **default dalam kondisi collapsed** (non-active)
- ✅ Klik tombol **+** untuk expand card (show details)
- ✅ Klik tombol **-** untuk collapse card (hide details)
- ✅ Hanya **1 card yang bisa expanded** dalam satu waktu

### 2. **Visual States**

#### 📦 Collapsed State (Non-Active)
- Background: `bg-[#F3F3F3]` (light gray)
- Tampilan compact
- Menampilkan: Number + Title
- Icon: **+ (Plus)** button
- Hover effect untuk better UX

#### 📂 Expanded State (Active)
- Background: `bg-[#B9FF66]` (green highlight) untuk card pertama
- Tampilan penuh dengan separator line
- Menampilkan: Number + Title + Description
- Icon: **- (Minus)** button
- Smooth transition animation

## 🏗️ Component Structure

### ProcessStep Component

```tsx
interface ProcessStepProps {
  number: string;           // "01", "02", etc.
  title: string;           // Job title
  description?: string;    // Job description (shown when expanded)
  isExpanded: boolean;     // Expanded state
  onToggle: () => void;    // Toggle handler
  bgColor?: string;        // Background color
}
```

**Features:**
- SVG-based + and - icons
- Smooth transitions with CSS
- Accessible with aria-labels
- Hover effects for better UX

### WorkingProcessSection Component

```tsx
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const handleToggle = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};
```

**Features:**
- State management untuk expand/collapse
- Toggle logic: clicking expanded card akan collapse it
- Only one card can be expanded at a time

## 📝 Data Structure

```tsx
interface Experience {
  number: string;      // "01", "02", "03", etc.
  title: string;       // "Senior Frontend Developer"
  company?: string;    // "Tech Company A" (optional, not displayed yet)
  period?: string;     // "Jan 2022 - Present" (optional, not displayed yet)
  description?: string; // Full job description
  bgColor?: string;    // "bg-[#B9FF66]" or "bg-[#F3F3F3]"
}
```

## 🎨 Styling

### Colors
- **Active Card**: `bg-[#B9FF66]` (Brand green)
- **Inactive Cards**: `bg-[#F3F3F3]` (Light gray)
- **Border**: `border-[#191A23]` (Dark)
- **Shadow**: `0px 5px 0px #191A23`

### Icons
- **Plus Icon** (+): For collapsed cards
- **Minus Icon** (-): For expanded cards
- **Size**: 58x58px
- **Background**: `#F3F3F3`
- **Stroke**: `#000000`, width: 3px

### Animations
- `transition-all duration-300` - Smooth expand/collapse
- `hover:bg-gray-50` - Hover effect on collapsed cards
- `hover:opacity-80` - Icon hover effect

## 💻 Usage Example

### Current Implementation

```tsx
const experiences: Experience[] = [
  {
    number: '01',
    title: 'Senior Frontend Developer',
    description: 'Led the development of responsive web applications...',
    bgColor: 'bg-[#B9FF66]',
  },
  {
    number: '02',
    title: 'Frontend Developer',
    description: 'Developed and maintained multiple client-facing...',
    bgColor: 'bg-[#F3F3F3]',
  },
  // ... more experiences
];
```

### Customizing Experiences

Edit `src/components/WorkingProcessSection.tsx`:

```tsx
const experiences: Experience[] = [
  {
    number: '01',
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: 'Detailed description of your role and achievements...',
    bgColor: 'bg-[#B9FF66]',
  },
  // Add more experiences...
];
```

## 🎯 User Interaction Flow

1. **Initial State**
   - All cards are collapsed (default)
   - User sees number + title only
   - All cards show + icon

2. **User Clicks + Button**
   - Selected card expands smoothly
   - Description appears with animation
   - + icon changes to - icon
   - Background changes to highlight color (if defined)
   - Other expanded cards automatically collapse

3. **User Clicks - Button**
   - Expanded card collapses smoothly
   - Description disappears
   - - icon changes back to + icon
   - Background returns to default

## 🔧 Technical Implementation

### State Management
```tsx
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
```
- `null` = no cards expanded
- `number` = index of expanded card (0-based)

### Toggle Logic
```tsx
const handleToggle = (index: number) => {
  // If clicking already expanded card, collapse it
  // Otherwise, expand the clicked card
  setExpandedIndex(expandedIndex === index ? null : index);
};
```

### Conditional Rendering
```tsx
<ProcessStep
  isExpanded={expandedIndex === index}
  onToggle={() => handleToggle(index)}
/>
```

## 📱 Responsive Behavior

- Cards stack vertically on all screen sizes
- Max width: `1234px` with `mx-auto` centering
- Gap between cards: `30px`
- Padding maintained on mobile devices

## ♿ Accessibility

- ✅ Button elements for toggle actions
- ✅ `aria-label="Expand"` and `aria-label="Collapse"`
- ✅ Keyboard accessible (Tab + Enter)
- ✅ Clear visual indicators for states
- ✅ High contrast colors

## 🎨 Customization Options

### Change Default Expanded Card

Set default expanded card (e.g., card 0):
```tsx
const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
```

Or keep all collapsed:
```tsx
const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
```

### Change Colors

Edit experience objects:
```tsx
{
  bgColor: 'bg-blue-500', // Change to any Tailwind color
}
```

### Add More Details

You can extend to show company and period:
```tsx
// In ProcessStep.tsx, add in expanded section:
{company && <span className="text-sm">{company}</span>}
{period && <span className="text-sm text-gray-600">{period}</span>}
```

### Change Icon Styles

Edit SVG paths in `ProcessStep.tsx`:
```tsx
// Make icons larger
<svg width="70" height="70" viewBox="0 0 70 70">
  {/* ... */}
</svg>
```

## 🚀 Future Enhancements

### Could Add:
- [ ] Animation on expand (slide down effect)
- [ ] Company logo images
- [ ] Date range display
- [ ] Skills/technologies tags
- [ ] Links to projects/portfolio items
- [ ] Filter by job type (full-time, contract, etc.)
- [ ] Timeline view option
- [ ] Multiple expanded cards simultaneously (configurable)

### Example: Show Company & Period

```tsx
// In WorkingProcessSection.tsx
<div className="flex justify-between items-center mb-2">
  <span className="text-lg font-semibold">{experience.company}</span>
  <span className="text-sm text-gray-600">{experience.period}</span>
</div>
```

## 📊 Benefits

1. **Better UX** - Clean, collapsed view by default
2. **Focus** - Users can expand only what they want to read
3. **Space Efficient** - Saves vertical space
4. **Interactive** - Engaging user experience
5. **Professional** - Modern portfolio feature
6. **Scannable** - Easy to scan job titles quickly

## 🎯 Comparison: Before vs After

### Before (Static)
```
❌ All experiences always visible (long page)
❌ No interaction
❌ Cluttered appearance
❌ Hard to scan quickly
```

### After (Interactive)
```
✅ Compact default view (clean)
✅ Click to expand/collapse
✅ Clean, organized appearance
✅ Easy to scan job titles
✅ Focus on one experience at a time
```

## 📝 Component Files

- **ProcessStep.tsx** - Individual experience card with expand/collapse
- **WorkingProcessSection.tsx** - Container with state management
- **SectionTitle.tsx** - Section header (reused)

## ✨ Summary

The Work Experience section now features:
- 🔘 **Interactive expand/collapse** functionality
- 🎨 **Visual feedback** with hover states
- 📦 **Compact default view** (all collapsed)
- 🎯 **Focus on one item** at a time
- ⚡ **Smooth animations** for transitions
- ♿ **Accessible** with proper ARIA labels

Users can now click the + button to expand any experience card and see the full description, then click - to collapse it again. Only one card can be expanded at a time, keeping the interface clean and focused!
