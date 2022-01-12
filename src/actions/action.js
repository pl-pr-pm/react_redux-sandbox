import axios from "axios";

export const plus = (num) => {
  return { type: "PLUS", payload: { num: num } };
};

export const minus = (num) => {
  return { type: "MINUS", payload: { num: num } };
};

// 非同期の場合、actionではなく関数を返却する
export const asyncMinus = (num) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "MINUS", payload: { num: num } });
    }, 1000);
  };
};

export const changeTitle = (title) => {
  return { type: "CHANGE_TITLE", payload: { title: title } };
};

export const getJson = () => {
  const url = "https://myjson.dit.upm.es/api/bins/6xen";
  return (dispatch) => {
    dispatch({ type: "WAIT" });
    axios
      .get(url)
      .then((res) => {
        dispatch(changeTitle(res.data.member[0].name));
      })
      .catch((e) => console.log(e));
  };
};
