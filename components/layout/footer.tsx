import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { footerProductLinks, footerAgriculturalLinks } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Green Valley Supplies on Facebook"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-green hover:text-white"
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerProductLinks!.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-brand-green-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Agricultural &amp; Garden
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerAgriculturalLinks!.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-brand-green-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-green-light">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-olive" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.town}, {siteConfig.address.postcode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-brand-olive" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-brand-green-light">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-olive" />
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-green-light"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-brand-olive" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-green-light">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-olive" />
                <span>
                  {siteConfig.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-brand-olive">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-xs text-white sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white hover:text-brand-charcoal">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-white hover:text-brand-charcoal">
              Cookie Policy
            </Link>
            <Link href="/terms" className="text-white hover:text-brand-charcoal">
              Terms
            </Link>
            <span className="text-white/80">Site by Your Agency</span>
          </div>
        </div>
        <div className="container-page pb-4 text-center text-[11px] leading-relaxed text-white/70 sm:text-left">
          {siteConfig.legalName} is a company registered in the Isle of Man
          (No. {siteConfig.companyNumber}). Registered office:{" "}
          {siteConfig.registeredOffice}.
        </div>
      </div>
    </footer>
  );
}
