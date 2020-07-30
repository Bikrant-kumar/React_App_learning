import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/Pages/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import itemReducer from "./Store/Reducer/itemReducer";
import { Provider } from "react-redux";

const store = createStore(itemReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
