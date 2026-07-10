import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Murder Mystery 2 Guide — an independent resource for Murder Mystery 2 players on Roblox.",
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <div className="sec" style={{ marginTop: 28 }}>
        <h2>About This Site</h2>
        <p>
          Murder Mystery 2 Guide is an independent, fan-made resource created by players of the
          Roblox game <strong>Murder Mystery 2</strong>. Our goal is to provide practical, easy-to-follow
          guides on role strategy, map navigation, and deduction techniques — helping new and intermediate
          players survive rounds and identify the murderer faster.
        </p>
      </div>

      <div className="sec">
        <h3>What We Cover</h3>
        <p>We focus on three core areas:</p>
        <ul>
          <li><strong>Roles</strong> — how to play as Innocent, Sheriff, and Murderer effectively.</li>
          <li><strong>Maps</strong> — map layouts, hiding spots, escape routes, and key locations.</li>
          <li><strong>Deduction</strong> — behavioral clues, timing patterns, and how to pinpoint the murderer.</li>
        </ul>
        <p>
          All content is based on community experience and gameplay testing. Guides are provided
          for reference and may not always reflect the latest game update.
        </p>
      </div>

      <div className="callout">
        <strong>Disclaimer:</strong> Murder Mystery 2 Guide is an independent website. We are not
        affiliated with, endorsed by, or connected to <strong>Roblox Corporation</strong> or the
        developers of Murder Mystery 2. All game-related trademarks and assets belong to their
        respective owners. This site is a community resource provided free of charge.
      </div>
    </div>
  );
}
