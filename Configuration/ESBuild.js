/**
 * @module ESBuild
 *
 */
export default {
    format: "esm",
    minify: true,
    outdir: "Target",
    bundle: true,
    platform: "browser",
    target: ["edge104", "esnext"],
    plugins: [
        {
            name: "Target",
            setup: ({ onStart, initialOptions: { outdir } }) => onStart(async () => {
                try {
                    outdir
                        ? await (await import("fs/promises")).rm(outdir, {
                            recursive: true,
                        })
                        : {};
                }
                catch (_Error) { }
            }),
        },
        (await import("esbuild-plugin-copy")).copy({
            resolveFrom: "out",
            assets: [
                {
                    from: "./Source/styles/*.css",
                    to: "./styles/",
                },
            ],
        }),
    ],
};
