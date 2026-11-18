import { Stethoscope, Smile, Baby } from "lucide-react";

export const steps = ["Pilih Layanan", "Jadwal Dokter", "Data Pasien", "Konfirmasi"];

export const services = [
  {
    id: "poli-umum",
    name: "Poli umum",
    description: "Pemeriksaan kesehatan, konsultasi keluhan harian, dan perawatan umum.",
    schedule: "Hari ini · 09.00–12.00 WIB",
    icon: Stethoscope,
  },
  {
    id: "poli-gigi",
    name: "Poli gigi",
    description: "Pemeriksaan gigi dan mulut serta konsultasi perawatan kesehatan gigi.",
    schedule: "Hari ini · 08.00–12.00 WIB",
    icon: Smile,
  },
  {
    id: "kia",
    name: "Kesehatan ibu & anak",
    description: "Konsultasi kehamilan, tumbuh kembang, dan kesehatan keluarga.",
    schedule: "Hari ini · 08.00–12.00 WIB",
    icon: Baby,
  },
];

export const patientTypes = [
  { id: "baru", label: "Pasien baru" },
  { id: "lama", label: "Pasien Lama" },
];

export const doctors = [
  { id: "dini-rahayu", serviceId: "poli-umum", name: "dr. Dini Rahayu", role: "Dokter umum", experience: "6 tahun pengalaman", schedule: "Hari ini · 13.00–16.00 WIB", status: "Jadwal tersedia" },
  { id: "maya-santoso", serviceId: "poli-umum", name: "dr. Maya Santoso", role: "Dokter umum", experience: "6 tahun pengalaman", schedule: "Hari ini · 13.00–16.00 WIB", status: "Jadwal tersedia" },
  { id: "rani-putri", serviceId: "poli-gigi", name: "drg. Rani Putri", role: "Dokter gigi", experience: "5 tahun pengalaman", schedule: "Hari ini · 08.00–11.00 WIB", status: "Jadwal tersedia" },
  { id: "arif-hakim", serviceId: "poli-gigi", name: "drg. Arif Hakim", role: "Dokter gigi", experience: "8 tahun pengalaman", schedule: "Hari ini · 09.00–12.00 WIB", status: "Jadwal tersedia" },
  { id: "sari-wulandari", serviceId: "kia", name: "dr. Sari Wulandari, Sp.OG", role: "Dokter kandungan", experience: "10 tahun pengalaman", schedule: "Hari ini · 08.00–11.00 WIB", status: "Jadwal tersedia" },
  { id: "bima-prasetyo", serviceId: "kia", name: "dr. Bima Prasetyo, Sp.A", role: "Dokter anak", experience: "7 tahun pengalaman", schedule: "Hari ini · 09.00–12.00 WIB", status: "Jadwal tersedia" },
];

export const visitDates = [
  { id: "2026-10-22", day: "Kam", number: 22, label: "Hari ini", full: "Kamis, 22 Oktober 2026" },
  { id: "2026-10-23", day: "Jum", number: 23, label: "Tersedia", full: "Jumat, 23 Oktober 2026" },
  { id: "2026-10-24", day: "Sab", number: 24, label: "Tersedia", full: "Sabtu, 24 Oktober 2026" },
  { id: "2026-10-25", day: "Min", number: 25, label: "Tersedia", full: "Minggu, 25 Oktober 2026" },
];

export const timeSlots = [
  { id: "0900", time: "09.00–09.30", quota: 6 },
  { id: "0930", time: "09.30–10.00", quota: 4 },
  { id: "1000", time: "10.00–10.30", quota: 0 },
];

export const serviceRooms = {
  "poli-umum": "Ruang periksa 1",
  "poli-gigi": "Ruang gigi 1",
  kia: "Ruang KIA 1",
};

export const queuePrefixes = {
  "poli-umum": "A",
  "poli-gigi": "B",
  kia: "C",
};