import { publications } from "@/data/publications";
import { profile } from "@/data/profile";

function formatAuthors(raw: string) {
  // Replace **Name** with bold span
  const parts = raw.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="text-slate-800 font-semibold">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function Publications() {
  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, p) => {
      acc[p.year] = acc[p.year] ?? [];
      acc[p.year].push(p);
      return acc;
    },
    {}
  );

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="publications" className="py-20 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-10">Publications</h2>

        <p className="text-sm text-slate-400 mb-8">
          Showing first-author publications. For the full list of 40+ papers, see{" "}
          <a
            href={profile.googleScholar}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Scholar
          </a>
          .
        </p>

        {years.map((year) => (
          <div key={year} className="mb-10">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">
              {year}
            </h3>
            <ul className="space-y-7">
              {byYear[year].map((pub, i) => (
                <li key={i} className="flex gap-4">
                  {/* Highlight indicator */}
                  <div className="pt-1 shrink-0">
                    {pub.highlight ? (
                      <span title="Selected publication" className="text-yellow-400 text-lg">★</span>
                    ) : (
                      <span className="text-slate-200 text-lg">★</span>
                    )}
                  </div>

                  <div>
                    <p className="font-medium text-slate-800 leading-snug">{pub.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{formatAuthors(pub.authors)}</p>
                    <p className="mt-0.5 text-sm text-slate-400 italic">{pub.venue}</p>

                    {/* Links */}
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          PDF
                        </a>
                      )}

                      {pub.website && (
                        <a
                          href={pub.website}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
