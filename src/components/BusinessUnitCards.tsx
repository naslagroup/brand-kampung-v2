import React from 'react';
import { BrandUnit } from '../types';
import { TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO, BRAND_ASSETS } from '../data/brandData';
import { Coffee, Utensils, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Store } from 'lucide-react';

interface BusinessUnitCardsProps {
  onSelectUnit: (unit: BrandUnit) => void;
  onViewDetail: (unitId: 'teh' | 'dimsum') => void;
  onOpenPartnership: () => void;
}

export const BusinessUnitCards: React.FC<BusinessUnitCardsProps> = ({
  onSelectUnit,
  onViewDetail,
  onOpenPartnership,
}) => {
  return (
    <section className="py-12 md:py-16 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider">
            <span>Dua Unit Usaha Pilihan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-stone-900">
            Di Bawah Naungan Brand Kampung
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Pilihlah unit usaha favorit Anda untuk melihat katalog produk lengkap dengan racikan khas dan informasi kemitraan resmi.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: TEH KAMPUNG (PALET HIJAU SEGAR) */}
          <div className="rounded-3xl bg-white border-2 border-emerald-300 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col overflow-hidden group">
            {/* Top Color Banner */}
            <div className="relative h-48 sm:h-56 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 overflow-hidden">
              <img
                src={BRAND_ASSETS.tehBanner}
                alt="Teh Kampung Banner"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.jpg')) {
                    target.src = BRAND_ASSETS.tehBannerJpg;
                  } else {
                    target.src = BRAND_ASSETS.tehBannerFallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-bold text-xs flex items-center gap-1.5 backdrop-blur-xs border border-emerald-400/40">
                    <Coffee className="w-3.5 h-3.5 text-emerald-200" />
                    Unit 01 • Palet Hijau Segar
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-400 text-stone-900 text-xs font-black">
                    ASLI TAMBAKROTO
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                    TEH KAMPUNG
                  </h3>
                  <p className="text-emerald-200 text-xs sm:text-sm font-medium">
                    {TEH_KAMPUNG_INFO.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-stone-600 text-sm leading-relaxed">
                Racikan seduhan teh tradisional khas Jawa Tengah dengan daun teh asli pilihan. Diseduh higienis, manis dari gula tebu murni, dan porsi cup jumbo 22oz yang memuaskan dahaga.
              </p>

              {/* Distinctive Features (Pills) */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cita Rasa <strong>WASGITEL</strong> (Wangi, Sepet, Legi, Kenthel)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Gula Tebu Murni (Tanpa Pemanis Kimia Sintetis)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Harga Merakyat: Mulai <strong>Rp 5.000</strong> Cup Jumbo 22oz</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Peluang Usaha Kemitraan: <strong>@tehkampung</strong></span>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectUnit('teh')}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-emerald-600 whitespace-nowrap"
                >
                  <span>Buka Katalog Teh Hijau</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <button
                  onClick={() => onViewDetail('teh')}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Detail Usaha</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: DIMSUM KAMPUNG (PALET MERAH HANGAT) */}
          <div className="rounded-3xl bg-white border-2 border-red-300 shadow-xl shadow-red-900/5 hover:shadow-2xl hover:border-red-500 transition-all duration-300 flex flex-col overflow-hidden group">
            {/* Top Color Banner */}
            <div className="relative h-48 sm:h-56 bg-gradient-to-r from-red-800 via-rose-800 to-stone-900 overflow-hidden">
              <img
                src={BRAND_ASSETS.dimsumBanner}
                alt="Dimsum Kampung Banner"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('.jpg')) {
                    target.src = BRAND_ASSETS.dimsumBannerJpg;
                  } else {
                    target.src = BRAND_ASSETS.dimsumBannerFallback;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/40 to-transparent flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-600/90 text-white font-bold text-xs flex items-center gap-1.5 backdrop-blur-xs border border-red-400/40">
                    <Utensils className="w-3.5 h-3.5 text-red-200" />
                    Unit 02 • Palet Merah Hangat
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-white text-xs font-black flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    100% HALAL
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                    DIMSUM KAMPUNG
                  </h3>
                  <p className="text-red-200 text-xs sm:text-sm font-medium">
                    {DIMSUM_KAMPUNG_INFO.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-stone-600 text-sm leading-relaxed">
                Dimsum kukus dan goreng dibuat fresh setiap hari dari daging ayam fillet dan udang segar bertekstur juicy. Disajikan panas mengepul dari klakat bambu dengan siraman Chili Oil wangi gurih.
              </p>

              {/* Distinctive Features (Pills) */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span><strong>100% Halal Indonesia</strong> (Bebas gelatin & lemak haram)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Padat Daging (85% komposisi ayam segar & udang laut manis)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Signature <strong>Chili Oil Bawang Putih</strong> resep rahasia</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Peluang Usaha Kemitraan: <strong>@dimsumkampung</strong></span>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectUnit('dimsum')}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-red-600 whitespace-nowrap"
                >
                  <span>Buka Katalog Dimsum Merah</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <button
                  onClick={() => onViewDetail('dimsum')}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-800 border border-red-200 font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Store className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Detail Usaha</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
