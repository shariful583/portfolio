import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
        >
          <h3 className="font-medium">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-sm font-medium">
            {project.link && (
              <a href={project.link} className="hover:underline">
                Live
              </a>
            )}
            {project.repo && (
              <a href={project.repo} className="hover:underline">
                Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
