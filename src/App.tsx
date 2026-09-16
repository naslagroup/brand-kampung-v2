import React, { useState, useEffect } from 'react';
import { BrandUnit, Product, CartItem, ComboPackage } from './types';
import {
  PRODUCTS,
  COMBO_PACKAGES,
  BRAND_KAMPUNG_INFO,
  TEH_KAMPUNG_INFO,
  DIMSUM_KAMPUNG_INFO,
} from './data/brandData';
import { Navbar } from './components/Navbar';
import { BrandHero } from './components/BrandHero';
import { BusinessUnitCards } from './components/BusinessUnitCards';
import { CatalogSection } from './components/CatalogSection';
import { ComboSection } from './components/ComboSection';
import { UnitDetailSection } from './components/UnitDetailSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { PartnershipModal } from './components/PartnershipModal';
import { Footer } from './components/Footer';
import { Coffee, Utensils, Sparkles, Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeUnit, setActiveUnit] = useState<BrandUnit>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState<boolean>(false);
  const [detailUnitTarget, setDetailUnitTarget] = useState<'teh' | 'dimsum'>('teh');
  const [notification, setNotification] = useState<string | null>(null);

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('brand_kampung_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('brand_kampung_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Flash notification helper
  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 2800);
  };

  // Add customized item from detail modal
  const handleAddToCart = (item: Omit<CartItem, 'id'>) => {
    const newItem: CartItem = {
      ...item,
      id: `${item.productId}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
    };
    setCart((prev) => [...prev, newItem]);
    showNotification(`"${item.name}" berhasil ditambahkan ke pesanan!`);
  };

  // Quick add without customization from card '+' button
  const handleQuickAdd = (product: Product) => {
    const isTeh = product.unit === 'teh';
    const newItem: CartItem = {
      id: `${product.id}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      productId: product.id,
      name: product.name,
      unit: product.unit,
      price: product.price,
      quantity: 1,
      image: product.image,
      selectedOptions: {
        size: isTeh ? 'Jumbo (22oz)' : undefined,
        sweetness: isTeh ? 'Normal Manis' : undefined,
        cookingMethod: !isTeh ? 'Kukus' : undefined,
        sauce: !isTeh ? 'Chili Oil Khas Kampung' : undefined,
      },
    };
    setCart((prev) => [...prev, newItem]);
    showNotification(`"${product.name}" ditambahkan ke pesanan!`);
  };

  // Add combo package
  const handleAddCombo = (combo: ComboPackage) => {
    const newItem: CartItem = {
      id: `${combo.id}-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      productId: combo.id,
      name: combo.name,
      unit: 'combo',
      price: combo.price,
      quantity: 1,
      image: combo.image,
      selectedOptions: {
        notes: `Paket: ${combo.includes.teaItem} + ${combo.includes.dimsumItem}`,
      },
    };
    setCart((prev) => [...prev, newItem]);
    showNotification(`"${combo.name}" ditambahkan ke pesanan!`);
  };

  // Cart operations
  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleViewUnitDetail = (unitId: 'teh' | 'dimsum') => {
    setDetailUnitTarget(unitId);
    const elem = document.getElementById('informasi-unit-detail');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900 selection:bg-emerald-600 selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-stone-700 flex items-center gap-3 animate-in slide-in-from-top-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center font-bold text-xs shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">{notification}</span>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        activeUnit={activeUnit}
        setActiveUnit={(u) => {
          setActiveUnit(u);
          if (u === 'teh') setDetailUnitTarget('teh');
          if (u === 'dimsum') setDetailUnitTarget('dimsum');
        }}
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPartnership={() => setIsPartnershipOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onViewUnitDetail={handleViewUnitDetail}
      />

      <main className="flex-1">
        {/* Dynamic Hero Section */}
        <BrandHero
          activeUnit={activeUnit}
          setActiveUnit={setActiveUnit}
          onOpenPartnership={() => setIsPartnershipOpen(true)}
          onViewUnitDetail={handleViewUnitDetail}
        />

        {/* Dual Business Unit Cards (When in All or Overview mode) */}
        {activeUnit === 'all' && (
          <BusinessUnitCards
            onSelectUnit={(unit) => {
              setActiveUnit(unit);
              if (unit === 'teh') setDetailUnitTarget('teh');
              if (unit === 'dimsum') setDetailUnitTarget('dimsum');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            onViewDetail={handleViewUnitDetail}
            onOpenPartnership={() => setIsPartnershipOpen(true)}
          />
        )}

        {/* Product Catalog Section with Green (Teh) or Red (Dimsum) Palette */}
        {(activeUnit === 'all' || activeUnit === 'teh' || activeUnit === 'dimsum') && (
          <CatalogSection
            products={PRODUCTS}
            activeUnit={activeUnit}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onQuickAdd={handleQuickAdd}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {/* Combo Package Section (Both Units Combined) */}
        {(activeUnit === 'all' || activeUnit === 'combo') && (
          <ComboSection
            combos={COMBO_PACKAGES}
            onAddCombo={handleAddCombo}
          />
        )}

        {/* Deep Business Unit Information Section (Heritage, Standar Kualitas, Kemitraan, Outlet) */}
        <UnitDetailSection
          initialUnit={detailUnitTarget}
          onOpenPartnership={() => setIsPartnershipOpen(true)}
        />
      </main>

      {/* Footer with Parent Brand and Dual Unit Details */}
      <Footer
        setActiveUnit={setActiveUnit}
        onOpenPartnership={() => setIsPartnershipOpen(true)}
        onViewUnitDetail={handleViewUnitDetail}
      />

      {/* Floating Bottom Cart Bar for Mobile when items exist */}
      {cartTotalItems > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:hidden z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-stone-900 text-white p-3.5 rounded-2xl shadow-2xl flex items-center justify-between border border-stone-700 cursor-pointer active:scale-98 transition-transform"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-400" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cartTotalItems}
                </span>
              </div>
              <span className="text-xs font-bold">
                {cartTotalItems} Menu dalam Pesanan
              </span>
            </div>
            <span className="text-xs font-bold text-amber-400">
              Lihat Keranjang →
            </span>
          </button>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Partnership Registration Modal */}
      <PartnershipModal
        isOpen={isPartnershipOpen}
        onClose={() => setIsPartnershipOpen(false)}
        defaultUnit={activeUnit === 'teh' ? 'teh' : activeUnit === 'dimsum' ? 'dimsum' : 'both'}
      />
    </div>
  );
}
