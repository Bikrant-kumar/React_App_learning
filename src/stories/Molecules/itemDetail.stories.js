import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemDetail from '../../Component/Molecules/ItemDetail';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {itemReducer} from '../../Store/Reducer/itemReducer';
import metaData from '../metaData'

storiesOf('Molecules/item', module)

  .add('with 1 item', () => {
    return (
      <Provider store={createStore(itemReducer, metaData)}>
       <ItemDetail item={{
         id: "item-${0}",
         Name: "Kabab",
         Cost: 200,
         Serving:1
        }} />
      </Provider>
      )
      })