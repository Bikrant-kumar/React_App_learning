import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemList from '../../Component/Organisms/ItemList';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {itemReducer} from '../../Store/Reducer/itemReducer';
import metaData from '../metaData';
import { DragDropContext } from 'react-beautiful-dnd';

storiesOf('Organims/List', module)

  .add('_item_', () => {
    const onDragEnd =() => {}

    return (
      <Provider store={createStore(itemReducer, metaData)}>
          <DragDropContext onDragEnd={onDragEnd}>
            <ItemList />
           </DragDropContext>
        </Provider>
    )
      })