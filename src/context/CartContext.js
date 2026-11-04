import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { cartReducer, getTotals, sanitizeCart } from "./cartReducer";
import { readJSON, writeJSON } from "../utils/storage";

const CART_KEY = "nike_clone_cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // The cart is loaded from localStorage once, so it survives page refreshes.
  const [items, dispatch] = useReducer(cartReducer, null, () =>
    sanitizeCart(readJSON(CART_KEY, []))
  );

  useEffect(() => {
    try {
      writeJSON(CART_KEY, items);
    } catch (error) {
      // Storage is blocked: the cart still works, it just won't survive a refresh.
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      ...getTotals(items), // totalQuantity, subtotal, total
      // `item` needs: id (unique across the site), name, price (number), image
      addItem: (item, quantity = 1) => dispatch({ type: "ADD", item, quantity }),
      setQuantity: (id, quantity) => dispatch({ type: "SET_QUANTITY", id, quantity }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
}
