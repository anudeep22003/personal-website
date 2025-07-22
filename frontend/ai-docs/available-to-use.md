# Available Components for AI Use

## TableOfContents

**Location**: `src/components/TableOfContents.tsx`

### Description
A sticky table of contents component designed for long-form content pages. Provides navigation links for page sections with active section highlighting.

### How it's built
- React functional component with TypeScript
- Uses Tailwind CSS for styling with neutral color scheme and green accent
- Sticky positioned on large screens, hidden on mobile/tablet
- Clickable navigation items with hover and active states
- Left border design pattern consistent with site aesthetic

### Usage
```tsx
import { TableOfContents } from "@/components/TableOfContents";

const items = [
  { id: "intro", label: "Introduction" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" }
];

<TableOfContents
  items={items}
  activeSection={activeSection}
  onSectionClick={handleSectionClick}
  className="optional-additional-classes"
/>
```

### Props
- `items`: Array of `TocItem` objects with `id` and `label`
- `activeSection`: String ID of currently active section
- `onSectionClick`: Callback function that receives section ID when clicked
- `className`: Optional additional CSS classes

### Dependencies
- Requires `TableOfContentsProps` and `TocItem` types from `@/types`
- Works with scroll spy functionality (see `useScrollSpy` hook)
- Pairs well with `ContentSection` component for structured page layout

### Styling Notes
- Hidden on screens smaller than `lg` (1024px)
- Fixed width of 256px (`w-64`)
- Sticky positioned 32px from top (`top-8`)
- Uses green-600 for active/hover states matching site theme
- Left border with neutral-200 color and 16px padding