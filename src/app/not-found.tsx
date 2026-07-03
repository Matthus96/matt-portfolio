import Link from "next/link";

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-24">
            <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                    404
                </p>

                <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
                    Page not found.
                </h1>

                <p className="mt-6 text-lg leading-8 text-zinc-400">
                    This page doesn’t exist or may have been moved. Head back to
                    the homepage or browse the project case studies.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href="/"
                        className="rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-200"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/projects"
                        className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}