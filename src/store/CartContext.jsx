import { createContext, useReducer } from "react";

// Set default context value to enable better auto-completion and tooling support
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // TODO: update the state to add a meal item
  }

  if (action.type === "REMOVE_ITEM") {
    // TODO: remove an item from the state
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer();

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
