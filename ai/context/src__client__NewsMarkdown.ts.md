# src/client/NewsMarkdown.ts

- Purpose: Source module containing application logic.
- Category: source
- Size: 1158 bytes
- Dependencies: none detected
- Public interfaces: normalizeNewsMarkdown
- Important implementation details: Functions/methods: normalizeNewsMarkdown Content notes: const GITHUB_PR_URL_REGEX = /(?<!\()\bhttps:\/\/github\.com\/openfrontio\/OpenFrontIO\/pull\/(\d+)\b/g; const GITHUB_COMPARE_URL_REGEX = /(?<!\()\bhttps:\/\/github\.com\/openfrontio\/OpenFrontIO\/compare\/([\w.-]+)\b/g; const GITHUB_MENTION_REGEX = /(^|[^\w/[`])@([a-z\d](?:[a-z\d-]{0,37}[a-z\d])?)(?![\w-])/gim; export function normalizeNewsMarkdown(markdown: string): string { return (

