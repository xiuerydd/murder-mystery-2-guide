import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Murder Mystery 2 Guide handles your information, including Google AdSense cookie usage and your options for personalized advertising.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <div className="sec" style={{ marginTop: 28 }}>
        <h2>Privacy Policy</h2>
        <p>
          Murder Mystery 2 Guide ("we", "our", "this site") respects your privacy.
          This policy explains what information is collected when you visit this site and how it is used.
        </p>
      </div>

      <div className="sec">
        <h3>Information We Collect</h3>
        <p>
          We do not require accounts, logins, or personal data. The site itself does not collect
          or store personally identifiable information.
        </p>
        <p>
          However, we use <strong>Google AdSense</strong> to display advertisements. Google AdSense
          may use cookies and web beacons to serve ads based on your prior visits to this and other
          websites. These cookies allow Google and its partners to serve ads based on your browsing
          history. You can opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>.
        </p>
      </div>

      <div className="sec">
        <h3>Third-Party Services</h3>
        <p>
          <strong>Google AdSense</strong> — a third-party advertising service that may use cookies
          to serve relevant ads. Google&#39;s use of advertising cookies enables it and its partners
          to serve ads based on your visits to this and other sites. You may opt out of personalized
          advertising via the Google Ads Settings link above, or by visiting{" "}
          <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
        </p>
      </div>

      <div className="sec">
        <h3>Log Data</h3>
        <p>
          Like most websites, our hosting infrastructure may automatically log non-personally-identifying
          information such as browser type, language preference, referring site, and the date and time
          of each request. This data is used for operational purposes only and is not shared with third
          parties beyond what is required for site operation.
        </p>
      </div>

      <div className="sec">
        <h3>Children&#39;s Privacy</h3>
        <p>
          This site does not knowingly collect personal information from children under 13.
          If you believe your child has provided personal information through this site,
          please contact us and we will remove it promptly.
        </p>
      </div>

      <div className="sec">
        <h3>Changes to This Policy</h3>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page.
          Continued use of the site after changes constitutes acceptance of the updated policy.
        </p>
        <p>Last updated: July 2026</p>
      </div>

      <div className="sec">
        <h3>Contact</h3>
        <p>
          If you have questions about this privacy policy, please visit our{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  );
}
