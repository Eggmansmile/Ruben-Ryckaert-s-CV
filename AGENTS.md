# Agent Guidelines for Ruben Ryckaert's CV/Portfolio

## Commands
- **Frontend:** `npm run dev` (dev), `npm run build` (build), `npm run preview` (preview)
- **Backend:** `cd backend && npm start`
- **No linting/testing setup** - add if implementing tests

## Code Style
- **React Components:** TypeScript with FC type, PascalCase filenames
- **Imports:** External libs first, local imports second, use `@/` alias for root imports
- **State:** useState for local state, useEffect for side effects with proper cleanup
- **Styling:** Tailwind CSS classes, responsive-first approach (mobile first)
- **Theme:** Use theme state from Header component, support dark/light modes
- **Config:** Import from `CONFIG` constant in config.ts for all static data
- **Types:** Use defined interfaces from types.ts (Project, Experience, SkillCategory)
- **Icons:** Lucide React icons, consistent sizing (20, 24)
- **Responsive:** Mobile-first with `md:` breakpoints
- **Accessibility:** Include aria-labels for interactive elements
- **Error Handling:** No global error handling setup - add boundaries if needed