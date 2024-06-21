import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import MessageInput from "../components/MessageInput";
import { ThemeContext } from "../components/ThemeContext";

describe("MessageInput", () => {
  const context = { color: "blue", setColor: (): void => {} };
  it("should return the value inside the textAreo of Input", () => {
    const messaggioDaInviare = {
      message: "Paolo",
      handleInputChange: (): void => {},
      handleSendMessage: (): void => {},
    };
    render(
      <ThemeContext.Provider value={context}>
        <MessageInput {...messaggioDaInviare} />
      </ThemeContext.Provider>,
    );
    expect(screen.getByText("Paolo"));
  });
});
