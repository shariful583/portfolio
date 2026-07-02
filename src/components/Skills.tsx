import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-16 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 flex flex-col gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col gap-2 sm:flex-row sm:gap-4"
          >
            <h3 className="shrink-0 text-sm font-medium text-zinc-500 sm:w-28 dark:text-zinc-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
