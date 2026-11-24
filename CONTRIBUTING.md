# Contributing to EJ HQ

## Run it from source

Building from source requires Node.js 22+ and npm. Run these commands from the EJ HQ checkout.

```bash
npm ci
npm run dev                                  # the UI with fake data, no agents
HQ_REPO=~/developer/hq-test npm run dev:hq    # the real HQ server + UI, with hot reload
```

`npm run dev` is a demo with fake data: nothing runs and nothing leaves the browser. To test a change for real, use `npm run dev:hq` or `npm run hq` against a throwaway repo.

| Command | Does |
| --- | --- |
| `npm run dev` | Demo UI with fake data at http://localhost:5173 |
| `npm run dev:hq` | Real HQ server + UI with hot reload (`HQ_REPO=<path>`) |
| `npm run hq -- --repo <path> --port 7420` | Builds the UI, then runs HQ like a release |
| `npm run build` | Type-checks, builds the UI to `dist/` and the server to `dist-server/` |
| `npm run typecheck` | Type-check only |
| `npm pack` | Builds the npm tarball, to test it before publishing |

Start HQ with `HQ_DEBUG=1` to log why a queued message is waiting.

## Where things are

```
src/
  data/      Types, the OfficeDataSource interface, fake (data/mock) and real (data/ws) data
  store/     Zustand stores; the only code that talks to the data source
  office/    The PixiJS pixel office: layout, sprites, agents, belt
  ui/        Top bar, team panel, activity, drawers, settings, setup checklist, welcome
server/      Local HQ server: setup checks, workspaces, sessions (tmux, or HQ-run on Windows), sbx, hooks, Team MCP, GitHub
bin/         The ej-hq command
docs/        User guides
context/     Implementation plans, and the first UI build brief (001-ui-build-context.md)
```

## Docker Sandboxes versions

HQ calls the `sbx` CLI and reads its output. sbx 0.48 changed several outputs (for example `sbx ls --json` and `sbx mcp ls --json` now return a bare array), so read sbx output in a way that accepts both the old and the new format. HQ is tested on sbx 0.47 and 0.50.

## Packaging

Run `npm pack` to build the CLI and create an `ejcodes-ej-hq-<version>.tgz` tarball. CI installs that tarball in a temporary directory and verifies that the CLI starts and serves the UI.
