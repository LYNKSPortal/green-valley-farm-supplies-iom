const stats = [
  { value: "10+", label: "Product Categories Stocked" },
  { value: "IOM", label: "Island-Wide Delivery Available" },
  { value: "100%", label: "Trade & Public Welcome" },
  { value: "\u2713", label: "Bespoke & Made-to-Measure" },
];

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-green py-10 text-white sm:py-12">
      <div
        className="bg-dot-grid absolute inset-0 text-white/10"
        aria-hidden="true"
      />
      <div className="container-page relative grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
              index < stats.length - 1
                ? "sm:border-r sm:border-white/15"
                : ""
            }`}
          >
            <span className="text-3xl font-bold text-brand-green-light sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-xs font-medium leading-snug text-white/85 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
