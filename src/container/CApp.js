import { connect } from "react-redux";
import { App } from "../components/App";
import { plus, minus, asyncMinus, getJson } from "../actions/action";

const mapStateToProps = (state) => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

/**
 *
 * storeに対して、dispatchするが、
 * actionのtypeと引数を定義
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    plus: (num) => {
      dispatch(plus(num));
    },
    minus: (num) => {
      dispatch(minus(num));
    },
    asyncMinus: (num) => {
      dispatch(asyncMinus(num));
    },
    getJson: () => {
      dispatch(getJson());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
