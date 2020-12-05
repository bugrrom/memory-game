// Core
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Other
import { App } from "./element/App/App";
import { css, Global } from "@emotion/core";
import { store } from "./init/store";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              font-family: "Arial", "sans-serif", "FF Meta Serif", "Bree";
            }
          `}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
