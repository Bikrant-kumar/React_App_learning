import React from 'react';
import { storiesOf } from '@storybook/react';
import TableDetail from '../../Component/Molecules/TableDetail';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {itemReducer} from '../../Store/Reducer/itemReducer';
import metaData from '../metaData';
import {DragDropContext} from 'react-beautiful-dnd';

storiesOf('Molecules/TableDetail', module)

  .add('Data', () => {
    
    const onDragEnd =()=>{}
    
    return (
        <Provider store={createStore(itemReducer, metaData)}>
          <DragDropContext onDragEnd={onDragEnd}>
          <TableDetail table={ {
        Name: "Table1",
        id: "`table-${0}`",
        totalCost: 0,
        totalItem: 0,
        item:[]
        }}  />
        </DragDropContext>
      </Provider>
    )
      })