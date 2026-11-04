// DEMO order storage. There is no server, so "placing an order" just saves the order
// in this browser's localStorage and gives it a reference number like NIKE-1001.
// Nothing is sent to a store and no payment is processed.

import { readJSON, writeJSON } from "./storage";
import { getTotals } from "../context/cartReducer";

export const ORDERS_KEY = "nike_clone_orders";
export const ORDER_COUNTER_KEY = "nike_clone_order_counter";
const FIRST_ORDER_NUMBER = 1001;

// Throws if the browser can't save the order, so the caller can show an error
// and keep the cart (it must only be cleared after this succeeds).
export function createOrder({ customer, items }) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Cannot place an order with an empty cart.");
  }

  const stored = Number(readJSON(ORDER_COUNTER_KEY, FIRST_ORDER_NUMBER - 1));
  const last = Number.isInteger(stored) && stored >= FIRST_ORDER_NUMBER - 1 ? stored : FIRST_ORDER_NUMBER - 1;
  const next = last + 1;

  // Totals are recalculated here from the items, never taken from the form.
  const { totalQuantity, subtotal, total } = getTotals(items);

  const order = {
    orderNumber: `NIKE-${next}`,
    placedAt: new Date().toISOString(),
    paymentMethod: "Cash on Delivery",
    isDemo: true,
    customer: {
      fullName: customer.fullName.trim(),
      phone: customer.phone.trim(),
      email: customer.email.trim(),
      address: customer.address.trim(),
      city: customer.city.trim(),
    },
    items: items.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.price,
      image: i.image,
      quantity: i.quantity,
    })),
    totalQuantity,
    subtotal,
    total,
  };

  // Save the counter first: if the second write fails we only skip a number,
  // we never hand out the same number twice.
  writeJSON(ORDER_COUNTER_KEY, next);
  writeJSON(ORDERS_KEY, [...readJSON(ORDERS_KEY, []), order]);
  return order;
}

export function getOrder(orderNumber) {
  return readJSON(ORDERS_KEY, []).find((o) => o.orderNumber === orderNumber) || null;
}
