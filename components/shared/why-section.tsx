import { SectionHeading } from "@/components/ui/section-heading";
import { BoxIcon, BadgeCheckIcon, UsersIcon, RulerIcon } from "@/components/ui/icons";

const points = [
  {
    icon: BoxIcon,
    title: "Extensive Stock",
    body: "We keep high levels of stock across a wide range of agricultural, building, landscaping and garden products.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Trusted Brands",
    body: "We work with established manufacturers and are authorised dealers and agents for selected leading agricultural brands.",
  },
  {
    icon: UsersIcon,
    title: "Knowledgeable Service",
    body: "Our team can help customers choose the right products and solutions for everything from DIY projects to large agricultural jobs.",
  },
  {
    icon: RulerIcon,
    title: "Bespoke Solutions",
    body: "From gates and stable blocks to livestock handling systems, many of our products can be made to measure.",
  },
];

export function WhySection() {
  return (
    <section className="section-y bg-brand-cream/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Green Valley"
          title="Local Knowledge. Extensive Stock. Practical Solutions."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-brand-cream bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-olive/10 text-brand-green">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold text-brand-black">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
