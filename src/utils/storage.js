// Small helpers around localStorage.
//
// readJSON  never throws: if storage is blocked or the data is damaged you get the fallback.
// writeJSON THROWS if the data could not be saved (private browsing, storage full...).
//           Callers that must not pretend success (accounts, orders) catch that error.

export function readJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

export function writeJSON(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // nothing to remove if storage is unavailable
  }
}
