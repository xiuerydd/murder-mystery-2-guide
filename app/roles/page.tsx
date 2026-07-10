import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Murder Mystery 2 Roles Guide — How Each Role Plays",
  description: "Learn the three roles in Murder Mystery 2 — Innocent, Murderer, Sheriff. Role-specific strategies, beginner mistakes, and how to adapt your playstyle round by round.",
};

export default function RolesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Murder Mystery 2 Roles Guide</h1>
      <p className="text-secondary mb-4">
        Three roles, one round: Innocent (no weapon, just survive), Murderer (knife, gotta kill everyone), and Sheriff (gun, stop the killer). None of them's inherently stronger, but they play completely differently. If you treat every role the same, you're dead in seconds.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Innocent — Eyes Open, Head Down</h2>
      <p className="text-secondary mb-4">
        You've got nothing but your awareness. Stick with the group — the Murderer can't attack when everyone's watching. Look for weird behavior: players hanging around bodies, trailing the same person, disappearing right when someone dies. Feed info to the Sheriff. Don't chase suspects and don't wander off alone. That's exactly what they want.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Murderer — Pick Your Moments</h2>
      <p className="text-secondary mb-4">
        One hit, one kill. Your job's simple on paper, but rushing it is the fastest way to lose. Wait until your target's alone. Strike when nobody's looking. Then blend right back in between kills. The best Murderers have an alibi — they're standing near others right up until they strike. If you kill in a crowd, you've already lost.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Sheriff — One Shot, One Chance</h2>
      <p className="text-secondary mb-4">
        You've got a single bullet. Hit the Murderer and the round's over. Hit an Innocent and you lose it. So don't rush. Watch who bolts from dead bodies, who changes direction when you get close, who's lurking in quiet corners. A Sheriff who waits for the right moment wins way more often than one who fires at every twitch.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Switch Roles, Switch Mindsets</h2>
      <p className="text-secondary mb-4">
        Roles swap every round, so flexibility matters more than mastery of one. Were you a patient Sheriff last round? Great — now you're the Murderer, and that same patience makes you dangerous. The players who win consistently are the ones who reset their brain every new round. Practice all three deliberately, not just your favorite.
      </p>

      <p className="text-secondary">
        Wanna see how each role plays on different maps? Head to the <Link href="/maps" className="text-primary hover:underline">Maps Guide</Link>. Need help reading players? The <Link href="/deduce" className="text-primary hover:underline">Deduction Guide</Link> breaks it down. For round-by-round tips, check the <Link href="/strategy" className="text-primary hover:underline">Strategy Guide</Link>.
      </p>
    </div>
  );
}
