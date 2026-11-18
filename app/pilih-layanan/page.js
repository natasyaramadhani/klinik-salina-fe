"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingHeader from "@/components/booking/BookingHeader";
import Stepper from "@/components/booking/Stepper";
import ServiceCard from "@/components/booking/ServiceCard";
import RadioRow from "@/components/booking/RadioRow";
import VisitSummary from "@/components/booking/VisitSummary";
import InfoBanner from "@/components/booking/InfoBanner";
import ActionBar from "@/components/booking/ActionBar";
import { steps, services, patientTypes } from "@/lib/booking-data";

export default function PilihLayananPage() {
  const router = useRouter();
  const [serviceId, setServiceId] = useState("poli-umum");
  const [patientId, setPatientId] = useState("baru");

  const service = services.find((s) => s.id === serviceId);
  const patient = patientTypes.find((p) => p.id === patientId);

  const handleNext = () =>
    router.push(`/jadwal-dokter?layanan=${serviceId}&pasien=${patientId}`);

  return (
    <div className="flex min-h-screen flex-col bg-white lg:bg-[#f6f8f6]">
      <BookingHeader title="Pilih Layanan" onBack={() => router.back()} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-8 pt-6 sm:px-6">
        <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-none">
          <Stepper steps={steps} current={1} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            {/* Kiri: form */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[#1f3a2b]">1. Pilih layanan kesehatan</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Pilih satu layanan yang sesuai dengan kebutuhan Anda.
                </p>
                <div role="radiogroup" className="mt-4 space-y-3">
                  {services.map((s) => (
                    <ServiceCard
                      key={s.id}
                      service={s}
                      selected={s.id === serviceId}
                      onSelect={setServiceId}
                    />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold leading-snug text-[#1f3a2b]">
                  2. Apakah Anda pernah berobat di Klinik Salina?
                </h2>
                <div role="radiogroup" className="mt-4 space-y-3">
                  {patientTypes.map((p) => (
                    <RadioRow
                      key={p.id}
                      label={p.label}
                      selected={p.id === patientId}
                      onSelect={() => setPatientId(p.id)}
                    />
                  ))}
                </div>
                <p className="mt-3 text-[13px] text-neutral-500">
                  Pasien baru akan mengisi data diri pada langkah Data pasien.
                </p>
              </section>
            </div>

            {/* Kanan (desktop) / bawah (mobile): ringkasan */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              <VisitSummary service={service?.name} patientType={patient?.label} />
              <InfoBanner />
            </aside>
          </div>
        </div>
      </main>

      <ActionBar
        cancelHref="/"
        nextHref={`/jadwal-dokter?layanan=${serviceId}&pasien=${patientId}`}
        nextDisabled={!service || !patient}
      />
    </div>
  );
}