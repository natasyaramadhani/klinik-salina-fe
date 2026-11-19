import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import PatientShell from "@/components/dashboard/PatientShell";
import {
  patientProfile,
  activeQueue,
  historySummary,
  previousVisits,
} from "@/lib/patient-dashboard-data";

export const metadata = {
  title: "Dashboard Pasien · Klinik Salina",
};

export default function PatientDashboardPage() {
  return (
    <PatientShell breadcrumb="Dashboard">
      {/* Header Sapaan */}
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1f3a2b] sm:text-3xl">
            Selamat pagi, {patientProfile.shortName}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Informasi kunjungan Anda, dalam satu tempat.
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

      {/* Grid Utama: Kolom Kiri (Antrian Aktif) & Kolom Kanan (Profil + Ringkasan) */}
      <div className="mt-7 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-start">
        {/* Kartu Antrian Aktif */}
        <section className="rounded-2xl border border-[#3f6b50]/40 bg-white p-6 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1f3a2b]">
              Antrian aktif
            </h2>
            <span className="rounded-md bg-[#fbf3df] px-2.5 py-1 text-xs font-semibold text-[#9a6b16]">
              {activeQueue.status}
            </span>
          </div>

          {/* Nomor Antrian & Kode Pendaftaran */}
          <div className="mt-5 grid gap-6 border-b border-neutral-100 pb-6 sm:grid-cols-2">
            <div>
              <p className="text-xs text-neutral-400">Nomor antrian</p>
              <p className="mt-1 text-5xl font-bold tracking-tight text-[#3f6b50]">
                {activeQueue.queueNumber}
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                {activeQueue.poliNote}
              </p>
            </div>

            <div>
              <p className="text-xs text-neutral-400">Kode pendaftaran</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {activeQueue.registrationCode}
              </p>
              <span className="mt-2 inline-block rounded-md bg-[#e9f0ec] px-2.5 py-0.5 text-[11px] font-semibold text-[#3f6b50]">
                {activeQueue.validationStatus}
              </span>
              <p className="mt-2 text-xs text-neutral-500">
                {activeQueue.checkInTime}
              </p>
            </div>
          </div>

          {/* Detail Dokter, Layanan, Tanggal, Jam */}
          <div className="mt-5 grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <p className="text-xs text-neutral-400">Dokter</p>
              <p className="mt-0.5 font-semibold text-[#1f3a2b]">
                {activeQueue.doctor}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Layanan</p>
              <p className="mt-0.5 font-semibold text-[#1f3a2b]">
                {activeQueue.service}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Tanggal</p>
              <p className="mt-0.5 font-semibold text-[#1f3a2b]">
                {activeQueue.date}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Jam kunjungan</p>
              <p className="mt-0.5 font-semibold text-[#1f3a2b]">
                {activeQueue.timeSlot}
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-400">
            {activeQueue.location}
          </p>

          {/* Kotak Progres Antrian */}
          <div className="mt-5 rounded-xl bg-[#f5f7f6] p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-neutral-400">Sedang dipanggil</p>
                <p className="mt-0.5 text-sm font-bold text-[#1f3a2b]">
                  {activeQueue.currentCalled}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Sebelum Anda</p>
                <p className="mt-0.5 text-sm font-bold text-[#1f3a2b]">
                  {activeQueue.queuesBefore}
                </p>
              </div>
            </div>

            {/* Stepper Bar Antrian */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {activeQueue.progressSteps.map((step) => {
                const isCurrent = step === activeQueue.queueNumber;
                return (
                  <div key={step} className="text-center">
                    <div
                      className={`h-1 w-full rounded-full ${
                        isCurrent ? "bg-[#3f6b50]" : "bg-neutral-200"
                      }`}
                    />
                    <span
                      className={`mt-1.5 block text-[11px] ${
                        isCurrent
                          ? "font-bold text-[#1f3a2b]"
                          : "text-neutral-400"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-3 text-[11px] text-neutral-400">
              Urutan dihitung per poli, bukan seluruh klinik.
            </p>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            {activeQueue.delayNotice}
          </p>
          <p className="mt-3 text-[11px] text-neutral-400">
            {activeQueue.lastUpdated}
          </p>

          <Link
            href="/e-ticket"
            className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-[#3f6b50] text-sm font-semibold text-white transition hover:bg-[#2f5a40]"
          >
            Lihat detail kunjungan
          </Link>
        </section>

        {/* Kolom Kanan */}
        <div className="space-y-5">
          {/* Kartu Profil Pasien */}
          <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1f3a2b]">
                Profil pasien
              </h2>
              <Link
                href="/dashboard/profil"
                className="flex items-center gap-1 text-xs font-semibold text-[#3f6b50] hover:underline"
              >
                Lihat profil <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-4 flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f0ec] text-sm font-bold text-[#3f6b50]">
                {patientProfile.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#1f3a2b]">
                  {patientProfile.fullName}
                </p>
                <p className="text-xs text-neutral-500">
                  {patientProfile.gender} · {patientProfile.age}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-xs text-neutral-400">Nomor rekam medis</p>
                <p className="mt-0.5 font-bold text-[#1f3a2b]">
                  {patientProfile.mrn}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Nomor BPJS</p>
                <p className="mt-0.5 font-bold text-[#1f3a2b]">
                  {patientProfile.bpjsNumber}
                </p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-neutral-500">
                  Kepesertaan BPJS
                </span>
                <span className="rounded-md bg-[#e9f0ec] px-2.5 py-0.5 text-xs font-semibold text-[#3f6b50]">
                  {patientProfile.bpjsStatus}
                </span>
              </div>
            </div>
          </section>

          {/* Info Check-in */}
          <section className="flex items-start gap-3 rounded-2xl border border-neutral-200/80 bg-white p-5">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#3f6b50]" />
            <div>
              <p className="text-xs font-bold text-[#1f3a2b]">
                Anda sudah check-in
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                Silakan menunggu di ruang tunggu Poli umum. Petugas akan
                memanggil sesuai urutan antrian.
              </p>
            </div>
          </section>

          {/* Kartu Ringkasan Riwayat */}
          <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <h2 className="text-base font-bold text-[#1f3a2b]">
              Ringkasan riwayat
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 border-b border-neutral-100 pb-4">
              <div>
                <p className="text-xs text-neutral-400">Kunjungan selesai</p>
                <p className="mt-0.5 text-sm font-bold text-[#1f3a2b]">
                  {historySummary.completedCount}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Terakhir berkunjung</p>
                <p className="mt-0.5 text-sm font-bold text-[#1f3a2b]">
                  {historySummary.lastVisit}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500">
              <span>{historySummary.canceledNote} ·</span>
              <Link
                href="/dashboard/riwayat"
                className="inline-flex items-center gap-1 font-semibold text-[#3f6b50] hover:underline"
              >
                Lihat riwayat <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Tabel Kunjungan Sebelumnya */}
      <section className="mt-6 rounded-2xl border border-neutral-200/80 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#1f3a2b]">
            Kunjungan sebelumnya
          </h2>
          <Link
            href="/dashboard/riwayat"
            className="flex items-center gap-1 text-xs font-semibold text-[#3f6b50] hover:underline"
          >
            Semua riwayat <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
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
              {previousVisits.map((visit) => (
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
                    <span className="rounded-md bg-[#e9f0ec] px-2.5 py-1 text-xs font-semibold text-[#3f6b50]">
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
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PatientShell>
  );
}