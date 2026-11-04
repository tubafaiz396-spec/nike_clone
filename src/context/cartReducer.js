// Pure cart logic (no React in here), so it is easy to read and to test.
// A cart item looks like: { id, name, price (number), image, quantity }

export const MIN_QTY = 1;
export const MAX_QTY = 10;

// Always returns a whole number between MIN_QTY and MAX_QTY.
export function clampQuantity(value) {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n)) return MIN_QTY;
  return Math.min(MAX_QTY, Math.max(MIN_QTY, n));
}

export function cartReducer(items, action) {
  switch (action.type) {
    case "ADD": {
      const { item } = action;
      const quantity = clampQuantity(action.quantity ?? 1);
      const existing = items.find((i) => i.id === item.id);
      if (existing) {
        // Same product added again: bump the quantity instead of duplicating the row.
        return items.map((i) =>
          i.id === item.id ? { ...i, quantity: clampQuantity(i.quantity + quantity) } : i
        );
      }
      return [
        ...items,
        { id: item.id, name: item.name, price: item.price, image: item.image, quantity },
      ];
    }
    case "SET_QUANTITY":
      return items.map((i) =>
        i.id === action.id ? { ...i, quantity: clampQuantity(action.quantity) } : i
      );
    case "REMOVE":
      return items.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return items;
  }
}

export function getTotals(items) {
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  // Delivery is free in this demo, so the final total equals the subtotal.
  return { totalQuantity, subtotal, total: subtotal };
}

// Cart data comes back from localStorage, which anyone can edit, so clean it up on load.
export function sanitizeCart(raw) {
  if (!Array.isArray(raw)) return [];
  const seen = new Set();
  const clean = [];
  raw.forEach((i) => {
    if (!i || typeof i.id !== "string" || typeof i.name !== "string") return;
    const price = Number(i.price);
    if (!Number.isFinite(price) || price < 0 || seen.has(i.id)) return;
    seen.add(i.id);
    clean.push({
      id: i.id,
      name: i.name,
      price,
      image: typeof i.image === "string" ? i.image : "",
      quantity: clampQuantity(i.quantity),
    });
  });
  return clean;
}
