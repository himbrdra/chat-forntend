import reactDOM from "react-dom";
import App from "./App";
import store from "./components/store";
import { Provider } from "react-redux";

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
