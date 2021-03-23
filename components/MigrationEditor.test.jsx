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
  it("shows inputs for column and table names", async () => {
    render(<MigrationEditor />);

    const formatDropdown = screen.getByLabelText("Format");
    userEvent.selectOptions(formatDropdown, "AddColumnsToTable")

    expect(screen.getByTestId("add-columns-name")).toBeTruthy();
    expect(screen.getByTestId("add-to-table-name")).toBeTruthy();
  })
});
