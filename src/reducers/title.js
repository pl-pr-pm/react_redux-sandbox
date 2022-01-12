/**
 * state と　action をどう料理するのかを定義
 *
 * @param {*} state
 * @param {*} action
 */

export const title = (state = "test title", action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return action.payload.title;
    case "WAIT":
      return "Wait";
    default:
      return state;
  }
};
