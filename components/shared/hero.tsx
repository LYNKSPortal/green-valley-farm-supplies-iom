import { LinkButton } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { TruckIcon, BoxIcon, UsersIcon, RulerIcon, BadgeCheckIcon } from "@/components/ui/icons";

const trustPoints = [
  { label: "Extensive Stock Held Locally", icon: BoxIcon },
  { label: "Trade & Public Welcome", icon: UsersIcon },
  { label: "Agricultural Specialists", icon: BadgeCheckIcon },
  { label: "Bespoke Solutions Available", icon: RulerIcon },
  { label: "Island Delivery Available", icon: TruckIcon },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      <div className="relative h-[520px] w-full sm:h-[580px] lg:h-[640px]">
        <SmartImage
          image={{
            src: "/hero-bg.jpg",
            alt: "Wide view of the Green Valley Supplies yard stocked with agricultural and building materials",
          }}
          priority
          sizes="100vw"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-brand-black/40 to-brand-black/20" />

        <div className="container-page relative flex h-full flex-col items-start justify-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-light backdrop-blur">
            Isle of Man
          </p>
          <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Everything You Need. All in One Place.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Green Valley Supplies stocks an extensive range of agricultural,
            landscaping, fencing, building, drainage, equestrian and garden
            products for customers across the Isle of Man.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/products" size="lg">
              Explore Our Products
            </LinkButton>
            <LinkButton href="/contact" variant="secondary" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-black">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-black/95">
        <div className="container-page grid grid-cols-2 gap-4 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {trustPoints.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 text-white">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-olive/20 text-brand-green-light">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium leading-tight sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
