import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Shariful Islam",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <div className="mt-4">
        <Contact />
      </div>
    </div>
  );
}
