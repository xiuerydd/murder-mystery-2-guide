import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Murder Mystery 2 Guide uses cookies, including Google AdSense advertising cookies, and how you can manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="wrap">
      <div className="sec" style={{ marginTop: 28 }}>
        <h2>Cookie Policy</h2>
        <p>
          This Cookie Policy explains what cookies are, how Murder Mystery 2 Guide uses them,
          and what choices you have regarding their use.
        </p>
      </div>

      <div className="sec">
        <h3>What Are Cookies?</h3>
        <p>
          Cookies are small text files placed on your device when you visit a website. They are
          widely used to make websites work efficiently and provide information to site owners.
          Cookies may be &quot;session&quot; cookies (deleted when you close your browser) or
          &quot;persistent&quot; cookies (remain until they expire or you delete them).
        </p>
      </div>

      <div className="sec">
        <h3>How We Use Cookies</h3>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential cookies</strong> — these are necessary for the website to function properly and cannot be switched off in our systems.</li>
          <li><strong>Advertising cookies</strong> — we use Google AdSense, which may set cookies to deliver relevant advertisements and measure ad performance. These cookies track browsing habits across websites.</li>
          <li><strong>Preference cookies</strong> — we use a simple cookie to remember whether you have accepted our cookie notice (stored in your browser&#39;s localStorage).</li>
        </ul>
      </div>

      <div className="sec">
        <h3>Google AdSense Cookies</h3>
        <p>
          Google AdSense is a third-party advertising service used on this site. Google uses
          cookies, such as the DoubleClick cookie, to serve ads based on your visits to this and
          other websites. Google may also use web beacons or similar technologies.
        </p>
        <p>
          You can learn more about how Google uses cookies in advertising and opt out of ad
          personalization by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
            www.aboutads.info
          </a>.
        </p>
      </div>

      <div className="sec">
        <h3>Managing Cookies</h3>
        <p>
          Most web browsers allow you to control cookies through their settings. You can usually
          find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your
          browser. You can set your browser to refuse all cookies, accept only certain cookies,
          or notify you when a cookie is set.
        </p>
        <p>
          Please note that disabling cookies may affect the functionality of this and other websites.
        </p>
      </div>

      <div className="sec">
        <h3>Changes</h3>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page.
        </p>
        <p>Last updated: July 2026</p>
      </div>
    </div>
  );
}
