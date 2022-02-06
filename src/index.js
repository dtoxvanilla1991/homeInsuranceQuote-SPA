import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import loadingGif from "./assets/loading.gif";
import { Provider } from "react-redux";
import store from './store';

ReactDOM.render(
    <Router>
      <Suspense
        fallback={<img className="loading" src={loadingGif} alt="loading" />}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </Router>,
  document.getElementById("root")
);

reportWebVitals();
