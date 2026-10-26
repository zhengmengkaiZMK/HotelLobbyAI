/**
 * Slim drop-in replacement for the `shiki` main entry (aliased via
 * `resolve.alias.shiki$` in next.config.mjs).
 *
 * Why: the full `shiki` bundle registers ~200 TextMate grammars. The OpenNext
 * Cloudflare bundler inlines every reachable dynamic import into the single
 * server file, so all grammars (~6 MB) plus the oniguruma wasm (~0.6 MB)
 * ended up inside handler.mjs and pushed the Worker past Cloudflare's
 * 63.9 MiB uncompressed limit (deploy error 10027).
 *
 * This module mirrors the public surface of `shiki`'s main entry
 * (createHighlighter / getSingletonHighlighter / codeTo* shorthands /
 * bundledLanguages / bundledThemes) but with a small allow-list of
 * programming languages and the github-light / github-dark themes only,
 * using the JavaScript regex engine (no wasm).
 *
 * Requested languages that are not in the allow-list degrade gracefully to
 * plain text — `@shikijs/core` handles `text` / `plain` / `txt` natively,
 * and streamdown checks `bundledLanguages` before loading a grammar.
 *
 * Note: this alias only applies to the production webpack build. Dev
 * (turbopack) keeps the real package, which is fine — bundle size only
 * matters for the deployed worker.
 */
import {
  createBundledHighlighter,
  createSingletonShorthands,
  guessEmbeddedLanguages,
} from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

// ---------------------------------------------------------------- grammars
import bash from 'shiki/langs/bash.mjs';
import c from 'shiki/langs/c.mjs';
import cpp from 'shiki/langs/cpp.mjs';
import csharp from 'shiki/langs/csharp.mjs';
import css from 'shiki/langs/css.mjs';
import diff from 'shiki/langs/diff.mjs';
import docker from 'shiki/langs/dockerfile.mjs';
import go from 'shiki/langs/go.mjs';
import html from 'shiki/langs/html.mjs';
import java from 'shiki/langs/java.mjs';
import javascript from 'shiki/langs/javascript.mjs';
import json from 'shiki/langs/json.mjs';
import jsx from 'shiki/langs/jsx.mjs';
import kotlin from 'shiki/langs/kotlin.mjs';
import markdown from 'shiki/langs/markdown.mjs';
import mdx from 'shiki/langs/mdx.mjs';
import php from 'shiki/langs/php.mjs';
import python from 'shiki/langs/python.mjs';
import ruby from 'shiki/langs/ruby.mjs';
import rust from 'shiki/langs/rust.mjs';
import scss from 'shiki/langs/scss.mjs';
import sql from 'shiki/langs/sql.mjs';
import swift from 'shiki/langs/swift.mjs';
import tsx from 'shiki/langs/tsx.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import xml from 'shiki/langs/xml.mjs';
import yaml from 'shiki/langs/yaml.mjs';

// ----------------------------------------------------------------- themes
import githubDark from 'shiki/themes/github-dark.mjs';
import githubLight from 'shiki/themes/github-light.mjs';

// The registry entries mirror shiki's own shape: () => Promise<module> where
// the module exposes the grammar as `default`.
const mod = <T>(value: T) => async () => ({ default: value });

export const bundledLanguages = {
  typescript: mod(typescript),
  ts: mod(typescript),
  javascript: mod(javascript),
  js: mod(javascript),
  tsx: mod(tsx),
  jsx: mod(jsx),
  json: mod(json),
  bash: mod(bash),
  sh: mod(bash),
  shell: mod(bash),
  shellscript: mod(bash),
  zsh: mod(bash),
  console: mod(bash),
  python: mod(python),
  py: mod(python),
  css: mod(css),
  scss: mod(scss),
  html: mod(html),
  xml: mod(xml),
  markdown: mod(markdown),
  md: mod(markdown),
  mdx: mod(mdx),
  sql: mod(sql),
  yaml: mod(yaml),
  yml: mod(yaml),
  diff: mod(diff),
  dockerfile: mod(docker),
  docker: mod(docker),
  go: mod(go),
  rust: mod(rust),
  rs: mod(rust),
  java: mod(java),
  c: mod(c),
  cpp: mod(cpp),
  'c++': mod(cpp),
  csharp: mod(csharp),
  cs: mod(csharp),
  'c#': mod(csharp),
  php: mod(php),
  ruby: mod(ruby),
  rb: mod(ruby),
  swift: mod(swift),
  kotlin: mod(kotlin),
  kt: mod(kotlin),
};

export const bundledThemes = {
  'github-light': mod(githubLight),
  'github-dark': mod(githubDark),
};

const createHighlighter = createBundledHighlighter({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createJavaScriptRegexEngine({ forgiving: true }),
});

const {
  codeToHtml,
  codeToHast,
  codeToTokens,
  codeToTokensBase,
  codeToTokensWithThemes,
  getSingletonHighlighter,
  getLastGrammarState,
} = createSingletonShorthands(createHighlighter, { guessEmbeddedLanguages });

export {
  codeToHast,
  codeToHtml,
  codeToTokens,
  codeToTokensBase,
  codeToTokensWithThemes,
  createHighlighter,
  getLastGrammarState,
  getSingletonHighlighter,
};
