# AGENTS.md

This file provides guidance for AI coding agents (GitHub Copilot, Claude, Cursor, etc.) working in this repository.

You are an expert in JavaScript, Rsbuild, and web application development. You write maintainable, performant, and accessible code.

---

## Project Overview

**Vue 3 + TypeScript + Rsbuild** starter template.

- **Framework**: Vue 3 (`<script setup>` SFC only)
- **Build tool**: Rsbuild
- **Language**: TypeScript (strict)
- **State management**: Pinia (setup-store style)
- **Routing**: Vue Router 5
- **Package manager**: pnpm (do not use npm or yarn)
- **Node version**: `>=24`

---

## Commands

```bash
pnpm run dev            # Start dev server
pnpm run build          # Type-check + production build
pnpm run lint           # Run unified lint/format pipeline (lint:*)
pnpm run type-check     # vue-tsc type check only
pnpm run test           # Rstest test run
pnpm run test:watch     # Rstest watch mode
pnpm run preview        # Preview production build
pnpm run skills:update  # Update Agent skills
```

Always run `pnpm lint` and `pnpm build` before committing. These are also enforced by husky pre-commit hooks via lint-staged.

---

## TypeScript Rules

- **No `any`** — use `unknown` and narrow with type guards.
- **Explicit return types** on exported functions.
- **Use `type` over `interface`** for object shapes; extend via intersection (`&`).
- **Union literal types** instead of magic strings:
  ```ts
  type Status = 'active' | 'inactive' | 'pending';
  ```
- **Underscore prefix** for intentionally unused variables: `_value`, `_error`.
- **Array type syntax**: `string[]` not `Array<string>`.
- **Generic constructors**: left-hand side style — `const map: Map<string, User> = new Map()`.

---

## Vue SFC Rules

### Script

- Always use `<script setup lang="ts">` — Options API is prohibited.
- `defineProps` and `defineEmits` must use **type-based declarations** (runtime declarations are prohibited):

  ```ts
  // OK
  const props = defineProps<{ title: string; count?: number }>();
  const emit = defineEmits<{ change: [value: string]; close: [] }>();

  // NG
  const props = defineProps({ title: String });
  ```

- Return values from composables as individual `ref`s (not `reactive`) to enable destructuring.
- Internal state exposed from composables should be wrapped in `readonly()`.

### Template

- **Self-closing void elements**: `<br />`, `<img />`, `<input />`.
- **Attribute order** (enforced by `vue/attributes-order`):
  `DEFINITION` → `LIST_RENDERING` → `CONDITIONALS` → `RENDER_MODIFIERS` → `UNIQUE` → `TWO_WAY_BINDING` → `OTHER_DIRECTIVES` → `ATTR_DYNAMIC` → `ATTR_STATIC` → `ATTR_SHORTHAND_BOOL` → `EVENTS` → `CONTENT`
- Run `pnpm lint` to auto-fix attribute order.

### Style

- Always use `<style scoped>` — unscoped styles are prohibited.
- CSS custom properties (design tokens) must be defined in a shared file (e.g., `src/styles/variables.css`) and not duplicated per component.

---

## Component Naming

- Component files: **PascalCase**, multi-word required (e.g., `UserCard.vue`, `AppHeader.vue`).
  - `src/components/**/*.vue` — `error`
- Do not create single-word components like `Header.vue` or `Card.vue`.

---

## Import Rules

- **Always use the `@/` alias** for internal imports — relative parent traversal (`../`) is prohibited in application code:

  ```ts
  // OK
  import { useUserStore } from '@/stores/user';
  import type { User } from '@/types';

  // NG
  import { useUserStore } from '../../../stores/user';
  ```

  > **Exception**: test files under `src/**/__tests__/` may use `../` to import the component under test (e.g., `import MyComponent from '../MyComponent.vue'`). This is intentional and the lint rule is disabled for that scope.

- The `~` alias maps to `node_modules` (e.g., `~/some-lib/style.css`).
- **Import order** (enforced by rslint, auto-fixed by `pnpm lint`):
  1. Node built-ins
  2. Vue core (`vue`, `vue-router`, `pinia`, `@vue/*`, `@rsbuild/*`)
  3. External packages
  4. Internal (`@/**`)
  5. Sibling / index
  6. Type imports
     A blank line is required between each group.

---

## Pinia Store Rules

- Use **setup-store style** exclusively (not options-store style):
  ```ts
  // OK
  export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    function setUser(u: User) {
      user.value = u;
    }
    return { user, setUser };
  });
  ```
- Store ID must match the file name (e.g., `defineStore('user', ...)` in `stores/user.ts`).
- Persist state via `pinia-plugin-persistedstate` — do not manually read/write `localStorage`.

---

## Testing

### Unit tests (Rstest)

- Test files: `src/**/__tests__/*`
- Follow **Arrange / Act / Assert** structure.
- Mock external dependencies (API, DB, browser APIs) — tests must not make real network calls.

---

## Environment Variables

- Client-side env vars should be prefixed with `VITE_APP_`.
- Access via `import.meta.env.VITE_APP_*` (typed in `env.d.ts`).

---

## Docs

- Rsbuild: <https://rsbuild.rs/llms.txt>
- Rspack: <https://rspack.rs/llms.txt>
- Rstest: <https://rstest.rs/llms.txt>

---

## Git & PR Rules

- Commit messages follow **Conventional Commits**:
  ```
  feat(auth): add JWT refresh token rotation
  fix(api): handle 429 rate limit with exponential backoff
  docs: update README setup instructions
  ```
- PRs should be focused on a single purpose; aim for diffs under ~400 lines.
- Minimum **1 approving review** required before merging to `master`.
- PR description must include: what changed, how to test, and screenshots if UI is affected.

---

## What NOT to Do

- Do not use `any` — use `unknown` with type guards.
- Do not use Options API (`defineComponent`, `data()`, `methods:`).
- Do not use runtime `defineProps({ title: String })` declarations.
- Do not write `../` relative imports that traverse parent directories (exception: `src/**/__tests__/` may use `../` to reach the component under test).
- Do not use `<style>` without `scoped`.
- Do not write bare `localStorage` / `sessionStorage` access — use `pinia-plugin-persistedstate`.
- Do not install packages with `npm` or `yarn` — use `pnpm` only.
