import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About @jmnuf",
};

export default async function About() {
  return (
    <div className="flex h-full w-full">
      <h1 id="about" className="text-xl">
        About
      </h1>
    </div>
  );
}
