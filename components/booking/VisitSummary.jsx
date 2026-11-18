function Field({ label, value }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold text-neutral-500">{label}</p>
      <p className="mt-1 text-[15px] text-[#1f3a2b]">{value || "-"}</p>
    </div>
  );
}

export default function VisitSummary({ service, patientType }) {
  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6">
      <h3 className="text-xl font-bold text-[#1f3a2b]">Ringkasan kunjungan</h3>
      <Field label="Layanan" value={service} />
      <Field label="Jenis pasien" value={patientType} />
      <p className="mt-4 text-[13px] leading-snug text-neutral-500">
        Dokter dan waktu kunjungan akan dipilih pada langkah berikutnya.
      </p>
      <hr className="my-4 border-neutral-200" />
      <p className="text-[13px] leading-snug text-neutral-500">
        Belum terdaftar. Nomor antrean diterbitkan setelah Anda mengonfirmasi pendaftaran.
      </p>
    </section>
  );
}