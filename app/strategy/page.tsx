import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Strategy Guide — Tips for All Roles",
  description: "MM2 strategy guide for every role. Murderer stealth tactics, Sheriff aiming tips, Innocent survival, and how to use the map to your advantage.",
};

export default function StrategyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Strategy Guide</h1>
      <p className="text-secondary mb-4">
        MM2 moves fast. Each role's got a different goal, and the best players don't hesitate — they adapt. Here's how to win with each role, plus the habits that carry over no matter what you draw.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Murderer — Don't Be Obvious</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Stay hidden until you've got a clean strike — the first kill sets the whole round's tone</li>
        <li>Go after isolated players first; pick off stragglers before the Sheriff reacts</li>
        <li>Use corners and obstacles to stay out of sight between kills</li>
        <li>If the Sheriff's alone, take them out early — no Sheriff means you're unopposed</li>
        <li>Mix up your movement so nobody predicts your path</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Sheriff — Wait for It</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Stick near groups — the Murderer won't attack in front of witnesses</li>
        <li>Watch for players dodging the crowd; they're probably lining up a kill</li>
        <li>Don't shoot randomly. Your single bullet is the round's only hard proof</li>
        <li>Don't reveal yourself until you've got a clean angle — a miss tells the Murderer exactly who you are</li>
        <li>Ease suspicions in chat without pointing fingers until you're certain</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Innocent — Survive First</h2>
      <p className="text-secondary mb-4">
        Stay in a group and keep moving. A stationary Innocent is a free kill. Mention suspicious stuff in chat, but don't go full accusation mode — that just marks you as trouble. Duck into closets or behind furniture when you hear the kill sound nearby. Watch the minimap: if multiple dots converge on one spot, something happened there.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Habits That Work for Every Role</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Learn every map's layout — escape routes help everyone, not just the innocent</li>
        <li>Keep a mental player count. Someone missing from the group too long? Investigate</li>
        <li>Stay calm. Panicked movement gives away your position no matter who you are</li>
      </ul>

      <p className="text-secondary">
        Map-specific strats: <Link href="/maps" className="text-primary hover:underline">Maps Guide</Link>. Role breakdowns: <Link href="/roles" className="text-primary hover:underline">Roles Guide</Link>. Deduction techniques: <Link href="/deduce" className="text-primary hover:underline">Deduction Guide</Link>. Weapon specifics: <Link href="/knives" className="text-primary hover:underline">Knives Guide</Link> and <Link href="/gun-guide" className="text-primary hover:underline">Gun Guide</Link>.
      </p>
    </div>
  );
}
