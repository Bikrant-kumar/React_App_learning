import React from 'react';
import { screen,render } from '@testing-library/react';
import Input from './Input'


 test('placeholder check',() => {
   
      render(<Input 
         value='Name'
         placeholder='Enter your name'
         type='text' />
        );
     expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();

 });