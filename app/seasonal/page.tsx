import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Seasonal Items Guide — Limited Weapons",
  description: "MM2 seasonal items guide. Halloween, Christmas, Valentines and Summer event weapons. How to collect limited items and trade them at peak value.",
};

export default function SeasonalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Seasonal Items Guide</h1>
      <p className="text-secondary mb-4">
        Seasonal items are time-limited weapons that drop during specific events. When the event ends, they're gone — maybe forever, maybe until next year. That scarcity makes them valuable collectors' pieces and serious trade assets. Time your trades right and one seasonal weapon can turn into multiple godlies.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">When Events Hit</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Halloween</strong> (October) — spooky knives and guns, the biggest event for rare drops</li>
        <li><strong>Christmas</strong> (December) — winter-themed weapons, usually the most generous crate pools</li>
        <li><strong>Valentine's Day</strong> (February) — heart-themed, smaller selection but collectors pay up</li>
        <li><strong>Summer</strong> (July–August) — tropical weapons, longest grind window</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">When to Trade</h2>
      <p className="text-secondary mb-4">
        Seasonal items peak in the weeks right after the event ends. Supply's locked, but demand's still hot. If you snag a seasonal, hold it for 2–3 months before trading. The value usually peaks again around the next event — players who missed out the first time will overpay. Old Halloween and Christmas items from 2020–2022 are some of the most valuable things in the game, worth multiple godlies each.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Collector Tips</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Grind event crates every single day during the event — limited items won't wait</li>
        <li>Keep one of each for your collection before trading extras</li>
        <li>Sell duplicates during the post-event peak, not during the event itself</li>
        <li>Watch for "returning" events — items that come back can drop in value as supply grows</li>
      </ul>

      <p className="text-secondary">
        Check the <Link href="/knives" className="text-primary hover:underline">Knives Guide</Link> and <Link href="/gun-guide" className="text-primary hover:underline">Gun Guide</Link> for values on seasonal weapons. Get <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">MM2 codes</Link> for free crates. Seasonal strats pair well with the <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link>.
      </p>
    </div>
  );
}
