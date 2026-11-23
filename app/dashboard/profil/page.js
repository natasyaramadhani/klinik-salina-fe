"use client";

import { useState } from "react";
import { Info, X, CheckCircle2 } from "lucide-react";
import PatientShell from "@/components/dashboard/PatientShell";
import {
  activeQueue,
  patientDetailProfile,
} from "@/lib/patient-dashboard-data";

export default function ProfilPasienPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    whatsapp: patientDetailProfile.whatsapp,
    email: patientDetailProfile.email,
    address: patientDetailProfile.address,
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
  };

  return (
    <PatientShell breadcrumb="Profil pasien">
      {/* Header Judul */}
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#1f3a2b] sm:text-3xl">
            Profil pasien
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Identitas, rekam medis, dan informasi kepesertaan Anda.
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

      {/* Banner Profil Utama */}
      <section className="mt-7 flex flex-col justify-between gap-4 rounded-2xl bg-[#e9f0ec] px-6 py-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-[#3f6b50]">
            {patientDetailProfile.initials}
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1f3a2b]">
              {patientDetailProfile.fullName}
            </h2>
            <p className="mt-0.5 text-xs text-neutral-600">
              Nomor rekam medis · {patientDetailProfile.mrn}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-neutral-200/80 bg-white px-4 text-xs font-semibold text-[#1f3a2b] shadow-2xs transition hover:border-[#3f6b50] hover:bg-[#f6f8f6]"
        >
          Ajukan perubahan
        </button>
      </section>

      {/* Grid 2 Kolom: Identitas & Kontak + Informasi BPJS */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-start">
        {/* Kolom Kiri: Identitas & Kontak */}
        <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
          <h2 className="text-base font-bold text-[#1f3a2b]">
            Identitas &amp; kontak
          </h2>

          {/* Nama, NIK, Tanggal Lahir, Jenis Kelamin */}
          <div className="mt-5 grid gap-y-5 border-b border-neutral-100 pb-6 sm:grid-cols-2">
            <div>
              <p className="text-xs text-neutral-400">Nama lengkap</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.fullName}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">NIK</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.nik}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Tanggal lahir</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.birthDate}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Jenis kelamin</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.gender}
              </p>
            </div>
          </div>

          {/* WhatsApp, Email, Alamat Domisili */}
          <div className="mt-5 grid gap-y-5 sm:grid-cols-2">
            <div>
              <p className="text-xs text-neutral-400">Nomor WhatsApp</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.whatsapp}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Email</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.email}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs text-neutral-400">Alamat domisili</p>
              <p className="mt-1 text-sm font-bold text-[#1f3a2b]">
                {patientDetailProfile.address}
              </p>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-neutral-400">
            Perubahan identitas perlu diverifikasi petugas untuk menjaga
            kesesuaian rekam medis.
          </p>
        </section>

        {/* Kolom Kanan: Informasi BPJS & Catatan Privasi */}
        <div className="space-y-5">
          <section className="rounded-2xl border border-neutral-200/80 bg-white p-6">
            <h2 className="text-base font-bold text-[#1f3a2b]">
              Informasi BPJS
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs font-semibold text-[#1f3a2b]">
                {patientDetailProfile.bpjsType}
              </p>
              <span className="rounded-md bg-[#e9f0ec] px-2.5 py-0.5 text-xs font-semibold text-[#3f6b50]">
                {patientDetailProfile.bpjsStatus}
              </span>
            </div>

            <div className="mt-4 space-y-4 border-b border-neutral-100 pb-5 text-sm">
              <div>
                <p className="text-xs text-neutral-400">Nomor peserta</p>
                <p className="mt-1 font-bold text-[#1f3a2b]">
                  {patientDetailProfile.bpjsNumber}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">Nama peserta</p>
                <p className="mt-1 font-bold text-[#1f3a2b]">
                  {patientDetailProfile.bpjsParticipantName}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-400">
                  Fasilitas kesehatan tingkat 1
                </p>
                <p className="mt-1 font-bold text-[#1f3a2b]">
                  {patientDetailProfile.faskes1}
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-neutral-400">
              {patientDetailProfile.bpjsVerifiedNote}
            </p>
          </section>

          {/* Info Data Pribadi */}
          <section className="flex items-start gap-3 px-2 py-1">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#3f6b50]" />
            <div>
              <p className="text-xs font-bold text-[#1f3a2b]">
                Data pribadi Anda
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                NIK dan nomor BPJS disamarkan. Hubungi petugas jika data
                identitas atau kepesertaan tidak sesuai.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Modal Ajukan Perubahan */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#1f3a2b]">
                Ajukan perubahan data
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#3f6b50]" />
                <p className="mt-3 text-sm font-bold text-[#1f3a2b]">
                  Pengajuan perubahan terkirim
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  Petugas Klinik Salina akan memverifikasi pembaruan data Anda
                  saat kunjungan berikutnya atau melalui WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 h-10 w-full rounded-xl bg-[#3f6b50] text-xs font-semibold text-white hover:bg-[#2f5a40]"
                >
                  Tutup
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-600">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="mt-1 h-10 w-full rounded-xl border border-neutral-200 px-3 text-sm text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 h-10 w-full rounded-xl border border-neutral-200 px-3 text-sm text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600">
                    Alamat domisili
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="mt-1 h-10 w-full rounded-xl border border-neutral-200 px-3 text-sm text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600">
                    Catatan perubahan (NIK / BPJS / lainnya)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Pembaruan nomor kartu BPJS..."
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                    className="mt-1 w-full rounded-xl border border-neutral-200 p-3 text-sm text-[#1f3a2b] focus:border-[#3f6b50] focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="h-10 flex-1 rounded-xl border border-neutral-200 text-xs font-semibold text-[#1f3a2b] hover:bg-neutral-50"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="h-10 flex-1 rounded-xl bg-[#3f6b50] text-xs font-semibold text-white hover:bg-[#2f5a40]"
                  >
                    Kirim pengajuan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </PatientShell>
  );
}