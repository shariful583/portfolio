import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
        Based in {profile.location}
      </p>
    </section>
  );
}
