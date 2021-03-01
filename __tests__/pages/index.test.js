/**
 * @jest-environment jsdom
 */

import { getAllByRole, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../pages'

it('renders', async () => {
  render(<Home />)
  expect(screen.getByText("GuideRails")).toBeTruthy()
  expect(screen.getByText(/^bin\/rails g/)).toBeTruthy()
  expect(screen.getByText("ExampleModel")).toBeTruthy()
  expect(screen.getByText("other_model:references{polymorphic}:uniq")).toBeTruthy()
})

it('sets the model', async () => {
  render(<Home />)
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
  render(<Home />)
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
