import React, { useState } from 'react';
import { Landmark, Copy, Check, Building, FileText, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

const BANK_ACCOUNTS = [
  {
    bank: 'Türkiye Garanti Bankası A.Ş.',
    branch: 'Mecidiyeköy Ticari Şube',
    currency: 'TRY (Türk Lirası)',
    iban: 'TR320011100000000059675205',
    color: 'from-emerald-700 to-green-800'
  },
  {
    bank: 'Türkiye İş Bankası A.Ş.',
    branch: 'Beylikdüzü Şubesi',
    currency: 'TRY (Türk Lirası)',
    iban: 'TR760003200000000018065094',
    color: 'from-blue-700 to-indigo-900'
  },
  {
    bank: 'Türk Ekonomi Bankası (TEB)',
    branch: 'Metro / Mecidiyeköy Şubesi',
    currency: 'TRY (Türk Lirası)',
    iban: 'TR230006200072300006296648',
    color: 'from-teal-700 to-emerald-900'
  },
  {
    bank: 'Yapı ve Kredi Bankası (YKB)',
    branch: 'Ticari Operasyonlar',
    currency: 'TRY (Türk Lirası)',
    iban: 'TR630006701000000045785680',
    color: 'from-blue-800 to-slate-900'
  }
];

export default function BankaHesaplariPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            RESMİ ŞİRKET VE ÖDEME BİLGİLERİ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Banka Hesap Bilgilerimiz
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Dream Telekomünikasyon ve İletişim Hizmetleri Sanayi Ticaret Limited Şirketi resmi TL kurumsal banka hesap numaraları.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Bank Cards Grid */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
                <Landmark className="w-5 h-5 text-[#004A93]" />
                <span>Resmi IBAN Numaralarımız</span>
              </h2>

              <div className="space-y-4">
                {BANK_ACCOUNTS.map((acc, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#004A93]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm sm:text-base">{acc.bank}</span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                          {acc.currency}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{acc.branch}</div>
                      <div className="font-mono text-sm sm:text-base font-bold text-[#004A93] tracking-wide pt-1">
                        {acc.iban}
                      </div>
                    </div>

                    <button 
                      onClick={() => copyToClipboard(acc.iban, idx)}
                      className={`cursor-pointer px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shrink-0 ${
                        copiedIndex === idx 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-white border border-slate-300 text-slate-700 hover:bg-[#004A93] hover:text-white hover:border-[#004A93]'
                      }`}
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Kopyalandı</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>IBAN Kopyala</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>Önemli Hatırlatma:</strong> Lütfen ödemelerinizi yaparken açıklama kısmına <strong>Firma Ünvanınızı</strong> veya <strong>Fatura Numaranızı</strong> yazmayı unutmayınız. Ödeme dekontunuzu <strong>muhasebe@dreamtelecom.com.tr</strong> adresine iletebilirsiniz.
              </div>
            </div>

            {/* Corporate Invoice Details */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#004A93] text-white flex items-center justify-center font-bold">
                    <Building className="w-5 h-5 text-[#78C042]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Fatura & Şirket Bilgileri</h3>
                    <p className="text-[11px] text-slate-400">Resmi Kayıtlar</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Resmi Şirket Ünvanı:</span>
                    <strong className="text-white font-medium block mt-0.5">{COMPANY_INFO.name}</strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Vergi Dairesi / No:</span>
                    <strong className="text-white font-medium block mt-0.5 font-mono">Beylikdüzü V.D. / 313 087 8962</strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Şirket Adresi:</span>
                    <p className="text-slate-200 mt-0.5">{COMPANY_INFO.address}</p>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px]">Santral Telefonu:</span>
                    <strong className="text-[#78C042] font-mono text-sm block mt-0.5">{COMPANY_INFO.formattedPhone}</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
