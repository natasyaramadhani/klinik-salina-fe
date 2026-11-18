"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import BookingHeader from "@/components/booking/BookingHeader";
import Stepper from "@/components/booking/Stepper";
import ActionBar from "@/components/booking/ActionBar";
import SummaryCard from "@/components/booking/SummaryCard";
import InfoRow from "@/components/booking/InfoRow";
import {
  steps,
  services,
  patientTypes,
  doctors,
  visitDates,
  timeSlots,
  serviceRooms,
  queuePrefixes,
} from "@/lib/booking-data";
import { formatDateID, pad } from "@/lib/format";
import { useBooking, writeBooking } from "@/lib/booking-storage";

export default function KonfirmasiView() {
  const router = useRouter();
  const params = useSearchParams();
  const booking = useBooking();
  const [agreed, setAgreed] = useState(false);

  const query = params.toString();
  const service = services.find((s) => s.id === params.get("layanan"));
  const patientType = patientTypes.find((p) => p.id === params.get("pasien"));
  const doctor = doctors.find((d) => d.id === params.get("dokter"));
  const date = visitDates.find((d) => d.id === params.get("tanggal"));
  const slot = timeSlots.find((s) => s.id === params.get("jam"));
  const patient = booking?.patient;

  const ready = !!(service && patientType && doctor && date && slot && patient);

  const handleRegister = () => {
    if (!ready) return;
    const number = String(Math.floor(Math.random() * 99) + 1).padStart(3, "0");
    const [y, m, d] = date.id.split("-");
    const now = new Date();
    writeBooking({
      ticket: {
        code: `SLN-${d}${m}${y.slice(2)}-${number}`,
        queue: `${queuePrefixes[service.id]}-${number}`,
        registeredAt: `${formatDateID(date.id)} · ${pad(now.getHours())}.${pad(now.getMinutes())} WIB`,
        serviceName: service.name,
      },
    });
    router.push("/e-ticket");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BookingHeader title="Konfirmasi" onBack={() => router.back()} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-8 pt-6 sm:px-6">
        <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-4xl">
          <Stepper steps={steps} current={4} />

          {booking && !ready && (
            <div className="mt-10 rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-[15px] text-[#1f3a2b]">
                Data pendaftaran belum lengkap. Silakan mulai dari awal.
              </p>
              <Link
                href="/pilih-layanan"
                className="mt-4 inline-flex h-11 items-center rounded-lg bg-[#3f6b50] px-5 text-sm font-semibold text-white hover:bg-[#2f5a40]"
              >
                Ke Pilih Layanan
              </Link>
            </div>
          )}

          {ready && (
            <>
              <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:items-start">
                <SummaryCard title="Ringkasan kunjungan" editHref="/pilih-layanan">
                  <div className="space-y-5">
                    <InfoRow label="Layanan" value={service.name} />
                    <InfoRow label="Jenis pasien" value={patientType.label} />
                  </div>
                  <hr className="my-5 border-neutral-200" />
                  <div className="space-y-5">
                    <InfoRow label="Dokter" value={doctor.name} />
                    <InfoRow label="Tanggal kunjungan" value={date.full} />
                    <InfoRow label="Waktu kunjungan" value={`${slot.time} WIB`} strong />
                    <InfoRow
                      label="Lokasi"
                      value={`Klinik Salina · ${serviceRooms[service.id]}`}
                    />
                  </div>
                </SummaryCard>

                <SummaryCard title="Identitas pasien" editHref={`/data-pasien?${query}`}>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <InfoRow label="Nama Lengkap" value={patient.nama} className="col-span-2" />
                    <InfoRow label="Tanggal Lahir" value={formatDateID(patient.tglLahir)} />
                    <InfoRow label="Jenis Kelamin" value={patient.gender} />
                    <InfoRow label="Nomor WhatsApp" value={patient.wa} />
                    <InfoRow label="Email" value={patient.email} />
                    <InfoRow
                      label="Alamat Domisili"
                      value={patient.alamat}
                      className="col-span-2"
                    />
                  </div>
                </SummaryCard>
              </div>

              <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-neutral-200 p-4 sm:p-5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white text-white transition peer-checked:border-[#3f6b50] peer-checked:bg-[#3f6b50] peer-focus-visible:ring-2 peer-focus-visible:ring-[#3f6b50] peer-focus-visible:ring-offset-2 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-snug text-[#1f3a2b]">
                  Saya menyatakan data yang diisi benar dan menyetujui penggunaan data untuk
                  pelayanan klinik.
                </span>
              </label>
            </>
          )}
        </div>
      </main>

      <ActionBar
        cancelLabel="Kembali"
        cancelHref={`/data-pasien?${query}`}
        nextLabel="Daftar Sekarang"
        onNext={handleRegister}
        nextDisabled={!ready || !agreed}
      />
    </div>
  );
}