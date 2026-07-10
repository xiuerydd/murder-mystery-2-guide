import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Gun Guide — All Guns and Rarities",
  description: "Complete Murder Mystery 2 gun guide. Gun rarities, best guns for Sheriff, trading values, and how gun choice affects your gameplay.",
};

export default function GunGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Gun Guide</h1>
      <p className="text-secondary mb-4">
        Guns are the Sheriff's thing. Unlike knives, which the Murderer gets, the Sheriff's gun fires one shot that either wins the round or loses it — no pressure. Every gun plays the same (one bullet, one kill). The difference is all in rarity and look, which is what drives trade value.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Rarity Tiers</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Common</strong> — basic pistols from standard crates, pretty much worthless in trades</li>
        <li><strong>Uncommon</strong> — nicer designs, low-tier trade filler</li>
        <li><strong>Rare</strong> — sought-after looks with real trade value</li>
        <li><strong>Legendary</strong> — premium guns from events and high-tier crates</li>
        <li><strong>Godly</strong> — the rarest of the rare, top of the market</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Which Gun Should Sheriff Use?</h2>
      <p className="text-secondary mb-4">
        None of them do different damage — it's one shot either way. So "best" is cosmetic. Some players swear by godly guns with particle effects, but those effects can actually block your aim. If you're playing to win, a cleaner model with a clear sightline might serve you better. Pick what feels right in your hand, not what's worth the most.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Trading Guns vs. Knives</h2>
      <p className="text-secondary mb-4">
        Guns trade the same way knives do, with godlies at the top. But matching sets — a knife and gun from the same series — are worth way more than individual pieces. Collectors pay a premium for the full pair. If you've got one half of a matching set, hunt for the other half before selling. The combo price beats selling them separately every time.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Sheriff Shooting Tips</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Be sure before you shoot — one wrong bullet and the round's over</li>
        <li>Lead moving targets a bit; the shot has travel time</li>
        <li>Fire from stable ground — jumping kills your accuracy</li>
        <li>Stay hidden until you've got a clean shot. A miss tells the Murderer exactly who to kill next</li>
      </ul>

      <p className="text-secondary">
        Head to the <Link href="/knives" className="text-primary hover:underline">Knives Guide</Link> for the other half of the arsenal. Round out your game with the <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link>. Grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">MM2 codes</Link> for free crates and gems.
      </p>
    </div>
  );
}
