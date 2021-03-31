/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MIGRATION_FORMATS } from "../../helpers/constants";
import MigrationPage from "../../pages/g/migration";

it("renders", async () => {
  render(<MigrationPage />);

  expect(screen.getByText(/^bin\/rails g migration/)).toBeTruthy();
  expect(screen.getByText("AddExampleColumnsToExampleTable")).toBeTruthy();
});

it("sets the Migration", async () => {
  render(<MigrationPage />);

  const migrationButton = screen.getByText("AddExampleColumnsToExampleTable");
  userEvent.click(migrationButton);

  const input = screen.getAllByRole("textbox")[0];
  userEvent.clear(input);
  userEvent.type(input, "DifferentColumns");
  // What's a better matcher for this?
  expect(screen.getByText("AddDifferentColumnsToExampleTable")).toBeTruthy();
});

it("sets a field", async () => {
  render(<MigrationPage />);

  const addAttributeButton = screen.getByText("+ Attribute");
  userEvent.click(addAttributeButton);

  await waitFor(() => screen.getByText("Edit Attribute 1"));
  const attributeNameInput = screen.getByLabelText("Name");
  userEvent.type(attributeNameInput, "engine");

  const fieldTypeInput = screen.getAllByRole("combobox")[0];
  userEvent.selectOptions(fieldTypeInput, "references");

  const indexTypeInput = screen.getAllByRole("combobox")[1];
  userEvent.selectOptions(indexTypeInput, "index");

  expect(screen.getByText("engine:references:index")).toBeTruthy();
});

it("toggles args", async () => {
  render(<MigrationPage />);
  let migrationButton = screen.getByText("AddExampleColumnsToExampleTable");
  userEvent.click(migrationButton);
  expect(screen.queryByText("Edit Migration")).toBeTruthy();

  migrationButton = screen.getByText("AddExampleColumnsToExampleTable");
  userEvent.click(migrationButton);
  expect(screen.queryByText("Edit Migration")).toBeNull();
});

it("swaps between editors", async () => {
  render(<MigrationPage />);

  const modelButton = screen.getByText("AddExampleColumnsToExampleTable");
  userEvent.click(modelButton);
  expect(screen.queryByText("Edit Migration")).toBeTruthy();

  const attributeButton = screen.getByText("+ Attribute");
  userEvent.click(attributeButton);
  expect(screen.queryByText("Edit Attribute 1")).toBeTruthy();
});

it("copies command", async () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.spyOn(navigator.clipboard, "writeText");

  render(<MigrationPage />); // refactor to take initialArgs for a more deterministic test

  const copyButton = screen.getByText("Copy");
  userEvent.click(copyButton);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
    "bin/rails g migration AddExampleColumnsToExampleTable other_model:references"
  );
});

it("copies the right arguments when format is changed", async () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.spyOn(navigator.clipboard, "writeText");

  render(<MigrationPage />); // refactor to take initialArgs for a more deterministic test
  const migrationButton = screen.getByText("AddExampleColumnsToExampleTable");
  userEvent.click(migrationButton);

  const formatDropdown = screen.getByLabelText("Format");
  userEvent.selectOptions(formatDropdown, MIGRATION_FORMATS.CUSTOM);

  const copyButton = screen.getByText("Copy");
  userEvent.click(copyButton);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
    "bin/rails g migration AddExampleColumnsToExampleTable"
  );
});
