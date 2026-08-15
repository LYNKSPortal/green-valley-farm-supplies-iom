import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, ClockIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/icons";

export function TopBar() {
  return (
    <div className="hidden bg-brand-charcoal text-white lg:block">
      <div className="container-page flex h-10 items-center justify-between text-sm">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-white hover:text-brand-green-light"
          >
            <PhoneIcon className="h-4 w-4 text-brand-green-light" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-brand-green-light"
          >
            <WhatsAppIcon className="h-4 w-4 text-brand-green-light" />
            WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 text-white hover:text-brand-green-light"
          >
            <MailIcon className="h-4 w-4 text-brand-green-light" />
            {siteConfig.email}
          </a>
          <span className="hidden items-center gap-1.5 text-white/80 xl:flex">
            <ClockIcon className="h-4 w-4 text-brand-green-light" />
            {siteConfig.hours[0].day}: {siteConfig.hours[0].time}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact#find-us" className="text-white/80 hover:text-brand-green-light">
            Find Us
          </Link>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/80 hover:text-brand-green-light"
            aria-label="Green Valley Supplies on Facebook"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
