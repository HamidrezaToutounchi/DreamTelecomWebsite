import React, { useState, useRef } from 'react';
import { ArrowLeft, Download, ExternalLink, Check, ShieldCheck, Cpu, Send, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import TurnstileWidget, { TURNSTILE_SITE_KEY } from '../components/TurnstileWidget';

export default function ProductDetailPage({ product, onBack, onInquire }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Turnstile state
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReady, setTurnstileReady] = useState(!TURNSTILE_SITE_KEY);
  const turnstileRef = useRef(null);

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
  let brandBadgeClass = 'bg-[#eaf2fa] text-[#004A93] border-blue-200';
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
    setErrorMessage('');

    if (!kvkkAccepted) {
      setErrorMessage('Lütfen devam etmek için KVKK Aydınlatma Metnini onaylayın.');
      return;
    }

    if (!turnstileToken && !turnstileReady) {
      setErrorMessage('Güvenlik doğrulaması henüz tamamlanmadı, lütfen birkaç saniye bekleyin.');
      return;
    }

    setIsSubmitting(true);

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
          kvkkAccepted: Boolean(kvkkAccepted),
          marketingConsent: Boolean(marketingConsent),
          kvkkVersion: 'v1',
          website: formData.website,
          ...(turnstileToken ? { turnstileToken } : {})
        })
      });

      let data = null;
      try {
        data = await response.json();
      } catch (_jsonErr) {
        data = null;
      }

      if (response.status === 429) {
        setErrorMessage(
          data?.error || 'Çok fazla talep gönderdiniz. Lütfen bir süre sonra tekrar deneyin.'
        );
        return;
      }

      if (!response.ok || !data || data.ok !== true || !data.refCode) {
        setErrorMessage(
          data?.error || 'Talebiniz gönderilirken bir hata oluştu. Lütfen alanları kontrol edip tekrar deneyin.'
        );
        return;
      }

      // Success screen ONLY when response.ok && data.ok && data.refCode
      setRefCode(data.refCode);
      setFormSubmitted(true);
    } catch (_networkErr) {
      setErrorMessage(`Talebiniz iletilemedi, lütfen tekrar deneyin veya bizi arayın: ${COMPANY_INFO.formattedPhone}`);
    } finally {
      setIsSubmitting(false);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
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
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer" onClick={onBack}>Ürünler</span>
            <span>/</span>
            <span className="font-semibold text-slate-700">{product.brand}</span>
            <span>/</span>
            <span className="text-[#004A93] font-bold">{product.model}</span>
          </div>
        </div>

        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Product Visuals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 flex items-center justify-center min-h-[380px] shadow-sm overflow-hidden group">
              
              {/* Brand Label Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border shadow-xs ${brandBadgeClass}`}>
                  {product.brand}
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-slate-200">
                  {product.category}
                </span>
              </div>

              {/* Product Image */}
              <img 
                src={product.image} 
                alt={`${product.brand} ${product.model}`} 
                className="max-h-72 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/logo.png';
                }}
              />
            </div>

            {/* Trust and Warranty badges */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#78C042] shrink-0" />
                <span className="font-medium">2 Yıl Resmi Distribütör Garantisi</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-slate-700">
                <Check className="w-4 h-4 text-[#0082A6] shrink-0" />
                <span className="font-medium">Yetkili Kurumsal Entegrasyon</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Specs & Inquiry CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${brandColorText}`}>
                  {product.brand} KURUMSAL PORTFÖYÜ
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono text-slate-500">{product.series}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                {product.model}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                {product.desc}
              </p>
            </div>

            {/* Quick Specs Highlight Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Öne Çıkan Özellikler</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Check className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases / Kimler İçin Uygun */}
            {product.useCases && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Hedef Kullanım Alanları</h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((uc, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#004A93]"></span>
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a 
                href="#teklif-formu" 
                className="px-6 py-3.5 rounded-xl bg-[#004A93] hover:bg-[#003870] text-white font-bold text-xs sm:text-sm shadow-md text-center transition-all cursor-pointer"
              >
                Kurumsal Fiyat & Teklif İste ↓
              </a>
              <a 
                href={COMPANY_INFO.phoneTel} 
                className="px-5 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Hemen Danışın: {COMPANY_INFO.formattedPhone}</span>
              </a>
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
                <div className="p-3.5 bg-rose-500/20 border border-rose-500 text-rose-200 text-xs sm:text-sm rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
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

              {/* Mandatory KVKK Checkbox (NO defaultChecked) */}
              <div className="flex items-start gap-2.5 pt-1 text-xs text-slate-300">
                <input 
                  type="checkbox" 
                  id="kvkk-detail" 
                  checked={kvkkAccepted}
                  onChange={(e) => setKvkkAccepted(e.target.checked)}
                  required 
                  className="mt-0.5 rounded border-white/20 bg-white/10 text-[#78C042] focus:ring-[#78C042] cursor-pointer" 
                />
                <label htmlFor="kvkk-detail" className="leading-snug cursor-pointer text-[11px] sm:text-xs">
                  <a href="#gizlilik-ve-guvenlik" target="_blank" rel="noopener noreferrer" className="text-[#78C042] font-semibold underline hover:text-emerald-300">
                    KVKK Aydınlatma Metni
                  </a> ve <a href="#gizlilik-ve-guvenlik" target="_blank" rel="noopener noreferrer" className="text-[#78C042] font-semibold underline hover:text-emerald-300">
                    Gizlilik Bildirimi
                  </a>'ni okudum, iletişim verilerimin teklif amacıyla işlenmesini onaylıyorum. *
                </label>
              </div>

              {/* Optional Marketing Consent */}
              <div className="flex items-start gap-2.5 text-xs text-slate-400">
                <input 
                  type="checkbox" 
                  id="marketing-detail" 
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 bg-white/10 text-[#78C042] focus:ring-[#78C042] cursor-pointer" 
                />
                <label htmlFor="marketing-detail" className="leading-snug cursor-pointer text-[11px] sm:text-xs">
                  Dream Telecom ürün ve kampanya duyuruları ile ilgili ticari elektronik ileti (SMS ve e-posta) almayı kabul ediyorum. (İsteğe bağlı)
                </label>
              </div>

              {/* Cloudflare Turnstile Widget */}
              <TurnstileWidget 
                ref={turnstileRef}
                onTokenChange={setTurnstileToken}
                onReadyChange={setTurnstileReady}
              />

              <button 
                type="submit"
                disabled={isSubmitting || !kvkkAccepted || (!turnstileToken && !turnstileReady)}
                className="cursor-pointer w-full py-4 rounded-xl font-bold text-xs bg-[#78C042] hover:bg-[#5fa52b] text-slate-950 shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Talebiniz İletiliyor...</span>
                  </>
                ) : !turnstileToken && !turnstileReady ? (
                  <span>Güvenlik Doğrulaması Hazırlanıyor...</span>
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
