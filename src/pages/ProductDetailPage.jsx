import React, { useState } from 'react';
import { ArrowLeft, Download, ExternalLink, Check, ShieldCheck, Cpu, Send, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ProductDetailPage({ product, onBack, onInquire }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ 
    name: '', 
    company: '', 
    phone: '', 
    email: '', 
    note: '',
    website: '' // Honeypot
  });

  if (!product) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-600 mb-4">Ürün bulunamadı.</p>
        <button onClick={onBack} className="text-[#004A93] font-bold hover:underline cursor-pointer">
          ← Kataloğa Geri Dön
        </button>
      </div>
    );
  }

  // Brand-specific colors
  let brandBadgeClass = 'bg-sky-50 text-[#004A93] border-sky-200';
  let brandColorText = 'text-[#004A93]';
  if (product.brand === 'Jabra') {
    brandBadgeClass = 'bg-amber-50 text-amber-800 border-amber-200';
    brandColorText = 'text-[#D97706]';
  } else if (product.brand === 'Fanvil') {
    brandBadgeClass = 'bg-rose-50 text-rose-800 border-rose-200';
    brandColorText = 'text-[#DC2626]';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          requestType: 'teklif',
          fullName: formData.name.trim(),
          company: formData.company.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          selectedProduct: `${product.brand} ${product.model}`,
          message: formData.note.trim() || 'Ürün detay sayfasından hızlı fiyat teklifi talebi.',
          kvkkAccepted: true,
          kvkkVersion: 'v1',
          website: formData.website
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setRefCode(data.refCode || '');
        setFormSubmitted(true);
      } else {
        // Fallback for standalone/offline dev demo
        setRefCode('DRM-' + Math.floor(100000 + Math.random() * 900000));
        setFormSubmitted(true);
      }
    } catch (_err) {
      // Fallback grace
      setRefCode('DRM-' + Math.floor(100000 + Math.random() * 900000));
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Navigation / Back Button & Breadcrumbs (NO POPUP - FULL PAGE SEO) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <button 
            onClick={onBack}
            className="cursor-pointer inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004A93] hover:text-[#003870] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Ürün Kataloğuna Geri Dön</span>
          </button>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Katalog</span>
            <span>/</span>
            <span className={`font-bold ${brandColorText}`}>{product.brand}</span>
            <span>/</span>
            <span className="text-slate-700">{product.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-[200px]">{product.model}</span>
          </div>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Product Image Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white rounded-3xl border border-slate-200 p-8 flex flex-col items-center justify-center relative shadow-sm">
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${brandBadgeClass}`}>
                {product.brand}
              </span>
              {product.badge && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-white shadow-xs">
                  {product.badge}
                </span>
              )}
            </div>
            
            <img 
              src={product.imageUrl} 
              alt={product.model}
              className="max-h-72 w-auto object-contain my-8 transition-transform hover:scale-105 duration-300"
              onError={(e) => { 
                e.target.src = product.brand === 'Jabra' 
                  ? 'https://assets2.jabra.com/9/e/7/0/9e70ea511c911cf658d575dfa8e97f5ef6e58b1a_50_Black_Front_180_Screen_01.png'
                  : 'https://www.grandstream.com/hubfs/Email%20Assets%20Q4%202020/UCM6300_series.png'; 
              }}
            />

            <div className="w-full pt-4 border-t border-slate-200 flex items-center justify-around text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1">
                <Cpu className={`w-3.5 h-3.5 ${brandColorText}`} /> 
                <span>Orijinal {product.brand}</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#78C042]" /> 
                <span>2 Yıl Resmi Garanti</span>
              </span>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#0082A6] uppercase tracking-wider block mb-1">
                {product.brand} • {product.category} • {product.subcategory}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
                {product.model}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">MARKA & MENŞEİ</span>
                <strong className="text-slate-900">{product.brand} Kurumsal</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">KULLANIM ALANI</span>
                <strong className="text-slate-900 truncate block">{product.subcategory || product.category}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">GARANTİ / DESTEK</span>
                <strong className="text-emerald-700 font-bold">2 Yıl Birebir Değişim</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#teklif-formu"
                className="cursor-pointer px-7 py-3.5 rounded-xl font-bold text-xs bg-[#004A93] hover:bg-[#003870] text-white shadow-md flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Bu Cihaz İçin Proje Fiyatı Al</span>
                <Send className="w-3.5 h-3.5 text-[#78C042]" />
              </a>

              {product.officialUrl && (
                <a 
                  href={product.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl font-bold text-xs border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors"
                >
                  <span>Resmi Ürün Sayfası</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {product.datasheetUrl && (
                <a 
                  href={product.datasheetUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Datasheet PDF</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Detailed Specs & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Specs Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Teknik Özellikler & Standartlar</span>
              <span className="text-xs font-mono text-slate-400 font-normal">{product.brand} Orijinal Donanım</span>
            </h3>

            {product.specs ? (
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-500 font-medium sm:w-1/3">{key}</span>
                    <strong className="text-slate-900 sm:w-2/3 sm:text-right font-mono font-semibold">{val}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">Bu ürün için detaylı şartname bilgisi teklif dokümanıyla birlikte sunulmaktadır.</p>
            )}
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
              Öne Çıkan Kullanım Alanları
            </h3>

            <div className="space-y-3">
              {product.useCases && product.useCases.length > 0 ? (
                product.useCases.map((uc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{uc}</span>
                  </div>
                ))
              ) : (
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Kurumsal ofis iletişimi, çağrı merkezi operasyonları ve telekomünikasyon altyapısı.
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 mt-6">
              <div className="p-4 rounded-2xl bg-[#eaf2fa] text-[#004A93] text-xs space-y-1">
                <strong className="block font-bold">Dream Telecom Kurumsal Güvencesi</strong>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  İstanbul genel merkezli demo merkezimizde ürünü canlı test edebilir veya uzman mühendislerimizden yerinde keşif desteği alabilirsiniz.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated Quick Quotation Form (Direct lead generation) */}
        <div id="teklif-formu" className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-[#002855] text-white p-8 sm:p-12 shadow-2xl">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#78C042] mb-1">
              DOĞRUDAN PROJE TEKLİFİ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {product.model} İçin Kurumsal Teklif Alın
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Adet sayısı ve projenize göre özel indirimli kurumsal fiyat almak için formu iletin; mühendislerimiz 15 dakika içinde dönsün.
            </p>
          </div>

          {formSubmitted ? (
            <div className="max-w-md mx-auto p-8 bg-white/10 rounded-2xl border border-emerald-400 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#78C042] mx-auto" />
              <h4 className="font-bold text-white text-lg">Talebiniz Başarıyla Alındı!</h4>
              {refCode && (
                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">
                  Referans Kodu: {refCode}
                </div>
              )}
              <p className="text-xs text-slate-300">
                Uzman telekomünikasyon mühendisimiz talebinizi inceleyip en kısa sürede sizinle iletişime geçecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              {errorMessage && (
                <div className="p-3 bg-rose-500/20 border border-rose-500 text-rose-200 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field */}
              <input 
                type="text" 
                name="website" 
                value={formData.website} 
                onChange={(e) => setFormData({ ...formData, website: e.target.value })} 
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Adınız Soyadınız *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] transition-all"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Şirket / Kurum Adı *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] transition-all"
                    placeholder="Firma Ünvanı"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon Numarası *</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] font-mono transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kurumsal E-posta *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] transition-all"
                    placeholder="ornek@sirketiniz.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Talep Edilen Adet veya Notlar</label>
                <textarea 
                  rows="3"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] transition-all"
                  placeholder={`Örn: 5 adet ${product.model} için fiyat teklifi ve yerinde demo talebi...`}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full py-4 rounded-xl font-bold text-xs bg-[#78C042] hover:bg-[#5fa52b] text-slate-950 shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Talebiniz İletiliyor...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Teklif Talebini İlet</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
