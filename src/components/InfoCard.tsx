type InfoCardProps = {
    title: string;
    description?: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-black text-white">{title}</h3>

            {description ? (
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {description}
                </p>
            ) : null}
        </div>
    );
}