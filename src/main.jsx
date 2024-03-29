import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/prestige-drive">
        <App />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          closeOnClick
          rtl={false}
          theme="light"
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
