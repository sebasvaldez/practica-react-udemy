import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { GifsApp } from "./GifsApp.tsx";

describe("GifsApp", () => {
  test("Deberia renderizar el componente correctamente!", () => {
    const { container } = render(React.createElement(GifsApp));

    expect(container).toMatchSnapshot()
  });
});
