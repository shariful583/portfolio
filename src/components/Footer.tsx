import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          <a href={profile.socials.github} className="hover:underline">
            GitHub
          </a>
          <a href={profile.socials.linkedin} className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
