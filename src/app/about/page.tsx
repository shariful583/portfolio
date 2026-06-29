import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About — Shariful Islam",
};

export default function AboutPage() {
  return (
    <div>
      <About />
      <Skills />
    </div>
  );
}
