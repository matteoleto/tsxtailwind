import React from "react";

import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../components/ThemeContext";

describe("SideBar", () => {
  const setColor = vi.fn();
  const context = { color: "blue", setColor };
  it.each(["blue", "red", "green", "purple", "yellow"])(
    "should check if the button %s has been clicked",
    async (color) => {
      const user = userEvent.setup();
      render(
        <ThemeContext.Provider value={context}>
          <Sidebar />
        </ThemeContext.Provider>,
      );
      const btnClicked = screen.getByTestId(`${color} button`);
      await act(async () => user.click(btnClicked));
      expect(setColor).toHaveBeenCalledWith(color);
    },
  );
});
