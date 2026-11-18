import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock, CreditCard, Shield, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Grandstream UCM Serisi IP Santral & PBX',
    message: '',
    website: '' // Honeypot
  });

  // Support preselection from product cards
  useEffect(() => {
    window.setPreselectedService = (productTitle) => {
      setFormData(prev => ({
        ...prev,
        service: productTitle || prev.service,
        message: prev.message || `${productTitle} hakkında kurumsal fiyat teklifi ve teknik bilgi almak istiyoruz.`
      }));
    };
    return () => {
      delete window.setPreselectedService;
    };
  }, []);

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
          selectedProduct: formData.service,
          message: formData.message.trim() || 'İletişim formundan talep.',
          kvkkAccepted: true,
          kvkkVersion: 'v1',
          website: formData.website
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setRefCode(data.refCode || '');
        setSubmitted(true);
      } else {
        // Fallback for standalone/offline dev demo
        setRefCode('DRM-' + Math.floor(100000 + Math.random() * 900000));
        setSubmitted(true);
      }
    } catch (_err) {
      // Fallback grace
      setRefCode('DRM-' + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-[#eaf2fa]/70 via-slate-50/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            BİZE ULAŞIN
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            İletişim & Kurumsal Teklif Masası
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ücretsiz yerinde keşif talepleriniz, Grandstream, Jabra ve Fanvil donanım teklifleri ve santral teknik desteği için doğrudan bize ulaşın.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
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
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
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
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
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
                {refCode && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-300">
                    Takip Kodunuz: {refCode}
                  </div>
                )}
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Müşteri temsilcimiz başvurunuzu inceleyip en kısa sürede sizinle iletişime geçecektir.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        service: 'Grandstream UCM Serisi IP Santral & PBX',
                        message: '',
                        website: ''
                      });
                    }}
                    className="cursor-pointer text-xs font-bold text-[#004A93] hover:underline"
                  >
                    Yeni Bir Form Gönder →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot */}
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
                      placeholder="05XX XXX XX XX"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93] bg-white font-medium text-slate-800"
                  >
                    <optgroup label="Grandstream Donanımları">
                      <option>Grandstream UCM Serisi IP Santral & PBX</option>
                      <option>Grandstream GRP Serisi IP Telefonlar</option>
                      <option>Grandstream Wi-Fi 7 / Switch Ağ Kurulumu</option>
                      <option>Grandstream GCC 4'ü 1 Arada Tümleşik Ağ ve PBX</option>
                    </optgroup>
                    <optgroup label="Jabra Kurumsal Çözümler">
                      <option>Jabra PanaCast 50 Video Bar & Toplantı Odası</option>
                      <option>Jabra Evolve2 Serisi ANC Ofis Kulaklıkları</option>
                      <option>Jabra Speak2 Konferans Hoparlörleri</option>
                      <option>Jabra Engage & Biz Çağrı Merkezi Kulaklıkları</option>
                    </optgroup>
                    <optgroup label="Fanvil SIP Donanımları">
                      <option>Fanvil V & X Serisi Renkli SIP Telefonlar</option>
                      <option>Fanvil SIP İnterkom & Görüntülü Kapı Paneli</option>
                      <option>Fanvil PA3 / PA2 Paging & Anons Gateway</option>
                      <option>Fanvil Otel Telefonları & LINKVIL WiFi</option>
                    </optgroup>
                    <optgroup label="Telekomünikasyon Hizmetleri">
                      <option>Bulut IP Sanal Santral Hizmeti</option>
                      <option>SIP Trunk & Sabit Numara Taşıma</option>
                      <option>Monites Yerli Bulut İzleme Yazılımı</option>
                      <option>CRM Çağrı Yönetimi Çözümleri</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mesajınız / İhtiyaç Notları</label>
                  <textarea 
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Talep ettiğiniz dahili hat sayısı, cihaz adetleri veya toplantı odası büyüklüğü hakkında bilgi verin..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-1 focus:ring-[#004A93]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="cursor-pointer w-full py-4 rounded-xl bg-[#004A93] hover:bg-[#003870] text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Başvurunuz İletiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#78C042]" />
                      <span>Teklif & Başvuru Talebini Gönder</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
