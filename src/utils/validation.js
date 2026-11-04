// Form validation rules used by checkout.
// Each validateX function returns an error message, or "" when the value is fine.

const NAME_RE = /^[\p{L}][\p{L}\s.'-]{1,59}$/u;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^[+()\d\s-]+$/;

export function validateName(value, label = "Name") {
  const v = (value || "").trim();
  if (!v) return `${label} is required.`;
  if (!NAME_RE.test(v)) {
    return `Please enter a valid ${label.toLowerCase()} (letters only, at least 2 characters).`;
  }
  return "";
}

export function validateEmail(value) {
  const v = (value || "").trim();
  if (!v) return "Email address is required.";
  if (v.length > 254 || !EMAIL_RE.test(v)) return "Please enter a valid email address.";
  return "";
}

export function validatePhone(value) {
  const v = (value || "").trim();
  if (!v) return "Phone number is required.";
  const digits = v.replace(/\D/g, "");
  if (!PHONE_CHARS_RE.test(v) || digits.length < 10 || digits.length > 15) {
    return "Please enter a valid phone number (10 to 15 digits).";
  }
  return "";
}

export function validateAddress(value) {
  const v = (value || "").trim();
  if (!v) return "Delivery address is required.";
  if (v.length < 10) return "Please enter your complete delivery address (at least 10 characters).";
  if (v.length > 200) return "Address must be 200 characters or fewer.";
  return "";
}

export function validateCity(value) {
  const v = (value || "").trim();
  if (!v) return "City is required.";
  if (!NAME_RE.test(v)) return "Please enter a valid city name.";
  return "";
}

// Remove empty messages so "no errors" is simply an empty object.
function compact(errors) {
  const result = {};
  Object.keys(errors).forEach((key) => {
    if (errors[key]) result[key] = errors[key];
  });
  return result;
}

export function validateCheckout({ fullName, phone, email, address, city }) {
  return compact({
    fullName: validateName(fullName, "Full name"),
    phone: validatePhone(phone),
    email: validateEmail(email),
    address: validateAddress(address),
    city: validateCity(city),
  });
}
