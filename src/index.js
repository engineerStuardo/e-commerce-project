import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';

import './index.css';

import App from './App';
import { store, persistor } from './redux/store';
import { options } from './alert/alert-config';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
