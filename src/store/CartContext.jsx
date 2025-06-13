import { createContext } from "react";

// Set default context value to enable better auto-completion and tooling support
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
