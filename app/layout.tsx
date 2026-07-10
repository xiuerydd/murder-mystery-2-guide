import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "@/app/components/CookieBanner";
import { ThemeToggle } from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: {
    default: "Murder Mystery 2 Guide — Roles / Maps / Deduction",
    template: "%s · MM2 Guide",
  },
  description:
    "An independent Murder Mystery 2 guide: role positioning, map familiarity, and deduction to find the murderer. Pure strategy, no login.",
  keywords: ["Murder Mystery 2 guide", "MM2 roles", "MM2 maps", "Roblox Murder Mystery 2"],
  metadataBase: new URL("https://mm2.robloxguides.xyz"),
  openGraph: { title: "Murder Mystery 2 Guide", description: "Roles / Maps / Deduction", type: "website" },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/roles", label: "Roles" },
  { href: "/maps", label: "Maps" },
  { href: "/deduce", label: "Deduction" },
];

const sisterSites = [
  { href: "https://roblox.robloxguides.xyz", label: "Roblox" },
  { href: "https://tools.robloxguides.xyz", label: "Tools" },
  { href: "https://pcg.robloxguides.xyz", label: "PCG" },
  { href: "https://calc.robloxguides.xyz", label: "Calc" },
  { href: "https://devtools.robloxguides.xyz", label: "DevTools" },
  { href: "https://sports.robloxguides.xyz", label: "Sports" },
  { href: "https://codes.robloxguides.xyz", label: "Codes" },
  { href: "https://robux.robloxguides.xyz", label: "Robux" },
  { href: "https://bloxfruits.robloxguides.xyz", label: "Blox Fruits" },
  { href: "https://adoptme.robloxguides.xyz", label: "Adopt Me" },
  { href: "https://kinglegacy.robloxguides.xyz", label: "King Legacy" },
  { href: "https://petsim99.robloxguides.xyz", label: "Pet Sim 99" },
  { href: "https://animeadv.robloxguides.xyz", label: "AA" },
  { href: "https://mm2.robloxguides.xyz", label: "MM2" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7687330138473612"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();` }} />
      </head>
      <body>
        <div className="bar">
          <div className="inner">
            <div className="logo">MM2 GUIDE</div>
            <nav>
              {nav.map((n) => (
                <a key={n.href} href={n.href}>{n.label}</a>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        </div>
          <img src="/hero.svg" alt="" style={{width:"100%",maxWidth:"800px",height:"auto",margin:"0 auto 24px",display:"block",borderRadius:"16px"}} />

          {children}
        <footer>
          <div style={{ marginBottom: 16, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 16px" }}>
            <a href="/privacy">Privacy</a>
            <a href="/cookie-policy">Cookies</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
          </div>
          <div style={{ marginBottom: 12, fontSize: 12, opacity: 0.7, lineHeight: 1.8 }}>
            {sisterSites.map((s, i) => (
              <span key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                {i < sisterSites.length - 1 ? " · " : ""}
              </span>
            ))}
          </div>
          <div>
            Independent Murder Mystery 2 guide. Not affiliated with Roblox Corporation or the game developer.
            Content is based on community experience and provided for reference only.
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
