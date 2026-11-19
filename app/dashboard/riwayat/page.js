"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PatientShell from "@/components/dashboard/PatientShell";
import {
  activeQueue,
  visitHistoryStats,
  allVisitHistory,
} from "@/lib/patient-dashboard-data";

const statusStyles = {
  Menunggu: "bg-[#fbf3df] text-[#9a6b16]",
  Dipanggil: "bg-[#e3effb] text-[#1d5fa3]",
  "Sedang Diperiksa": "bg-[#eae8fb] text-[#4c3fa3]",
  Selesai: "bg-[#e9f0ec] text-[#3f6b50]",
  Dibatalkan: "bg-[#fbe8e8] text-[#b43c3c]",
};

const legendStatuses = [
  "Menunggu",
  "Dipanggil",
  "Sedang Diperiksa",
  "Selesai",
  "Dibatalkan",
];

export default function RiwayatKunjunganPage() {
  const [dateRange, setDateRange] = useState("all");
  const [selectedPoli, setSelectedPoli] = useState("Semua poli");
  const [selectedStatus, setSelectedStatus] = useState("Semua status");

  const filteredVisits = allVisitHistory.filter((item) => {
    const matchPoli =
      selectedPoli === "Semua poli" || item.service === selectedPoli;
    const matchStatus =
      selectedStatus === "Semua status" || item.status === selectedStatus;
    const matchDate =
      dateRange === "all" ||
      (dateRange === "okt" && item.date.includes("Okt")) ||
      (dateRange === "sep" && item.date.includes("Sep"));
    return matchPoli && matchStatus && matchDate;
  });

  const handleReset = () => {
    setDateRange("all");
    setSelectedPoli("Semua poli");
    setSelectedStatus("Semua status");
  };

  return (
    <PatientShell breadcrumb="Riwayat kunjungan">
      {/* Header Judul */}
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1f3a2b] sm:text-3xl">
            Riwayat kunjungan
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Telusuri pendaftaran, antrian, dan kunjungan Anda.
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

      {/* 4 Kartu Ringkasan Statistik */}
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visitHistoryStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-neutral-200/80 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-[#1f3a2b]">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] text-neutral-400">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Kontainer Daftar Kunjungan */}
      <section className="mt-6 rounded-2xl border border-neutral-200/80 bg-white p-6">
        <h2 className="text-base font-bold text-[#1f3a2b]">Daftar kunjungan</h2>

        {/* Baris Filter */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="h-10 rounded-xl border border-neutral-200 bg-white px-3.5 text-xs font-medium text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
          >
            <option value="all">01 Jun–22 Okt 2026</option>
            <option value="okt">Oktober 2026</option>
            <option value="sep">September 2026</option>
          </select>

          <select
            value={selectedPoli}
            onChange={(e) => setSelectedPoli(e.target.value)}
            className="h-10 rounded-xl border border-neutral-200 bg-white px-3.5 text-xs font-medium text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
          >
            <option value="Semua poli">Semua poli</option>
            <option value="Poli umum">Poli umum</option>
            <option value="Poli gigi">Poli gigi</option>
            <option value="Kesehatan ibu & anak">Kesehatan ibu &amp; anak</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="h-10 rounded-xl border border-neutral-200 bg-white px-3.5 text-xs font-medium text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
          >
            <option value="Semua status">Semua status</option>
            {legendStatuses.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleReset}
            className="px-2 text-xs font-semibold text-[#3f6b50] hover:underline"
          >
            Reset filter
          </button>
        </div>

        {/* Legenda Status Antrian */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-neutral-400">Status antrian</span>
          <div className="flex flex-wrap items-center gap-2">
            {legendStatuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() =>
                  setSelectedStatus(
                    selectedStatus === status ? "Semua status" : status
                  )
                }
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  statusStyles[status]
                } ${
                  selectedStatus === status
                    ? "ring-2 ring-[#3f6b50] ring-offset-1"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Tabel Riwayat */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-[#f8faf9] text-xs text-neutral-500">
                <th className="rounded-l-lg px-4 py-3 font-semibold">
                  Tanggal / nomor
                </th>
                <th className="px-4 py-3 font-semibold">Poli / dokter</th>
                <th className="px-4 py-3 font-semibold">Jam · WIB</th>
                <th className="px-4 py-3 font-semibold">Status antrian</th>
                <th className="rounded-r-lg px-4 py-3 text-right font-semibold">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filteredVisits.length > 0 ? (
                filteredVisits.map((visit) => (
                  <tr key={visit.id} className="hover:bg-neutral-50/70">
                    <td className="px-4 py-4">
                      <p className="font-bold text-[#1f3a2b]">{visit.date}</p>
                      <p className="mt-0.5 text-xs text-neutral-400">
                        {visit.queueAndCode}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-[#1f3a2b]">
                        {visit.service}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-400">
                        {visit.doctor}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-xs font-medium text-neutral-600">
                      {visit.time}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                          statusStyles[visit.status]
                        }`}
                      >
                        {visit.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Link
                        href={`/dashboard/riwayat/${visit.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#3f6b50] hover:underline"
                      >
                        Detail <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-xs text-neutral-400"
                  >
                    Tidak ada riwayat kunjungan yang sesuai dengan filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel & Paginasi */}
        <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-4 sm:flex-row">
          <p className="text-xs text-neutral-400">
            Menampilkan {filteredVisits.length > 0 ? 1 : 0}–
            {filteredVisits.length} dari {allVisitHistory.length} pendaftaran
          </p>
          <span className="rounded-xl border border-neutral-200 px-3.5 py-1.5 text-xs font-semibold text-[#1f3a2b]">
            Halaman 1 dari 1
          </span>
        </div>
      </section>

      {/* Banner Informasi Bawah */}
      <div className="mt-6 rounded-2xl bg-[#e9f0ec]/70 px-6 py-4">
        <p className="text-xs font-bold text-[#1f3a2b]">
          Setiap kunjungan memiliki satu status antrian.
        </p>
        <p className="mt-1 text-xs text-neutral-600">
          Pendaftaran yang sudah divalidasi belum tentu selesai diperiksa. Buka
          detail untuk melihat tahap kunjungan dan waktu pembaruannya.
        </p>
      </div>
    </PatientShell>
  );
}