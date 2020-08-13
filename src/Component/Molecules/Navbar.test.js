import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
 
describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar/>);
 
    expect(screen.getByText(/TasteForever/)).toBeInTheDocument();
  });

  test('renders Navbartitle component', () => {
    render(<Navbar/>);
 
    expect(screen.getByText(/Restaurant/)).toBeInTheDocument();
  });
});
