export default function Home() {
  return (
    <div className="wrap">
      <section className="cover">
        <span className="pill">ROBLOX · SOCIAL DEDUCTION</span>
        <h1>Murder Mystery 2 Deep Guide</h1>
        <p>How roles play, how to learn maps, and how to find the murderer — a practical guide for new to mid-level players.</p>
      </section>

      <div className="stats">
        <div className="stat"><div className="n">3 Roles</div><div className="l">Innocent / Murderer / Sheriff</div></div>
        <div className="stat"><div className="n">Many Maps</div><div className="l">Varied settings</div></div>
        <div className="stat"><div className="n">Deduction</div><div className="l">Use clues to pinpoint the killer</div></div>
      </div>

      <div className="tag-row">
        <span className="tag">Role Positioning</span>
        <span className="tag">Maps</span>
        <span className="tag">Deduction</span>
        <span className="tag">Survival</span>
        <span className="tag">Beginner</span>
      </div>

      <div className="sec">
        <h2>What this site covers</h2>
        <p>Murder Mystery 2 is a classic social deduction game on Roblox. Each round assigns roles at random, and the core goal is "survive + find the murderer." Beginners most often panic over "how to act as the murderer, how to hide as the innocent, and how to shoot without misfiring as the sheriff."</p>
        <p>We break the most common questions into three parts: <strong>role positioning</strong>, <strong>map familiarity</strong>, and <strong>deduction to find the murderer</strong>, each with advice you can apply directly.</p>
        <div className="callout"><strong>Note:</strong> The game is updated over time; maps and mechanics follow the in-game version. This site only gives a framework of thinking and is not guaranteed to be always up to date.</div>
      </div>
    </div>
  );
}
