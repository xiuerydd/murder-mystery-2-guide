import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Maps Guide — Learn Every Map",
  description: "Learn all MM2 maps by size and mechanics. Small maps, large maps, special-mechanic maps, and map-specific survival strategies for every role.",
};

export default function MapsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Maps Guide</h1>
      <p className="text-secondary mb-4">
        Knowing the map matters more than any weapon or strategy. Players who learn the layout, exits, and hiding spots survive twice as long as those running blind. It's that simple. Here's how the different map types play out.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Small Maps — Murderer Territory</h2>
      <p className="text-secondary mb-4">
        Tight rooms, narrow hallways, no room to run. The Murderer closes distance fast here. If you're Innocent, never go solo — stay with someone so the Murderer can't attack without witnesses. Sheriff? Hold the center where you can see multiple paths at once. Murderers on small maps should hit fast before the Sheriff gets a clean view.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Large Maps — Room to Breathe</h2>
      <p className="text-secondary mb-4">
        More routes, more hiding spots, more safety for Innocents and the Sheriff. But only if you've memorized two escape paths from every major room. Don't get cornered. The Sheriff can't watch everything — Innocents have to share what they see. As the Murderer, use the extra space to move unseen and pick off the stragglers.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Maps With Tricks</h2>
      <p className="text-secondary mb-4">
        Some maps add traps, teleporters, or hidden passages. A smart Murderer uses teleporters to make it look like they're on the opposite side of the map from their last kill — pure chaos. Innocents should stay away from trap triggers. Don't worry about strategy on these maps at first. Just play a few rounds and learn how the gimmick works.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Fast-Track Your Map Knowledge</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Run 3–5 quick rounds on each map to build route memory</li>
        <li>Find the popular hiding spots — you'll use them and check them</li>
        <li>Learn spawn points; knowing where players start helps you track movement</li>
        <li>Watch the minimap pattern, not just what's in front of you</li>
      </ul>

      <p className="text-secondary">
        Role-specific strats: <Link href="/roles" className="text-primary hover:underline">Roles Guide</Link>. Reading the killer: <Link href="/deduce" className="text-primary hover:underline">Deduction Guide</Link>. General tips that work on any map: <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link>.
      </p>
    </div>
  );
}
