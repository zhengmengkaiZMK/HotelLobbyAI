/**
 * Unique per-page content blocks for long-tail landings.
 *
 * Why this exists: Search Console emptied the index between 2026-11-07 and
 * 2026-11-10 because ~720 long-tail URLs shared one skeleton and 57–87% of
 * their body copy. Adding more paragraphs of the same shape does not fix that.
 * These blocks let one page carry facts, a timeline, a comparison table, or a
 * pre-flight checklist that no sibling page carries.
 *
 * Rules for authors:
 *   - Every row must be a verifiable fact (date, count, name, duration, credit
 *     number). If it cannot be checked, it does not go in.
 *   - Two pages in the same family must not share a block. If they would, the
 *     block belongs on the family landing page instead.
 *   - No prices, no competitor promotion, no invented usage numbers.
 */

export type LtCopy = { en: string; zh: string };

export type LtBlock =
  /** Key-value facts: durations, credit rows, counts, credits, dates. */
  | {
      kind: 'facts';
      title: LtCopy;
      rows: readonly { k: LtCopy; v: LtCopy }[];
    }
  /** Dated sequence: origin → wave → now. */
  | {
      kind: 'timeline';
      title: LtCopy;
      items: readonly { when: LtCopy; what: LtCopy }[];
    }
  /** Pre-flight checklist: what to fix before uploading. */
  | {
      kind: 'checks';
      title: LtCopy;
      items: readonly LtCopy[];
    }
  /** Side-by-side table. All rows must have the same cell count as `head`. */
  | {
      kind: 'compare';
      title: LtCopy;
      head: readonly LtCopy[];
      rows: readonly (readonly LtCopy[])[];
    };

export type LtBlocks = readonly LtBlock[];
