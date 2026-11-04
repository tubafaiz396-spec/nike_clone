export function parsePrice(value) {
  const n = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function formatPrice(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}
