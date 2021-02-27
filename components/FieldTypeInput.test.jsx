/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FieldTypeInput from "./FieldTypeInput";

it("renders empty inputs when no value is given", async () => {
  render(<FieldTypeInput value="" />);

  const selects = screen.getAllByRole("combobox");
  expect(selects.length).toBe(1);
});

it("updates the field type when changed", async () => {
  const mockHandleChange = jest.fn();
  render(<FieldTypeInput value="" onChange={mockHandleChange} />);

  const fieldTypeSelect = screen.getByRole("combobox");
  userEvent.selectOptions(fieldTypeSelect, "date");
  expect(mockHandleChange).toHaveBeenCalledWith("date");
});

it("resets the field type configs when changed", async () => {
  const mockHandleChange = jest.fn();
  render(
    <FieldTypeInput
      value="references{polymorphic}"
      onChange={mockHandleChange}
    />
  );

  const fieldTypeSelect = screen.getByRole("combobox");
  userEvent.selectOptions(fieldTypeSelect, "date");
  expect(mockHandleChange).toHaveBeenCalledWith("date");
});
