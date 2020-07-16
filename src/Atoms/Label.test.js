import React from 'react';
import { screen,render } from '@testing-library/react';
import Input from './Label'


test('text check',() => {
   
     render(<Input 
        text='Name'
         />
       );
    expect(screen.getByText("Name")).toBeInTheDocument();

 });