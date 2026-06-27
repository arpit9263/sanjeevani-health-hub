import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/leadership")({
  component: LeadershipRedirectPage,
});

function LeadershipRedirectPage() {
  if (typeof window !== "undefined") {
    window.location.replace("/about#leadership");
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Leadership moved to About page</h1>
        <p className="mt-3 text-muted-foreground">Doctors, owners and leadership details are now combined inside the About page.</p>
        <a href="/about#leadership" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Open About & Doctors</a>
      </main>
      <SiteFooter />
    </div>
  );
}
