import React from 'react';
// import { screen, fireEvent, render } from '@testing-library/react';
import AddItem from './AddItem';
import {RenderWithProvider,fireEvent,screen} from '../../test/RenderWithProvider';


describe('Add Item', () => {
   
 test('Button click',() => {
    RenderWithProvider(
        < AddItem/>
      //   ,{initialState:{items: [
      //    { id:`item-${0}`, Name: "Kabab", Cost: 200, Serving:1 }]}} 
                );
    fireEvent.click(screen.getByRole('button')); 
 })
 
 test('render component',() => {
    RenderWithProvider(
        < AddItem/> );
                expect(screen.getByTestId('add')).toBeInTheDocument();
                expect(screen.getByText("MENU")).toBeInTheDocument();
                expect(screen.getByText("Cost")).toBeInTheDocument();   
 });

})