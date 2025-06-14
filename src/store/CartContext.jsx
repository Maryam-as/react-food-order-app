import { createContext, useReducer } from "react";

// Set default context value to enable better auto-completion and tooling support
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // Check if the item to add already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Create a copy of the current items array to update immutably
    const updatedItems = [...state.items];

    // findIndex() will return -1 if it cannot find an item
    // so if existingCartItemIndex > -1 means the item already exists in the items array
    if (existingCartItemIndex > -1) {
      // If the item exists, increase its quantity
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      // Replace the old item with the updated one in the copied array
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If the item is new, add it to the cart
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    // Return the new state with the updated items array
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
