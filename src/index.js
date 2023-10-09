import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./views/App";
//sử dụng redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReduce from "./store/reducers/rootReduce";

const root = ReactDOM.createRoot(document.getElementById("root"));
const reduxStore = createStore(rootReduce); // phiên bản cũ
root.render(
  <React.StrictMode>
    {/*(bọc Provider) Ép react khởi tạo cùng redux với store được tạo từ hàm rootReduce  */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
