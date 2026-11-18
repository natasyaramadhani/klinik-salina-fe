"use client";

import { useState } from "react";
import { Calendar, Check, ChevronDown } from "lucide-react";
import Field, { inputBase, inputState } from "@/components/booking/Field";
import { calcAge, formatPhone, isValidEmail, isValidPhone } from "@/lib/format";

export const emptyPatient = { nama: "", tglLahir: "", gender: "", wa: "", email: "", alamat: "" };

const genders = ["Perempuan", "Laki-laki"];

function validate(v) {
  const e = {};
  const today = new Date().toISOString().slice(0, 10);
  if (!v.nama.trim()) e.nama = "Nama lengkap wajib diisi.";
  if (!v.tglLahir) e.tglLahir = "Tanggal lahir wajib diisi.";
  else if (v.tglLahir > today) e.tglLahir = "Tanggal lahir tidak valid.";
  if (!v.gender) e.gender = "Pilih jenis kelamin.";
  if (!v.wa.trim()) e.wa = "Nomor WhatsApp wajib diisi.";
  else if (!isValidPhone(v.wa)) e.wa = "Format nomor tidak sesuai.";
  if (v.email.trim() && !isValidEmail(v.email.trim())) e.email = "Format email tidak sesuai.";
  if (!v.alamat.trim()) e.alamat = "Alamat domisili wajib diisi.";
  return e;
}

export default function PatientForm({ formId, initial, onSubmit }) {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(values);
  const show = (key) => (submitted || touched[key] ? errors[key] : undefined);
  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const blur = (key) => () => setTouched((t) => ({ ...t, [key]: true }));

  const phoneValid = values.wa && !errors.wa;
  const today = new Date().toISOString().slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length > 0) return;
    onSubmit({
      ...values,
      nama: values.nama.trim(),
      email: values.email.trim(),
      alamat: values.alamat.trim(),
    });
  };

  return (
    <form id={formId} onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field
        id="nama"
        label="Nama lengkap"
        required
        hint="Tulis nama sesuai identitas."
        error={show("nama")}
      >
        <input
          id="nama"
          type="text"
          autoComplete="name"
          value={values.nama}
          onChange={set("nama")}
          onBlur={blur("nama")}
          aria-invalid={!!show("nama")}
          className={`${inputBase} ${inputState(show("nama"))}`}
        />
      </Field>

      <div className="grid grid-cols-2 items-start gap-x-3 gap-y-6">
        <Field
          id="tglLahir"
          label="Tanggal lahir"
          required
          hint={values.tglLahir && !errors.tglLahir ? `Usia ${calcAge(values.tglLahir)} tahun` : undefined}
          error={show("tglLahir")}
        >
          <div className="relative">
            <input
              id="tglLahir"
              type="date"
              max={today}
              value={values.tglLahir}
              onChange={set("tglLahir")}
              onBlur={blur("tglLahir")}
              aria-invalid={!!show("tglLahir")}
              className={`${inputBase} ${inputState(show("tglLahir"))} relative cursor-pointer pr-10 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 ${
                values.tglLahir ? "" : "text-neutral-400"
              }`}
            />
            <Calendar
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>
        </Field>

        <Field id="gender" label="Jenis kelamin" required error={show("gender")}>
          <div className="relative">
            <select
              id="gender"
              value={values.gender}
              onChange={set("gender")}
              onBlur={blur("gender")}
              aria-invalid={!!show("gender")}
              className={`${inputBase} ${inputState(show("gender"))} cursor-pointer appearance-none pr-10 ${
                values.gender ? "" : "text-neutral-400"
              }`}
            >
              <option value="">Pilih</option>
              {genders.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />
          </div>
        </Field>

        <Field
          id="wa"
          label="Nomor WhatsApp"
          required
          hint={phoneValid ? "Format nomor sudah sesuai." : undefined}
          valid={phoneValid}
          error={show("wa")}
        >
          <div className="relative">
            <input
              id="wa"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="0812 3456 7890"
              value={values.wa}
              onChange={(e) => setValues((v) => ({ ...v, wa: formatPhone(e.target.value) }))}
              onBlur={blur("wa")}
              aria-invalid={!!show("wa")}
              className={`${inputBase} ${inputState(show("wa"), phoneValid)} pr-10`}
            />
            {phoneValid && (
              <span className="pointer-events-none absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#3f6b50] text-[#3f6b50]">
                <Check size={11} strokeWidth={3} />
              </span>
            )}
          </div>
        </Field>

        <Field
          id="email"
          label="Email (opsional)"
          hint="Untuk bukti pendaftaran."
          error={show("email")}
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="nama@email.com"
            value={values.email}
            onChange={set("email")}
            onBlur={blur("email")}
            aria-invalid={!!show("email")}
            className={`${inputBase} ${inputState(show("email"))}`}
          />
        </Field>
      </div>

      <Field
        id="alamat"
        label="Alamat domisili"
        required
        hint="Lengkapi nama jalan, nomor rumah, dan kota."
        error={show("alamat")}
      >
        <input
          id="alamat"
          type="text"
          autoComplete="street-address"
          value={values.alamat}
          onChange={set("alamat")}
          onBlur={blur("alamat")}
          aria-invalid={!!show("alamat")}
          className={`${inputBase} ${inputState(show("alamat"))}`}
        />
      </Field>
    </form>
  );
}