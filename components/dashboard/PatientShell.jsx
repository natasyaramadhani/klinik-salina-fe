"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  History,
  User,
  Headphones,
  Bell,
  ChevronDown,
  PlusSquare,
} from "lucide-react";
import { patientProfile } from "@/lib/patient-dashboard-data";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Riwayat kunjungan", href: "/dashboard/riwayat", icon: History },
  { label: "Profil pasien", href: "/dashboard/profil", icon: User },
];

export default function PatientShell({ breadcrumb = "Dashboard", children }) {
  const pathname = usePathname();
  const crumbs = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

  return (
    <div className="flex min-h-screen bg-[#f6f8f6] text-[#1f3a2b]">
      {/* Sidebar Kiri */}
      <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-neutral-200/80 bg-white p-5 lg:flex">
        <div>
          {/* Logo Salina */}
          <Link href="/" className="flex items-center gap-2.5 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3f6b50]/30 bg-[#f1f5f2] text-[#3f6b50]">
              <PlusSquare className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold leading-none tracking-tight text-[#1f3a2b]">
                salina
              </div>
              <div className="mt-1 text-[9px] font-medium tracking-widest text-neutral-400">
                KLINIK &amp; KESEHATAN
              </div>
            </div>
          </Link>

          {/* Menu Navigasi */}
          <div className="mt-8">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
              Ruang Pasien
            </p>
            <nav className="mt-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                      active
                        ? "bg-[#e9f0ec] font-semibold text-[#1f3a2b]"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-[#1f3a2b]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#3f6b50]" />
                      {item.label}
                    </span>
                    {active && (
                      <span className="h-4 w-1 rounded-full bg-[#3f6b50]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Kartu Bantuan */}
          <div className="mt-8 rounded-2xl bg-[#f4f7f5] p-4">
            <Headphones className="h-5 w-5 text-[#3f6b50]" />
            <p className="mt-3 text-xs font-bold text-[#1f3a2b]">
              Butuh bantuan?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">
              Hubungi petugas Klinik Salina.
            </p>
            <p className="mt-2.5 text-xs font-bold text-[#1f3a2b]">
              022 730 1122
            </p>
          </div>
        </div>

        {/* Footer Sidebar */}
        <div className="border-t border-neutral-100 pt-4 text-[11px] leading-relaxed text-neutral-400">
          Lingkungan demonstrasi Data pasien fiktif
        </div>
      </aside>

      {/* Area Utama */}
      <div className="flex flex-1 flex-col">
        {/* Top Bar */}
        <header className="flex h-16 items-center justify-between border-b border-neutral-200/80 bg-white px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>Pasien</span>
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <span key={crumb} className="flex items-center gap-2">
                  <span>/</span>
                  <span
                    className={
                      isLast ? "font-medium text-neutral-700" : "text-neutral-400"
                    }
                  >
                    {crumb}
                  </span>
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Notifikasi"
              className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100"
            >
              <Bell className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f0ec] text-xs font-bold text-[#3f6b50]">
                {patientProfile.initials}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-xs font-bold text-[#1f3a2b]">
                  {patientProfile.fullName}
                </p>
                <p className="text-[11px] text-neutral-400">
                  Pasien · {patientProfile.mrn}
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-neutral-400" />
            </div>
          </div>
        </header>

        {/* Konten Halaman */}
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8 lg:px-10">
          {children}
        </main>

        {/* Footer Bawah */}
        <footer className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-2 border-t border-neutral-200/70 px-6 py-5 text-[11px] text-neutral-400 sm:flex-row lg:px-10">
          <span>
            © 2026 Klinik Salina · Data demonstrasi, bukan data pasien nyata.
          </span>
          <span>Tampilan statis</span>
        </footer>
      </div>
    </div>
  );
}