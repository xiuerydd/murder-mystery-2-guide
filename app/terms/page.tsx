import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using Murder Mystery 2 Guide. By using this site, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <div className="sec" style={{ marginTop: 28 }}>
        <h2>Terms of Use</h2>
        <p>
          By accessing and using Murder Mystery 2 Guide ("this site"), you agree to comply with
          and be bound by the following terms and conditions. If you do not agree with any part
          of these terms, please do not use this site.
        </p>
      </div>

      <div className="sec">
        <h3>Content Disclaimer</h3>
        <p>
          All guides, tips, and information on this site are provided for general informational
          purposes only. While we strive to keep content accurate and up to date, we make no
          warranties about the completeness, reliability, or accuracy of any information. Game
          mechanics, maps, and features are subject to change by the game developers, and our
          guides may not always reflect the latest game version.
        </p>
        <p>
          Your use of any information or strategy from this site is at your own risk. We are not
          responsible for any losses or damages resulting from the use of our content.
        </p>
      </div>

      <div className="sec">
        <h3>Intellectual Property</h3>
        <p>
          All original guide content, written explanations, and site design are protected by
          copyright. You may reference or share our guides, but you may not reproduce or republish
          substantial portions of our content without permission.
        </p>
        <p>
          All game-related trademarks, names, logos, and assets referenced on this site are the
          property of their respective owners, including Roblox Corporation. This site is not
          affiliated with or endorsed by Roblox Corporation or the Murder Mystery 2 developers.
        </p>
      </div>

      <div className="sec">
        <h3>External Links</h3>
        <p>
          This site may contain links to external websites that are not operated by us. We have no
          control over the content or practices of third-party sites and assume no responsibility
          for them.
        </p>
      </div>

      <div className="sec">
        <h3>Advertising</h3>
        <p>
          This site displays advertisements served by Google AdSense. We are not responsible for
          the content of advertisements or the practices of advertisers. For more information,
          see our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/cookie-policy">Cookie Policy</a>.
        </p>
      </div>

      <div className="sec">
        <h3>Changes</h3>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting. Continued use of the site constitutes acceptance of the
          updated terms.
        </p>
        <p>Last updated: July 2026</p>
      </div>
    </div>
  );
}
