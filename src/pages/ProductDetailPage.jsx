import React, { useState } from 'react';
import { ArrowLeft, Download, ExternalLink, Check, ShieldCheck, Cpu, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ProductDetailPage({ product, onBack, onInquire }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', note: '' });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', company: '', phone: '', email: '', note: '' });
    }, 4500);
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Navigation / Back Button */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <button 
            onClick={onBack}
            className="cursor-pointer inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004A93] hover:text-[#003870] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Grandstream Donanım Kataloğuna Geri Dön</span>
          </button>

          {/* Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Katalog</span>
            <span>/</span>
            <span className="text-slate-700">{product.category}</span>
            <span>/</span>
            <span className="text-[#004A93] font-bold">{product.subcategory}</span>
          </div>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Product Image Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col items-center justify-center relative shadow-sm">
            {product.badge && (
              <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-[#004A93] text-white shadow-xs">
                {product.badge}
              </span>
            )}
            
            <img 
              src={product.imageUrl} 
              alt={product.model}
              className="max-h-72 w-auto object-contain my-6"
              onError={(e) => { e.target.src = 'https://www.grandstream.com/hubfs/Email%20Assets%20Q4%202020/UCM6300_series.png'; }}
            />

            <div className="w-full pt-4 border-t border-slate-200 flex items-center justify-around text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-[#004A93]" /> Orijinal Grandstream</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#78C042]" /> 2 Yıl Garanti</span>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#0082A6] uppercase tracking-wider">
                {product.category} • {product.subcategory}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 mt-1 mb-3">
                {product.model}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Quick Specs Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">PORT / GİRİŞ</span>
                <strong className="text-slate-900">{product.portGroup || 'Gigabit RJ45'}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">PoE DESTEĞİ</span>
                <strong className="text-slate-900">{product.poe ? 'Mevcut (PoE+)' : 'Harici Adaptör'}</strong>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block text-[10px]">LİSANS DURUMU</span>
                <strong className="text-emerald-700 font-bold">Ömür Boyu Sıfır Lisans</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#teklif-formu"
                className="cursor-pointer px-6 py-3 rounded-xl font-bold text-xs bg-[#004A93] hover:bg-[#003870] text-white shadow-md flex items-center gap-2"
              >
                <span>Bu Cihaz İçin Proje Fiyatı Al</span>
                <Send className="w-3.5 h-3.5 text-[#78C042]" />
              </a>

              {product.officialUrl && (
                <a 
                  href={product.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl font-bold text-xs border border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-1.5"
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
                  className="px-5 py-3 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center gap-1.5"
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
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wider text-xs">
              Detaylı Teknik Özellikler
            </h3>
            
            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              {Object.entries(product.specs || {}).map(([key, val], idx) => (
                <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium sm:w-1/3">{key}</span>
                  <span className="text-slate-900 font-semibold sm:w-2/3">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wider text-xs">
              Kullanım Senaryoları & Uygunluk
            </h3>

            <ul className="space-y-3">
              {(product.useCases || [
                'Orta ve büyük ölçekli işletmeler için sıfır lisans maliyetli merkezi iletişim',
                'UCM RemoteConnect ve Wave uygulaması ile hibrit uzaktan çalışma altyapısı',
                'Çok şubeli kurumlar, oteller, hastaneler ve kamu binaları'
              ]).map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block font-bold">Dream Telecom Kurulum Desteği:</strong>
              <p>Bu cihaz Dream Telecom mühendisleri tarafından GDMS üzerinden önceden konfigüre edilerek tak-çalıştır teslim edilir.</p>
            </div>
          </div>

        </div>

        {/* Specific Product Quote Request Form */}
        <div id="teklif-formu" className="rounded-3xl bg-gradient-to-r from-[#071530] to-[#004A93] text-white p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#78C042] uppercase tracking-wider">DOĞRUDAN PROJE TEKLİFİ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
              {product.model} İçin Teklif Alın
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Adet sayısı ve projenize göre özel indirimli kurumsal fiyat almak için formu iletin; mühendislerimiz 15 dakika içinde dönsün.
            </p>
          </div>

          {formSubmitted ? (
            <div className="max-w-md mx-auto p-6 bg-white/10 rounded-2xl border border-emerald-400 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#78C042] mx-auto" />
              <h4 className="font-bold text-white text-base">Talebiniz Alındı!</h4>
              <p className="text-xs text-slate-300">Uzman satış temsilcimiz en kısa sürede sizinle iletişime geçecektir.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Adınız Soyadınız *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042]"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042]"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042] font-mono"
                    placeholder="05__ ___ __ __"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kurumsal E-posta *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042]"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#78C042]"
                  placeholder="Örn: 1 adet UCM6302, 20 adet GRP2602P telefon..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="cursor-pointer w-full py-3.5 rounded-xl font-bold text-xs bg-[#78C042] hover:bg-[#5fa52b] text-slate-950 shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Teklif Talebini İlet</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
