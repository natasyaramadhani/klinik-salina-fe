import { Suspense } from "react";
import KonfirmasiView from "@/components/booking/KonfirmasiView";

export const metadata = { title: "Konfirmasi" };

export default function KonfirmasiPage() {
  return (
    <Suspense fallback={null}>
      <KonfirmasiView />
    </Suspense>
  );
}