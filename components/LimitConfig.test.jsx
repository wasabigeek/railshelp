/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LimitConfig from "./LimitConfig";

it("is not checked when empty value", async () => {
  render(<LimitConfig value="" />);

  const input = screen.getByLabelText("Limit:");
  expect(input.value).toBe("");
});

it("sets the limit when defined", async () => {
  render(<LimitConfig value="{5}" />);

  const input = screen.getByLabelText("Limit:");
  expect(input).toHaveValue("5");
});

it("calls onChange when limit is changed", async () => {
  const mockOnChange = jest.fn();
  render(<LimitConfig value="" onChange={mockOnChange} />);

  const input = screen.getByLabelText("Limit:");
  userEvent.type(input, "5");
  expect(mockOnChange).toHaveBeenCalledWith("{5}");
});

it("sets limit correctly when cleared", async () => {
  const mockOnChange = jest.fn();
  render(<LimitConfig value="{5}" onChange={mockOnChange} />);

  const input = screen.getByLabelText("Limit:");
  userEvent.clear(input);
  expect(mockOnChange).toHaveBeenCalledWith("");
});
