/**
 * state と　action をどう料理するのかを定義
 *
 * @param {*} state
 * @param {*} action
 */

export const number = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + action.payload.num;
    case "MINUS":
      return state - action.payload.num;
    default:
      return state;
  }
};
