import "./index.css";

import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <App /> */}
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
