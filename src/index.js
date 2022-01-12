import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import CApp from "./container/CApp";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWares));

//
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <CApp />
  </Provider>,
  document.getElementById("root")
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <></>;
//   }
// }

// import React from "react";
//import { render } from "react-dom";
