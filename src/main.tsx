import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./Routes/AppRouter.tsx";
import { Provider } from "react-redux";
import store from "./Store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
