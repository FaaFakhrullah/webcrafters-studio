"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="container-shell page-section">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-slate-600">Please try refreshing this page.</p>
      <button className="mt-5 rounded-md bg-primary px-4 py-2 text-white" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}