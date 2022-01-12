/**
 * state と　action をどう料理するのかを定義
 *
 * @param {*} state
 * @param {*} action
 */

export const title = (state = "test title", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
