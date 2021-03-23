/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MigrationEditor from "./MigrationEditor";

it("shows the format dropdown only", async () => {
  render(<MigrationEditor />);

  const formatDropdown = screen.getByLabelText("Format");
  expect(formatDropdown.value).toBe("");

  const inputs = screen.getAllByRole("combobox");
  expect(inputs.length).toEqual(1);
});

describe("when AddColumnsToTable is selected", () => {
  const selectAddColumnsToTable = () => {
    const formatDropdown = screen.getByLabelText("Format");
    userEvent.selectOptions(formatDropdown, "AddColumnsToTable");
  };

  it("shows inputs for column and table names", async () => {
    render(<MigrationEditor />);
    selectAddColumnsToTable();

    expect(screen.getByTestId("add-columns-name")).toBeTruthy();
    expect(screen.getByTestId("add-to-table-name")).toBeTruthy();
  });

  it("updates parent component when inputs are updated", async () => {
    const mockHandleChange = jest.fn();

    render(<MigrationEditor onChange={mockHandleChange} />);
    selectAddColumnsToTable();

    const columnsInput = screen.getByTestId("add-columns-name");
    userEvent.type(columnsInput, "C");
    expect(mockHandleChange).toHaveBeenCalledWith("AddCTo");

    const tableInput = screen.getByTestId("add-to-table-name");
    userEvent.type(tableInput, "T");
    expect(mockHandleChange).toHaveBeenCalledWith("AddToT");
  });
});
