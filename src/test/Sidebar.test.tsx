import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../components/ThemeContext";

describe("SideBar", () => {
  const context = { color: "blue", setColor: (): void => {} };
  it("should check if the button has been clicked", () => {
    const btnProva = <button id="blue button"></button>;
    render(
      <ThemeContext.Provider value={context}>
        <Sidebar />
      </ThemeContext.Provider>,
    );
    expect(screen.getByTestId(`${context.color} button`)).toMatchObject(
      btnProva,
    );
  });
});
