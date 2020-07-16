import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Button from './Button';

const saveInputData = jest.fn();

 test('Button click',() => {
    render(<Button 
    saveInputData={saveInputData}
    text='submit'
    />);
   fireEvent.click(screen.getAllByRole('button')[0]);
   expect(saveInputData).toHaveBeenCalledTimes(1);
 })