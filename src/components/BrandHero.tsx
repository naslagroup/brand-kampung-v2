import React from 'react';
import { BrandUnit } from '../types';
import { BRAND_ASSETS, BRAND_KAMPUNG_INFO, TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO } from '../data/brandData';
import { Coffee, Utensils, Award, ShieldCheck, Sparkles, ArrowRight, MapPin, Store } from 'lucide-react';

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
  if (activeUnit === 'teh') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-teal-950 text-white py-12 md:py-16 transition-all duration-500">
        {/* Background Pattern & Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text & Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/80 border border-emerald-500/40 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
                <Coffee className="w-3.5 h-3.5 text-emerald-300" />
                <span>Unit Usaha Resmi • Di Bawah Naungan Brand Kampung</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white drop-shadow-sm">
                    TEH KAMPUNG
                  </h1>
                  <span className="px-2.5 py-1 rounded-md bg-amber-400 text-stone-900 font-extrabold text-xs tracking-wider">
                    TAMBAKROTO
                  </span>
                </div>
                <p className="text-emerald-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Seduhan segar daun teh pilihan dengan aroma melati wangi semerbak, rasa sepet mantap, dan manis alami gula tebu. Racikan otentik khas <span className="text-amber-300 font-semibold">WASGITEL</span> (Wangi, Sepet, Legi, Kenthel).
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-lg font-heading">Rp 5.000</span>
                  <span className="text-xs text-emerald-200">Cup Jumbo 22oz</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-emerald-300 font-extrabold text-lg font-heading">100%</span>
                  <span className="text-xs text-emerald-200">Gula Tebu Asli</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-emerald-300 font-extrabold text-lg font-heading">Wasgitel</span>
                  <span className="text-xs text-emerald-200">Seduhan Segar</span>
                </div>
                <div className="bg-emerald-800/60 border border-emerald-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-lg font-heading">@tehkampung</span>
                  <span className="text-xs text-emerald-200">Kemitraan Resmi</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#katalog-teh"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-sm transition-all shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Lihat Menu Teh Kampung</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <button
                  onClick={() => onViewUnitDetail('teh')}
                  className="px-5 py-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 text-white border border-emerald-500/50 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Detail Usaha & Outlet</span>
                </button>
                <button
                  onClick={onOpenPartnership}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/20 font-medium text-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Peluang Usaha Booth
                </button>
              </div>
            </div>

            {/* Right: Banner Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400/30 shadow-2xl shadow-emerald-950/50 group">
                <img
                  src={BRAND_ASSETS.tehBanner}
                  alt="Teh Kampung Tambakroto Banner"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to Unsplash tea visual
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-xs text-emerald-200">
                    <span className="flex items-center gap-1.5 font-semibold text-white">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      Asli Tambakroto
                    </span>
                    <span className="bg-emerald-600/90 text-white px-2 py-0.5 rounded text-[11px] font-bold">
                      Es Teh Jumbo Segar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeUnit === 'dimsum') {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-red-900 via-rose-900 to-stone-950 text-white py-12 md:py-16 transition-all duration-500">
        {/* Background Pattern & Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f87171_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-500/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text & Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-800/80 border border-red-500/40 text-red-200 text-xs font-semibold backdrop-blur-xs">
                <Utensils className="w-3.5 h-3.5 text-red-300" />
                <span>Unit Usaha Resmi • Di Bawah Naungan Brand Kampung</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white drop-shadow-sm">
                    DIMSUM KAMPUNG
                  </h1>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white font-extrabold text-xs tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    100% HALAL
                  </span>
                </div>
                <p className="text-red-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Dimsum ayam & udang segar kukus klakat bambu tradisional. Padat berdaging, lembut juicy, dan disajikan hangat lengkap dengan racikan <span className="text-amber-300 font-semibold">Chili Oil Bawang Putih</span> khas Dimsum Kampung.
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-lg font-heading">Rp 14.000</span>
                  <span className="text-xs text-red-200">Isi 4 Pcs + Chili Oil</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-white font-extrabold text-lg font-heading">85%</span>
                  <span className="text-xs text-red-200">Ayam & Udang Segar</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-amber-300 font-extrabold text-lg font-heading">Halal</span>
                  <span className="text-xs text-red-200">Kemenag RI</span>
                </div>
                <div className="bg-red-800/60 border border-red-600/40 rounded-xl p-3 text-center backdrop-blur-xs">
                  <span className="block text-red-300 font-extrabold text-lg font-heading">Klakat Bambu</span>
                  <span className="text-xs text-red-200">Kukus Panas Fresh</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#katalog-dimsum"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-sm transition-all shadow-lg hover:shadow-amber-400/20 flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Lihat Menu Dimsum Kampung</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
                <button
                  onClick={() => onViewUnitDetail('dimsum')}
                  className="px-5 py-3 rounded-xl bg-red-800/80 hover:bg-red-700/80 text-white border border-red-500/50 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-red-300 shrink-0" />
                  <span>Detail Usaha & Outlet</span>
                </button>
                <button
                  onClick={onOpenPartnership}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-red-100 border border-white/20 font-medium text-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Paket Kemitraan Usaha
                </button>
              </div>
            </div>

            {/* Right: Banner Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-400/30 shadow-2xl shadow-red-950/50 group">
                <img
                  src={BRAND_ASSETS.dimsumBanner}
                  alt="Dimsum Kampung Banner"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-transparent to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-xs text-red-200">
                    <span className="flex items-center gap-1.5 font-semibold text-white">
                      <Award className="w-4 h-4 text-amber-400" />
                      Kukus Hangat Dadakan
                    </span>
                    <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[11px] font-bold">
                      Chili Oil Spesial
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Active Unit === 'all' or 'combo': Parent Brand Kampung Hero
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-950 text-white py-12 md:py-20 transition-all duration-500">
      {/* Visual Accent Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-800/90 border border-stone-700 text-amber-400 text-xs font-semibold shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Portal Resmi Induk Usaha Kuliner Rakyat</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white">
            BRAND KAMPUNG
          </h1>

          <p className="text-stone-300 text-base sm:text-xl leading-relaxed">
            Menghadirkan perpaduan sempurna <strong className="text-emerald-400 font-bold">Kesegaran Teh Kampung</strong> dan <strong className="text-red-400 font-bold">Kehangatan Dimsum Kampung</strong>. Dua unit usaha pilihan dengan cita rasa otentik untuk seluruh keluarga.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <button
              onClick={() => setActiveUnit('teh')}
              className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Coffee className="w-4 h-4 shrink-0" />
              <span>Jelajah Teh Kampung</span>
            </button>
            <button
              onClick={() => setActiveUnit('dimsum')}
              className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-900/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Utensils className="w-4 h-4 shrink-0" />
              <span>Jelajah Dimsum Kampung</span>
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

        {/* Dual Brand Showcase Hero Image */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-stone-700/80 shadow-2xl bg-stone-900/80">
          <div className="relative">
            <img
              src={BRAND_ASSETS.heroBanner}
              alt="Brand Kampung Hero - Teh Kampung & Dimsum Kampung"
              className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Dua Saudara, Dua Cita Rasa Otentik
                  </h3>
                  <p className="text-sm text-stone-300 max-w-xl">
                    Berawal dari kedai Tambakroto, kini Brand Kampung menaungi ratusan titik kemitraan minuman teh wasgitel dan kudapan dimsum halal lezat.
                  </p>
                </div>
                <button
                  onClick={onOpenPartnership}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Konsultasi Kemitraan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
