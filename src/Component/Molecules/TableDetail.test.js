import React from 'react';
import { render, screen } from '@testing-library/react';
import TableDetail from './TableDetail';
import { RenderWithProvider } from '../../test/RenderWithProvider';
 
describe('TableDetails', () => {
  test('renders TableDetail component', () => {

    RenderWithProvider( <TableDetail />
        // ,{initialState:{id:`table-${0}`, Name: "Table1", totalItem: 0, totalCost: 0,
    // item:[ ] }}
    );

    expect(screen.getByText(/Serving/)).toBeInTheDocument();
  });
});
