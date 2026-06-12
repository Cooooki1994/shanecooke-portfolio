import { televisionCredits } from "@/data/projects";

export function Credits() {
  return (
    <section id="credits" className="bg-surface-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-3 text-xs font-medium tracking-[0.4em] text-accent uppercase">
          Credits
        </p>
        <h2 className="font-display mb-12 text-4xl text-foreground md:text-5xl">
          Television &amp; streaming
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 text-[10px] tracking-[0.3em] text-foreground/40 uppercase">
                <th className="pb-4 pr-6 font-medium">Title</th>
                <th className="pb-4 pr-6 font-medium">Client</th>
                <th className="pb-4 pr-6 font-medium">Role</th>
                <th className="pb-4 font-medium">Year</th>
              </tr>
            </thead>
            <tbody>
              {televisionCredits.map((credit) => (
                <tr
                  key={`${credit.title}-${credit.year}`}
                  className="border-b border-white/5 transition-colors hover:bg-white/[0.02]"
                >
                  <td className="py-4 pr-6 text-sm text-foreground">
                    {credit.title}
                  </td>
                  <td className="py-4 pr-6 text-sm text-foreground/55">
                    {credit.client}
                  </td>
                  <td className="py-4 pr-6 text-sm text-foreground/55">
                    {credit.role}
                  </td>
                  <td className="py-4 text-sm text-accent/80">
                    {credit.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
