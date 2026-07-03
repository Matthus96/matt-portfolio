type PageHeroProps = {
    eyebrow: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function PageHero({
    eyebrow,
    title,
    description,
    children,
}: PageHeroProps) {
    return (
        <section className="mx-auto max-w-6xl px-5 py-24">
            <div className="max-w-4xl">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                    {eyebrow}
                </p>

                <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">
                    {title}
                </h1>

                {description ? (
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                        {description}
                    </p>
                ) : null}

                {children ? <div className="mt-8">{children}</div> : null}
            </div>
        </section>
    );
}