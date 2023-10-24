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
		<Provider store={store}>
			<Global styles={globalStyles} />
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename='/goit-react-hw-08-phonebook/'>
					<ConfigProvider theme={theme}>
						<App />
					</ConfigProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
