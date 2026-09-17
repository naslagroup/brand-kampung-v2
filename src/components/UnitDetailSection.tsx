import React, { useState } from 'react';
import { TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO, BRAND_ASSETS } from '../data/brandData';
import {
  Coffee,
  Utensils,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  Store,
  ChevronDown,
  Image as ImageIcon,
} from 'lucide-react';

interface UnitDetailSectionProps {
  initialUnit?: 'teh' | 'dimsum';
  onOpenPartnership: () => void;
}

export const UnitDetailSection: React.FC<UnitDetailSectionProps> = ({
  initialUnit = 'teh',
  onOpenPartnership,
}) => {
  const [selectedUnit, setSelectedUnit] = useState<'teh' | 'dimsum'>(initialUnit);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const info = selectedUnit === 'teh' ? TEH_KAMPUNG_INFO : DIMSUM_KAMPUNG_INFO;
  const isTeh = selectedUnit === 'teh';

  // Palette stylings
  const themeBg = isTeh ? 'bg-emerald-50/50' : 'bg-red-50/50';
  const tabActiveTeh =
    selectedUnit === 'teh'
      ? 'bg-emerald-600 text-white shadow-md'
      : 'bg-white text-stone-700 hover:bg-emerald-50 border border-stone-200';
  const tabActiveDimsum =
    selectedUnit === 'dimsum'
      ? 'bg-red-600 text-white shadow-md'
      : 'bg-white text-stone-700 hover:bg-red-50 border border-stone-200';

  const accentBadge = isTeh
    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
    : 'bg-red-100 text-red-800 border-red-300';

  const primaryBtn = isTeh
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-700/20'
    : 'bg-red-600 hover:bg-red-700 text-white shadow-red-700/20';

  const cardBorder = isTeh ? 'border-emerald-200' : 'border-red-200';

  return (
    <section id="informasi-unit-detail" className={`py-14 md:py-20 ${themeBg} border-y border-stone-200 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${accentBadge}`}>
            <Store className="w-3.5 h-3.5" />
            <span>Informasi Detail Unit Usaha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-stone-900">
            Profil & Standar Mutu Unit Usaha
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Pelajari sejarah, rahasia resep, standar penyajian higienis, dan peluang kemitraan resmi untuk kedua unit usaha di bawah Brand Kampung.
          </p>

          {/* Unit Toggle Buttons */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-stone-200/80 mt-4 gap-1.5 shadow-inner">
            <button
              onClick={() => setSelectedUnit('teh')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 ${tabActiveTeh}`}
              id="detail-tab-teh"
            >
              <Coffee className="w-4 h-4 shrink-0" />
              <span>Detail Teh Kampung (Hijau Segar)</span>
            </button>
            <button
              onClick={() => setSelectedUnit('dimsum')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 ${tabActiveDimsum}`}
              id="detail-tab-dimsum"
            >
              <Utensils className="w-4 h-4 shrink-0" />
              <span>Detail Dimsum Kampung (Merah Hangat)</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="space-y-8 md:space-y-12">
          {/* Spanduk Resmi Unit Usaha */}
          <div className={`rounded-3xl overflow-hidden border-2 ${cardBorder} bg-stone-900 shadow-lg`}>
            <div className={`px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 border-b ${
              isTeh ? 'bg-emerald-900/90 border-emerald-700/50 text-emerald-100' : 'bg-red-900/90 border-red-700/50 text-red-100'
            }`}>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-300" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  Identitas Visual & Spanduk Resmi: {isTeh ? 'TEH KAMPUNG TAMBAKROTO' : 'DIMSUM KAMPUNG 100% HALAL'}
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/40 text-amber-300 border border-white/10">
                {isTeh ? '@tehkampung kemitraan' : 'Sertifikat Halal Indonesia'}
              </span>
            </div>
            <div className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4.5] w-full overflow-hidden bg-stone-950">
              <img
                src={isTeh ? BRAND_ASSETS.tehBanner : BRAND_ASSETS.dimsumBanner}
                alt={`Spanduk Resmi ${info.name}`}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.jpg')) {
                    target.src = isTeh ? BRAND_ASSETS.tehBannerJpg : BRAND_ASSETS.dimsumBannerJpg;
                  } else {
                    target.src = isTeh ? BRAND_ASSETS.tehBannerFallback : BRAND_ASSETS.dimsumBannerFallback;
                  }
                }}
              />
            </div>
          </div>

          {/* 1. Brand Story & Heritage */}
          <div className={`bg-white rounded-3xl p-6 sm:p-10 border ${cardBorder} shadow-sm space-y-6`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${isTeh ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Filosofi & Nilai Usaha
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900">
                  {info.name}: {info.tagline}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {info.story}
                </p>

                {isTeh ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                    <span className="font-bold block text-emerald-950">Prinsip WASGITEL Teh Kampung:</span>
                    <p>
                      <strong>Wangi</strong> dari kuncup melati murni, <strong>Sepet</strong> khas tanin daun teh tubruk Jawa, <strong>Legi</strong> manis alami gula tebu tanpa sakarin, dan <strong>Kenthel</strong> kental pekat menyegarkan tenggorokan.
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900 space-y-1">
                    <span className="font-bold block text-red-950">Komitmen 100% Halal Indonesia:</span>
                    <p>
                      Seluruh olahan daging ayam, udang, dan bumbu pelengkap bebas dari minyak hewani non-halal, gelatin babi, mirin, maupun arak masak. Dimsum kami aman, higienis, dan berkah untuk seluruh konsumen.
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Info Box */}
              <div className={`lg:col-span-4 p-6 rounded-2xl ${isTeh ? 'bg-emerald-800 text-white' : 'bg-red-800 text-white'} shadow-lg space-y-4`}>
                <h4 className="font-heading font-bold text-lg text-amber-300">
                  Ringkasan Unit Usaha
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Induk Naungan:</span>
                    <span className="font-bold">Brand Kampung</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Pusat Produksi:</span>
                    <span className="font-bold">Tambakroto</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Instagram:</span>
                    <span className="font-bold text-amber-300">{info.partnership.instagram}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Investasi Mulai:</span>
                    <span className="font-bold">{info.partnership.investmentStart.split(' ')[1]} {info.partnership.investmentStart.split(' ')[2]}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-white/80">Sertifikasi:</span>
                    <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-[10px]">
                      {isTeh ? 'Dinkes P-IRT & Halal' : 'LPPOM MUI & Halal BPJPH'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillars of Quality */}
            <div className="pt-6 border-t border-stone-100">
              <h4 className="font-heading font-bold text-base text-stone-900 mb-4">
                Standar Kualitas & Keunggulan {info.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {info.uspList.map((usp, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border ${cardBorder} bg-stone-50/70 space-y-2`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl ${isTeh ? 'bg-emerald-600' : 'bg-red-600'} text-white flex items-center justify-center font-bold text-xs`}>
                        0{idx + 1}
                      </div>
                      <h5 className="font-bold text-xs text-stone-900 leading-tight">
                        {usp.title}
                      </h5>
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Kemitraan (Franchise Opportunity) */}
          <div className={`bg-white rounded-3xl p-6 sm:p-10 border ${cardBorder} shadow-sm space-y-8`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${accentBadge}`}>
                  Peluang Bisnis
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900">
                  Paket Kemitraan {info.name}
                </h3>
                <p className="text-stone-600 text-sm max-w-xl">
                  {info.partnership.tagline}
                </p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-stone-500 block">Investasi Awal:</span>
                <span className={`text-xl sm:text-2xl font-black font-heading ${isTeh ? 'text-emerald-700' : 'text-red-700'}`}>
                  {info.partnership.investmentStart}
                </span>
                <span className="text-xs text-stone-500 block mt-0.5">
                  Estimasi Balik Modal: <strong>{info.partnership.bepEstimate}</strong>
                </span>
              </div>
            </div>

            {/* Benefits & Included Package */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Keuntungan Kemitraan */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <h4 className="font-heading font-bold text-sm text-stone-900 flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${isTeh ? 'text-emerald-600' : 'text-red-600'}`} />
                  Keuntungan Bermitra dengan {info.name}:
                </h4>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  {info.partnership.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isTeh ? 'bg-emerald-600' : 'bg-red-600'}`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Fasilitas yang Didapat */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                <h4 className="font-heading font-bold text-sm text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Peralatan & Bahan Baku yang Didapat:
                </h4>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  {info.partnership.packageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isTeh ? 'bg-emerald-600' : 'bg-red-600'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA to Consult via WhatsApp */}
            <div className={`p-6 rounded-2xl ${isTeh ? 'bg-emerald-900 text-white' : 'bg-red-900 text-white'} flex flex-col sm:flex-row items-center justify-between gap-4`}>
              <div>
                <h4 className="font-heading font-bold text-lg text-white">
                  Tertarik Membuka Outlet di Wilayah Anda?
                </h4>
                <p className="text-xs text-stone-200 max-w-lg">
                  Konsultasikan lokasi, ketersediaan kuota wilayah, dan dapatkan proposal kemitraan lengkap langsung dari tim Brand Kampung Pusat.
                </p>
                <p className="text-xs text-amber-300 font-semibold mt-1.5 flex items-center gap-1.5">
                  <span>Kontak Resmi WhatsApp: <strong>0857-9968-9175</strong> (Naasyith Dzaky)</span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${info.partnership.contactWhatsapp}?text=${encodeURIComponent(`Halo Mas Naasyith Dzaky, saya tertarik berkonsultasi kemitraan ${info.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/30 text-center transition-all cursor-pointer whitespace-nowrap"
                >
                  Chat WhatsApp
                </a>
                <button
                  onClick={onOpenPartnership}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Ajukan Kemitraan Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* 3. Outlets & Locations */}
          <div className={`bg-white rounded-3xl p-6 sm:p-10 border ${cardBorder} shadow-sm space-y-6`}>
            <div className="space-y-1">
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${accentBadge}`}>
                Jaringan Outlet
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900">
                Lokasi Outlet {info.name}
              </h3>
              <p className="text-stone-600 text-sm">
                Kunjungi outlet terdekat untuk menikmati sajian langsung atau pesan untuk acara keluarga & kantor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {info.outlets.map((outlet, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${cardBorder} bg-stone-50/50 hover:bg-white hover:shadow-md transition-all space-y-3 relative`}
                >
                  {outlet.isCenter && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-400 text-stone-900 text-[10px] font-black">
                      PUSAT
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isTeh ? 'text-emerald-600' : 'text-red-600'}`} />
                    <span className="font-bold text-xs text-stone-900">{outlet.city}</span>
                  </div>

                  <div>
                    <h5 className="font-heading font-bold text-sm text-stone-900">
                      {outlet.name}
                    </h5>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {outlet.address}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] text-stone-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{outlet.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Frequently Asked Questions (FAQ) */}
          <div className={`bg-white rounded-3xl p-6 sm:p-10 border ${cardBorder} shadow-sm space-y-6`}>
            <div className="space-y-1">
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${accentBadge}`}>
                Tanya Jawab
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-stone-900">
                FAQ Seputar {info.name}
              </h3>
            </div>

            <div className="space-y-3">
              {info.faq.map((faqItem, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border ${cardBorder} overflow-hidden transition-all`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left bg-stone-50/50 hover:bg-stone-50 font-bold text-sm text-stone-900 flex justify-between items-center gap-4 cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className={`w-4 h-4 shrink-0 ${isTeh ? 'text-emerald-600' : 'text-red-600'}`} />
                        {faqItem.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 bg-stone-50/50 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {faqItem.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
