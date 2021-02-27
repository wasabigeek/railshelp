/**
 * @jest-environment jsdom
 */

import { getAllByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../pages'

it('renders', async () => {
  render(<Home />)
  expect(screen.getByText("GuideRails")).toBeTruthy()
  expect(screen.getByText('bin/rails g model ExampleModel other_model:references{polymorphic}:uniq')).toBeTruthy()
})

it('sets the model', async () => {
  render(<Home />)
  const modelInput = screen.getByLabelText('Model Name');
  userEvent.clear(modelInput)
  userEvent.type(modelInput, 'car')
  expect(screen.getByText(/^bin\/rails g model car/)).toBeTruthy()
})

it('sets a field', async () => {
  render(<Home />)
  const container = document.querySelector('#fields');

  const fieldNameInput = getAllByRole(container, 'textbox')[0];
  userEvent.clear(fieldNameInput)
  userEvent.type(fieldNameInput, 'example_field')

  const fieldTypeInput = getAllByRole(container, 'combobox')[0];
  userEvent.selectOptions(fieldTypeInput, 'date')

  const indexTypeInput = getAllByRole(container, 'combobox')[1];
  userEvent.selectOptions(indexTypeInput, 'index')

  expect(screen.getByText(/^bin\/rails [\w\s]+ example_field:date:index/)).toBeTruthy()
})
