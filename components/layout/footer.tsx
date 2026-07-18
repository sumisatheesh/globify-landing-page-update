import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_2fr]">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center">
            <Image
              src="/globify-logo.png"
              alt="Globify"
              width={508}
              height={299}
              className="h-25 w-auto sm:h-28"
            />
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="flex gap-4 pt-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-sm text-muted-foreground transition-colors hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-white">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-4 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <Image
          src="/certifications/shopify-partner-badge.png"
          alt="Shopify Partner"
          width={500}
          height={157}
          className="h-6 w-auto opacity-90"
        />
      </div>
    </footer>
  );
}
