import { existsSync } from "node:fs";
import { dirname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";

type ResolveOptions = {
  distDir?: string;
  fileExists?: (path: string) => boolean;
};

const moduleDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(moduleDir, "dist");
const indexPath = join(distDir, "index.html");
const port = Number(globalThis.Bun?.env.PORT ?? 8080);

export const resolveDistAssetPath = (
  pathname: string,
  options: ResolveOptions = {},
) => {
  const rootDir = options.distDir ?? distDir;
  const fileExists = options.fileExists ?? existsSync;
  const decodedPath = decodeURIComponent(pathname);
  const hasTraversalSegment = decodedPath.split("/").some((segment) => segment === "..");
  const normalizedPath = normalize(`/${decodedPath}`).replace(/^\/+/, "");
  const candidatePath = join(rootDir, normalizedPath);
  const relativePath = relative(rootDir, candidatePath);
  const isInsideDist = relativePath !== "" && !relativePath.startsWith("..") && !relativePath.includes("/..");

  if (!hasTraversalSegment && normalizedPath && isInsideDist && fileExists(candidatePath)) {
    return candidatePath;
  }

  return join(rootDir, "index.html");
};

if (typeof Bun !== "undefined" && import.meta.main) {
  Bun.serve({
    port,
    fetch(request) {
      const url = new URL(request.url);
      const filePath = resolveDistAssetPath(url.pathname);
      const file = Bun.file(filePath);

      if (filePath === indexPath) {
        return new Response(file, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-cache",
          },
        });
      }

      return new Response(file);
    },
  });

  console.log(`Serving dist on port ${port}`);
}
