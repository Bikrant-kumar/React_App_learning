import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
//  const linkElement = getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//     fireEvent.click(screen.getAllByRole("button")[1]);
//      fireEvent.click(screen.getAllByRole("button")[2]);
//      fireEvent.click(screen.getAllByRole("button")[2]);
//      expect(onAddButtonClick).toHaveBeenCalledTimes(0);
//      expect(onDeleteButtonClick).toHaveBeenCalledTimes(1);
//      expect(onResetButtonClick).toHaveBeenCalledTimes(2);
});
