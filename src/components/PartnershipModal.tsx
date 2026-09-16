import React, { useState } from 'react';
import { TEH_KAMPUNG_INFO, DIMSUM_KAMPUNG_INFO, BRAND_KAMPUNG_INFO } from '../data/brandData';
import { X, Sparkles, Coffee, Utensils, CheckCircle2, Send, MessageCircle } from 'lucide-react';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUnit?: 'teh' | 'dimsum' | 'both';
}

export const PartnershipModal: React.FC<PartnershipModalProps> = ({
  isOpen,
  onClose,
  defaultUnit = 'both',
}) => {
  if (!isOpen) return null;

  const [chosenUnit, setChosenUnit] = useState<'teh' | 'dimsum' | 'both'>(defaultUnit);
  const [partnerName, setPartnerName] = useState('');
  const [partnerCity, setPartnerCity] = useState('');
  const [partnerPhone, setPartnerPhone] = useState('');
  const [partnerNotes, setPartnerNotes] = useState('');

  const handleSendInquiry = () => {
    let unitLabel = 'Paket Kombinasi Teh Kampung + Dimsum Kampung';
    if (chosenUnit === 'teh') unitLabel = 'Paket Kemitraan Teh Kampung (Rp 3.900.000)';
    if (chosenUnit === 'dimsum') unitLabel = 'Paket Kemitraan Dimsum Kampung (Rp 4.800.000)';

    let message = `*HALO TIM KEMITRAAN BRAND KAMPUNG PUSAT*\n`;
    message += `Saya tertarik untuk bergabung menjadi mitra resmi:\n\n`;
    message += `• *Peminatan Paket:* ${unitLabel}\n`;
    message += `• *Nama Calon Mitra:* ${partnerName.trim() || '-'}\n`;
    message += `• *Kota / Lokasi Rencana:* ${partnerCity.trim() || '-'}\n`;
    message += `• *Nomor WhatsApp:* ${partnerPhone.trim() || '-'}\n`;
    if (partnerNotes.trim()) {
      message += `• *Catatan / Pertanyaan:* ${partnerNotes.trim()}\n`;
    }
    message += `\nMohon informasi proposal lengkap, simulasi BEP, dan ketersediaan kuota wilayah. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    const wa = BRAND_KAMPUNG_INFO.socialMedia.whatsapp;
    window.open(`https://wa.me/${wa}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white p-6 sm:p-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Peluang Wirausaha Mandiri</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
            Kemitraan Resmi Brand Kampung
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm">
            Mulai usaha kuliner rakyat terbukti laris. 100% keuntungan milik mitra tanpa bagi hasil bulanan (No Royalty Fee).
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Unit Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-800 mb-2">
              Pilih Paket Usaha yang Diminati:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setChosenUnit('teh')}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  chosenUnit === 'teh'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Teh Kampung</span>
                </div>
                <span className="text-xs font-black block mt-1">Mulai Rp 3.9 Jt</span>
                <span className="text-[10px] text-stone-500">Booth + 500 porsi teh</span>
              </button>

              <button
                type="button"
                onClick={() => setChosenUnit('dimsum')}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  chosenUnit === 'dimsum'
                    ? 'border-red-600 bg-red-50 text-red-950 ring-2 ring-red-500/20'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-800">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Dimsum Kampung</span>
                </div>
                <span className="text-xs font-black block mt-1">Mulai Rp 4.8 Jt</span>
                <span className="text-[10px] text-stone-500">Klakat + 800 pcs dimsum</span>
              </button>

              <button
                type="button"
                onClick={() => setChosenUnit('both')}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  chosenUnit === 'both'
                    ? 'border-amber-500 bg-amber-50 text-stone-900 ring-2 ring-amber-500/20'
                    : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Paket Dwi-Usaha</span>
                </div>
                <span className="text-xs font-black block mt-1">Paket Komplit</span>
                <span className="text-[10px] text-stone-500">Teh + Dimsum 1 Booth</span>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nama Lengkap:
                </label>
                <input
                  type="text"
                  value={partnerName}
                  onChange={(e) => setPartnerName(e.target.value)}
                  placeholder="Contoh: Budi Prasetyo"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Kota / Wilayah Rencana Outlet:
                </label>
                <input
                  type="text"
                  value={partnerCity}
                  onChange={(e) => setPartnerCity(e.target.value)}
                  placeholder="Contoh: Tambakroto, Semarang, Solo"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Nomor WhatsApp Aktif:
              </label>
              <input
                type="tel"
                value={partnerPhone}
                onChange={(e) => setPartnerPhone(e.target.value)}
                placeholder="Contoh: 0812-XXXX-XXXX"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Pertanyaan atau Rencana Lokasi (Opsional):
              </label>
              <textarea
                value={partnerNotes}
                onChange={(e) => setPartnerNotes(e.target.value)}
                placeholder="Contoh: Mau buka di depan minimarket atau area ruko..."
                rows={2}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-xs text-stone-700 space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free Desain Booth & Banner Eksklusif Brand Kampung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pendampingan SOP & Pasokan Bahan Baku Terjamin Langsung dari Pusat</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            type="button"
            onClick={handleSendInquiry}
            className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Kirim Pengajuan Kemitraan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
