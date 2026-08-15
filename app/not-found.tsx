import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
        404 Error
      </p>
      <h1 className="mt-3 text-3xl font-bold text-brand-black sm:text-4xl">
        We can&apos;t find that page
      </h1>
      <p className="mt-4 max-w-md text-base text-foreground-muted">
        The page you&apos;re looking for may have moved or no longer exists.
        Try browsing our products or get in touch and we&apos;ll help you
        find what you need.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/products">Explore Our Products</LinkButton>
        <LinkButton href="/contact" variant="secondary">
          Contact Us
        </LinkButton>
      </div>
    </div>
  );
}
