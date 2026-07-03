type SectionBlockProps = {
    eyebrow: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
    bordered?: boolean;
    dark?: boolean;
};

export default function SectionBlock({
    eyebrow,
    title,
    description,
    children,
    bordered = false,
    dark = false,
}: SectionBlockProps) {
    return (
        <section
            className={`${
                bordered ? "border-y border-white/10" : ""
            } ${dark ? "bg-white/[0.03]" : ""}`}
        >
            <div className="mx-auto max-w-6xl px-5 py-20">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500">
                        {eyebrow}
                    </p>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                        {title}
                    </h2>

                    {description ? (
                        <p className="mt-5 text-base leading-8 text-zinc-400">
                            {description}
                        </p>
                    ) : null}
                </div>

                {children ? <div className="mt-10">{children}</div> : null}
            </div>
        </section>
    );
}