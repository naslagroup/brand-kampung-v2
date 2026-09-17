import React, { useState, useEffect } from 'react';
import { TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO, BRAND_KAMPUNG_INFO, BRAND_ASSETS } from '../data/brandData';
import {
  X,
  Sparkles,
  Coffee,
  Utensils,
  CheckCircle2,
  Send,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Store,
  MapPin,
  Clock,
  HelpCircle,
  Copy,
  Check,
  Percent,
} from 'lucide-react';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUnit?: 'teh' | 'dimsum' | 'both';
}

interface PackageDetail {
  id: 'teh' | 'dimsum' | 'both';
  name: string;
  badge: string;
  price: string;
  savingsNote?: string;
  bep: string;
  colorTheme: {
    borderActive: string;
    bgActive: string;
    ringActive: string;
    badgeBg: string;
    badgeText: string;
    accentText: string;
  };
  includes: string[];
  equipment: string[];
  profitEstimate: string;
  dailyTarget: string;
}

const PACKAGES: Record<'teh' | 'dimsum' | 'both', PackageDetail> = {
  teh: {
    id: 'teh',
    name: 'Paket Usaha Teh Kampung',
    badge: 'Hijau Segar • Favorit Rakyat',
    price: 'Rp 3.900.000',
    bep: '1 – 2 Bulan',
    colorTheme: {
      borderActive: 'border-emerald-600',
      bgActive: 'bg-emerald-50/90',
      ringActive: 'ring-2 ring-emerald-500/30',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      accentText: 'text-emerald-700',
    },
    includes: [
      'Booth Portable Kayu Pinus bernuansa Hijau Segar eksklusif',
      'Paket Bahan Baku Awal untuk 500 Porsi Teh Wasgitel pertama',
      'Termos Es Stainless + Dispenser Teh Tradisional Food Grade',
      'Panci Seduh, Saringan Kain Tradisional, Centong & Gelas Ukur',
      '500 pcs Cup Sablon Eksklusif 22oz + Tutup Seal/Dome + Sedotan',
      'Banner Display Promosi, Seragam Celemek & Panduan SOP Resep',
    ],
    equipment: [
      'Booth Portable Siap Rakit (Ukuran 100 x 60 x 185 cm)',
      'Dispenser Stainless Steel 10 Liter',
      'Saringan Kain Wasgitel & Teko Seduh Jawa',
      'Termos Es Batu Kristal Kapasitas 25 Liter',
    ],
    profitEstimate: 'Potensi Laba Bersih Rp 3.500.000 – Rp 6.000.000 / Bulan',
    dailyTarget: 'Target Realistis: 70 – 110 cup / hari (Modal Cup Rp 1.500, Jual Rp 4.000 - 5.000)',
  },
  dimsum: {
    id: 'dimsum',
    name: 'Paket Usaha Dimsum Kampung',
    badge: 'Merah Hangat • 100% Halal',
    price: 'Rp 4.800.000',
    bep: '1.5 – 2 Bulan',
    colorTheme: {
      borderActive: 'border-red-600',
      bgActive: 'bg-red-50/90',
      ringActive: 'ring-2 ring-red-500/30',
      badgeBg: 'bg-red-100',
      badgeText: 'text-red-800',
      accentText: 'text-red-700',
    },
    includes: [
      'Booth Oriental Warm Red Dimsum Kampung siap pakai',
      'Free Stok Awal Dimsum Frozen 800 pcs (200 porsi @4pcs) bersertifikat Halal',
      'Panci Kukus Stainless Steel Tebal + 1 Set Klakat Bambu Susun 4',
      'Kompor Gas Mawar Khusus + Selang & Regulator Berstandar SNI',
      '5 Liter Chili Oil Gurih Pedas Khas Kampung + Saus Dimsum Manis',
      '200 Box Kraft Food Grade, Sumpit Bambu Higienis & Banner Outlet',
    ],
    equipment: [
      'Booth Portable Dimsum Merah (Tahan Panas & Percikan Minyak)',
      'Panci Steamer Stainless Steel Diameter 36 cm',
      'Klakat Kukus Bambu Alami Tradisional 4 Susun',
      'Kompor Tekanan Tinggi (High Pressure Gas Burner)',
    ],
    profitEstimate: 'Potensi Laba Bersih Rp 4.500.000 – Rp 8.000.000 / Bulan',
    dailyTarget: 'Target Realistis: 40 – 70 porsi / hari (Margin laba kotor hingga 55%)',
  },
  both: {
    id: 'both',
    name: 'Paket Dwi-Usaha Bundling (Teh + Dimsum)',
    badge: 'Rekomendasi Terbaik • Hemat Rp 800.000',
    price: 'Rp 7.900.000',
    savingsNote: 'Hemat Rp 800.000 dibanding ambil paket terpisah (Rp 8.700.000)',
    bep: '1 – 1.5 Bulan',
    colorTheme: {
      borderActive: 'border-amber-500',
      bgActive: 'bg-amber-50/90',
      ringActive: 'ring-2 ring-amber-500/30',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accentText: 'text-amber-700',
    },
    includes: [
      'Booth Jumbo 2-in-1 Eksklusif: Area Seduh Teh + Area Kukus Dimsum terpadu',
      'Seluruh perlengkapan Teh Kampung (Dispenser, Termos, Cup 500 pcs, Panci)',
      'Seluruh perlengkapan Dimsum Kampung (Klakat Bambu, Steamer, Kompor, Saus)',
      'Bahan Baku Awal Komplit: 500 porsi Teh Segar + 800 pcs Dimsum Frozen',
      'Strategi Penjualan Combo: Paket Bundling Teh + Dimsum untuk transaksi lebih tinggi',
      'Pendampingan khusus grand opening dan promosi serentak di media sosial pusat',
    ],
    equipment: [
      'Booth Jumbo Multifungsi Brand Kampung (Ukuran 150 x 70 x 195 cm)',
      'Full Set Alat Seduh Teh Jawa + Full Set Kukusan Klakat Bambu',
      'Double Banner Promosi & Seragam Resmi Brand Kampung (2 pcs)',
      'Panduan Manajemen Usaha Gabungan (Cross-Selling Strategy)',
    ],
    profitEstimate: 'Potensi Laba Bersih Rp 8.000.000 – Rp 14.000.000 / Bulan',
    dailyTarget: 'Target: 80 Cup Teh + 50 Porsi Dimsum/hari (Double Omset dalam 1 Booth)',
  },
};

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  isOpen,
  onClose,
  defaultUnit = 'both',
}) => {
  const [chosenUnit, setChosenUnit] = useState<'teh' | 'dimsum' | 'both'>(defaultUnit);
  const [partnerName, setPartnerName] = useState('');
  const [partnerCity, setPartnerCity] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [locationType, setLocationType] = useState('Teras Minimarket (Indomaret/Alfamart)');
  const [partnerNotes, setPartnerNotes] = useState('');
  const [activeTab, setActiveTab] = useState<'fasilitas' | 'simulasi'>('fasilitas');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Sync state if defaultUnit changes
  useEffect(() => {
    if (defaultUnit) {
      setChosenUnit(defaultUnit);
    }
  }, [defaultUnit, isOpen]);

  if (!isOpen) return null;

  const currentPkg = PACKAGES[chosenUnit];

  const generateWhatsAppMessage = () => {
    let message = `*HALO KEMITRAAN PUSAT BRAND KAMPUNG (NAASYITH DZAKY)*\n`;
    message += `Saya tertarik untuk bergabung menjadi Mitra Resmi:\n\n`;
    message += `📋 *Paket yang Dipilih:* ${currentPkg.name} (${currentPkg.price})\n`;
    message += `👤 *Nama Lengkap:* ${partnerName.trim() || '(Belum diisi)'}\n`;
    message += `📍 *Kota / Wilayah Rencana Outlet:* ${partnerCity.trim() || '(Belum diisi)'}\n`;
    message += `📱 *Nomor WhatsApp:* ${partnerPhone.trim() || '(Belum diisi)'}\n`;
    message += `🏪 *Rencana Lokasi:* ${locationType}\n`;
    if (partnerNotes.trim()) {
      message += `💬 *Pertanyaan / Catatan:* ${partnerNotes.trim()}\n`;
    }
    message += `\nMohon dikirimkan proposal kemitraan resmi (PDF), rincian estimasi BEP wilayah saya, dan ketersediaan kuota outlet. Terima kasih!`;
    return message;
  };

  const handleSendInquiry = () => {
    if (!partnerName.trim()) {
      setFormError('Mohon isi nama lengkap Anda untuk pembuatan proposal.');
      return;
    }
    if (!partnerPhone.trim()) {
      setFormError('Mohon isi nomor WhatsApp aktif agar tim kemitraan dapat menghubungi Anda.');
      return;
    }

    setFormError(null);
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const wa = BRAND_KAMPUNG_INFO.socialMedia.whatsapp;
    window.open(`https://wa.me/${wa}?text=${encoded}`, '_blank');
    onClose();
  };

  const handleCopyDraft = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text).then(() => {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2200);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        id="partnership-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-stone-600 shadow-md"
          aria-label="Tutup Popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white p-6 sm:p-7 shrink-0 border-b border-stone-800">
          <div className="max-w-2xl space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Peluang Usaha Resmi {BRAND_KAMPUNG_INFO.origin}</span>
              </span>
              <span className="text-xs text-stone-400 hidden sm:inline">•</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60 whitespace-nowrap">
                0% Royalty Fee (100% Laba Milik Anda)
              </span>
            </div>

            <div className="flex items-center gap-3.5 pt-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
                <img
                  src={BRAND_ASSETS.logo}
                  alt="Logo Brand Kampung"
                  className="w-full h-full object-contain drop-shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-brand-kampung.png';
                  }}
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-stone-100">
                Kemitraan Resmi Brand Kampung
              </h3>
            </div>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Mulai wirausaha mandiri kuliner rakyat teruji di bawah naungan <strong>{BRAND_KAMPUNG_INFO.legalName}</strong>. Paket komplit siap jualan langsung tanpa repot meracik dari nol.
            </p>

            {/* Quick Guarantees / Badges */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-stone-300">
              <div className="flex items-center gap-1.5 bg-stone-800/60 px-2.5 py-1.5 rounded-lg border border-stone-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Bahan Halal</span>
              </div>
              <div className="flex items-center gap-1.5 bg-stone-800/60 px-2.5 py-1.5 rounded-lg border border-stone-700/60">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>BEP 1–2 Bulan</span>
              </div>
              <div className="flex items-center gap-1.5 bg-stone-800/60 px-2.5 py-1.5 rounded-lg border border-stone-700/60">
                <Store className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Free Booth Lengkap</span>
              </div>
              <div className="flex items-center gap-1.5 bg-stone-800/60 px-2.5 py-1.5 rounded-lg border border-stone-700/60">
                <Clock className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Pasokan Bahan Rutin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* 1. Unit Selector (3 Pilihan Paket Usaha) */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <span>1. Pilih Paket Usaha Kemitraan:</span>
              </label>
              <span className="text-[11px] text-stone-500 font-medium hidden sm:inline">
                Klik salah satu kartu untuk melihat rincian fasilitas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Option Teh */}
              <button
                type="button"
                onClick={() => setChosenUnit('teh')}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  chosenUnit === 'teh'
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500/20 shadow-sm'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-emerald-300 hover:bg-stone-50/80'
                }`}
              >
                {chosenUnit === 'teh' && (
                  <span className="absolute top-3 right-3 text-emerald-600 bg-emerald-100 p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1">
                  <Coffee className="w-4 h-4 shrink-0" />
                  <span>Teh Kampung</span>
                </div>
                <div className="text-base font-black text-stone-900 tracking-tight">
                  Rp 3.900.000
                </div>
                <p className="text-[11px] text-stone-600 font-medium mt-1">
                  Booth Hijau + 500 Porsi Teh Wasgitel Awal
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                  <span>Estimasi BEP:</span>
                  <span>1 – 2 Bulan</span>
                </div>
              </button>

              {/* Option Dimsum */}
              <button
                type="button"
                onClick={() => setChosenUnit('dimsum')}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  chosenUnit === 'dimsum'
                    ? 'border-red-600 bg-red-50/80 text-red-950 ring-2 ring-red-500/20 shadow-sm'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-red-300 hover:bg-stone-50/80'
                }`}
              >
                {chosenUnit === 'dimsum' && (
                  <span className="absolute top-3 right-3 text-red-600 bg-red-100 p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-800 mb-1">
                  <Utensils className="w-4 h-4 shrink-0" />
                  <span>Dimsum Kampung</span>
                </div>
                <div className="text-base font-black text-stone-900 tracking-tight">
                  Rp 4.800.000
                </div>
                <p className="text-[11px] text-stone-600 font-medium mt-1">
                  Booth Merah + Klakat + 800 Pcs Dimsum Halal
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-semibold text-red-800 bg-red-100/70 px-2 py-0.5 rounded-md">
                  <span>Estimasi BEP:</span>
                  <span>1.5 – 2 Bulan</span>
                </div>
              </button>

              {/* Option Both / Combo */}
              <button
                type="button"
                onClick={() => setChosenUnit('both')}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  chosenUnit === 'both'
                    ? 'border-amber-500 bg-amber-50/90 text-stone-950 ring-2 ring-amber-500/30 shadow-sm'
                    : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300 hover:bg-stone-50/80'
                }`}
              >
                {chosenUnit === 'both' && (
                  <span className="absolute top-3 right-3 text-amber-700 bg-amber-200 p-1 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Paket Dwi-Usaha 2-in-1</span>
                </div>
                <div className="text-base font-black text-stone-900 tracking-tight">
                  Rp 7.900.000
                </div>
                <p className="text-[11px] text-amber-900 font-bold mt-1">
                  Hemat Rp 800.000 (Teh + Dimsum)
                </p>
                <div className="mt-2.5 flex items-center justify-between text-[10px] font-semibold text-amber-950 bg-amber-200/80 px-2 py-0.5 rounded-md">
                  <span>Double Omset:</span>
                  <span>BEP 1 – 1.5 Bln</span>
                </div>
              </button>
            </div>
          </div>

          {/* 2. Detail Fasilitas & Simulasi Keuntungan (Tabs) */}
          <div className="bg-stone-50/90 rounded-2xl border border-stone-200 p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-stone-900">{currentPkg.name}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-800">
                    Investasi: {currentPkg.price}
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-0.5">
                  Fasilitas lengkap langsung siap jualan, didampingi SOP resmi pusat Tambakroto.
                </p>
              </div>

              {/* Sub-tab switcher */}
              <div className="inline-flex rounded-xl bg-stone-200/80 p-1 gap-1 shrink-0 self-start sm:self-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('fasilitas')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'fasilitas'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Fasilitas Didapat
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('simulasi')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'simulasi'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Simulasi Finansial
                </button>
              </div>
            </div>

            {/* Tab: Fasilitas */}
            {activeTab === 'fasilitas' ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                  {currentPkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200/80 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-stone-500 flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-stone-700">Peralatan Utama Termasuk:</span>
                  {currentPkg.equipment.map((eq, i) => (
                    <span key={i} className="inline-flex items-center gap-1 bg-stone-200/60 px-2 py-0.5 rounded text-stone-600">
                      • {eq}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* Tab: Simulasi Finansial */
              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                      Estimasi Balik Modal (BEP)
                    </span>
                    <div className="text-lg font-black text-stone-900">{currentPkg.bep}</div>
                    <p className="text-[11px] text-stone-500 leading-tight">
                      Berdasarkan rata-rata performa 150+ mitra aktif Brand Kampung di berbagai kota.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-1">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                      Potensi Profit Bersih
                    </span>
                    <div className="text-base font-black text-stone-900">{currentPkg.profitEstimate}</div>
                    <p className="text-[11px] text-stone-500 leading-tight">
                      {currentPkg.dailyTarget}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Keuntungan 100% Hak Mitra:</strong> Brand Kampung tidak memungut persentase omset bulanan (0% royalty fee). Anda hanya melakukan repeat order bahan baku resmi saat stok menipis.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 3. Form Data Calon Mitra */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                2. Lengkapi Data Calon Mitra:
              </label>
              <span className="text-[11px] text-stone-400">*Wajib diisi untuk pembuatan proposal</span>
            </div>

            {formError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium flex items-center gap-2 animate-in fade-in">
                <HelpCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{formError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nama Lengkap Calon Mitra <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => {
                    setPartnerName(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all text-stone-900 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={partnerPhone}
                  onChange={(e) => {
                    setPartnerPhone(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  placeholder="Contoh: 085799689175"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all text-stone-900 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Kota / Wilayah Rencana Outlet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={partnerCity}
                  onChange={(e) => setPartnerCity(e.target.value)}
                  placeholder="Contoh: Tambakroto, Semarang, Solo, Jogja"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all text-stone-900 placeholder-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Rencana Tipe Lokasi Jualan
                </label>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all text-stone-900 cursor-pointer"
                >
                  <option value="Teras Minimarket (Indomaret/Alfamart)">Teras Minimarket (Indomaret/Alfamart)</option>
                  <option value="Teras Rumah / Ruko Pinggir Jalan">Teras Rumah / Ruko Pinggir Jalan</option>
                  <option value="Pujasera / Foodcourt / Kulineran">Pujasera / Foodcourt / Sentra Kuliner</option>
                  <option value="Dekat Kampus / Sekolah / Perkantoran">Dekat Kampus / Sekolah / Perkantoran</option>
                  <option value="Kios Pasar / Stasiun / Terminal">Kios Pasar / Stasiun / Terminal</option>
                  <option value="Belum Ada Lokasi (Konsultasi dengan Tim)">Belum Ada Lokasi (Ingin Konsultasi Lokasi)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Catatan Khusus atau Pertanyaan (Opsional):
              </label>
              <textarea
                value={partnerNotes}
                onChange={(e) => setPartnerNotes(e.target.value)}
                placeholder="Tuliskan jika Anda ada pertanyaan spesifik tentang kuota wilayah, pengiriman booth ke luar kota, dll."
                rows={2}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all text-stone-900 placeholder-stone-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer & Actions */}
        <div className="bg-stone-50 p-4 sm:p-5 border-t border-stone-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-semibold text-stone-800">Admin Kemitraan:</span>{' '}
            <a
              href={`https://wa.me/${BRAND_KAMPUNG_INFO.socialMedia.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold underline decoration-emerald-500/50"
            >
              WA: {BRAND_KAMPUNG_INFO.socialMedia.whatsappDisplay} ({BRAND_KAMPUNG_INFO.socialMedia.contactPerson})
            </a>
            <span className="hidden sm:inline"> • </span>
            <span className="text-stone-500 block sm:inline">Respon Cepat 08.00 – 21.00 WIB</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyDraft}
              className="px-3.5 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-200/70 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              title="Salin isi pesan ke clipboard"
            >
              {copiedDraft ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Salin Draf</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleSendInquiry}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
              id="submit-partnership-inquiry-btn"
            >
              <MessageCircle className="w-4 h-4 shrink-0 text-white" />
              <span>Kirim Pengajuan via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

