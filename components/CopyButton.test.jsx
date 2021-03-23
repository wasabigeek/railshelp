/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CopyButton from "./CopyButton";

it("copies command", async () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.spyOn(navigator.clipboard, "writeText");

  render(<CopyButton text="Sample Text" />);
  const copyButton = screen.getByText("Copy");
  userEvent.click(copyButton);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Sample Text");
});
