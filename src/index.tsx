import * as React from "react";
import * as ReactDOM from "react-dom";
import configureStore from "./store/configStore";
import {Provider} from "react-redux";

import App from "./components/App";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);