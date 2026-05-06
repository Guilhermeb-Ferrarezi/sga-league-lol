import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App from "@/App";

afterEach(() => {
  cleanup();
});

describe("app routing", () => {
  it("renders the home page from the lol nexus base path", () => {
    window.history.pushState({}, "", "/lol/nexus/");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /campeonato.*league of legends/i,
      }),
    ).toBeInTheDocument();
  });
});
