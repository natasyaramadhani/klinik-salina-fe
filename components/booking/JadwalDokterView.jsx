"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BookingHeader from "@/components/booking/BookingHeader";
import Stepper from "@/components/booking/Stepper";
import DoctorCard from "@/components/booking/DoctorCard";
import DateCard from "@/components/booking/DateCard";
import TimeSlotCard from "@/components/booking/TimeSlotCard";
import ActionBar from "@/components/booking/ActionBar";
import { steps, services, doctors, visitDates, timeSlots } from "@/lib/booking-data";

const toTitleCase = (text) =>
  text.replace(/(^|\s)(\S)/g, (_, space, char) => space + char.toUpperCase());

export default function JadwalDokterView() {
  const router = useRouter();
  const params = useSearchParams();

  const serviceId = params.get("layanan");
  const patientId = params.get("pasien") ?? "baru";
  const service = services.find((s) => s.id === serviceId) ?? services[0];
  const serviceDoctors = doctors.filter((d) => d.serviceId === service.id);

  const [doctorId, setDoctorId] = useState(params.get("dokter") ?? serviceDoctors[0]?.id);
  const [dateId, setDateId] = useState(params.get("tanggal") ?? visitDates[0].id);
  const [slotId, setSlotId] = useState(
    params.get("jam") ?? timeSlots.find((s) => s.quota > 0)?.id
  );
  
  const selectedDate = visitDates.find((d) => d.id === dateId);

  const handleNext = () =>
    router.push(
      `/data-pasien?layanan=${service.id}&pasien=${patientId}&dokter=${doctorId}&tanggal=${dateId}&jam=${slotId}`
    );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BookingHeader title="Jadwal Dokter" onBack={() => router.back()} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-8 pt-6 sm:px-6">
        <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-none">
          <Stepper steps={steps} current={2} />

          <section className="mt-8">
            <h2 className="text-xl font-bold text-[#1f3a2b]">
              Dokter di {toTitleCase(service.name)}
            </h2>
            <div role="radiogroup" className="mt-4 grid gap-3 lg:grid-cols-2">
              {serviceDoctors.map((d) => (
                <DoctorCard
                  key={d.id}
                  doctor={d}
                  serviceName={service.name}
                  selected={d.id === doctorId}
                  onSelect={setDoctorId}
                />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-[#1f3a2b]">Tanggal Kunjungan</h2>
            <div
              role="radiogroup"
              className="-mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0"
            >
              {visitDates.map((d) => (
                <DateCard key={d.id} date={d} selected={d.id === dateId} onSelect={setDateId} />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-[#1f3a2b]">Jam kunjungan</h2>
            <p className="mt-1 text-[13px] text-neutral-500">{selectedDate?.full} · WIB</p>
            <div role="radiogroup" className="mt-4 grid gap-3 md:grid-cols-3">
              {timeSlots.map((s) => (
                <TimeSlotCard key={s.id} slot={s} selected={s.id === slotId} onSelect={setSlotId} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <ActionBar
        cancelLabel="Kembali"
        onCancel={() => router.push("/pilih-layanan")}
        onNext={handleNext}
        nextDisabled={!doctorId || !dateId || !slotId}
      />
    </div>
  );
}