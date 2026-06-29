import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 py-20">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        {profile.role} — {profile.tagline}
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          href="/projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
