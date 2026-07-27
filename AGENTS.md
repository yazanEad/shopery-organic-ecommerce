# Shopery Project Rules

This file contains the permanent rules for working on the Shopery project.
These rules must be read and followed before every task.

## 1. Protect Existing Code

- Never delete existing files, components, routes, styles, data, or logic unless the user explicitly asks for deletion.
- Never rewrite the project from scratch.
- Never replace an entire file when a small targeted edit is enough.
- Never perform unrelated refactoring, cleanup, renaming, or optimization.
- Never modify files that are unrelated to the current task.
- Do not treat silence as permission to delete or replace code.
- If the requested task requires deleting, renaming, moving, or replacing existing code, stop and ask the user for explicit approval first.
- Preserve all existing user changes.
- Never run `git reset`, `git checkout`, or any destructive command.
- Always review `git diff` after making changes.

## 2. Scope of Every Task

- Execute only the task requested by the user.
- If the user asks for a Navbar, implement only the Navbar and the files directly required for it.
- Do not implement the entire website unless the user explicitly asks for it.
- Do not create extra pages, components, routes, or features without permission.
- Do not change unrelated pages or components.
- Keep every change as small and focused as possible.

Before changing code, briefly report:

1. What you understood.
2. Which files you will inspect.
3. Which files you will modify or create.
4. Whether any existing code needs to be deleted or replaced.

If deletion or a risky change is required, stop and ask for approval.

## 3. Existing Project Structure

Read and respect these files:

- `package.json`
- `src/main.jsx`
- `src/App.jsx`
- `src/styles/variables.css`
- `src/styles/base.css`
- `src/index.css`
- `src/data/data.js`
- `data/db.json`
- all files inside `src/pages`
- all assets inside `public/images`

The project uses:

- React
- Vite
- Bootstrap 5
- React Router
- React Icons through the existing icon registry

## 4. Figma Reference

Use this Figma file as the visual source of truth:

https://www.figma.com/design/xIZXGFRSlGSgggsKhKcmLM/Shopery---Organic-eCommerce-Shop-Website-Figma-Template--Community---Community-?node-id=570-126965&t=dLuuUu4T0YTRaoIM-1

The extracted Figma project reference is also available at:

`C:\Users\FOR LAPTOP\Documents\Codex\2026-07-19\new-chat\outputs\shopery-extracted-unzipped\`

Use this directory when inspecting the extracted Figma document, pages, assets, or text nodes in future Shopery tasks.

Before implementing a UI task:

- Inspect the relevant Figma screen or section.
- Match layout, spacing, typography, colors, borders, shadows, image ratios, and responsive behavior.
- Check desktop, tablet, and mobile layouts when available.
- Do not invent a different visual design.
- Do not implement other Figma screens unless explicitly requested.
- If the required Figma section is unavailable or unclear, ask the user instead of guessing.

## 5. Bootstrap and CSS Rules

- Use Bootstrap 5 as the primary layout and responsive system.
- Prefer Bootstrap containers, rows, columns, flex utilities, spacing utilities, buttons, forms, cards, and responsive classes.
- Use custom CSS only when Bootstrap cannot accurately reproduce the Figma design.
- Create small, focused CSS files when custom CSS is needed.
- Use design tokens from `src/styles/variables.css`.
- Do not hardcode colors, spacing, font sizes, radii, or shadows when an existing variable is available.
- If a new design token is required, add it to `variables.css` first and then use it with `var(...)`.
- Do not create a second design-token system.
- Avoid unnecessary inline styles.
- Do not duplicate global resets from `src/styles/base.css`.

Correct examples:

```css
color: var(--color-text-default);
background-color: var(--color-primary);
padding: var(--space-6);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);
