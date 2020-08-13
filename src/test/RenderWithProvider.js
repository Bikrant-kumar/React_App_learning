import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { itemReducer,initState }from '../Store/Reducer/itemReducer'

 const reducer = jest.fn()
function RenderWithProvider (
    ui,{
        initialState = initState,
        store = createStore(itemReducer,initialState),
        ...renderOptions
    } = {}
)
{
    // function Wrapper({children}){ 
    return render(<Provider store ={store}>{ui}</Provider>)
    }
    
    // return render(ui,{wrapper:Wrapper, ...renderOptions})
// }
export * from '@testing-library/react'
 export {RenderWithProvider};