import * as fs from "fs";
const outDir = "dist";
export default {
    format: "esm",
    minify: true,
    outdir: outDir,
    bundle: true,
    platform: "browser",
    target: ["edge104", "esnext"],
    plugins: [
        {
            name: "clean-dist",
            setup(build) {
                build.onStart(async () => {
                    try {
                        await fs.promises.rm(outDir, {
                            recursive: true,
                        });
                    }
                    catch (_error) { }
                });
            },
        },
    ],
};
