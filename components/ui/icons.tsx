type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.2c0-.87.24-1.45 1.5-1.45H16.6V4.14C16.28 4.1 15.16 4 13.87 4 11.16 4 9.5 5.66 9.5 8.5v2H7v3h2.5V21h4z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.85.5 3.58 1.38 5.07L2 22l5.06-1.33a9.96 9.96 0 0 0 4.96 1.31h.01c5.52 0 10.01-4.5 10.01-10.02C22.04 6.5 17.55 2 12.02 2Zm5.85 14.19c-.25.7-1.44 1.34-1.98 1.42-.51.08-1.15.11-1.85-.12-.42-.13-.96-.31-1.66-.6-2.92-1.26-4.82-4.2-4.96-4.4-.15-.19-1.19-1.58-1.19-3.01 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.02.65.5.27.6.9 2.1.98 2.25.08.15.13.32.03.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.78 1.28 1.67 2.07 1.15 1.02 2.13 1.35 2.42 1.5.29.15.46.13.63-.06.17-.19.71-.82.9-1.1.19-.29.38-.24.63-.15.25.1 1.6.75 1.87.89.27.13.44.19.5.3.06.12.06.65-.19 1.35Z" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.2" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 3h3.2l1.6 4.5-2 1.6a11 11 0 0 0 5.6 5.6l1.6-2 4.5 1.6V17c0 1.1-.9 2-2 2h-1C10.6 19 5 13.4 5 6.5v-1c0-1.1.9-2 2-2z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 8h11v8H2z" />
      <path d="M13 11h4l4 3v2h-8" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </svg>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5M14.5 6.5 4 17l3 3L17.5 9.5M14.5 6.5l3 3" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16Z" />
      <path d="M9 20c0-6 3-9 9-11" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.2c2.4.4 4 2.3 4 5.8" />
    </svg>
  );
}

export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.3 1.3 2.6-.3 1.2 2.3 2.3 1.2-.3 2.6L21 12l-1.3 2.3.3 2.6-2.3 1.2-1.2 2.3-2.6-.3L12 21l-2.3-1.3-2.6.3-1.2-2.3-2.3-1.2.3-2.6L3 12l1.3-2.3-.3-2.6 2.3-1.2 1.2-2.3 2.6.3L12 3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-8 12 12)" />
      <path d="M7 9.5v3M11 9v3M15 8.5v3" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 16V4M8 8l4-4 4 4" />
      <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
