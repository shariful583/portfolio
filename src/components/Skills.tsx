import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="py-16 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
