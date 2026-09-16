import React, { useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { X, Plus, Minus, Check, Coffee, Utensils, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const isTeh = product.unit === 'teh';

  // Customization state
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.options?.sizes?.[0]?.name || ''
  );
  const [selectedSweetness, setSelectedSweetness] = useState<string>(
    product.options?.sweetnessLevels?.[0] || 'Normal Manis'
  );
  const [selectedIce, setSelectedIce] = useState<string>(
    product.options?.iceLevels?.[0] || 'Normal Ice'
  );
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedCooking, setSelectedCooking] = useState<string>(
    product.options?.cookingMethod?.[0] || 'Kukus'
  );
  const [selectedSauce, setSelectedSauce] = useState<string>(
    product.options?.sauces?.[0] || 'Chili Oil Khas Kampung'
  );
  const [selectedPortion, setSelectedPortion] = useState<{ count: number; price: number; label: string } | null>(
    product.options?.quantityOptions?.[0] || null
  );
  const [notes, setNotes] = useState<string>('');
  const [isAddedSuccess, setIsAddedSuccess] = useState<boolean>(false);

  // Reset states when product changes
  useEffect(() => {
    setQuantity(1);
    setSelectedSize(product.options?.sizes?.[0]?.name || '');
    setSelectedSweetness(product.options?.sweetnessLevels?.[0] || 'Normal Manis');
    setSelectedIce(product.options?.iceLevels?.[0] || 'Normal Ice');
    setSelectedToppings([]);
    setSelectedCooking(product.options?.cookingMethod?.[0] || 'Kukus');
    setSelectedSauce(product.options?.sauces?.[0] || 'Chili Oil Khas Kampung');
    setSelectedPortion(product.options?.quantityOptions?.[0] || null);
    setNotes('');
    setIsAddedSuccess(false);
  }, [product]);

  // Compute unit price with options
  const basePrice = selectedPortion ? selectedPortion.price : product.price;

  // Add size extras
  const sizeExtra =
    product.options?.sizes?.find((s) => s.name === selectedSize)?.extraPrice || 0;

  // Add toppings extras
  const toppingExtras = selectedToppings.reduce((acc, tName) => {
    const topping = product.options?.toppings?.find((t) => t.name === tName);
    return acc + (topping?.price || 0);
  }, 0);

  const finalUnitPrice = Math.max(1000, basePrice + sizeExtra + toppingExtras);
  const totalPrice = finalUnitPrice * quantity;

  const formatRupiah = (num: number) => 'Rp ' + num.toLocaleString('id-ID');

  const handleToggleTopping = (toppingName: string) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingName)
        ? prev.filter((t) => t !== toppingName)
        : [...prev, toppingName]
    );
  };

  const handleAdd = () => {
    onAddToCart({
      productId: product.id,
      name: product.name,
      unit: product.unit,
      price: finalUnitPrice,
      quantity,
      image: product.image,
      selectedOptions: {
        size: selectedSize || undefined,
        sweetness: isTeh ? selectedSweetness : undefined,
        ice: isTeh ? selectedIce : undefined,
        topping: selectedToppings.length > 0 ? selectedToppings.join(', ') : undefined,
        cookingMethod: !isTeh ? selectedCooking : undefined,
        sauce: !isTeh ? selectedSauce : undefined,
        portionLabel: selectedPortion ? selectedPortion.label : undefined,
        notes: notes.trim() || undefined,
      },
    });

    setIsAddedSuccess(true);
    setTimeout(() => {
      setIsAddedSuccess(false);
      onClose();
    }, 600);
  };

  // Color scheme constants based on unit
  const accentColor = isTeh ? 'emerald' : 'red';
  const modalHeaderBg = isTeh
    ? 'bg-gradient-to-r from-emerald-800 to-teal-800'
    : 'bg-gradient-to-r from-red-800 to-rose-800';

  const actionBtnClass = isTeh
    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
    : 'bg-red-600 hover:bg-red-700 text-white';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header Image */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex flex-col justify-end p-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                  isTeh ? 'bg-emerald-600' : 'bg-red-600'
                }`}
              >
                {isTeh ? 'Teh Kampung' : 'Dimsum Kampung'}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-xs">
                {product.category}
              </span>
              {isTeh ? (
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/80 text-white">
                  Wasgitel Segar
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500 text-white flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 100% Halal
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Description & Flavor Notes */}
          <div>
            <p className="text-stone-600 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.flavorNotes.map((note, i) => (
                <span
                  key={i}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    isTeh
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  ✓ {note}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-xs text-stone-700 space-y-2">
              <span className="font-bold text-stone-900 block">Karakteristik & Keunggulan:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${isTeh ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Specific Customization Options */}
          {isTeh ? (
            /* =================== TEH KAMPUNG OPTIONS =================== */
            <div className="space-y-4 pt-2 border-t border-stone-100">
              {/* Cup Size */}
              {product.options?.sizes && product.options.sizes.length > 0 && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Pilih Ukuran Cup:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.options.sizes.map((s) => (
                      <button
                        key={s.name}
                        onClick={() => setSelectedSize(s.name)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left flex justify-between items-center cursor-pointer ${
                          selectedSize === s.name
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{s.name}</span>
                        {s.extraPrice !== 0 && (
                          <span className="text-[11px] text-emerald-700 font-bold">
                            {s.extraPrice > 0 ? `+${formatRupiah(s.extraPrice)}` : formatRupiah(s.extraPrice)}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sweetness Level */}
              {product.options?.sweetnessLevels && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Tingkat Kemanisan (Gula Tebu Asli):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {product.options.sweetnessLevels.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setSelectedSweetness(lvl)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          selectedSweetness === lvl
                            ? 'border-emerald-600 bg-emerald-600 text-white font-bold'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Ice Level */}
              {product.options?.iceLevels && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Pilihan Es Batu:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.options.iceLevels.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setSelectedIce(lvl)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          selectedIce === lvl
                            ? 'border-emerald-600 bg-emerald-600 text-white font-bold'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Toppings */}
              {product.options?.toppings && product.options.toppings.length > 0 && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Tambah Topping Segar (Opsional):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {product.options.toppings.map((top) => {
                      const isChecked = selectedToppings.includes(top.name);
                      return (
                        <button
                          key={top.name}
                          onClick={() => handleToggleTopping(top.name)}
                          className={`p-2.5 rounded-xl text-xs font-medium border text-left flex justify-between items-center transition-all cursor-pointer ${
                            isChecked
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                              : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                          }`}
                        >
                          <span>{top.name}</span>
                          <span className="text-[11px] text-emerald-700">
                            +{formatRupiah(top.price)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* =================== DIMSUM KAMPUNG OPTIONS =================== */
            <div className="space-y-4 pt-2 border-t border-stone-100">
              {/* Portion size selection if available */}
              {product.options?.quantityOptions && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Pilih Jumlah Porsi:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {product.options.quantityOptions.map((opt) => (
                      <button
                        key={opt.count}
                        onClick={() => setSelectedPortion(opt)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left flex flex-col transition-all cursor-pointer ${
                          selectedPortion?.count === opt.count
                            ? 'border-red-600 bg-red-50 text-red-900 ring-2 ring-red-500/20'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span className="font-bold">{opt.label}</span>
                        <span className="text-[11px] text-red-700 mt-0.5">
                          {formatRupiah(opt.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cooking Method */}
              {product.options?.cookingMethod && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Metode Penyajian:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {product.options.cookingMethod.map((method) => (
                      <button
                        key={method}
                        onClick={() => setSelectedCooking(method)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          selectedCooking === method
                            ? 'border-red-600 bg-red-600 text-white'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {method === 'Kukus' ? '🔥 Kukus Hangat (Klakat Bambu)' : '⚡ Goreng Krispi Gurih'}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sauce Preference */}
              {product.options?.sauces && (
                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-2">
                    Pilihan Saus Cocolan:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {product.options.sauces.map((sauce) => (
                      <button
                        key={sauce}
                        onClick={() => setSelectedSauce(sauce)}
                        className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          selectedSauce === sauce
                            ? 'border-red-600 bg-red-50 text-red-900 font-bold border-2'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {sauce}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Notes Input */}
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-1.5">
              Catatan Khusus (Opsional):
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Es dipisah, sambal banyakin, sumpit 2 pcs..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-800"
            />
          </div>
        </div>

        {/* Modal Bottom Footer with Total & CTA */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Quantity & Unit Price */}
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-xs">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-bold text-stone-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className="text-[11px] text-stone-500 block">Total Pembayaran:</span>
              <span className={`text-lg sm:text-xl font-black font-heading ${isTeh ? 'text-emerald-700' : 'text-red-700'}`}>
                {formatRupiah(totalPrice)}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${actionBtnClass}`}
            id="modal-add-to-cart-btn"
          >
            {isAddedSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Berhasil Ditambahkan!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Tambah ke Pesanan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
