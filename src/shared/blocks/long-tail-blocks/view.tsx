'use client';

import type { LtBlocks } from './types';

/**
 * Renders the unique per-page blocks below the guide body. Server-friendly
 * markup (no hooks) so the copy is in the initial HTML for crawlers and LLMs.
 */
export function LongTailBlocks({ blocks, zh }: { blocks?: LtBlocks; zh: boolean }) {
  if (!blocks || blocks.length === 0) return null;
  const lang = zh ? 'zh' : 'en';

  return (
    <>
      {blocks.map((block) => (
        <div className="lt-block" key={block.title.en}>
          <h3>{block.title[lang]}</h3>
          {block.kind === 'facts' ? (
            <dl className="lt-facts">
              {block.rows.map((row) => (
                <div className="lt-fact" key={row.k.en}>
                  <dt>{row.k[lang]}</dt>
                  <dd>{row.v[lang]}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          {block.kind === 'timeline' ? (
            <ol className="lt-timeline">
              {block.items.map((item) => (
                <li key={item.when.en}>
                  <span className="lt-when">{item.when[lang]}</span>
                  <span className="lt-what">{item.what[lang]}</span>
                </li>
              ))}
            </ol>
          ) : null}
          {block.kind === 'checks' ? (
            <ul className="lt-checks">
              {block.items.map((item) => (
                <li key={item.en}>{item[lang]}</li>
              ))}
            </ul>
          ) : null}
          {block.kind === 'compare' ? (
            <div className="lt-table-wrap">
              <table className="lt-table">
                <thead>
                  <tr>
                    {block.head.map((cell) => (
                      <th key={cell.en} scope="col">
                        {cell[lang]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row[0].en}>
                      {row.map((cell, index) =>
                        index === 0 ? (
                          <th key={cell.en} scope="row">
                            {cell[lang]}
                          </th>
                        ) : (
                          <td key={cell.en}>{cell[lang]}</td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
