/**
 * state と　action をどう料理するのかを定義
 *
 * @param {*} state
 * @param {*} action
 */

export const day = (state = "test day", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
