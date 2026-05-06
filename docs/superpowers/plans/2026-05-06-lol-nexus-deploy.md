# LOL Nexus Deploy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Vite app for deployment under `https://santos-games.com/lol/nexus` and package the build flow in a Bun-based Docker image.

**Architecture:** Configure Vite asset URLs with a fixed `base` of `/lol/nexus/`, configure React Router with a matching `basename`, and add a Bun Docker build image that produces `dist/` for an external VPS proxy to publish. Add one regression test for routing under the prefixed path and document the build/export workflow.

**Tech Stack:** Vite, React, React Router, Vitest, Bun, Docker

---

### Task 1: Align SPA routing with the deployment prefix

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/App.tsx`
- Modify: `src/pages/NotFound.tsx`
- Test: `src/test/app-routing.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup } from "@testing-library/react";
import App from "@/App";

afterEach(() => {
  cleanup();
});

describe("app routing", () => {
  it("renders the home page when loaded from /lol/nexus/", () => {
    window.history.pushState({}, "", "/lol/nexus/");

    render(<App />);

    expect(screen.getByText(/campeonato de league of legends/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun test src/test/app-routing.test.tsx`
Expected: FAIL because `BrowserRouter` without `basename` treats `/lol/nexus/` as an unknown route.

- [ ] **Step 3: Write minimal implementation**

```ts
// vite.config.ts
base: "/lol/nexus/",
```

```tsx
// src/App.tsx
<BrowserRouter basename="/lol/nexus">
```

```tsx
// src/pages/NotFound.tsx
<Link to="/">Return to Home</Link>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun test src/test/app-routing.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts src/App.tsx src/pages/NotFound.tsx src/test/app-routing.test.tsx
git commit -m "fix: deploy app under lol nexus path"
```

### Task 2: Add Bun Docker build packaging and deployment docs

**Files:**
- Create: `Dockerfile`
- Create: `.dockerignore`
- Modify: `README.md`

- [ ] **Step 1: Write the failing verification target**

```text
There is no Docker build artifact workflow documented or encoded in the repo, so deployment through a Bun-based image is not yet reproducible.
```

- [ ] **Step 2: Run the verification command to confirm the gap**

Run: `test -f Dockerfile && test -f .dockerignore && rg -n "/lol/nexus|docker build|docker cp" README.md`
Expected: FAIL because the files and docs do not exist yet.

- [ ] **Step 3: Write minimal implementation**

```dockerfile
FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build
```

```gitignore
node_modules
dist
.git
```

```md
Build the image with Docker, extract `/app/dist`, and publish that directory behind the VPS proxy at `/lol/nexus`.
```

- [ ] **Step 4: Run verification to confirm the workflow exists**

Run: `docker build -t lol-nexus-build .`
Expected: PASS with the Vite production build completing inside the Bun image.

- [ ] **Step 5: Commit**

```bash
git add Dockerfile .dockerignore README.md
git commit -m "build: add bun docker packaging"
```
