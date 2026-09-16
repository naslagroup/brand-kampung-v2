import React from 'react';
import { ComboPackage, CartItem } from '../types';
import { Sparkles, Plus, Check, ShoppingBag, ArrowRight } from 'lucide-react';

interface ComboSectionProps {
  combos: ComboPackage[];
  onAddCombo: (combo: ComboPackage) => void;
}

export const ComboSection: React.FC<ComboSectionProps> = ({ combos, onAddCombo }) => {
  const formatRupiah = (num: number) => 'Rp ' + num.toLocaleString('id-ID');

  return (
    <section id="paket-combo" className="py-12 md:py-16 bg-gradient-to-b from-stone-900 to-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800 border border-stone-700 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Paket Hemat Dua Rasa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tight text-white">
            Combo Harmoni Brand Kampung
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Paduan paling pas! Dingin segarnya <span className="text-emerald-400 font-semibold">Teh Kampung</span> berpadu dengan gurih hangatnya <span className="text-red-400 font-semibold">Dimsum Kampung</span> dalam satu paket hemat.
          </p>
        </div>

        {/* Combo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((combo) => {
            const savings = combo.originalPrice - combo.price;

            return (
              <div
                key={combo.id}
                className="bg-stone-800/80 rounded-3xl border border-stone-700/80 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image & Badge */}
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-400 text-stone-900 shadow-md">
                        {combo.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-emerald-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                      Hemat {formatRupiah(savings)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                      {combo.name}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {combo.description}
                    </p>

                    {/* Includes Box */}
                    <div className="bg-stone-900/90 rounded-2xl p-3.5 border border-stone-700 text-xs space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                        Isi Paket Combo:
                      </span>
                      <div className="flex items-center gap-2 text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                        <span className="text-emerald-300 font-medium">{combo.includes.teaItem}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-red-400 shrink-0"></span>
                        <span className="text-red-300 font-medium">{combo.includes.dimsumItem}</span>
                      </div>
                      {combo.includes.extras && (
                        <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                          <span className="w-2 h-2 rounded-full bg-stone-500 shrink-0"></span>
                          <span>{combo.includes.extras}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-stone-700/60">
                    <div>
                      <span className="text-[11px] text-stone-400 block">Harga Paket:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black font-heading text-amber-400">
                          {formatRupiah(combo.price)}
                        </span>
                        <span className="text-xs text-stone-500 line-through">
                          {formatRupiah(combo.originalPrice)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddCombo(combo)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-red-600 hover:from-emerald-500 hover:to-red-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                      <span>Pesan Combo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
