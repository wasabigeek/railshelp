/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MIGRATION_FORMATS } from "../../helpers/constants";
import MigrationEditor from ".";

it("shows the format dropdown only", async () => {
  render(<MigrationEditor />);

  const formatDropdown = screen.getByLabelText("Format");
  expect(formatDropdown.value).toBe(MIGRATION_FORMATS.CUSTOM);

  const selects = screen.getAllByRole("combobox");
  expect(selects.length).toEqual(1);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toEqual(1);
});

describe("when initialValue is specified", () => {
  it("prefills the correct format and data", () => {
    render(<MigrationEditor initialName={"AddABCToXYZ"} />);

    // shows AddColumnsToTable editor
    expect(screen.getByTestId("add-columns-name")).toHaveValue("ABC");
    expect(screen.getByTestId("add-to-table-name")).toHaveValue("XYZ");
  });
});

describe("when AddColumnsToTable is selected", () => {
  const selectAddColumnsToTable = () => {
    const formatDropdown = screen.getByLabelText("Format");
    userEvent.selectOptions(formatDropdown, MIGRATION_FORMATS.ADD_COLUMNS);
  };

  it("shows inputs for column and table names", async () => {
    render(<MigrationEditor />);
    selectAddColumnsToTable();

    expect(screen.getByTestId("add-columns-name")).toBeTruthy();
    expect(screen.getByTestId("add-to-table-name")).toBeTruthy();
  });

  it("updates parent component when inputs are updated", async () => {
    let value = "";
    const handleChange = (newValue) => {
      value = newValue;
    };

    render(<MigrationEditor onChange={handleChange} />);
    selectAddColumnsToTable();

    const columnsInput = screen.getByTestId("add-columns-name");
    userEvent.type(columnsInput, "NewColumn");
    const tableInput = screen.getByTestId("add-to-table-name");
    userEvent.type(tableInput, "ExistingTable");
    expect(value).toEqual("AddNewColumnToExistingTable");
  });
});

describe("when RemoveColumnsFromTable is selected", () => {
  const selectRemoveColumnsFromTable = () => {
    const formatDropdown = screen.getByLabelText("Format");
    userEvent.selectOptions(formatDropdown, MIGRATION_FORMATS.REMOVE_COLUMNS);
  };

  it("shows inputs for column and table names", async () => {
    render(<MigrationEditor />);
    selectRemoveColumnsFromTable();

    expect(screen.getByTestId("remove-columns-name")).toBeTruthy();
    expect(screen.getByTestId("remove-from-table-name")).toBeTruthy();
  });

  it("updates parent component when inputs are updated", async () => {
    let value = "";
    const handleChange = (newValue) => {
      value = newValue;
    };

    render(<MigrationEditor onChange={handleChange} />);
    selectRemoveColumnsFromTable();

    const columnsInput = screen.getByTestId("remove-columns-name");
    userEvent.type(columnsInput, "ExistingColumn");
    const tableInput = screen.getByTestId("remove-from-table-name");
    userEvent.type(tableInput, "ExistingTable");
    expect(value).toEqual("RemoveExistingColumnFromExistingTable");
  });
});

describe("when CreateJoinTable is selected", () => {
  const selectCreateJoinTable = () => {
    const formatDropdown = screen.getByLabelText("Format");
    userEvent.selectOptions(formatDropdown, MIGRATION_FORMATS.JOIN_TABLE);
  };

  it("shows inputs for column and table names", async () => {
    render(<MigrationEditor />);
    selectCreateJoinTable();

    expect(screen.getByTestId("migration-prefix")).toBeTruthy();
  });

  it("updates parent component when inputs are updated", async () => {
    let value = "";
    const handleChange = (newValue) => {
      value = newValue;
    };

    render(<MigrationEditor onChange={handleChange} />);
    selectCreateJoinTable();

    const columnsInput = screen.getByTestId("migration-prefix");
    userEvent.type(columnsInput, "CreateMedia");
    expect(value).toEqual("CreateMediaJoinTable");
  });
});
