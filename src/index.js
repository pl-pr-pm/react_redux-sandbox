import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import CApp from "./container/CApp";
import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer);

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

// render(<App />, document.getElementById("root"));
