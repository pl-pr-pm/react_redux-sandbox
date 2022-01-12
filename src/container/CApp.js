import { connect } from "react-redux";
import { App } from "../components/App";
import { plus, minus } from "../actions/action";

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
