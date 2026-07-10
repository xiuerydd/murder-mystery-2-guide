import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Deduction Guide — How to Find the Killer",
  description: "Learn deduction in Murder Mystery 2. How to read behavior, position, and reaction to identify the Murderer before they strike again.",
};

export default function DeducePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Deduction Guide</h1>
      <p className="text-secondary mb-4">
        Most rounds aren't won with the gun. They're won before it's even drawn — by figuring out who the Murderer is early. The Sheriff who reads the room correctly wins without firing. The Murderer who blends in never gets chased. Deduction boils down to three things: behavior, position, and reaction.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Watch What They Do</h2>
      <p className="text-secondary mb-4">
        Behavior's the biggest tell. Someone lingering near a body without saying anything? Suspicious. A player who suddenly changes direction the moment you approach? They might be circling for a kill. Someone tailing the same person across the whole map? They're hunting. Don't judge on one moment — watch the pattern over 20–30 seconds. A flinch isn't proof. A pattern is.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Track Where They Are</h2>
      <p className="text-secondary mb-4">
        Who was in sight when the victim dropped? Players on the far side of the map are probably clear. The Sheriff should mentally map who was where in the seconds before each kill. If the same name keeps showing up "near but not at" every kill scene? That's your lead. Follow it.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Listen to How They Talk</h2>
      <p className="text-secondary mb-4">
        Players who freak out when accused — pleading, deflecting, pointing at everyone else — are usually hiding something. Calm players with clear alibis are probably innocent. A wrong accusation helps the Murderer more than the accuser, so don't call someone out until you're sure. And if you're the Sheriff and you're not sure? Wait. One more kill is better than shooting an innocent.
      </p>

      <p className="text-secondary mb-4">
        A few things to keep in mind:
      </p>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Don't vote on a hunch — misfiring loses the round for everyone</li>
        <li>Track who was at each scene; the trail goes cold fast</li>
        <li>As Murderer, don't spam kills — you'll expose yourself before cleanup</li>
        <li>Ignore chat accusations — anyone can type; watch movement, not words</li>
      </ul>

      <p className="text-secondary">
        Maps affect where people hide and how they move: <Link href="/maps" className="text-primary hover:underline">Maps Guide</Link>. Role-specific tips: <Link href="/roles" className="text-primary hover:underline">Roles Guide</Link>. Want more advanced reads? The <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link> has you covered.
      </p>
    </div>
  );
}
