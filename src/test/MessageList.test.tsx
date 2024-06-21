import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ListItem from "../components/ListItem";
import { ThemeContext } from "../components/ThemeContext";
import { Messaggio } from "../components/types";

describe("ListItem", () => {
  const context = { color: "ciao", setColor: (): void => {} };
  it("renders the message text", () => {
    const messaggioTemporaneo: Messaggio = {
      text: "Hello, World!",
      sender: true,
    };
    render(
      <ThemeContext.Provider value={context}>
        <ListItem {...messaggioTemporaneo} />
      </ThemeContext.Provider>,
    );
    expect(screen.getByText("Hello, World!"));
  });
});
