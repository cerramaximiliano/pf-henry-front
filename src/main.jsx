import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import "./index.css";
import FiltersProvider from "./context/filter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter> 
    <Provider store={store}>
      <FiltersProvider>
      <App /> 
      </FiltersProvider>
      </Provider>
    </BrowserRouter>
 
);
