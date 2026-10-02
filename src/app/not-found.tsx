import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <p className="font-display text-8xl font-extrabold text-gold-400">404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-forest-800">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">
        Samahani — the page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" variant="forest" className="mt-10">
        Back to Home
      </Button>
    </section>
  );
}
