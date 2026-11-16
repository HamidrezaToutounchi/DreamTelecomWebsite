import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, Zap, Shield, ArrowRight, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function PackagesPage({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Kurumsal santral çözümlerinde kullanıcı veya dahili başına lisans ücreti var mıdır?",
      a: "Hayır! Grandstream donanım tabanlı UCM serisi IP PBX santrallerinin en büyük avantajı, kullanıcı başına veya dahili sayısına göre yıllık ya da aylık lisans ücreti talep etmemesidir. Satın aldığınız santral tüm özellikleri (IVR, ses kaydı, konferans, kuyruk yönetimi) ömür boyu lisanssız sunar."
    },
    {
      q: "Mevcut telefon numaralarımızı Dream Telecom santraline nasıl bağlarız?",
      a: "Mevcut Türk Telekom veya diğer operatörlerdeki sabit hatlarınızı sıfır kesintiyle Dream Telecom altyapısına bağlayabilir ya da yeni kurumsal 0850 ve coğrafi numaralar tahsis edebilirsiniz. Geçiş esnasında hiçbir çağrı kaybı yaşanmaz."
    },
    {
      q: "GDMS (Grandstream Device Management System) bulut provizyon nasıl çalışır?",
      a: "GDMS, Grandstream uç noktalarının (IP telefonlar, santraller, AP'ler) buluttan merkezi olarak yönetilmesini sağlayan kurumsal bir platformdur. Dream Telecom ekibi cihazları ofisinize göndermeden önce MAC adresleriyle GDMS'e tanımlar; cihaz internete bağlandığı an tüm ayarlarını ve hesaplarını saniyeler içinde otomatik çeker."
    },
    {
      q: "Fiyatlandırma ve teklif süreci nasıl işler?",
      a: "Kurumunuzun dahili kullanıcı sayısı, şube yapısı, eşzamanlı çağrı yoğunluğu ve masaüstü telefon ihtiyaçları analiz edilerek tamamen ihtiyacınıza uygun, sürpriz maliyetler içermeyen anahtar teslim bir proje teklifi hazırlanır."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            KURUMSAL ÇÖZÜM MODELLERİ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            İhtiyacınıza Özel Santral Paketleri
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Kullanıcı başına lisans sürprizi olmadan; firmanızın büyüklüğüne, şube lokasyonlarına ve çağrı yoğunluğuna göre ölçeklenen kurumsal çözümler.
          </p>
        </div>
      </section>

      {/* 3 Solution Packages (WITHOUT PRICES) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
            
            {/* TIER 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Bulut Çözüm</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">KOBİ Bulut Santral</h3>
                <p className="text-xs text-slate-500 mb-6">Ofis içi temel iletişim ve esnek bulut santral arayan işletmeler için.</p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6 space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Proje & Dahiliye Özel Bütçeleme</span>
                  <span className="text-[11px] text-slate-500">Kullanılan kanal ve dahili kadar esnek maliyet</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 10 - 50 Dahili Kullanıcı Kapasitesi</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 1 Adet 0850 Kurumsal Numara Tahsisi</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Temel IVR & Mesai Karşılama Anonsları</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Mobil ve Web Uygulama Softphone</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Bulutta Güvenli Ses Kaydı Arşivi</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-3.5 rounded-xl border border-slate-300 text-center font-bold text-xs text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Keşif & Fiyat Teklifi Al
                </button>
              </div>
            </div>

            {/* TIER 2: FEATURED */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#004A93] to-[#003870] text-white shadow-2xl flex flex-col justify-between relative ring-4 ring-[#004A93]/20">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-teal-300 uppercase">Donanım + Santral</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#78C042] text-slate-950 uppercase">EN ÇOK TERCİH EDİLEN</span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-1 mb-2">Grandstream Kurumsal</h3>
                <p className="text-xs text-slate-200 mb-6">Lisanssız UCM IP Santral + Renkli ekran masaüstü GRP telefonlar ile anahtar teslim altyapı.</p>

                <div className="p-4 bg-white/10 rounded-2xl border border-white/15 mb-6 text-xs font-mono space-y-2">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Donanım Santral:</span>
                    <strong className="text-teal-300">UCM6302 IP PBX</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-300">Masaüstü Telefon:</span>
                    <strong className="text-white">5x GRP2602P Gigabit</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Lisans Ücreti:</span>
                    <strong className="text-emerald-400">Ömür Boyu Sıfır Lisans</strong>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 75 - 450 Eşzamanlı Çağrı & Sınırsız Dahili</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Gelişmiş Çağrı Kayıt & Detaylı CDR Raporlama</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Grandstream Wave Mobil / Desktop Softphone</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> GDMS Bulut Uzaktan Yönetim ve 7/24 NOC</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-4 rounded-xl font-bold text-xs text-center bg-white text-[#004A93] hover:bg-slate-100 shadow-lg transition-all"
                >
                  Kurumsal Proje Teklifi İsteyin
                </button>
              </div>
            </div>

            {/* TIER 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Holding & Çok Şubeli</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-2">Enterprise Özel Çözüm</h3>
                <p className="text-xs text-slate-500 mb-6">Çağrı merkezleri, oteller, hastaneler ve kamu projeleri için terzi işi mimari.</p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6 space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Özel Mühendislik Projesi</span>
                  <span className="text-[11px] text-slate-500">Yerinde keşif ve yedekli santral mimarisi</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 3.000+ Dahili & High-Availability Çift Santral</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Wi-Fi 7 Ağ Kurulumu & Layer 3 PoE Switch</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Özel CRM/ERP REST API Entegrasyonu</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Atanmış Dedicated NOC Mühendisi & Yerinde SLA</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-3.5 rounded-xl border border-slate-300 text-center font-bold text-xs text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Mühendis ile Görüşün
                </button>
              </div>
            </div>

          </div>

          {/* Interactive FAQ Section */}
          <div className="max-w-3xl mx-auto pt-10 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Sıkça Sorulan Sorular</h3>
            
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-[#004A93] text-xl font-mono transition-transform duration-200 ${openFaq === idx ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
