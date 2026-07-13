import Image from "next/image";

type ProjectMedia = {
    src: string;
    alt: string;
    label?: string;
    type?: "image" | "video";
};

type ProjectImageGridProps = {
    images: ProjectMedia[];
    variant?: "desktop" | "mobile";
};

export default function ProjectImageGrid({
    images,
    variant = "desktop",
}: ProjectImageGridProps) {
    const isMobile = variant === "mobile";

    return (
        <section className="mx-auto max-w-6xl px-5 pb-20">
            <div
                className={
                    isMobile
                        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        : "grid gap-5 md:grid-cols-3"
                }
            >
                {images.map((item) => {
                    const isVideo = item.type === "video";

                    return (
                        <div
                            key={item.src}
                            className={
                                isMobile
                                    ? "mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-2"
                                    : "overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
                            }
                        >
                            <div
                                className={
                                    isMobile
                                        ? "relative aspect-[9/19.5] overflow-hidden rounded-[1.75rem] bg-white/[0.04]"
                                        : "relative aspect-[16/11] overflow-hidden bg-white/[0.04]"
                                }
                            >
                                {isVideo ? (
                                    <video
                                        src={item.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        aria-label={item.alt}
                                        className={
                                            isMobile
                                                ? "h-full w-full object-cover"
                                                : "h-full w-full object-cover"
                                        }
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className={
                                            isMobile
                                                ? "object-contain"
                                                : "object-cover"
                                        }
                                        sizes={
                                            isMobile
                                                ? "(min-width: 1024px) 280px, (min-width: 640px) 45vw, 85vw"
                                                : "(min-width: 768px) 33vw, 100vw"
                                        }
                                    />
                                )}
                            </div>

                            {item.label ? (
                                <div
                                    className={
                                        isMobile
                                            ? "px-4 py-4 text-center"
                                            : "border-t border-white/10 px-5 py-4"
                                    }
                                >
                                    <p className="text-sm font-black text-zinc-300">
                                        {item.label}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}