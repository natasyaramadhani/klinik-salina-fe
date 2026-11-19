import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";
import PatientShell from "@/components/dashboard/PatientShell";
import {
  patientProfile,
  activeQueue,
  allVisitHistory,
  visitDetailsById,
} from "@/lib/patient-dashboard-data";

const statusBadgeStyles = {
  Menunggu: "bg-[#fbf3df] text-[#9a6b16]",
  Dipanggil: "bg-[#e3effb] text-[#1d5fa3]",
  "Sedang Diperiksa": "bg-[#eae8fb] text-[#4c3fa3]",
  Selesai: "bg-[#e9f0ec] text-[#3f6b50]",
  Dibatalkan: "bg-[#fbe8e8] text-[#b43c3c]",
};

export default async function DetailKunjunganPage({ params }) {
  const { id } = await params;

  const fallbackVisit =
    allVisitHistory.find((v) => v.id === id) ?? allVisitHistory[0];

  const detail = visitDetailsById[id] ?? {
    id: fallbackVisit.id,
    service: fallbackVisit.service,
    queueNumber: fallbackVisit.queueAndCode.split(" · ")[0],
    status: fallbackVisit.status,
    doctor: fallbackVisit.doctor,
    location:
      fallbackVisit.service === "Poli gigi"
        ? "Ruang gigi 1 · Klinik Salina"
        : "Ruang periksa 1 · Klinik Salina",
    fullDate: fallbackVisit.date,
    timeSlot: `${fallbackVisit.time} WIB`,
    validationStatus: "Tervalidasi",
    footerMeta: `Status ${fallbackVisit.status} · ${fallbackVisit.date}`,
    chiefComplaint:
      "Pemeriksaan rutin dan konsultasi keluhan kesehatan sesuai jadwal kunjungan.",
    infoTitle: `Status kunjungan: ${fallbackVisit.status}`,
    infoDescription:
      "Simpan kode pendaftaran ini sebagai referensi riwayat pelayanan Anda di Klinik Salina.",
    timeline: [
      {
        time: "08.00 WIB",
        title: "Pendaftaran diterbitkan",
        description: `Kode ${fallbackVisit.id} berhasil dibuat.`,
        completed: true,
      },
      {
        time: "08.30 WIB",
        title: "Validasi & check-in selesai",
        description: "Identitas dan BPJS telah diperiksa petugas.",
        completed: true,
      },
      {
        time: fallbackVisit.time,
        title: fallbackVisit.status,
        description: `Pelayanan di ${fallbackVisit.service} bersama ${fallbackVisit.doctor}.`,
        completed: fallbackVisit.status === "Selesai",
      },
    ],
  };

  return (
    <PatientShell breadcrumb={["Riwayat kunjungan", "Detail kunjungan"]}>
      {/* Header Judul */}
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1f3a2b] sm:text-3xl">
            Detail kunjungan
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {detail.id} · Informasi dan perjalanan kunjungan.
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-xs font-bold text-[#1f3a2b]">
            Kamis, 22 Oktober 2026
          </p>
          <p className="mt-0.5 text-[11px] text-neutral-400">
            {activeQueue.lastUpdated}
          </p>
        </div>
      </div>

      {/* Tombol Kembali */}
      <div className="mt-5">
        <Link
          href="/dashboard/riwayat"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3f6b50] hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Kembali ke riwayat kunjungan
        </Link>
      </div>

      {/* Grid 2 Kolom */}
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-start">
        {/* Kolom Kiri */}
        <div className="space-y-6">
          {/* Kartu Kunjungan Poli */}
          <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1f3a2b]">
                Kunjungan {detail.service}
              </h2>
              <span
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  statusBadgeStyles[detail.status] ??
                  "bg-[#e9f0ec] text-[#3f6b50]"
                }`}
              >
                {detail.status}
              </span>
            </div>

            {/* Nomor Antrian & Kode Pendaftaran */}
            <div className="mt-5 grid grid-cols-2 gap-4 border-b border-neutral-100 pb-5">
              <div>
                <p className="text-xs text-neutral-400">Nomor antrian</p>
                <p className="mt-1 text-base font-bold text-[#1f3a2b]">
                  {detail.queueNumber}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Kode pendaftaran</p>
                <p className="mt-1 text-base font-bold text-[#1f3a2b]">
                  {detail.id}
                </p>
              </div>
            </div>

            {/* Dokter, Lokasi, Tanggal, Jam */}
            <div className="mt-5 grid grid-cols-2 gap-y-4 border-b border-neutral-100 pb-5 text-sm">
              <div>
                <p className="text-xs text-neutral-400">
                  Dokter penanggung jawab
                </p>
                <p className="mt-1 font-semibold text-[#1f3a2b]">
                  {detail.doctor}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Lokasi</p>
                <p className="mt-1 font-semibold text-[#1f3a2b]">
                  {detail.location}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Tanggal kunjungan</p>
                <p className="mt-1 font-semibold text-[#1f3a2b]">
                  {detail.fullDate}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Jam kunjungan</p>
                <p className="mt-1 font-semibold text-[#1f3a2b]">
                  {detail.timeSlot}
                </p>
              </div>
            </div>

            {/* Pasien & Validasi */}
            <div className="mt-5">
              <p className="text-xs text-neutral-400">Pasien</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientProfile.fullName} · {patientProfile.mrn}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-neutral-500">
                  Validasi pendaftaran
                </span>
                <span className="rounded-md bg-[#e9f0ec] px-2.5 py-0.5 text-xs font-semibold text-[#3f6b50]">
                  {detail.validationStatus}
                </span>
              </div>

              <p className="mt-4 text-[11px] text-neutral-400">
                {detail.footerMeta}
              </p>
            </div>
          </section>

          {/* Kartu Keluhan Utama */}
          <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <h2 className="text-base font-bold text-[#1f3a2b]">Keluhan utama</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              {detail.chiefComplaint}
            </p>
            <p className="mt-4 text-[11px] text-neutral-400">
              Disampaikan pasien saat pendaftaran. Bukan diagnosis medis.
            </p>
          </section>

          {/* Banner Informasi Bawah */}
          <div className="flex items-start gap-3 rounded-2xl bg-[#e9f0ec]/70 px-6 py-4">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#3f6b50]" />
            <div>
              <p className="text-xs font-bold text-[#1f3a2b]">
                {detail.infoTitle}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                {detail.infoDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Perjalanan Kunjungan */}
        <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
          <h2 className="text-base font-bold text-[#1f3a2b]">
            Perjalanan kunjungan
          </h2>

          <ol className="mt-5 space-y-0">
            {detail.timeline.map((step, index) => {
              const isLast = index === detail.timeline.length - 1;
              return (
                <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {/* Garis Vertikal */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[4px] top-3 h-full w-[1.5px] bg-neutral-200"
                    />
                  )}

                  {/* Titik Indikator */}
                  <span
                    className={`relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                      step.completed ? "bg-[#3f6b50]" : "bg-neutral-300"
                    }`}
                  />

                  {/* Teks Tahapan */}
                  <div>
                    <p className="text-[11px] text-neutral-400">{step.time}</p>
                    <p className="mt-0.5 text-sm font-bold text-[#1f3a2b]">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </PatientShell>
  );
}