import React, { useContext, useEffect, useReducer } from "react";
import { items } from "../../data";
import { reducer } from "./reducer";
const AppContext = React.createContext();
const initialState = {
  products: items,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearItems = () => {
    dispatch({ type: "clear_cart" });
  };
  const removeItem = (id) => {
    dispatch({ type: "remove_item", payload: id });
  };
  const increaseAmount = (id) => {
    dispatch({ type: "increase_amount", payload: id });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: "decrease_amount", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "total" });
  }, [state.products]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
