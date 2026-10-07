import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-col flex-1 min-h-screen items-center justify-center bg-(--deep-teal) px-6 text-center font-mont text-white">
      <p className="text-7xl md:text-9xl font-bold tracking-widest opacity-90">404</p>
      <h1 className="mt-6 text-2xl md:text-4xl uppercase tracking-[0.1em]">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-white/80">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-md border border-white/60 px-8 py-3 uppercase tracking-wider transition-colors hover:bg-white hover:text-(--deep-teal)"
      >
        Back to Home
      </Link>
    </main>
  );
}
