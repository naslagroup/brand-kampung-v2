import React from 'react';
import { BrandUnit } from '../types';
import { BRAND_KAMPUNG_INFO, BRAND_ASSETS } from '../data/brandData';
import { ShoppingBag, Search, Sparkles, Coffee, Utensils, Layers } from 'lucide-react';

interface NavbarProps {
  activeUnit: BrandUnit;
  setActiveUnit: (unit: BrandUnit) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenPartnership: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onViewUnitDetail: (unitId: 'teh' | 'dimsum') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeUnit,
  setActiveUnit,
  cartCount,
  onOpenCart,
  onOpenPartnership,
  searchQuery,
  setSearchQuery,
  onViewUnitDetail,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-colors duration-300">
      {/* Top Notification Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="truncate">
              Selamat Datang di <strong>{BRAND_KAMPUNG_INFO.name}</strong> • Menaungi <strong>Teh Kampung</strong> & <strong>Dimsum Kampung</strong>
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[11px] text-stone-300 whitespace-nowrap shrink-0">
            <span>Pusat: {BRAND_KAMPUNG_INFO.origin}</span>
            <span className="text-stone-600 hidden sm:inline">•</span>
            <a
              href={`https://wa.me/${BRAND_KAMPUNG_INFO.socialMedia.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              title="Hubungi WhatsApp Naasyith Dzaky"
            >
              WA: {BRAND_KAMPUNG_INFO.socialMedia.whatsappDisplay} ({BRAND_KAMPUNG_INFO.socialMedia.contactPerson})
            </a>
            <span className="text-stone-600">•</span>
            <button
              onClick={onOpenPartnership}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
            >
              Kemitraan
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => setActiveUnit('all')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer focus:outline-none shrink-0"
            id="brand-kampung-logo-btn"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <img
                src={BRAND_ASSETS.logo}
                alt="Logo Resmi Brand Kampung"
                className="w-full h-full object-contain drop-shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo-brand-kampung.png';
                }}
              />
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg sm:text-xl font-black tracking-tight text-stone-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                  BRAND KAMPUNG
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 border border-amber-200 whitespace-nowrap">
                  Resmi
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium whitespace-nowrap leading-tight">
                Teh Kampung & Dimsum Kampung
              </p>
            </div>
          </button>

          {/* Unit Switcher Tabs (Desktop - Streamlined, Clean, No Text Stacking) */}
          <nav className="hidden md:flex items-center bg-stone-100/90 p-1 rounded-full border border-stone-200/90 shadow-inner shrink-0">
            <button
              onClick={() => setActiveUnit('all')}
              className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeUnit === 'all'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
              id="nav-tab-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua</span>
            </button>

            {/* Teh Kampung - Palet Hijau Segar */}
            <button
              onClick={() => setActiveUnit('teh')}
              className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeUnit === 'teh'
                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400/30'
                  : 'text-emerald-800 hover:bg-emerald-100/70'
              }`}
              id="nav-tab-teh"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Teh Kampung</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeUnit === 'teh' ? 'bg-amber-300' : 'bg-emerald-500'}`}></span>
            </button>

            {/* Dimsum Kampung - Palet Merah Hangat */}
            <button
              onClick={() => setActiveUnit('dimsum')}
              className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeUnit === 'dimsum'
                  ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-400/30'
                  : 'text-red-800 hover:bg-red-100/70'
              }`}
              id="nav-tab-dimsum"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Dimsum Kampung</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeUnit === 'dimsum' ? 'bg-amber-300' : 'bg-red-500'}`}></span>
            </button>

            {/* Combo Paket */}
            <button
              onClick={() => setActiveUnit('combo')}
              className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeUnit === 'combo'
                  ? 'bg-gradient-to-r from-emerald-600 to-red-600 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              id="nav-tab-combo"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Paket Combo</span>
            </button>
          </nav>

          {/* Right Action Items: Search Bar, Kemitraan CTA, Cart Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Quick search input (visible on wider screens to avoid overcrowding) */}
            <div className="relative hidden xl:block w-44">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari menu..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-stone-100 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>

            {/* Info Kemitraan CTA button - Always on one line */}
            <button
              onClick={onOpenPartnership}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition-colors shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Gabung Kemitraan</span>
            </button>

            {/* Cart Drawer Trigger Button - Always on one line */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all shadow-md cursor-pointer group focus:ring-2 focus:ring-stone-400 whitespace-nowrap shrink-0"
              id="open-cart-btn"
              aria-label="Keranjang Pesanan"
            >
              <div className="relative flex items-center">
                <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-stone-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">Pesanan</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs (visible only on small screens) */}
        <div className="flex md:hidden items-center justify-between pb-3 gap-1 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveUnit('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeUnit === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setActiveUnit('teh')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
              activeUnit === 'teh'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}
          >
            <Coffee className="w-3 h-3" />
            <span>Teh Kampung (Hijau)</span>
          </button>
          <button
            onClick={() => setActiveUnit('dimsum')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 ${
              activeUnit === 'dimsum'
                ? 'bg-red-600 text-white'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <Utensils className="w-3 h-3" />
            <span>Dimsum (Merah)</span>
          </button>
          <button
            onClick={() => setActiveUnit('combo')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeUnit === 'combo'
                ? 'bg-gradient-to-r from-emerald-600 to-red-600 text-white'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            Combo
          </button>
        </div>
      </div>
    </header>
  );
};
