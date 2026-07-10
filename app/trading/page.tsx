import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MM2 Trading Guide — Values and Scam Prevention",
  description: "Murder Mystery 2 trading guide. How trading works, item value list, common scam patterns, and how to trade safely without losing your rare items.",
};

export default function TradingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">MM2 Trading Guide — Values and Scam Prevention</h1>
      <p className="text-secondary mb-4">
        Trading in MM2 is how you get the items you actually want without spending real money. But it's also where most people lose their best stuff. Know what you're doing, how values work, and the most common tricks, and you'll come out ahead every time.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How Trading Works</h2>
      <p className="text-secondary mb-4">
        Trade requests come from the player menu. Both sides put up items, both have to confirm. Nothing happens until both hit accept. That sounds simple, but the scams live in the details — swapping items at the last second, fake duplicates, and promises of items they "donate" after the trade (spoiler: they won't).
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Understanding Item Values</h2>
      <p className="text-secondary mb-4">
        MM2 doesn't have an official value system, so the community runs its own value list. Knives and guns are ranked by rarity, demand, and availability. A common knife might be worth 1, a godly could be 100 or more. The value list updates regularly — check it before every trade, not when you remember to. Values shift fast when new items drop.
      </p>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Common/Uncommon</strong> — 1-5 in value. Basically worthless for trading up</li>
        <li><strong>Rare</strong> — 5-25. Your building blocks for climbing the value ladder</li>
        <li><strong>Legendary</strong> — 25-80. Solid mid-tier items, good for flipping</li>
        <li><strong>Godly</strong> — 80-500+. The big leagues. Be extra careful here</li>
        <li><strong>Ancient</strong> — 500+. Extremely rare. Verify every trade twice</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Common Scams to Watch For</h2>
      <p className="text-secondary mb-4">
        The item swap scam is the oldest trick in the book — they show a godly, then swap it for a common at the last second hoping you don't notice. Always check the final confirm screen carefully. Then there's the "trust trade" where they promise to give your item back after you lend it. They won't. Never trade items you're not willing to lose. If a deal seems too good, it's a scam. Period.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Tips for New Traders</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Start small. Trade common items until you understand the rhythm</li>
        <li>Use the community value list. Don't guess values</li>
        <li>Never trade outside the game's trade system. No "I'll drop it for you" deals</li>
        <li>Screenshot every trade. You might need proof</li>
        <li>If someone's rushing you, walk away. Scammers use pressure</li>
      </ul>

      <p className="text-secondary">
        Collecting instead of trading? The <Link href="/collectibles" className="text-primary hover:underline">Collectibles Guide</Link> breaks down rarity tiers and how to find rare items. The <Link href="/knives" className="text-primary hover:underline">Knives Guide</Link> has the full knife list with values.
      </p>
    </div>
  );
}
