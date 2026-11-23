export const patientProfile = {
  initials: "AR",
  fullName: "Alya Rahmawati",
  shortName: "Alya",
  gender: "Perempuan",
  age: "29 tahun",
  mrn: "RM-004218",
  bpjsNumber: "0001 •••• ••218",
  bpjsStatus: "Aktif",
};

export const activeQueue = {
  status: "Menunggu",
  queueNumber: "A-018",
  poliNote: "Khusus Poli umum",
  registrationCode: "SLN-221026-018",
  validationStatus: "Tervalidasi",
  checkInTime: "Check-in · 08.42 WIB",
  doctor: "dr. Dini Rahayu",
  service: "Poli umum",
  date: "22 Oktober 2026",
  timeSlot: "09.00–09.30 WIB",
  location: "Klinik Salina · Ruang periksa 1",
  currentCalled: "A-015",
  queuesBefore: "3 antrian",
  progressSteps: ["A-015", "A-016", "A-017", "A-018"],
  delayNotice:
    "Pelayanan terlambat dari slot kunjungan. Panggilan mengikuti urutan dan durasi pemeriksaan.",
  lastUpdated: "Diperbarui 22 Okt 2026 · 10.12 WIB",
};

export const historySummary = {
  completedCount: "3 kunjungan",
  lastVisit: "14 Sep 2026",
  canceledNote: "1 pendaftaran dibatalkan",
};

export const previousVisits = [
  {
    id: "SLN-140926-007",
    date: "14 Sep 2026",
    queueAndCode: "A-007 · SLN-140926-007",
    service: "Poli umum",
    doctor: "dr. Dini Rahayu",
    time: "09.30–10.00",
    status: "Selesai",
  },
  {
    id: "SLN-120826-004",
    date: "12 Agu 2026",
    queueAndCode: "B-004 · SLN-120826-004",
    service: "Poli gigi",
    doctor: "drg. Maya Santoso",
    time: "10.00–10.30",
    status: "Selesai",
  },
];

export const visitHistoryStats = [
  { label: "Seluruh pendaftaran", value: "5", sub: "Juni–Oktober 2026" },
  { label: "Kunjungan aktif", value: "1", sub: "Menunggu · Poli umum" },
  { label: "Kunjungan selesai", value: "3", sub: "Riwayat pelayanan" },
  { label: "Dibatalkan", value: "1", sub: "Tidak termasuk kunjungan selesai" },
];

export const allVisitHistory = [
  {
    id: "SLN-221026-018",
    date: "22 Okt 2026",
    queueAndCode: "A-018 · SLN-221026-018",
    service: "Poli umum",
    doctor: "dr. Dini Rahayu",
    time: "09.00–09.30",
    status: "Menunggu",
  },
  {
    id: "SLN-140926-007",
    date: "14 Sep 2026",
    queueAndCode: "A-007 · SLN-140926-007",
    service: "Poli umum",
    doctor: "dr. Dini Rahayu",
    time: "09.30–10.00",
    status: "Selesai",
  },
  {
    id: "SLN-120826-004",
    date: "12 Agu 2026",
    queueAndCode: "B-004 · SLN-120826-004",
    service: "Poli gigi",
    doctor: "drg. Maya Santoso",
    time: "10.00–10.30",
    status: "Selesai",
  },
  {
    id: "SLN-090726-011",
    date: "09 Jul 2026",
    queueAndCode: "A-011 · SLN-090726-011",
    service: "Poli umum",
    doctor: "dr. Dini Rahayu",
    time: "09.00–09.30",
    status: "Dibatalkan",
  },
  {
    id: "SLN-110626-006",
    date: "11 Jun 2026",
    queueAndCode: "A-006 · SLN-110626-006",
    service: "Poli umum",
    doctor: "dr. Dini Rahayu",
    time: "09.30–10.00",
    status: "Selesai",
  },
];

export const visitDetailsById = {
  "SLN-221026-018": {
    id: "SLN-221026-018",
    service: "Poli umum",
    queueNumber: "A-018",
    status: "Menunggu",
    doctor: "dr. Dini Rahayu",
    location: "Ruang periksa 1 · Klinik Salina",
    fullDate: "Kamis, 22 Oktober 2026",
    timeSlot: "09.00–09.30 WIB",
    validationStatus: "Tervalidasi",
    footerMeta: "Check-in 08.42 WIB · Diperbarui 22 Okt 2026 · 10.12 WIB",
    chiefComplaint:
      "Demam ringan dan sakit tenggorokan sejak dua hari terakhir. Pasien ingin berkonsultasi dengan dokter umum.",
    infoTitle: "Menunggu di Poli umum",
    infoDescription:
      "Nomor antrian berlaku per poli. Siapkan identitas dan kartu BPJS saat petugas memanggil.",
    timeline: [
      {
        time: "08.30 WIB",
        title: "Pendaftaran diterbitkan",
        description: "Kode SLN-221026-018 berhasil dibuat.",
        completed: true,
      },
      {
        time: "08.42 WIB",
        title: "Validasi & check-in selesai",
        description: "Identitas dan BPJS telah diperiksa petugas.",
        completed: true,
      },
      {
        time: "10.12 WIB",
        title: "Menunggu giliran",
        description: "3 antrian sebelum Anda di Poli umum.",
        completed: true,
      },
      {
        time: "Berikutnya",
        title: "Dipanggil → Sedang Diperiksa",
        description: "Petugas mengarahkan Anda ke ruang periksa 1.",
        completed: false,
      },
      {
        time: "Terakhir",
        title: "Selesai",
        description: "Kunjungan ditutup setelah pemeriksaan.",
        completed: false,
      },
    ],
  },
};

export const patientDetailProfile = {
  initials: "AR",
  fullName: "Alya Rahmawati",
  mrn: "RM-004218",
  nik: "3273 •••• •••• 0218",
  birthDate: "14 Mei 1997 · 29 tahun",
  gender: "Perempuan",
  whatsapp: "0812 3456 7890",
  email: "alya.rahmawati@example.com",
  address: "Jl. Melati No. 12, Bandung",
  bpjsType: "BPJS Kesehatan",
  bpjsStatus: "Aktif",
  bpjsNumber: "0001 •••• ••218",
  bpjsParticipantName: "Alya Rahmawati",
  faskes1: "Klinik Salina",
  bpjsVerifiedNote:
    "Diverifikasi petugas pada 22 Okt 2026, 08.42 WIB. Kepesertaan diperiksa kembali setiap kunjungan.",
};