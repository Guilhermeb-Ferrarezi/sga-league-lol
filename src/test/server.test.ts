import { describe, expect, it } from "vitest";
import { resolveDistAssetPath } from "../../server";

describe("resolveDistAssetPath", () => {
  it("resolves existing asset requests to their file path", () => {
    const resolved = resolveDistAssetPath("/assets/index.js", {
      distDir: "/app/dist",
      fileExists: (path) => path === "/app/dist/assets/index.js",
    });

    expect(resolved).toBe("/app/dist/assets/index.js");
  });

  it("falls back to index.html for SPA routes", () => {
    const resolved = resolveDistAssetPath("/some/internal/route", {
      distDir: "/app/dist",
      fileExists: () => false,
    });

    expect(resolved).toBe("/app/dist/index.html");
  });

  it("falls back to index.html for path traversal attempts", () => {
    const resolved = resolveDistAssetPath("/../../etc/passwd", {
      distDir: "/app/dist",
      fileExists: () => true,
    });

    expect(resolved).toBe("/app/dist/index.html");
  });
});
