import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';
 
describe('NavbarTitle', () => {
  test('renders NavbarTitle component', () => {
    render(<Label text={"Restaurant"}/>);
 
    expect(screen.getByText(/Restaurant/)).toBeInTheDocument();
  });
});
