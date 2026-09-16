import React, { useState } from 'react';
import { Product, BrandUnit } from '../types';
import { Coffee, Utensils, Plus, Eye, Check, Sparkles, Filter, Search } from 'lucide-react';

interface CatalogSectionProps {
  products: Product[];
  activeUnit: BrandUnit;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  activeUnit,
  onSelectProduct,
  onQuickAdd,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Filter products by activeUnit, search query, and category
  const filteredProducts = products.filter((item) => {
    // Unit match
    if (activeUnit === 'teh' && item.unit !== 'teh') return false;
    if (activeUnit === 'dimsum' && item.unit !== 'dimsum') return false;

    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchFlavor = item.flavorNotes.some((f) => f.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat && !matchFlavor) return false;
    }

    // Category match
    if (selectedCategory !== 'Semua' && item.category !== selectedCategory) {
      return false;
    }

    return true;
  });

  // Extract unique categories based on unit
  const categories = [
    'Semua',
    ...Array.from(
      new Set(
        products
          .filter((p) => {
            if (activeUnit === 'teh') return p.unit === 'teh';
            if (activeUnit === 'dimsum') return p.unit === 'dimsum';
            return true;
          })
          .map((p) => p.category)
      )
    ),
  ];

  // Helper formatting currency
  const formatRupiah = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  return (
    <section id="katalog-produk" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Dynamic Palettes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            {activeUnit === 'teh' && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 mb-2">
                <Coffee className="w-3.5 h-3.5 text-emerald-600" />
                <span>Katalog Teh Kampung • Palet Hijau Segar</span>
              </div>
            )}
            {activeUnit === 'dimsum' && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold border border-red-300 mb-2">
                <Utensils className="w-3.5 h-3.5 text-red-600" />
                <span>Katalog Dimsum Kampung • Palet Merah Hangat</span>
              </div>
            )}
            {activeUnit === 'all' && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-xs font-bold border border-stone-300 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Katalog Lengkap Brand Kampung</span>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tracking-tight text-stone-900">
              {activeUnit === 'teh' && 'Menu Segar Teh Kampung'}
              {activeUnit === 'dimsum' && 'Menu Hangat Dimsum Kampung'}
              {activeUnit === 'all' && 'Pilihan Menu Teh & Dimsum'}
              {activeUnit === 'combo' && 'Menu Brand Kampung'}
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-xl">
              {activeUnit === 'teh' &&
                'Diseduh dari pucuk daun teh asli Tambakroto dengan es kristal dan gula tebu murni. Segar, wangi, dan menyejukkan.'}
              {activeUnit === 'dimsum' &&
                'Kukus hangat klakat bambu dengan daging ayam fillet & udang pilihan. 100% Halal dengan sambal Chili Oil mantap.'}
              {activeUnit === 'all' &&
                'Jelajahi perpaduan kesegaran Teh Kampung (hijau) dan kehangatan Dimsum Kampung (merah) dalam satu wadah.'}
            </p>
          </div>

          {/* Quick search input (mobile/tablet fallback) */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari varian rasa..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800 placeholder-stone-400 shadow-xs"
            />
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <span className="text-xs font-bold text-stone-500 flex items-center gap-1 shrink-0 pl-1">
            <Filter className="w-3.5 h-3.5" /> Kategori:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            let pillClass = 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-200';

            if (isSelected) {
              if (activeUnit === 'teh') {
                pillClass = 'bg-emerald-600 text-white shadow-sm border-emerald-600';
              } else if (activeUnit === 'dimsum') {
                pillClass = 'bg-red-600 text-white shadow-sm border-red-600';
              } else {
                pillClass = 'bg-stone-900 text-white shadow-sm border-stone-900';
              }
            }

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all border cursor-pointer ${pillClass}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">Tidak ada produk yang cocok dengan pencarian "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isTeh = product.unit === 'teh';

              // Palette adjustments based on unit
              const cardBorder = isTeh
                ? 'border-emerald-100 hover:border-emerald-400 hover:shadow-emerald-900/10'
                : 'border-red-100 hover:border-red-400 hover:shadow-red-900/10';

              const unitBadgeBg = isTeh ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200';

              const priceColor = isTeh ? 'text-emerald-700' : 'text-red-700';

              const addBtnBg = isTeh
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white';

              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className={`bg-white rounded-2xl border ${cardBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group`}
                >
                  {/* Product Image Box */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60"></div>

                    {/* Top Unit Badge & Promotional Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border backdrop-blur-xs ${unitBadgeBg}`}>
                        {isTeh ? 'Teh Segar' : 'Dimsum Hangat'}
                      </span>
                      {product.badge && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-400 text-stone-900 shadow-xs">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg bg-white/90 hover:bg-white text-stone-800 text-xs font-semibold shadow-md flex items-center gap-1 backdrop-blur-xs transition-transform active:scale-95 cursor-pointer"
                      title="Lihat Detail Produk"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detail</span>
                    </button>

                    {/* Portion size badge */}
                    {product.portionSize && (
                      <span className="absolute bottom-3 left-3 text-[11px] font-medium text-white bg-stone-900/75 px-2 py-0.5 rounded backdrop-blur-xs">
                        {product.portionSize}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-lg text-stone-900 group-hover:text-stone-700 transition-colors leading-snug">
                          {product.name}
                        </h3>
                      </div>

                      <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Flavor Notes Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.flavorNotes.map((note, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              isTeh ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-red-50 text-red-800 border border-red-100'
                            }`}
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Pricing & Action Buttons */}
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-base sm:text-lg font-black font-heading ${priceColor}`}>
                            {formatRupiah(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-stone-400 line-through">
                              {formatRupiah(product.originalPrice)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-stone-500 block">
                          {isTeh ? 'Gula Tebu Alami' : '100% Halal'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Pilihan
                        </button>
                        <button
                          onClick={() => onQuickAdd(product)}
                          className={`p-2 rounded-xl ${addBtnBg} transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center`}
                          title="Tambah ke Pesanan"
                          id={`add-btn-${product.id}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
