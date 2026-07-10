import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MM2 Collectibles — Pets, Effects, and Rare Items",
  description: "Murder Mystery 2 collectibles guide. Pet types, kill effects, rarity tiers, how to get rare items, and which collectibles are worth grinding for.",
};

export default function CollectiblesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">MM2 Collectibles — Pets, Effects, and Rare Items</h1>
      <p className="text-secondary mb-4">
        MM2's collectibles scene is huge. Pets, kill effects, knives, guns — half the game's about looks and status, not just gameplay. Some of these items are worth real money on the trading market. Others are just cool to have. Knowing the difference saves you from getting ripped off.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Pet Types</h2>
      <p className="text-secondary mb-4">
        Pets follow you around and look flashy, but they don't affect gameplay at all. Still, some pets are so rare they're worth more than most knives. You've got the basic ones from the shop, seasonal pets from events, and then the god-tier pets from special promotions or older events that'll probably never come back.
      </p>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Common pets</strong> — cat, dog, bunny. Cheap and everywhere</li>
        <li><strong>Uncommon pets</strong> — ghost, zombie, elf. Seasonal but easy to get while the event's live</li>
        <li><strong>Rare pets</strong> — ginger cat, ice dragon, phoenix. These hold value</li>
        <li><strong>Godly pets</strong> — barely exist. If you have one, you're sitting on a fortune</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Kill Effects</h2>
      <p className="text-secondary mb-4">
        Kill effects trigger when you take someone out and they're purely cosmetic. But in MM2, cosmetics are the economy. Some kill effects are locked behind old battle passes and will never return. Others are tradeable. The flashier the effect, the higher the price tag. If you're new, don't blow your whole inventory on a kill effect — build your knife collection first.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Rarity Tiers</h2>
      <p className="text-secondary mb-4">
        The game has a clear rarity ladder. Common, Uncommon, Rare, Legendary, Godly, and Ancient. Each tier jumps significantly in value and prestige. Most event items land at Rare or Legendary. Godly and Ancient are reserved for special occasions and are almost always limited. If you see an Ancient in a trade, check the value carefully — it might be a fair trade or a scam attempt depending on what they want for it.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How to Get Rare Collectibles</h2>
      <p className="text-secondary mb-4">
        Events are your best shot. When a new event drops, grind it hard — that's when rare items are cheapest and easiest to get. Trading is the long game. You can work your way up by flipping items, but it takes patience. And occasionally the developer drops codes or giveaways with exclusive items. Follow the official socials for those. A free code can net you something worth dozens of trades.
      </p>

      <p className="text-secondary">
        Wanna trade your collectibles? The <Link href="/trading" className="text-primary hover:underline">Trading Guide</Link> covers values and safety. See where collectibles drop on each map with the <Link href="/maps" className="text-primary hover:underline">Maps Guide</Link>.
      </p>
    </div>
  );
}
