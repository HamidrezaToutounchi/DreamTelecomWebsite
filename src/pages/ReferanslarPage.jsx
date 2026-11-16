import React from 'react';
import { Award, Building2, CheckCircle2, Star, Quote, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

const PARTNERS = [
  { name: 'Grandstream Networks', role: 'Yetkili IP Santral & Donanım Çözüm Ortağı', highlight: true },
  { name: 'Cisco Systems', role: 'Kurumsal Ağ & Switch Donanımları', highlight: false },
  { name: 'Jabra', role: 'Profesyonel Çağrı Merkezi Kulaklıkları', highlight: false },
  { name: 'Poly (Polycom)', role: 'Konferans & Video Görüşme Sistemleri', highlight: false },
  { name: 'Fanvil', role: 'IP İnterkom ve Otel Telefon Sistemleri', highlight: false },
  { name: 'Monites Cloud', role: 'Yerli Telekom & Ağ İzleme Yazılımı', highlight: false }
];

const CASE_STUDIES = [
  {
    title: 'Özel Sağlık Grubu (12 Şube)',
    sector: 'Sağlık Sektörü',
    metric: '%45 Çağrı Yanıtlama Hızı Artışı',
    desc: '12 hastane şubesi arasındaki tüm haberleşme Grandstream UCM6308 IP PBX santral kümesi ve 450 adet GRP2615 IP telefonla birleştirildi. Şubeler arası görüşmeler tamamen ücretsiz hale getirildi.'
  },
  {
    title: 'Uluslararası Turizm Acentesi',
    sector: 'Turizm & Havacılık',
    metric: '96 Eşzamanlı Ses Kanalı',
    desc: 'Yoğun sezon döneminde gelen binlerce çağrı kesintisiz SIP trunk altyapısı ve Dream CRM akıllı ses dağıtım algoritmalarıyla karşılandı. Çağrı kaçırma oranı %0.2 seviyesine düşürüldü.'
  },
  {
    title: 'Ulusal Hukuk & Danışmanlık Bürosu',
    sector: 'Hukuk & Finans',
    metric: '%60 İletişim Maliyet Tasarrufu',
    desc: 'Eski analog santral sistemi yerine Dream Telecom Bulut Santral ve otomatik bilgilendirme IVR altyapısı devreye alındı. 80 avukat ve asistan mobil softphone ile mekandan bağımsız çalışabilir hale geldi.'
  },
  {
    title: 'E-Ticaret & Dağıtım Lojistik Merkezi',
    sector: 'E-Ticaret & Perakende',
    metric: '7/24 Kesintisiz Monites İzleme',
    desc: 'Depo, çağrı merkezi ve saha operasyonlarındaki 60 adet IP kamera ve 120 adet telsiz/IP telefon Monites izleme platformu üzerinden 7/24 denetlenerek hat kopmaları sıfıra indirildi.'
  }
];

const TESTIMONIALS = [
  {
    quote: "Grandstream UCM6304 IP santral geçişimizi 1 gecede tamamladılar. Sıfır kullanıcı lisans ücreti olması şirket bütçemizde inanılmaz bir rahatlık sağladı.",
    author: "Ahmet Yılmaz",
    title: "IT Direktörü",
    company: "Metro Lojistik A.Ş."
  },
  {
    quote: "Numaralarımızı taşırken tek bir saniye dahi hatlarımız kesilmedi. Santral desteğine ne zaman ihtiyaç duysak 5 dakika içinde mühendis seviyesinde yanıt alıyoruz.",
    author: "Zeynep Karaca",
    title: "Operasyon Müdürü",
    company: "Turizm & Seyahat Portalı"
  },
  {
    quote: "Monites izleme yazılımı sayesinde softswitch ve PBX'imizdeki bir aksaklığı müşterilerimiz fark etmeden önce tespit edip çözüyoruz. Emeğinize sağlık.",
    author: "Murat Demir",
    title: "Sistem ve Ağ Yöneticisi",
    company: "Finansal Hizmetler Grubu"
  }
];

export default function ReferanslarPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004A93]/10 text-[#004A93] text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-[#78C042]" />
            <span>10 YILLIK SAHA GÜVENİ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Müşteri Referanslarımız & Başarı Hikayeleri
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Türkiye genelinde 1.000'i aşkın kurumsal firmanın, kamu kurumunun ve sağlık kuruluşunun haberleşme altyapısını güvenle yönetiyoruz.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">EKOSİSTEMİMİZ</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Teknoloji & Donanım Ortaklarımız</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map((partner, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl bg-white border text-center flex flex-col justify-center items-center gap-2 ${
                  partner.highlight 
                    ? 'border-[#004A93] ring-2 ring-[#004A93]/10 shadow-sm' 
                    : 'border-slate-200 shadow-xs'
                }`}
              >
                <span className="font-bold text-sm text-slate-900">{partner.name}</span>
                <span className="text-[11px] text-slate-500 leading-tight">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">KANITLANMIŞ VERİMLİLİK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">Sektörel Başarı Hikayeleri</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {CASE_STUDIES.map((cs, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#004A93]/10 text-[#004A93]">
                      {cs.sector}
                    </span>
                    <span className="text-xs font-bold text-[#5c9e29] bg-[#78C042]/15 px-3 py-1 rounded-full border border-[#78C042]/30">
                      {cs.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">MÜŞTERİ YORUMLARI</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">İş Ortaklarımız Ne Diyor?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div className="space-y-3">
                  <Quote className="w-6 h-6 text-[#004A93]/40" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <strong className="text-xs font-bold text-slate-900 block">{t.author}</strong>
                  <span className="text-[11px] text-slate-500">{t.title} • {t.company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Projeniz İçin Ücretsiz Keşif Başlatın →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
