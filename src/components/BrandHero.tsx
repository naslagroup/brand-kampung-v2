import React, { useState, useRef } from 'react';
import { BrandUnit } from '../types';
import { BRAND_ASSETS } from '../data/brandData';
import {
  Coffee,
  Utensils,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MapPin,
  Store,
  Volume2,
  VolumeX,
  Image as ImageIcon,
  ZoomIn,
  X,
  Download,
  CheckCircle2,
  Smartphone,
} from 'lucide-react';

interface BrandHeroProps {
  activeUnit: BrandUnit;
  setActiveUnit: (unit: BrandUnit) => void;
  onOpenPartnership: () => void;
  onViewUnitDetail: (unitId: 'teh' | 'dimsum') => void;
}

export const BrandHero: React.FC<BrandHeroProps> = ({
  activeUnit,
  setActiveUnit,
  onOpenPartnership,
  onViewUnitDetail,
}) => {
  // Dedicated state for Teh Kampung Video sound
  const [isTehVideoMuted, setIsTehVideoMuted] = useState(true);
  const tehVideoRef = useRef<HTMLVideoElement>(null);

  // Dedicated state for Dimsum Kampung Video sound
  const [isDimsumVideoMuted, setIsDimsumVideoMuted] = useState(true);
  const dimsumVideoRef = useRef<HTMLVideoElement>(null);

  // Lightbox modal state for full-screen banner inspection
  const [activeBannerModal, setActiveBannerModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    subtitle: string;
    unit: 'teh' | 'dimsum';
    features: string[];
  } | null>(null);

  // Dedicated Separate Section: TEH KAMPUNG (PALET HIJAU SEGAR)
  const renderTehKampungSection = (standalone = false) => (
    <section
      id="video-section-teh-kampung"
      className={`relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white ${
        standalone
          ? 'py-12 md:py-16'
          : 'py-8 sm:py-10 md:py-12 px-4 sm:px-8 rounded-3xl border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/50'
      } transition-all duration-500`}
    >
      {/* Background Pattern & Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"></div>

      <div className={`${standalone ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : 'w-full'} relative z-10`}>
        <div className="space-y-6 sm:space-y-8">
          {/* Unit Tag Header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
              <Coffee className="w-3.5 h-3.5 text-emerald-300" />
              <span>Gambar Spanduk Resmi & Video Mobile • Unit Teh Kampung</span>
            </div>
            <span className="text-xs text-amber-300 font-bold bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-500/30">
              Otentik Tambakroto • Wasgitel
            </span>
          </div>

          {/* 1. GAMBAR SPANDUK RESMI TEH KAMPUNG (BANNER SHOWCASE) */}
          <div className="rounded-2xl overflow-hidden border-2 border-emerald-400/50 bg-stone-950 shadow-2xl shadow-emerald-950/60 transition-all">
            <div className="px-4 py-2.5 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 border-b border-emerald-500/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Spanduk Resmi Outlet • TEH KAMPUNG TAMBAKROTO
                </span>
              </div>
              <button
                onClick={() =>
                  setActiveBannerModal({
                    isOpen: true,
                    url: BRAND_ASSETS.tehBanner,
                    title: 'Spanduk Resmi Teh Kampung Tambakroto',
                    subtitle: 'Visual Brand Outlet Resmi Kemitraan Teh Kampung',
                    unit: 'teh',
                    features: [
                      'Ilustrasi resmi dua pendiri Teh Kampung & Dimsum Kampung',
                      'Tipografi otentik 3D "TEH KAMPUNG TAMBAKROTO"',
                      'Visual cup jumbo 22oz seduhan segar daun melati & gula tebu asli',
                      'Kanal kemitraan resmi Instagram: @tehkampung',
                    ],
                  })
                }
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-amber-300 text-xs font-bold border border-emerald-400/40 transition-all cursor-pointer shadow-xs"
                title="Klik untuk melihat gambar spanduk ukuran penuh"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Perbesar Spanduk</span>
              </button>
            </div>

            {/* Widescreen Banner Image */}
            <div
              className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4.6] w-full overflow-hidden cursor-pointer group bg-stone-900"
              onClick={() =>
                setActiveBannerModal({
                  isOpen: true,
                  url: BRAND_ASSETS.tehBanner,
                  title: 'Spanduk Resmi Teh Kampung Tambakroto',
                  subtitle: 'Visual Brand Outlet Resmi Kemitraan Teh Kampung',
                  unit: 'teh',
                  features: [
                    'Ilustrasi resmi dua pendiri Teh Kampung & Dimsum Kampung',
                    'Tipografi otentik 3D "TEH KAMPUNG TAMBAKROTO"',
                    'Visual cup jumbo 22oz seduhan segar daun melati & gula tebu asli',
                    'Kanal kemitraan resmi Instagram: @tehkampung',
                  ],
                })
              }
            >
              <img
                src={BRAND_ASSETS.tehBanner}
                alt="Spanduk Resmi Teh Kampung Tambakroto"
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.jpg')) {
                    target.src = BRAND_ASSETS.tehBannerJpg;
                  } else {
                    target.src = BRAND_ASSETS.tehBannerFallback;
                  }
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-bold flex items-center gap-2 backdrop-blur-xs border border-white/20 shadow-2xl">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                  Klik untuk Memperbesar Gambar Spanduk
                </span>
              </div>
            </div>
          </div>

          {/* 2. DEDICATED CONTENT: TEKS NARASI & PEMUTAR VIDEO FORMAT MOBILE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Column: Text TEH KAMPUNG TAMBAKROTO & WASGITEL */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white drop-shadow-sm">
                    TEH KAMPUNG
                  </h2>
                  <span className="px-2.5 py-1 rounded-md bg-amber-400 text-stone-900 font-extrabold text-xs tracking-wider uppercase shadow-sm">
                    TAMBAKROTO
                  </span>
                </div>
                <p className="text-emerald-100 text-base sm:text-lg leading-relaxed font-normal">
                  Seduhan segar daun teh pilihan dengan aroma melati wangi semerbak, rasa sepet mantap, dan manis alami gula tebu. Racikan otentik khas <span className="text-amber-300 font-bold underline decoration-amber-400/50 underline-offset-4">WASGITEL</span> (Wangi, Sepet, Legi, Kenthel).
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-base sm:text-lg font-heading">Rp 5.000</span>
                  <span className="text-xs text-emerald-200">Cup Jumbo 22oz</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-emerald-300 font-extrabold text-base sm:text-lg font-heading">100%</span>
                  <span className="text-xs text-emerald-200">Gula Tebu Asli</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-emerald-300 font-extrabold text-base sm:text-lg font-heading">Wasgitel</span>
                  <span className="text-xs text-emerald-200">Seduhan Segar</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-base sm:text-lg font-heading">@tehkampung</span>
                  <span className="text-xs text-emerald-200">Kemitraan Resmi</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#katalog-teh"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Lihat Menu Teh Kampung</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <button
                  onClick={() => onViewUnitDetail('teh')}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 text-white border border-emerald-500/50 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Detail Usaha & Outlet</span>
                </button>
                <button
                  onClick={onOpenPartnership}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/20 font-medium text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Peluang Usaha Booth
                </button>
              </div>
            </div>

            {/* Right Column: Dedicated Video Player Teh Kampung (UKURAN MOBILE 9:16) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[295px]">
                {/* Mobile Smartphone Frame Container */}
                <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-stone-700 via-stone-900 to-black border-2 border-emerald-400/60 shadow-2xl shadow-emerald-950/80">
                  {/* Top Camera Notch / Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/90 rounded-full z-30 flex items-center justify-center gap-1.5 border border-white/10 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-stone-700"></span>
                    <span className="w-5 h-1 rounded-full bg-stone-800"></span>
                  </div>

                  {/* Video Box (9:16 Vertical Mobile Aspect Ratio) */}
                  <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-black group">
                    <video
                      id="video-teh-kampung"
                      ref={tehVideoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted={isTehVideoMuted}
                      playsInline
                      poster={BRAND_ASSETS.tehBanner}
                    >
                      <source src="/video-teh-kampung.mp4" type="video/mp4" />
                      <source src="/teh-kampung.mp4" type="video/mp4" />
                      <source src="/video-teh.mp4" type="video/mp4" />
                      <source src="/teh.mp4" type="video/mp4" />
                      <source src="/banner-teh.mp4" type="video/mp4" />
                      <source src="/video-teh-kampung.webm" type="video/webm" />
                      <source src="/teh-kampung.webm" type="video/webm" />
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-tea-into-a-glass-cup-41121-large.mp4"
                        type="video/mp4"
                      />
                      <img
                        src={BRAND_ASSETS.tehBanner}
                        alt="Teh Kampung Tambakroto"
                        className="w-full h-full object-cover"
                      />
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-transparent to-stone-950/40 pointer-events-none" />

                    {/* Live Mobile Badge */}
                    <div className="absolute top-8 left-3 z-20 flex items-center gap-1">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold shadow-md backdrop-blur-xs">
                        <Smartphone className="w-3 h-3 text-emerald-200" />
                        <span>Reels / Shorts</span>
                      </span>
                    </div>

                    {/* Audio Mute/Unmute Control */}
                    <div className="absolute top-8 right-3 z-20">
                      <button
                        onClick={() => setIsTehVideoMuted(!isTehVideoMuted)}
                        className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs border border-white/20 cursor-pointer shadow-md"
                        title={isTehVideoMuted ? 'Nyalakan Suara Teh' : 'Bisukan Suara Teh'}
                        aria-label="Toggle suara video teh"
                      >
                        {isTehVideoMuted ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-emerald-300" />
                        )}
                      </button>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1 text-xs text-emerald-100 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Asli Tambakroto</span>
                        </div>
                        <span className="bg-amber-400 text-stone-900 px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide">
                          WASGITEL
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-300 line-clamp-2">
                        Seduhan Segar Daun Melati Pilihan • Cup Jumbo 22oz
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtitle Information */}
                <p className="text-center text-[11px] text-emerald-200/80 pt-2 font-medium">
                  Ukuran Mobile 9:16 • Teh Kampung Tambakroto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Dedicated Separate Section: DIMSUM KAMPUNG (PALET MERAH HANGAT)
  const renderDimsumKampungSection = (standalone = false) => (
    <section
      id="video-section-dimsum-kampung"
      className={`relative overflow-hidden bg-gradient-to-b from-red-950 via-rose-900 to-stone-950 text-white ${
        standalone
          ? 'py-12 md:py-16'
          : 'py-8 sm:py-10 md:py-12 px-4 sm:px-8 rounded-3xl border-2 border-red-500/40 shadow-2xl shadow-red-950/50'
      } transition-all duration-500`}
    >
      {/* Background Pattern & Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f87171_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-500/20 blur-3xl pointer-events-none"></div>

      <div className={`${standalone ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : 'w-full'} relative z-10`}>
        <div className="space-y-6 sm:space-y-8">
          {/* Unit Tag Header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-800/80 border border-red-500/40 text-red-200 text-xs font-semibold backdrop-blur-xs">
              <Utensils className="w-3.5 h-3.5 text-red-300" />
              <span>Gambar Spanduk Resmi & Video Mobile • Unit Dimsum Kampung</span>
            </div>
            <span className="text-xs text-white font-bold bg-emerald-600 px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Bersertifikat Halal Indonesia
            </span>
          </div>

          {/* 1. GAMBAR SPANDUK RESMI DIMSUM KAMPUNG (BANNER SHOWCASE) */}
          <div className="rounded-2xl overflow-hidden border-2 border-red-400/50 bg-stone-950 shadow-2xl shadow-red-950/60 transition-all">
            <div className="px-4 py-2.5 bg-gradient-to-r from-red-900 via-rose-900 to-stone-950 border-b border-red-500/30 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Spanduk Resmi Kedai • DIMSUM KAMPUNG 100% HALAL
                </span>
              </div>
              <button
                onClick={() =>
                  setActiveBannerModal({
                    isOpen: true,
                    url: BRAND_ASSETS.dimsumBanner,
                    title: 'Spanduk Resmi Dimsum Kampung - 100% Halal',
                    subtitle: 'Visual Brand Kedai Resmi Kemitraan Dimsum Kampung',
                    unit: 'dimsum',
                    features: [
                      'Ilustrasi resmi dua pendiri Brand Kampung di meja santap hangat',
                      'Logo resmi Halal Indonesia bersertifikat aman & berkah',
                      'Visual dimsum siomay kukus hangat klakat bambu & topping tobiko',
                      'Tipografi 3D ceria "DIMSUM KAMPUNG" dengan motif ombak oriental',
                    ],
                  })
                }
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-700 hover:bg-red-600 text-amber-300 text-xs font-bold border border-red-400/40 transition-all cursor-pointer shadow-xs"
                title="Klik untuk melihat gambar spanduk ukuran penuh"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Perbesar Spanduk</span>
              </button>
            </div>

            {/* Widescreen Banner Image */}
            <div
              className="relative aspect-[16/6] sm:aspect-[16/5] md:aspect-[16/4.6] w-full overflow-hidden cursor-pointer group bg-stone-900"
              onClick={() =>
                setActiveBannerModal({
                  isOpen: true,
                  url: BRAND_ASSETS.dimsumBanner,
                  title: 'Spanduk Resmi Dimsum Kampung - 100% Halal',
                  subtitle: 'Visual Brand Kedai Resmi Kemitraan Dimsum Kampung',
                  unit: 'dimsum',
                  features: [
                    'Ilustrasi resmi dua pendiri Brand Kampung di meja santap hangat',
                    'Logo resmi Halal Indonesia bersertifikat aman & berkah',
                    'Visual dimsum siomay kukus hangat klakat bambu & topping tobiko',
                    'Tipografi 3D ceria "DIMSUM KAMPUNG" dengan motif ombak oriental',
                  ],
                })
              }
            >
              <img
                src={BRAND_ASSETS.dimsumBanner}
                alt="Spanduk Resmi Dimsum Kampung - 100% Halal"
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.jpg')) {
                    target.src = BRAND_ASSETS.dimsumBannerJpg;
                  } else {
                    target.src = BRAND_ASSETS.dimsumBannerFallback;
                  }
                }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-bold flex items-center gap-2 backdrop-blur-xs border border-white/20 shadow-2xl">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                  Klik untuk Memperbesar Gambar Spanduk
                </span>
              </div>
            </div>
          </div>

          {/* 2. DEDICATED CONTENT: TEKS NARASI & PEMUTAR VIDEO FORMAT MOBILE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Left: Text & Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white drop-shadow-sm">
                    DIMSUM KAMPUNG
                  </h2>
                  <span className="px-3 py-1 rounded-md bg-emerald-500 text-white font-extrabold text-xs tracking-wider flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    100% HALAL
                  </span>
                </div>
                <p className="text-red-100 text-base sm:text-lg leading-relaxed font-normal">
                  Dimsum ayam & udang segar kukus klakat bambu tradisional. Padat berdaging, lembut juicy, dan disajikan hangat lengkap dengan racikan <span className="text-amber-300 font-bold underline decoration-amber-400/50 underline-offset-4">Chili Oil Bawang Putih</span> khas Dimsum Kampung.
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-base sm:text-lg font-heading">Rp 5.000</span>
                  <span className="text-xs text-red-200">Dapat 3 Pcs</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-white font-extrabold text-base sm:text-lg font-heading">Rp 10.000</span>
                  <span className="text-xs text-red-200">Dapat 5 Pcs</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-base sm:text-lg font-heading">Rp 3.000</span>
                  <span className="text-xs text-red-200">Per Pcs Spesial</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-2.5 text-center backdrop-blur-xs">
                  <span className="block text-red-300 font-extrabold text-base sm:text-lg font-heading">Chili Oil + 3 Saus</span>
                  <span className="text-xs text-red-200">Tomat, Sedang, Lava</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#katalog-dimsum"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Lihat Menu Dimsum Kampung</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <button
                  onClick={() => onViewUnitDetail('dimsum')}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-red-800/80 hover:bg-red-700/80 text-white border border-red-500/50 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-red-300 shrink-0" />
                  <span>Detail Usaha & Outlet</span>
                </button>
                <button
                  onClick={onOpenPartnership}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-red-100 border border-white/20 font-medium text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Paket Kemitraan Usaha
                </button>
              </div>
            </div>

            {/* Right: Dedicated Video Player Dimsum Kampung (UKURAN MOBILE 9:16) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-[270px] sm:max-w-[295px]">
                {/* Mobile Smartphone Frame Container */}
                <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-stone-700 via-stone-900 to-black border-2 border-red-400/60 shadow-2xl shadow-red-950/80">
                  {/* Top Camera Notch / Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/90 rounded-full z-30 flex items-center justify-center gap-1.5 border border-white/10 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-stone-700"></span>
                    <span className="w-5 h-1 rounded-full bg-stone-800"></span>
                  </div>

                  {/* Video Box (9:16 Vertical Mobile Aspect Ratio) */}
                  <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-black group">
                    <video
                      id="video-dimsum-kampung"
                      ref={dimsumVideoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted={isDimsumVideoMuted}
                      playsInline
                      poster={BRAND_ASSETS.dimsumBanner}
                    >
                      <source src="/video-dimsum-kampung.mp4" type="video/mp4" />
                      <source src="/dimsum-kampung.mp4" type="video/mp4" />
                      <source src="/video-dimsum.mp4" type="video/mp4" />
                      <source src="/dimsum.mp4" type="video/mp4" />
                      <source src="/banner-dimsum.mp4" type="video/mp4" />
                      <source src="/video-dimsum-kampung.webm" type="video/webm" />
                      <source src="/dimsum-kampung.webm" type="video/webm" />
                      <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-person-opening-a-steaming-pot-41551-large.mp4"
                        type="video/mp4"
                      />
                      <img
                        src={BRAND_ASSETS.dimsumBanner}
                        alt="Dimsum Kampung Tambakroto"
                        className="w-full h-full object-cover"
                      />
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-transparent to-stone-950/40 pointer-events-none" />

                    {/* Live Mobile Badge */}
                    <div className="absolute top-8 left-3 z-20 flex items-center gap-1">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-bold shadow-md backdrop-blur-xs">
                        <Smartphone className="w-3 h-3 text-red-200" />
                        <span>Reels / Shorts</span>
                      </span>
                    </div>

                    {/* Audio Mute/Unmute Control */}
                    <div className="absolute top-8 right-3 z-20">
                      <button
                        onClick={() => setIsDimsumVideoMuted(!isDimsumVideoMuted)}
                        className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs border border-white/20 cursor-pointer shadow-md"
                        title={isDimsumVideoMuted ? 'Nyalakan Suara Dimsum' : 'Bisukan Suara Dimsum'}
                        aria-label="Toggle suara video dimsum"
                      >
                        {isDimsumVideoMuted ? (
                          <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-red-300" />
                        )}
                      </button>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1 text-xs text-red-100 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Kedai Tambakroto</span>
                        </div>
                        <span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                          100% Halal
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-300 line-clamp-2">
                        Siomay Kukus Bambu • Racikan Chili Oil Bawang Putih
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtitle Information */}
                <p className="text-center text-[11px] text-red-200/80 pt-2 font-medium">
                  Ukuran Mobile 9:16 • Kedai Dimsum Kampung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // If filtered specifically to Teh Kampung
  if (activeUnit === 'teh') {
    return (
      <>
        {renderTehKampungSection(true)}
        {renderBannerModal()}
      </>
    );
  }

  // If filtered specifically to Dimsum Kampung
  if (activeUnit === 'dimsum') {
    return (
      <>
        {renderDimsumKampungSection(true)}
        {renderBannerModal()}
      </>
    );
  }

  // Modal Lightbox Component for High-Resolution Banner Inspection
  function renderBannerModal() {
    if (!activeBannerModal || !activeBannerModal.isOpen) return null;
    const isTeh = activeBannerModal.unit === 'teh';

    return (
      <div
        id="modal-lightbox-banner"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
        onClick={() => setActiveBannerModal(null)}
      >
        <div
          className={`relative max-w-5xl w-full bg-stone-900 border-2 ${
            isTeh ? 'border-emerald-500' : 'border-red-500'
          } rounded-3xl overflow-hidden shadow-2xl shadow-black text-white flex flex-col max-h-[92vh]`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div
            className={`px-5 py-3.5 flex items-center justify-between border-b ${
              isTeh ? 'bg-emerald-950 border-emerald-800' : 'bg-red-950 border-red-800'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {isTeh ? (
                <Coffee className="w-5 h-5 text-emerald-400" />
              ) : (
                <Utensils className="w-5 h-5 text-red-400" />
              )}
              <div>
                <h3 className="font-heading font-black text-sm sm:text-base text-white">
                  {activeBannerModal.title}
                </h3>
                <p className="text-[11px] text-stone-300">{activeBannerModal.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveBannerModal(null)}
              className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-all cursor-pointer"
              title="Tutup Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full-width High-Res Banner View */}
          <div className="p-3 sm:p-5 overflow-y-auto flex-1 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-700 bg-black shadow-inner">
              <img
                src={activeBannerModal.url}
                alt={activeBannerModal.title}
                className="w-full h-auto object-contain max-h-[60vh] mx-auto select-none"
              />
            </div>

            {/* Banner Breakdown / Features */}
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                isTeh
                  ? 'bg-emerald-950/60 border-emerald-800/60 text-emerald-100'
                  : 'bg-red-950/60 border-red-800/60 text-red-100'
              }`}
            >
              <div className="font-bold flex items-center gap-2 text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Detail Identitas Visual Banner Resmi:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeBannerModal.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs">
            <span className="text-stone-400">Hak Cipta © Brand Kampung Group • Tambakroto</span>
            <div className="flex items-center gap-2">
              <a
                href={activeBannerModal.url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Buka Tab Penuh</span>
              </a>
              <button
                onClick={() => setActiveBannerModal(null)}
                className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // In 'all' or 'combo' mode:
  // Render Brand Kampung Parent Header, followed by BOTH sections with banners & videos!
  return (
    <div className="space-y-10 md:space-y-14">
      {/* Brand Kampung Parent Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-950 text-white py-12 md:py-18 transition-all duration-500">
        {/* Visual Accent Glows */}
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-amber-400 text-xs font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Resmi Induk Usaha Kuliner Rakyat</span>
            </div>

            {/* Logo Brand Kampung tanpa bingkai putih, ukuran besar menonjol */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2">
              <img
                src={BRAND_ASSETS.logo}
                alt="Logo Resmi Brand Kampung"
                className="w-56 h-44 sm:w-72 sm:h-56 md:w-80 md:h-64 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 select-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo-brand-kampung.png';
                }}
              />
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
                BRAND KAMPUNG
              </h1>
            </div>

            <p className="text-stone-300 text-base sm:text-xl leading-relaxed">
              Menghadirkan perpaduan sempurna <strong className="text-emerald-400 font-bold">Kesegaran Teh Kampung</strong> dan <strong className="text-red-400 font-bold">Kehangatan Dimsum Kampung</strong>. Dua unit usaha pilihan dengan cita rasa otentik untuk seluruh keluarga.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <button
                onClick={() => setActiveUnit('teh')}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Coffee className="w-4 h-4 shrink-0" />
                <span>Lihat Banner & Video Teh</span>
              </button>
              <button
                onClick={() => setActiveUnit('dimsum')}
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-900/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Utensils className="w-4 h-4 shrink-0" />
                <span>Lihat Banner & Video Dimsum</span>
              </button>
              <button
                onClick={() => setActiveUnit('combo')}
                className="px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Paket Hemat Combo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DUA BAGIAN TERPISAH (BANNER RESMI + VIDEO MOBILE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bagian Terpisah 1: Banner & Video Teh Kampung */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-emerald-800">
              <Coffee className="w-5 h-5 text-emerald-600" />
              <span className="font-extrabold text-sm uppercase tracking-wider">
                Unit 01 • Kesegaran & Spanduk Resmi Teh Kampung
              </span>
            </div>
            <span className="text-xs text-stone-500 font-medium">Format Video Mobile</span>
          </div>
          {renderTehKampungSection(false)}
        </div>

        {/* Pemisah Elegan Antar Unit */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-300"></div>
          </div>
          <div className="relative bg-stone-50 px-6 py-2 rounded-full border border-stone-300 shadow-xs flex items-center gap-3 text-xs font-bold text-stone-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Cita Rasa Terpisah & Otentik</span>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          </div>
        </div>

        {/* Bagian Terpisah 2: Banner & Video Dimsum Kampung */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-red-800">
              <Utensils className="w-5 h-5 text-red-600" />
              <span className="font-extrabold text-sm uppercase tracking-wider">
                Unit 02 • Kehangatan & Spanduk Resmi Dimsum Kampung
              </span>
            </div>
            <span className="text-xs text-stone-500 font-medium">Format Video Mobile</span>
          </div>
          {renderDimsumKampungSection(false)}
        </div>
      </div>

      {/* Lightbox Modal */}
      {renderBannerModal()}
    </div>
  );
};
