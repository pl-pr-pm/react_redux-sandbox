import { combineReducers } from "redux";
import { day } from "./day";
import { number } from "./number";
import { title } from "./title";

export default combineReducers({
  number,
  day,
  title
});
