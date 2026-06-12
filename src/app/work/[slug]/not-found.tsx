import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function WorkNotFound() {
  return (
    <>
      <Navigation solid />
      <main className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="text-eyebrow">Not found</p>
        <h1 className="font-display-italic mt-4 text-4xl text-foreground">
          Project not found
        </h1>
        <Link href="/#work" className="btn-outline mt-10">
          ← Back to work
        </Link>
      </main>
    </>
  );
}
