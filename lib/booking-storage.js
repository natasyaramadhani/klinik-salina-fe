"use client";

import { useMemo, useSyncExternalStore } from "react";

const KEY = "klinik:booking";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return sessionStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

export function readBooking() {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeBooking(patch) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ ...readBooking(), ...patch }));
  } catch {
    // sessionStorage tidak tersedia, abaikan
  }
}

// Mengembalikan null saat masih di server / belum hydrate, lalu objek { patient, ticket }
export function useBooking() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);
  return useMemo(() => {
    if (raw === null) return null;
    try {
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }, [raw]);
}