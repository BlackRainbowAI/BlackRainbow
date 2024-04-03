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
                catch (_Error) {
                    console.log(_Error);
                }
            }),
        },
        (await import("@playform/copy")).copy({
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
