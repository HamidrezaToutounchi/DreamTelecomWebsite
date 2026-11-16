import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, CreditCard, Shield, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Grandstream UCM Serisi IP Santral & PBX',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: 'Grandstream UCM Serisi IP Santral & PBX',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            BİZE ULAŞIN
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            İletişim & Kurumsal Destek
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ücretsiz yerinde keşif talepleriniz, Grandstream donanım teklifleri ve santral teknik desteği için doğrudan bize ulaşın.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#eaf2fa] text-[#004A93] flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Genel Merkez & Demo Salonu</h3>
                  <p className="text-[11px] text-slate-500">Beylikdüzü / İstanbul</p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                <strong className="text-slate-900 block font-semibold">{COMPANY_INFO.name}</strong>
                <p>{COMPANY_INFO.address}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#78C042]" />
                <div>
                  <span className="text-[11px] text-slate-500 block">Genel Santral:</span>
                  <a href={COMPANY_INFO.phoneTel} className="font-mono font-bold text-base text-[#004A93] hover:underline">
                    {COMPANY_INFO.formattedPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Department Emails */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Departman E-Posta Kanalları</h4>
              
              <div className="space-y-2.5 text-xs">
                {COMPANY_INFO.departments.map((dept, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-slate-600 font-medium">{dept.title}:</span>
                    <a href={`mailto:${dept.email}`} className="text-[#004A93] font-mono font-bold hover:underline">
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours / NOC */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <strong className="text-slate-900 block font-bold">7/24 Kesintisiz NOC & Santral Desteği</strong>
                <span className="text-slate-500">Sözleşmeli kurumsal müşterilerimize 7 gün 24 saat acil müdahale masası.</span>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#004A93] uppercase">HIZLI TEKLİF & DANIŞMANLIK</span>
              <h2 className="text-2xl font-bold text-slate-950 mt-1">İletişim & Başvuru Formu</h2>
              <p className="text-xs text-slate-500 mt-1">Formu ilettikten sonra uzman telekomünikasyon mühendisimiz en kısa sürede sizi arayacaktır.</p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#78C042] mx-auto" />
                <h3 className="text-base font-bold text-slate-900">Talebiniz Başarıyla Alındı!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Müşteri temsilcimiz başvurunuzu inceleyip en kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ad Soyad"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Firma / Kurum Ünvanı *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Firma Adı"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Telefon Numarası *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05__ ___ __ __"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kurumsal E-Posta *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ad.soyad@sirketiniz.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">İlgilendiğiniz Çözüm veya Donanım</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93] bg-white"
                  >
                    <option>Grandstream UCM Serisi IP Santral & PBX</option>
                    <option>Bulut IP Sanal Santral Hizmeti</option>
                    <option>SIP Trunk & Sabit Numara Taşıma</option>
                    <option>Monites Yerli Bulut İzleme Yazılımı</option>
                    <option>CRM Çağrı Yönetimi Çözümleri</option>
                    <option>Grandstream Wi-Fi 7 / Switch Ağ Kurulumu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mesajınız / İhtiyaç Notları</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Kullanıcı sayısı, şube yapısı veya mevcut santraliniz hakkında detaylar..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="cursor-pointer w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-[#78C042]" />
                  <span>Başvuruyu Gönder</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Real Interactive Google Maps Embed */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-md">
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[#004A93] font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#78C042]" />
                <span>Dream Telecom Merkez Ofis Konumu (Google Maps)</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Barbaros Hayrettin Paşa Mah. 1993 Sokak No: 35 Papatya 2 Residence A Blok Kat: 4 D: 70 Beylikdüzü / İSTANBUL
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=Papatya+2+Residence+Beylikdüzü" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004A93] hover:underline"
            >
              <span>Haritada Büyüt</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-80 sm:h-96">
            <iframe 
              title="Dream Telecom Ofis Konumu"
              src="https://maps.google.com/maps?q=Papatya%202%20Residence,%20Beylikd%C3%BCz%C3%BC&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  );
}
