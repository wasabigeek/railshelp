/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import ReferencesConfig from './ReferencesConfig'


it('is not checked when empty value', async () => {
  render(<ReferencesConfig value="" />)

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

it('is checked when value is {polymorphic}', async () => {
  render(<ReferencesConfig value="{polymorphic}" />)

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeChecked()
})

it('calls onChange when clicked', async () => {
  const mockOnChange = jest.fn();
  render(<ReferencesConfig value="" onChange={mockOnChange} />)

  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)

  expect(mockOnChange).toHaveBeenCalled();
})
