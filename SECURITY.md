# Security policy

## Reporting a vulnerability

Please **don't** report security issues in public issues, pull requests or discussions.

Contact the maintainers privately. If private vulnerability reporting is enabled on the EJ HQ GitHub repository, use **Report a vulnerability** in its **Security** tab.

Please include what you found, the steps to reproduce it, and the HQ, Docker Sandboxes (`sbx version`) and OS versions you used.

## What counts

EJ HQ runs AI agents on your machine, so we especially want to hear about:

- an agent getting out of its Docker Sandbox, or reaching files, keys or programs on your machine it shouldn't;
- an agent reaching websites that aren't allowed for its sandbox;
- anything that lets a web page, another user on the machine, or an agent control HQ (its local server, WebSocket or Team MCP) without its token;
- secrets (API keys, service keys, app variables) leaking into a sandbox, logs, the browser or git.

Bugs in Docker Sandboxes itself should go to Docker as well. We're happy to help pass them on.

## Supported versions

Build from the current EJ HQ checkout to pick up fixes.
