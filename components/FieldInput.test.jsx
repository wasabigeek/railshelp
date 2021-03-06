/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FieldInput from "./FieldInput";

it("renders empty inputs when no value is given", async () => {
  render(<FieldInput value="" />);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(1);
  const selects = screen.getAllByRole("combobox");
  expect(selects.length).toBe(2);
});

it("updates the field type when changed & is not valid", async () => {
  const mockHandleUpdate = jest.fn();
  render(<FieldInput value="" onUpdate={mockHandleUpdate} />);

  const fieldTypeSelect = screen.getAllByRole("combobox")[0];
  userEvent.selectOptions(fieldTypeSelect, "date");
  expect(mockHandleUpdate).toHaveBeenCalledWith(":date", false);
});

it("updates the field type when changed & is valid", async () => {
  const mockHandleUpdate = jest.fn();
  render(<FieldInput value="" onUpdate={mockHandleUpdate} />);

  const fieldTypeSelect = screen.getAllByRole("combobox")[0];
  const fieldTypeName = screen.getByPlaceholderText("field_name")
  
  userEvent
    .type(fieldTypeName, "created_at")
    .then(done => done.selectOptions(fieldTypeSelect, "date"))
    .then(_ => expect(mockHandleUpdate).lastCalledWith("created_at:date", true));
});
