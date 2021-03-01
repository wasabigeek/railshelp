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

// it('sets a field', async () => {
//   render(<Home />)
//   const container = document.querySelector('#fields');

//   const fieldNameInput = getAllByRole(container, 'textbox')[0];
//   userEvent.clear(fieldNameInput)
//   userEvent.type(fieldNameInput, 'example_field')

//   const fieldTypeInput = getAllByRole(container, 'combobox')[0];
//   userEvent.selectOptions(fieldTypeInput, 'date')

//   const indexTypeInput = getAllByRole(container, 'combobox')[1];
//   userEvent.selectOptions(indexTypeInput, 'index')

//   expect(screen.getByText(/^bin\/rails [\w\s]+ example_field:date:index/)).toBeTruthy()
// })
