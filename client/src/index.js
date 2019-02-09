import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import history from "./history";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [reduxThunk, routerMiddleware(history)];
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.querySelector("#root")
);
