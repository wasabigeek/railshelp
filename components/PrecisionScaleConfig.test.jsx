/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrecisionScaleConfig from "./PrecisionScaleConfig";

it("renders inputs when empty value", async () => {
  render(<PrecisionScaleConfig value="" />);

  const precisionInput = screen.getByLabelText("Precision:");
  expect(precisionInput).toBeTruthy();
  const scaleInput = screen.getByLabelText("Scale:");
  expect(scaleInput).toBeTruthy();
});

it("renders input with values", async () => {
  render(<PrecisionScaleConfig value="{5,2}" />);

  const precisionInput = screen.getByLabelText("Precision:");
  expect(precisionInput).toHaveValue("5");
  const scaleInput = screen.getByLabelText("Scale:");
  expect(scaleInput).toHaveValue("2");
});

it("calls onChange when precision and scale is changed", async () => {
  const mockOnChange = jest.fn();
  render(<PrecisionScaleConfig value="{5,2}" onChange={mockOnChange} />);

  // TODO: not very rigorous, probably needs a smarter mock
  const input = screen.getByLabelText("Scale:");
  userEvent.type(input, "3");
  expect(mockOnChange).toHaveBeenCalledWith("{5,23}");
});
