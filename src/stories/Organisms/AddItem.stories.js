import React from 'react';
import { storiesOf } from '@storybook/react';
import AddItem from '../../Component/Organisms/AddItem';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {itemReducer} from '../../Store/Reducer/itemReducer';
import metaData from '../metaData'

storiesOf('Organims/item', module)

  .add('Add_item', () => {
    return (
      <Provider store={createStore(itemReducer, metaData)}>
       <AddItem />
  </Provider>
    )
      })