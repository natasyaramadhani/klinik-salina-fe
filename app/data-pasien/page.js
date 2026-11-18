import { Suspense } from "react";
import DataPasienView from "@/components/booking/DataPasienView";

export const metadata = { title: "Data Pasien" };

export default function DataPasienPage() {
  return (
    <Suspense fallback={null}>
      <DataPasienView />
    </Suspense>
  );
}