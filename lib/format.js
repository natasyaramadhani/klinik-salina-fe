const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatDateID(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function calcAge(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const now = new Date();
  let age = now.getFullYear() - y;
  if (now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d)) age -= 1;
  return age;
}

export function formatPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 14);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return /^(08\d{8,11}|628\d{8,12})$/.test(digits);
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const pad = (n) => String(n).padStart(2, "0");