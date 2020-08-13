import React from 'react';
import { storiesOf } from '@storybook/react';
import TableData from '../../Component/Molecules/TableData';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import {itemReducer} from '../../Store/Reducer/itemReducer';
import metaData from '../metaData'

storiesOf('Molecules/Table', module)


  .add('with Data', () => {
    return (
        <Provider store={createStore(itemReducer, metaData)}>
        <TableData table={
            {Name: "Table1",
            id: 0,
            totalCost: 400,
            item: [  {
      "id": "item-${0}`",
      "Name": "Kabab",
      "Cost": 200,
      "Serving":1
        },
        {
      "id": "`item-${1}`",
      "Name": "Misal Pav",
      "Cost": 200,
      "Serving":1
        }]}}/>
      </Provider>
    )
      })


      .add('without Data', () => {
        return (
            <Provider store={createStore(itemReducer, metaData)}>
            <TableData table={
                {Name: "Table1",
                id: 0,
                totalCost:0,
                item: []}}/>
          </Provider>
        )
          })