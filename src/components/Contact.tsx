import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <div>
      <p className="text-zinc-600 dark:text-zinc-400">
        Want to work together or just say hi? Reach out.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {profile.email}
      </a>
    </div>
  );
}
