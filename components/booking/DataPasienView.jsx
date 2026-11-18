"use client";

import { CircleAlert } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import BookingHeader from "@/components/booking/BookingHeader";
import Stepper from "@/components/booking/Stepper";
import ActionBar from "@/components/booking/ActionBar";
import PatientForm, { emptyPatient } from "@/components/booking/PatientForm";
import { steps, patientTypes } from "@/lib/booking-data";
import { useBooking, writeBooking } from "@/lib/booking-storage";

export default function DataPasienView() {
  const router = useRouter();
  const params = useSearchParams();
  const booking = useBooking();

  const query = params.toString();
  const patientType = patientTypes.find((p) => p.id === params.get("pasien")) ?? patientTypes[0];

  const handleSubmit = (patient) => {
    writeBooking({ patient });
    router.push(`/konfirmasi?${query}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BookingHeader title="Data Pasien" onBack={() => router.back()} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-8 pt-6 sm:px-6">
        <div className="mx-auto max-w-md sm:max-w-xl">
          <Stepper steps={steps} current={3} />

          <div className="mt-8 flex gap-3 rounded-xl border border-neutral-200 bg-[#f1f5f2] p-4 sm:p-5">
            <CircleAlert size={22} className="mt-0.5 shrink-0 text-[#3f6b50]" />
            <div className="text-[13px] leading-snug text-neutral-600">
              <p className="mb-1 text-[15px] font-semibold text-[#1f3a2b]">
                Periksa sebelum melanjutkan
              </p>
              Nama harus sesuai identitas. Gunakan nomor WhatsApp aktif agar petugas dapat
              menghubungi Anda bila ada perubahan jadwal.
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#1f3a2b]">Identitas pasien</h2>
            <p className="mb-6 mt-1 text-[13px] text-neutral-500">
              {patientType.label} · Kolom bertanda <span className="text-[#b3261e]">*</span> wajib
              diisi.
            </p>

            {booking && (
              <PatientForm
                formId="form-pasien"
                initial={booking.patient ?? emptyPatient}
                onSubmit={handleSubmit}
              />
            )}
          </section>
        </div>
      </main>

      <ActionBar cancelLabel="Kembali" cancelHref={`/jadwal-dokter?${query}`} nextForm="form-pasien" />
    </div>
  );
}