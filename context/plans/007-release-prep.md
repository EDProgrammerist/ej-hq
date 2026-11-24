## Implementation plan: release prep

### What we're building
The installed `ej-hq` command works from any Git repo. The npm tarball includes the compiled server, built UI, welcome screen, README, and license. CI tests a local install of the tarball.

### Decisions
- **License:** MIT for the code. The upstream project's name and logo are outside the scope of the code license.
- **Distribution:** npm tarball for `ej-hq`, built with `npm pack`. Homebrew later if asked; no desktop app or Docker image for v1.
- **Runtime dependencies only:** node-pty, ws, the MCP SDK, zod. The UI ships pre-built.
- **No templates:** HQ owns the plan and writes ROLE.md. Instead, an opt-in "Export plan to docs/plan.md" in Settings → Project (off by default — it writes a tracked file).
- **First run:** a welcome screen when the repo has no saved HQ config: project name, lead + workers (Claude/Codex each), review tool.

### How to build it
1. Compile the server with esbuild to `dist-server/`. The `bin/ej-hq.mjs` entry point supports `--repo`, `--port`, `--no-open`, `--version`, and `--help` and serves the built UI by default.
2. package.json: name, version 0.1.0, `bin`, `files`, `engines` (Node ≥ 20), runtime-only dependencies, node-pty fix at install and at startup.
3. Welcome screen (UI + server command) for a new config.
4. Opt-in plan export to `docs/plan.md`.
5. `LICENSE` (MIT), `TRADEMARKS.md`, README rewritten for newcomers (requirements, 2-minute quickstart, troubleshooting).
6. GitHub Actions: typecheck + build on push and PR.
7. Verify like a stranger: `npm pack`, install the tarball in an empty folder, run it against a fresh repo.

- **Done when:** the packed tarball runs from a clean folder against a new repo without an EJ HQ checkout or dev tools.
