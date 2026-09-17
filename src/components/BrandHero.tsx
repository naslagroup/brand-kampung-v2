import React, { useState, useRef } from 'react';
import { BrandUnit } from '../types';
import { BRAND_ASSETS, BRAND_KAMPUNG_INFO, TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO } from '../data/brandData';
import { Coffee, Utensils, Award, ShieldCheck, Sparkles, ArrowRight, MapPin, Store, Volume2, VolumeX, Upload } from 'lucide-react';

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
  // Dedicated state for Teh Kampung Video
  const [isTehVideoMuted, setIsTehVideoMuted] = useState(true);
  const [customTehVideoUrl, setCustomTehVideoUrl] = useState<string | null>(null);
  const tehVideoRef = useRef<HTMLVideoElement>(null);
  const tehFileInputRef = useRef<HTMLInputElement>(null);

  // Dedicated state for Dimsum Kampung Video
  const [isDimsumVideoMuted, setIsDimsumVideoMuted] = useState(true);
  const [customDimsumVideoUrl, setCustomDimsumVideoUrl] = useState<string | null>(null);
  const dimsumVideoRef = useRef<HTMLVideoElement>(null);
  const dimsumFileInputRef = useRef<HTMLInputElement>(null);

  const handleTehVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomTehVideoUrl(url);
      setIsTehVideoMuted(false);
      if (tehVideoRef.current) {
        tehVideoRef.current.load();
        tehVideoRef.current.play().catch(() => {});
      }
    }
  };

  const handleDimsumVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomDimsumVideoUrl(url);
      setIsDimsumVideoMuted(false);
      if (dimsumVideoRef.current) {
        dimsumVideoRef.current.load();
        dimsumVideoRef.current.play().catch(() => {});
      }
    }
  };

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
        <div className="space-y-6">
          {/* Unit Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
            <Coffee className="w-3.5 h-3.5 text-emerald-300" />
            <span>Video & Narasi Khusus • Unit Usaha Teh Kampung</span>
          </div>

          {/* Main Content: Text & Video Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Text TEH KAMPUNG TAMBAKROTO & WASGITEL */}
            <div className="lg:col-span-7 space-y-4">
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

            {/* Right Column: Dedicated Video Player Teh Kampung */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-2xl shadow-emerald-950/60 bg-stone-950 group">
                <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full">
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
                    {customTehVideoUrl && (
                      <source src={customTehVideoUrl} type="video/mp4" />
                    )}
                    <source src="/video-teh-kampung.mp4" type="video/mp4" />
                    <source src="/teh-kampung.mp4" type="video/mp4" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-stone-950/30 pointer-events-none" />

                  {/* Live Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-bold shadow-md backdrop-blur-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                      Video Seduhan Teh Asli
                    </span>
                  </div>

                  {/* Controls: Audio Mute/Unmute & Select Local Video File */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <label
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/80 text-[11px] text-emerald-200 border border-white/20 transition-all cursor-pointer shadow-md"
                      title="Putar video rekaman Teh Kampung dari file perangkat"
                    >
                      <Upload className="w-3 h-3 text-amber-300" />
                      <span className="hidden sm:inline">Pilih Video Teh</span>
                      <input
                        ref={tehFileInputRef}
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={handleTehVideoUpload}
                      />
                    </label>
                    <button
                      onClick={() => setIsTehVideoMuted(!isTehVideoMuted)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs border border-white/20 cursor-pointer shadow-md"
                      title={isTehVideoMuted ? 'Nyalakan Suara Teh' : 'Bisukan Suara Teh'}
                      aria-label="Toggle suara video teh"
                    >
                      {isTehVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
                    </button>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1 text-xs text-emerald-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Otentik Asli Tambakroto</span>
                      </div>
                      <span className="bg-amber-400 text-stone-900 px-2 py-0.5 rounded text-[11px] font-extrabold tracking-wide">
                        WASGITEL
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-300 line-clamp-1">
                      Depan Masjid Tambakroto, Kec. Sayung, Kab. Demak
                    </p>
                  </div>
                </div>
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
        <div className="space-y-6">
          {/* Unit Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-800/80 border border-red-500/40 text-red-200 text-xs font-semibold backdrop-blur-xs">
            <Utensils className="w-3.5 h-3.5 text-red-300" />
            <span>Video & Narasi Khusus • Unit Usaha Dimsum Kampung</span>
          </div>

          {/* Main Content: Text & Video Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Text & Info */}
            <div className="lg:col-span-7 space-y-4">
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

            {/* Right: Dedicated Video Player Dimsum Kampung */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-400/40 shadow-2xl shadow-red-950/60 bg-stone-950 group">
                <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full">
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
                    {customDimsumVideoUrl && (
                      <source src={customDimsumVideoUrl} type="video/mp4" />
                    )}
                    <source src="/video-dimsum-kampung.mp4" type="video/mp4" />
                    <source src="/dimsum-kampung.mp4" type="video/mp4" />
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
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-stone-950/30 pointer-events-none" />

                  {/* Badge Video Live / Kedai */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold shadow-md backdrop-blur-xs">
                      <span className="w-2 h-2 rounded-full bg-red-200 animate-ping" />
                      Video Kedai Dimsum
                    </span>
                  </div>

                  {/* Controls: Audio Mute/Unmute & Select Local Video File */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <label
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 hover:bg-black/80 text-[11px] text-red-200 border border-white/20 transition-all cursor-pointer shadow-md"
                      title="Putar video rekaman Dimsum Kampung dari file perangkat"
                    >
                      <Upload className="w-3 h-3 text-amber-300" />
                      <span className="hidden sm:inline">Pilih Video Dimsum</span>
                      <input
                        ref={dimsumFileInputRef}
                        type="file"
                        accept="video/*"
                        className="hidden"
                        onChange={handleDimsumVideoUpload}
                      />
                    </label>
                    <button
                      onClick={() => setIsDimsumVideoMuted(!isDimsumVideoMuted)}
                      className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-xs border border-white/20 cursor-pointer shadow-md"
                      title={isDimsumVideoMuted ? 'Nyalakan Suara Dimsum' : 'Bisukan Suara Dimsum'}
                      aria-label="Toggle suara video dimsum"
                    >
                      {isDimsumVideoMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-red-300" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-1 text-xs text-red-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-semibold text-white">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Kedai Tambakroto (Selatan Masjid)</span>
                      </div>
                      <span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[11px] font-bold">
                        100% Halal
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-300 line-clamp-1">
                      Kec. Sayung, Kab. Demak • Siomay, Mentai, Moza, Ekado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // If filtered specifically to Teh Kampung
  if (activeUnit === 'teh') {
    return renderTehKampungSection(true);
  }

  // If filtered specifically to Dimsum Kampung
  if (activeUnit === 'dimsum') {
    return renderDimsumKampungSection(true);
  }

  // In 'all' or 'combo' mode:
  // Render Brand Kampung Header, followed by BOTH video sections clearly separated!
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
                <span>Lihat Video & Menu Teh</span>
              </button>
              <button
                onClick={() => setActiveUnit('dimsum')}
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-900/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Utensils className="w-4 h-4 shrink-0" />
                <span>Lihat Video & Menu Dimsum</span>
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

      {/* DUA BAGIAN VIDEO TERPISAH (SEPARATED VIDEO SHOWCASES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bagian Terpisah 1: Video Teh Kampung */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-emerald-800">
              <Coffee className="w-5 h-5 text-emerald-600" />
              <span className="font-extrabold text-sm uppercase tracking-wider">Video Unit 01 • Kesegaran Teh Kampung</span>
            </div>
            <span className="text-xs text-stone-500 font-medium">Player Mandiri #1</span>
          </div>
          {renderTehKampungSection(false)}
        </div>

        {/* Pemisah Elegan Antar Video */}
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

        {/* Bagian Terpisah 2: Video Dimsum Kampung */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-red-800">
              <Utensils className="w-5 h-5 text-red-600" />
              <span className="font-extrabold text-sm uppercase tracking-wider">Video Unit 02 • Kehangatan Dimsum Kampung</span>
            </div>
            <span className="text-xs text-stone-500 font-medium">Player Mandiri #2</span>
          </div>
          {renderDimsumKampungSection(false)}
        </div>
      </div>
    </div>
  );
};
