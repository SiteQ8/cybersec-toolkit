# CyberSec Toolkit

A guided open-source cybersecurity workspace for learning, CTF practice, GRC work, and defensive security research.

## What is included

- **Command center** with quick starts, saved tools, and learning progress
- **Explore toolkit** with 20 curated tools across recon, web security, blue team, GRC, research, forensics, and AppSec
- **Learning tracks** with locally persisted progress
- **My workspace** for bookmarked tools and field notes
- **Tool briefs** with purpose, use cases, safe-start guidance, source repositories, and installation links
- **Authorization-first guidance** throughout the experience

This release is a client-side prototype. Saved tools, field notes, quick-start completion, and learning progress are stored in the browser with `localStorage`; there is no account system or remote data service.

## Run locally

Requires Node.js and pnpm.

From this project directory:

```bash
pnpm install
pnpm run dev
```

Useful checks:

```bash
pnpm run typecheck
pnpm run build
```

The Vite server defaults to port `5173`. Set `PORT` to use another port and `BASE_PATH` when serving the app below a URL prefix:

```bash
PORT=5173 BASE_PATH=/ pnpm run dev
```

If you are running the full Replit monorepo, install from the workspace root and use:

```bash
pnpm --filter @workspace/cybersec-toolkit run dev
```

## Safety

Only test systems you own or have explicit authorization to assess. Use intentionally vulnerable labs, CTF targets, or other scoped environments when practicing.

## License

MIT. See [LICENSE](./LICENSE).