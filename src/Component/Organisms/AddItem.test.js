import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import AddItem from './AddItem';
import { Provider } from 'react-redux';

const handleAdd = jest.fn();

 test('Button click',() => {
     <Provider>
    render(
        < AddItem/> );
    </Provider>
    fireEvent.click(screen.getByRole('button'));
    // expect(handleAdd).toHaveBeenCalledTimes(1);
//    expect(document.querySelector('button'));
// expect(screen.getByTestId('add')).toBeInTheDocument();
// expect(screen.getByText("MENU")).toBeInTheDocument();
expect(screen.getBy("MENU")).toBeInTheDocument();     
 })