import { siteConfig } from "@/lib/site-config";
import { PinIcon, PhoneIcon, MailIcon, ClockIcon } from "@/components/ui/icons";
import { LinkButton } from "@/components/ui/button";

export function MapBlock() {
  return (
    <div id="find-us" className="grid grid-cols-1 overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-card lg:grid-cols-2">
      <div className="relative min-h-[320px]">
        <iframe
          title="Map showing Green Valley Supplies location"
          src={siteConfig.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <div>
          <h3 className="text-xl font-bold text-brand-black">Visit Our Yard & Showroom</h3>
          <p className="mt-1 text-sm text-foreground-muted">
            Placeholder address — to be confirmed.
          </p>
        </div>
        <ul className="space-y-3 text-sm text-brand-black">
          <li className="flex items-start gap-3">
            <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <span>
              {siteConfig.address.line1}, {siteConfig.address.line2}
              <br />
              {siteConfig.address.town}, {siteConfig.address.postcode}
            </span>
          </li>
          <li className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 shrink-0 text-brand-green" />
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-brand-olive">
              {siteConfig.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MailIcon className="h-5 w-5 shrink-0 text-brand-green" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-olive">
              {siteConfig.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
            <span>
              {siteConfig.hours.map((h) => (
                <span key={h.day} className="block">
                  {h.day}: {h.time}
                </span>
              ))}
            </span>
          </li>
        </ul>
        <LinkButton
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            `${siteConfig.address.line1} ${siteConfig.address.town} ${siteConfig.address.postcode}`
          )}`}
          variant="secondary"
          className="w-fit"
        >
          Get Directions
        </LinkButton>
      </div>
    </div>
  );
}
