import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Shariful Islam",
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6">
        <Projects />
      </div>
    </div>
  );
}
