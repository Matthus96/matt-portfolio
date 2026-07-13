import Image from "next/image";

type ProjectImage = {
    src: string;
    alt: string;
    label?: string;
};

type ProjectImageGridProps = {
    images: ProjectImage[];
};

export default function ProjectImageGrid({ images }: ProjectImageGridProps) {
    return (
        <section className="mx-auto max-w-6xl px-5 pb-20">
            <div className="grid gap-5 md:grid-cols-3">
                {images.map((image) => (
                    <div
                        key={image.src}
                        className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                    >
                        <div className="relative aspect-[16/11] bg-white/[0.04]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                        </div>

                        {image.label ? (
                            <div className="border-t border-white/10 px-5 py-4">
                                <p className="text-sm font-black text-zinc-300">
                                    {image.label}
                                </p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}