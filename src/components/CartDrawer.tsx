import React, { useState } from 'react';
import { CartItem } from '../types';
import { BRAND_KAMPUNG_INFO } from '../data/brandData';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, CheckCircle2, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [address, setAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const packagingFee = items.length > 0 ? 2000 : 0;
  const grandTotal = subtotal + packagingFee;

  const formatRupiah = (num: number) => 'Rp ' + num.toLocaleString('id-ID');

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*HALO BRAND KAMPUNG (TEH KAMPUNG & DIMSUM KAMPUNG)*\n`;
    message += `Saya ingin memesan menu sebagai berikut:\n\n`;
    message += `*Detail Pesanan:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
      message += `   Harga: ${formatRupiah(item.price * item.quantity)}\n`;

      if (item.selectedOptions) {
        const opts: string[] = [];
        if (item.selectedOptions.size) opts.push(`Ukuran: ${item.selectedOptions.size}`);
        if (item.selectedOptions.sweetness) opts.push(`Gula: ${item.selectedOptions.sweetness}`);
        if (item.selectedOptions.ice) opts.push(`Es: ${item.selectedOptions.ice}`);
        if (item.selectedOptions.topping) opts.push(`Topping: ${item.selectedOptions.topping}`);
        if (item.selectedOptions.cookingMethod) opts.push(`Metode: ${item.selectedOptions.cookingMethod}`);
        if (item.selectedOptions.sauce) opts.push(`Saus: ${item.selectedOptions.sauce}`);
        if (item.selectedOptions.portionLabel) opts.push(`Porsi: ${item.selectedOptions.portionLabel}`);
        if (item.selectedOptions.notes) opts.push(`Catatan: ${item.selectedOptions.notes}`);

        if (opts.length > 0) {
          message += `   (${opts.join(', ')})\n`;
        }
      }
      message += `\n`;
    });

    message += `--------------------------------\n`;
    message += `Subtotal: ${formatRupiah(subtotal)}\n`;
    message += `Biaya Kemasan & Es: ${formatRupiah(packagingFee)}\n`;
    message += `*TOTAL PEMBAYARAN: ${formatRupiah(grandTotal)}*\n`;
    message += `--------------------------------\n\n`;

    message += `*Data Pemesan:*\n`;
    message += `Nama: ${customerName.trim() || '-'}\n`;
    message += `No. HP/WA: ${customerPhone.trim() || '-'}\n`;
    message += `Metode: ${deliveryType === 'pickup' ? 'Ambil di Outlet (Self Pickup)' : 'Antar ke Lokasi (Delivery)'}\n`;
    if (deliveryType === 'delivery' && address.trim()) {
      message += `Alamat Pengantaran: ${address.trim()}\n`;
    }
    if (orderNotes.trim()) {
      message += `Catatan Tambahan: ${orderNotes.trim()}\n`;
    }

    const encoded = encodeURIComponent(message);
    const whatsappNumber = BRAND_KAMPUNG_INFO.socialMedia.whatsapp;
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-heading font-bold text-base leading-tight">
                Keranjang Pesanan
              </h3>
              <span className="text-[11px] text-stone-300">
                {items.length} Menu Terpilih
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-[11px] text-red-300 hover:text-red-200 underline cursor-pointer"
              >
                Hapus Semua
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Scrollable Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-stone-700 font-bold text-sm">
                Keranjang Anda Masih Kosong
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Silakan pilih minuman Teh Kampung segar atau kudapan Dimsum Kampung hangat di katalog.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => {
                const isTeh = item.unit === 'teh';
                const isCombo = item.unit === 'combo';

                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-white transition-all space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                                isTeh
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : isCombo
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {isTeh ? 'Teh' : isCombo ? 'Combo' : 'Dimsum'}
                            </span>
                            <h4 className="font-heading font-bold text-xs text-stone-900 line-clamp-1">
                              {item.name}
                            </h4>
                          </div>
                          <span className="text-xs font-bold text-stone-700 block mt-0.5">
                            {formatRupiah(item.price)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                        title="Hapus menu"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Selected Options Summary */}
                    {item.selectedOptions && (
                      <div className="text-[11px] text-stone-600 bg-white p-2 rounded-xl border border-stone-100 space-y-0.5">
                        {item.selectedOptions.size && (
                          <div>• Ukuran: {item.selectedOptions.size}</div>
                        )}
                        {item.selectedOptions.sweetness && (
                          <div>• Manis: {item.selectedOptions.sweetness}</div>
                        )}
                        {item.selectedOptions.ice && (
                          <div>• Es: {item.selectedOptions.ice}</div>
                        )}
                        {item.selectedOptions.topping && (
                          <div>• Topping: {item.selectedOptions.topping}</div>
                        )}
                        {item.selectedOptions.cookingMethod && (
                          <div>• Metode: {item.selectedOptions.cookingMethod}</div>
                        )}
                        {item.selectedOptions.sauce && (
                          <div>• Saus: {item.selectedOptions.sauce}</div>
                        )}
                        {item.selectedOptions.portionLabel && (
                          <div>• Porsi: {item.selectedOptions.portionLabel}</div>
                        )}
                        {item.selectedOptions.notes && (
                          <div className="italic text-stone-500">
                            Catatan: {item.selectedOptions.notes}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Quantity Selector & Item Total */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-stone-900">
                        {formatRupiah(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Order Form Fields */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <span className="text-xs font-bold text-stone-900 block">
                  Informasi Pemesan:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nama Pemesan"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-400"
                  />
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="No. WhatsApp"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDeliveryType('pickup')}
                    className={`p-2 rounded-xl text-xs font-semibold border text-center transition-colors cursor-pointer ${
                      deliveryType === 'pickup'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-stone-50 text-stone-700'
                    }`}
                  >
                    Ambil di Outlet
                  </button>
                  <button
                    onClick={() => setDeliveryType('delivery')}
                    className={`p-2 rounded-xl text-xs font-semibold border text-center transition-colors cursor-pointer ${
                      deliveryType === 'delivery'
                        ? 'border-stone-900 bg-stone-900 text-white'
                        : 'border-stone-200 bg-stone-50 text-stone-700'
                    }`}
                  >
                    Antar ke Rumah
                  </button>
                </div>

                {deliveryType === 'delivery' && (
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Tuliskan alamat lengkap pengantaran..."
                    rows={2}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-400"
                  />
                )}

                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Catatan tambahan untuk kedai..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-1 focus:ring-stone-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Calculation & WhatsApp Button */}
        {items.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal Menu:</span>
                <span className="font-semibold text-stone-800">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Kemasan Food Grade & Es:</span>
                <span className="font-semibold text-stone-800">{formatRupiah(packagingFee)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                <span>Total Estimasi:</span>
                <span className="text-base text-emerald-700">{formatRupiah(grandTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleSendWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>
            <p className="text-[10px] text-center text-stone-400">
              Pesanan akan otomatis diformat dan dikirim ke admin Brand Kampung Pusat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
