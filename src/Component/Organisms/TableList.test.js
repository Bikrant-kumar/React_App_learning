 import React from 'react';
 import TableList from './TableList';
 import { RenderWithProvider ,screen } from '../../test/RenderWithProvider';

 describe('TableList', () => {
   test('renders TableList component', () => {
     RenderWithProvider( <TableList />
        //  ,{initialState:{"tables": [
        //     {
        //       "id": "`table-${0}`",
        //       "Name": "Table1",
        //       "totalItem": 0,
        //       "totalCost": 0,
        //       "item": []
        //     },
        //     {
        //       "id": "`table-${1}`",
        //       "Name": "Table2",
        //       "totalItem": 0,
        //       "totalCost": 0,
        //       "item": []
        //     },
        //     {
        //       "id": "`table-${2}`",
        //       "Name": "Table3",
        //       "totalItem": 0,
        //       "totalCost": 0,
        //       "item": []
        //     },
        //     {
        //       "id": "`table-${3}`",
        //       "Name": "Table3",
        //       "totalItem": 0,
        //       "totalCost": 0,
        //       "item": []
        //     }
        //   ]}}
     );

     expect(screen.getByText(/TABLE/)).toBeInTheDocument();
   });
 });