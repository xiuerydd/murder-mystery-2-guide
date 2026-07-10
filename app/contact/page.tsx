import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Murder Mystery 2 Guide for questions, corrections, or feedback about our guides.",
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <div className="sec" style={{ marginTop: 28 }}>
        <h2>Contact Us</h2>
        <p>
          Have a question, suggestion, or found an error in one of our guides? We welcome your
          feedback and will do our best to respond.
        </p>
      </div>

      <div className="sec">
        <h3>How to Reach Us</h3>
        <p>
          The best way to reach the Murder Mystery 2 Guide team is through our main network site.
          Visit{" "}
          <a href="https://robloxguides.xyz" target="_blank" rel="noopener noreferrer">
            robloxguides.xyz
          </a>{" "}
          and use the contact form or links available there.
        </p>
      </div>

      <div className="sec">
        <h3>What to Include</h3>
        <p>When contacting us, please include:</p>
        <ul>
          <li>The specific guide or page you are referencing</li>
          <li>A clear description of your question or the issue you found</li>
          <li>Any relevant details (game version, browser, etc.)</li>
        </ul>
      </div>

      <div className="callout">
        <strong>Note:</strong> We are not affiliated with Roblox Corporation or the Murder Mystery 2
        development team. For game-related support, in-game issues, or official announcements,
        please contact the game developers directly or visit the official Roblox support page.
      </div>
    </div>
  );
}
