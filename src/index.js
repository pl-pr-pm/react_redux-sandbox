import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer);

//
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
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

// render(<App />, document.getElementById("root"));
