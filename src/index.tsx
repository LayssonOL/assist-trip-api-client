import * as React from "react";
import * as ReactDOM from "react-dom";
import configureStore from "./store/configStore";
import {Provider} from "react-redux";

import App from "./components/App";
import InitialPage from "./components/initialPage";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <InitialPage />
    </Provider>,
    document.getElementById("root")
);