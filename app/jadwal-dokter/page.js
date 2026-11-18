import { Suspense } from "react";
import JadwalDokterView from "@/components/booking/JadwalDokterView";

export const metadata = { title: "Jadwal Dokter" };

export default function JadwalDokterPage() {
  return (
    <Suspense fallback={null}>
      <JadwalDokterView />
    </Suspense>
  );
}