import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";
import { PersistGate } from "redux-persist/integration/react";
import { ConfigProvider } from "antd";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/contact-hub/">
      <Provider store={store}>
        <Global styles={globalStyles} />
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={theme}>
            <App />
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
