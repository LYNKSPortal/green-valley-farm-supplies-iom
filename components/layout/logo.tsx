import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Green Valley Supplies home"
    >
      <Image
        src="/gv-icon.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-xl"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "text-lg font-bold sm:text-xl",
            dark ? "text-white" : "text-brand-black"
          )}
        >
          Green Valley
        </span>
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-wider",
            dark ? "text-brand-green-light" : "text-brand-green"
          )}
        >
          Farm Supplies
        </span>
      </span>
    </Link>
  );
}
