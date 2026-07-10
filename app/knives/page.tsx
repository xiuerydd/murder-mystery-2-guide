import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Knives Guide — All Knife Rarities",
  description: "Complete Murder Mystery 2 knives guide. Knife rarity tiers, how to obtain each, trading values, and the best knives for the Murderer role.",
};

export default function KnivesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Knives Guide</h1>
      <p className="text-secondary mb-4">
        Knives are the Murderer's weapon — and the game's main collectible. Some are starter gear you'll toss after one round. Others rank among the rarest items in all of Roblox. Whether you're trying to win or building a trade empire, you need to know rarity and value.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Rarity Tiers</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Common</strong> — Default Knife and basic crate pulls. Near-zero value</li>
        <li><strong>Uncommon</strong> — Standard early-crate weapons. Easy to grab</li>
        <li><strong>Rare</strong> — Better designs with mid-tier value (Chroma lines start here)</li>
        <li><strong>Legendary</strong> — High-end knives from premium crates and events</li>
        <li><strong>Godly</strong> — The top. Extremely rare, backbone of every serious trade</li>
        <li><strong>Chroma / Ancient</strong> — Special variants that outrank even Godly in collector demand</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Where Knives Come From</h2>
      <p className="text-secondary mb-4">
        Most drop from crates — Common, Rare, and premium tiers each pull different rarity pools. Event-exclusives only appear during their event window, then leave the pool forever. That's why their value climbs after the event ends. Trading's your best bet for a specific Godly without gambling through a hundred crates. Save your best knives for trades that actually improve your collection.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Best Knife for Murderer?</h2>
      <p className="text-secondary mb-4">
        Real talk: all knives kill in one hit. Stats aren't a thing. So the "best" knife is whichever one you like looking at — or the rarest one you own, if you're flexing. Focus your energy on movement and timing, not which blade you're holding. The win comes from landing the hit, not the tier of the weapon.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Trading Strategy</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Godly and Chroma knives hold value because supply freezes after events end</li>
        <li>Trade up in steps — two Rares for one Legendary beats gambling for a Godly pull</li>
        <li>Collector demand, not usefulness, drives price. Know what's trending before you trade</li>
        <li>Keep one solid Godly as your anchor; flip the rest for upgrades</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Don't Get Scammed</h2>
      <p className="text-secondary mb-4">
        Never "loan" a knife to "prove trust." Never trade outside the official window. "Duped for value" stories and "double your knife" offers are the oldest tricks in the book. Check both sides of the trade screen carefully before you accept.
      </p>

      <p className="text-secondary">
        See the other weapon type in our <Link href="/gun-guide" className="text-primary hover:underline">Gun Guide</Link>. Round out your play with the <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link>. Seasonal knives? The <Link href="/seasonal" className="text-primary hover:underline">Seasonal Items Guide</Link> covers them. Grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">MM2 codes</Link> for free crates and gems.
      </p>
    </div>
  );
}
