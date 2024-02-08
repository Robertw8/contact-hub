import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { ConfigProvider } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles, theme } from './styles';
import { persistor, store } from './redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/contact-hub/">
      <Provider store={store}>
        <Global styles={GlobalStyles} />
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={theme}>
            <Toaster />
            <App />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
