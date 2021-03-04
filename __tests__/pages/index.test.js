/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../pages'

beforeEach(() => {
  render(<Home />);
})

it('renders', async () => {
  expect(screen.getByText("GuideRails")).toBeTruthy()
  expect(screen.getByText(/^bin\/rails g/)).toBeTruthy()
  expect(screen.getByText("ExampleModel")).toBeTruthy()
  expect(screen.getByText("other_model:references{polymorphic}:uniq")).toBeTruthy()
})

it('sets the model', async () => {
  const modelButton = screen.getByText('ExampleModel');
  userEvent.click(modelButton);

  await waitFor(() => screen.getByLabelText('Name'));
  const modelInput = screen.getByLabelText('Name');
  userEvent.clear(modelInput)
  userEvent.type(modelInput, 'car')
  // What's a better matcher for this?
  expect(screen.getByText("car")).toBeTruthy();
})

it('sets a field', async () => {
  const addAttributeButton = screen.getByText('+ Attribute');
  userEvent.click(addAttributeButton);

  await waitFor(() => screen.getByText('Edit Attribute 1'));
  const attributeNameInput = screen.getByLabelText('Name');
  userEvent.type(attributeNameInput, 'engine')

  const fieldTypeInput = screen.getAllByRole('combobox')[0];
  userEvent.selectOptions(fieldTypeInput, 'references')

  const indexTypeInput = screen.getAllByRole('combobox')[1];
  userEvent.selectOptions(indexTypeInput, 'index')

  expect(screen.getByText("engine:references:index")).toBeTruthy()
})

it('sets the parent', async () => {
  const button = screen.getByText('--parent');
  userEvent.click(button);

  await waitFor(() => screen.getByText('Edit Parent Model'));
  const nameInput = screen.getByLabelText('Name');
  userEvent.type(nameInput, 'Woohoo')

  expect(screen.getByText("--parent Woohoo")).toBeTruthy()
})

it('swaps between editors', async () => {
  const modelButton = screen.getByText('ExampleModel');
  userEvent.click(modelButton);
  expect(screen.queryByText("Edit Model")).toBeTruthy();
  expect(screen.queryByText(/Edit Attribute/)).toBeNull();
  expect(screen.queryByText("Edit Parent Model")).toBeNull();

  const attributeButton = screen.getByText('+ Attribute');
  userEvent.click(attributeButton);
  expect(screen.queryByText("Edit Model")).toBeNull();
  expect(screen.queryByText("Edit Attribute 1")).toBeTruthy();
  expect(screen.queryByText("Edit Parent Model")).toBeNull();

  const parentButton = screen.getByText('--parent');
  userEvent.click(parentButton);
  expect(screen.queryByText("Edit Model")).toBeNull();
  expect(screen.queryByText(/Edit Attribute/)).toBeNull();
  expect(screen.queryByText("Edit Parent Model")).toBeTruthy();
})
