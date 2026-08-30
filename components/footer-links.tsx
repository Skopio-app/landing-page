export interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterLinksProps {
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => (
  <nav aria-label="Footer navigation" className="w-full sm:w-auto">
    <h2 className="text-base leading-[normal] font-semibold text-black">
      LINKS
    </h2>
    <ul className="mt-3.75 flex flex-col gap-3.75">
      {links.map(({ external, href, label }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="footer-link rounded-sm text-base leading-[normal] text-black transition-colors hover:text-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterLinks;
