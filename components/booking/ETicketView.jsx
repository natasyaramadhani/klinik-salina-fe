"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";
import BookingHeader from "@/components/booking/BookingHeader";
import { useBooking } from "@/lib/booking-storage";

export default function ETicketView() {
  const router = useRouter();
  const booking = useBooking();
  const ticket = booking?.ticket;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BookingHeader title="E-Ticket" onBack={() => router.push("/pilih-layanan")} />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-10 pt-8 sm:px-6">
        <div className="mx-auto max-w-md">
          {booking && !ticket && (
            <div className="rounded-xl border border-neutral-200 p-6 text-center">
              <p className="text-[15px] text-[#1f3a2b]">Belum ada tiket. Silakan daftar terlebih dahulu.</p>
              <Link
                href="/pilih-layanan"
                className="mt-4 inline-flex h-11 items-center rounded-lg bg-[#3f6b50] px-5 text-sm font-semibold text-white hover:bg-[#2f5a40]"
              >
                Ke Pilih Layanan
              </Link>
            </div>
          )}

          {ticket && (
            <>
              <div className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e3ece5]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2f5a40] text-white">
                    <Check size={20} strokeWidth={3} />
                  </span>
                </span>
                <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1f3a2b]">
                  Pendaftaran Berhasil!
                </h2>
                <p className="mt-3 max-w-xs text-[13px] leading-snug text-neutral-500">
                  Nomor antrian Anda telah terbit dan tersimpan otomatis di sistem Klinik Salina.
                </p>
              </div>

              <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
                <p className="text-[13px] text-neutral-500">Kode pendaftaran</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-[#1f3a2b]">{ticket.code}</p>
                <p className="mt-2 text-xs text-neutral-500">{ticket.registeredAt}</p>

                <hr className="my-5 border-neutral-200" />

                <p className="text-[13px] text-neutral-500">Nomor antrean Anda</p>

                <div className="mt-4 flex flex-col items-center">
                  <div className="rounded-2xl bg-[#d9eadd] p-6 shadow-sm">
                    <QRCodeSVG
                      value={ticket.code}
                      size={112}
                      bgColor="transparent"
                      fgColor="#1f4631"
                      level="M"
                    />
                  </div>
                  <p className="mt-4 text-6xl font-bold tracking-wide text-[#1f3a2b]">
                    {ticket.queue}
                  </p>
                </div>

                <p className="mt-8 text-[17px] font-medium leading-snug text-[#1f3a2b]">
                  Tunjukkan bukti ini kepada petugas saat tiba.
                </p>
                <p className="mt-2 text-sm leading-snug text-neutral-500">
                  Nomor antrean berlaku untuk {ticket.serviceName} pada tanggal kunjungan yang
                  tercantum.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}