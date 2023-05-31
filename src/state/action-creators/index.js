export const addtoCart = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: amount,
    });
  };
};

export const removetoCart = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "remove",
      payload: amount,
    });
  };
};
