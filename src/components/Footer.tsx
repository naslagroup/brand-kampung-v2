import React from 'react';
import { BrandUnit } from '../types';
import { BRAND_KAMPUNG_INFO, TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO } from '../data/brandData';
import { Coffee, Utensils, ShieldCheck, MapPin, Phone, Mail, Instagram, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  setActiveUnit: (unit: BrandUnit) => void;
  onOpenPartnership: () => void;
  onViewUnitDetail: (unitId: 'teh' | 'dimsum') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveUnit,
  onOpenPartnership,
  onViewUnitDetail,
}) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand Kampung Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-stone-700 to-red-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center text-amber-400 font-heading font-black text-lg">
                  BK
                </div>
              </div>
              <span className="font-heading text-2xl font-black tracking-tight text-white">
                BRAND KAMPUNG
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {BRAND_KAMPUNG_INFO.vision}
            </p>

            <div className="flex items-center gap-3 text-xs text-stone-400 pt-1">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Coffee className="w-3.5 h-3.5" /> Teh Kampung (Hijau)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                <Utensils className="w-3.5 h-3.5" /> Dimsum Kampung (Merah)
              </span>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Halal Indonesia & Tanpa Pemanis Buatan
              </span>
            </div>
          </div>

          {/* Col 2: Teh Kampung Links (Palet Hijau) (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-emerald-400 flex items-center gap-1.5">
              <Coffee className="w-4 h-4" />
              Teh Kampung
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => setActiveUnit('teh')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Katalog Teh Segar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewUnitDetail('teh')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Filosofi Wasgitel
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartnership}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Kemitraan Booth Teh
                </button>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${TEH_KAMPUNG_INFO.partnership.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>{TEH_KAMPUNG_INFO.partnership.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dimsum Kampung Links (Palet Merah) (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-red-400 flex items-center gap-1.5">
              <Utensils className="w-4 h-4" />
              Dimsum Kampung
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => setActiveUnit('dimsum')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Katalog Dimsum Hangat
                </button>
              </li>
              <li>
                <button
                  onClick={() => onViewUnitDetail('dimsum')}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Sertifikasi Halal
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartnership}
                  className="hover:text-red-300 transition-colors cursor-pointer"
                >
                  Kemitraan Dimsum Kukus
                </button>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${DIMSUM_KAMPUNG_INFO.partnership.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-red-300 transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3 h-3" />
                  <span>{DIMSUM_KAMPUNG_INFO.partnership.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubungi Kami & Kantor Pusat (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white">
              Kantor Pusat & Kemitraan
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{TEH_KAMPUNG_INFO.outlets[0].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_KAMPUNG_INFO.socialMedia.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +{BRAND_KAMPUNG_INFO.socialMedia.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <span>{BRAND_KAMPUNG_INFO.socialMedia.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPartnership}
                className="w-full py-2 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs shadow-sm transition-colors cursor-pointer"
              >
                Gabung Kemitraan Booth
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {BRAND_KAMPUNG_INFO.name}. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan cinta untuk kuliner Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
