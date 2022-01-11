import React from "react";
import { render } from "react-dom";

const returnStrings = () => {
  return "ReturnString";
};

const title = "Hello world2";
const body = "こちらが本文です";
var reactElement = (
  <>
    <p>{returnStrings()}</p>
    <h1>{title}</h1>
    <p>{body}</p>
  </>
); // JSXにはObjectが格納されている

/**
 * console.log(reactElement);
 * {type: "h1", key: null, ref: null, props: Object, _owner: null…}
type: "h1"
key: null
ref: null
props: Object
_owner: null
_store: Object
 */

render(reactElement, document.getElementById("root"));
