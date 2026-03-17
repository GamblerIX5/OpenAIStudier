# OpenStudier Rename Design

Date: 2026-03-17
Repo: GamblerIX/OpenStudier
Domain: opencode.ai (URL unchanged, label changes to OpenStudier)

## Summary
This spec defines a full rename of OpenCode to OpenStudier across code, packaging, docs, and UI. The rename removes all OpenCode/opencode identifiers and does not provide compatibility for old names. The domain URL stays opencode.ai, but all visible branding shifts to OpenStudier with the product positioned as an AI learning assistant.

## Decisions
- Rename brand and all identifiers to OpenStudier/openstudier/OPENSTUDIER.
- Remove all opencode aliases and compatibility paths.
- Rename CLI command and binary to openstudier.
- Rename env vars to OPENSTUDIER_* and default data dir to ~/.openstudier.
- Rename app ids, bundle ids, executable names, and installer filenames.
- Update repository and release links to GamblerIX/OpenStudier.
- Keep opencode.ai URLs but change link text and product name to OpenStudier.

## Goals
- Eliminate OpenCode/opencode strings from the repo except for the opencode.ai domain URL.
- Align all user-facing copy with "OpenStudier" and "AI learning assistant".
- Ensure packaging and distribution artifacts match the new name.
- Maintain a clean, consistent naming scheme across code, docs, and tooling.

## Non-goals
- Domain migration away from opencode.ai.
- Backward compatibility for opencode names or aliases.
- Automatic migration of old config or data directories.

## Rename Map
- OpenCode -> OpenStudier
- opencode -> openstudier
- OPENCODE -> OPENSTUDIER
- @opencode-ai/* -> @openstudier/*
- CLI opencode -> openstudier
- ~/.opencode -> ~/.openstudier
- OPENCODE_* -> OPENSTUDIER_*

## Scope by Subsystem
- Core CLI and SDK packages, including workspace package names and paths.
- Desktop apps (Tauri and Electron) and their app identifiers.
- Web and Console apps, including i18n and content.
- Docs and marketing copy across all locales.
- Install scripts, CI, release, and packaging configs.
- GitHub and release URLs in config and docs.

## Workstreams and Sequence
1. Core CLI and SDK. Rename package names, directory paths, entrypoints, scripts, and workspace references. Update CLI binary name and install paths.
2. Desktop apps. Update app ids, bundle ids, executable names, installer filenames, and UI copy.
3. Web, Console, and Docs. Replace brand names and positioning across UI and multi-language docs. Keep opencode.ai URLs but change labels.
4. Infra and Release. Update install scripts, package manager metadata, CI, release assets, and download pages to OpenStudier naming.

## Data and Config Changes
- All references to ~/.opencode switch to ~/.openstudier.
- Env vars change from OPENCODE_* to OPENSTUDIER_* only.
- No runtime compatibility or fallbacks for old names.
- Provide manual migration guidance in docs for users who want to move data.

## Error Handling
- Default config and data lookup paths move to the new names.
- Missing config handling remains the same, only the path changes.

## Verification Plan
- Global search should find no OpenCode/opencode strings except opencode.ai URLs.
- Run bun typecheck from affected package directories.
- Regenerate JS SDK if impacted with ./packages/sdk/js/script/build.ts.
- Smoke check build or start scripts for CLI and desktop packages.

## Risks and Mitigations
- Risk: Hidden opencode strings in tests or localized content.
- Mitigation: Global search and review of i18n and docs locales.
- Risk: Packaging or installer names drift from code changes.
- Mitigation: Update and verify release scripts and metadata.
- Risk: Users lose access to old data due to path changes.
- Mitigation: Document clear manual migration steps.
