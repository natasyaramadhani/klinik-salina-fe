"use client";
import { useState } from "react";
import { Info, X } from "lucide-react";

export default function InfoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#f1f4f2] p-4 sm:p-5">
      <Info size={20} className="mt-0.5 shrink-0 text-[#3f6b50]" />
      <div className="flex-1 text-[13px] leading-snug text-neutral-600">
        <p className="mb-1 text-sm font-semibold text-[#1f3a2b]">Pendaftaran untuk satu kunjungan</p>
        Siapkan identitas dan nomor telepon aktif. Pilihan Anda dapat diubah sebelum pendaftaran
        dikonfirmasi.
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Tutup"
        className="rounded p-1 text-neutral-500 hover:bg-black/5"
      >
        <X size={16} />
      </button>
    </div>
  );
}