import React from 'react';
import { PhoneCall, Cloud, Sparkles, CheckCircle2, Server, Smartphone, Users, Mic, FileText, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: 'Sıfır Donanım Maliyeti',
    desc: 'Kurumunuzda fiziksel bir telefon santrali bulundurmaksızın, internete ulaşabildiğiniz her noktadan tüm santral özelliklerini hemen kullanmaya başlarsınız.'
  },
  {
    title: 'Şubeler Arası Ücretsiz Görüşme',
    desc: 'İşletmenizin farklı şehir ve lokasyonlardaki şubeleri, merkez ofis ile hiçbir görüşme ücreti ödemeden dahili numaralar üzerinden sınırsız konuşur.'
  },
  {
    title: 'Gelişmiş Kurumsal Karşılama (IVR)',
    desc: 'Müşterilerinizi robot operatör ve kurumsal anonsla karşılayın. İlgili departman veya kişiye tuşlama ile anında yönlendirin.'
  },
  {
    title: 'Sınırsız Eşzamanlı Çağrı (Meşgul Çalmaz)',
    desc: 'Tek bir numara üzerinden aynı anda onlarca çağrı alabilir ve görüşme yapabilirsiniz. Müşterileriniz asla meşgul tonu duymaz.'
  },
  {
    title: 'Ses Kaydı & Arşivleme',
    desc: 'Gelen ve giden tüm görüşmeler otomatik olarak kayıt altına alınır, bulut web panelinden geriye dönük tarih/saat bazlı dinlenebilir veya bilgisayara indirilebilir.'
  },
  {
    title: 'Mobil Softphone & Uzaktan Çalışma',
    desc: 'Akıllı telefon veya tabletlerinize kurulan uygulama sayesinde ofis dışındayken de şirket dahilinizi cebinizde taşıyıp arama yapabilir ve çağrı karşılayabilirsiniz.'
  },
  {
    title: 'Mesai Saatleri & Tatil Senaryoları',
    desc: 'Mesai içi, mesai dışı, resmi tatil ve hafta sonu için farklı karşılama senaryoları ve yönlendirme kuralları tanımlayabilirsiniz.'
  },
  {
    title: 'E-Postaya Sesli Mesaj & Faks (FoIP)',
    desc: 'Cevapsız çağrılarda bırakılan sesli mesajlar ve gelen fakslar doğrudan yetkili personelin e-posta adresine ses/PDF eki olarak iletilir.'
  }
];

export default function IpSanalSantralPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004A93]/10 text-[#004A93] text-xs font-semibold mb-4">
            <Cloud className="w-3.5 h-3.5 text-[#004A93]" />
            <span>YENİ NESİL BULUT HABERLEŞME</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            IP Sanal Santral (Bulut PBX)
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Eski tarz analog ve fiziksel santrallerin yüksek bakım maliyetlerine son verin. Sınırsız dahili, profesyonel robot operatör ve mobil entegrasyonu tek bir bulut panelden yönetin.
          </p>
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {FEATURES.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold mb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#78C042]" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cloud vs On-Premises Comparison */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold text-[#004A93] uppercase">DOĞRU SEÇİM</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Bulut Santral mi, Fiziksel IP PBX mi?</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Dream Telecom hem bulut sanal santral (aylık esnek model) hem de şirket lokasyonunuza kurulacak Grandstream UCM serisi fiziksel IP-PBX sistemleri sunmaktadır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">Bulut Sanal Santral</h3>
                  <span className="text-[11px] font-bold text-[#004A93] bg-[#004A93]/10 px-2.5 py-1 rounded-full">Sıfır Yatırım</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5">
                  <li className="flex items-center gap-2">✓ Sunucu veya kablolama yatırımı yok</li>
                  <li className="flex items-center gap-2">✓ Otomatik yazılım güncellemeleri ve güvenlik yamaları</li>
                  <li className="flex items-center gap-2">✓ Evden ve uzaktan çalışan ekipler için ideal</li>
                  <li className="flex items-center gap-2">✓ İstendiğinde dahili sayısı anında artırılabilir</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">Grandstream Fiziksel IP-PBX</h3>
                  <span className="text-[11px] font-bold text-[#78C042] bg-[#78C042]/10 px-2.5 py-1 rounded-full">Tek Seferlik Yatırım</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2.5">
                  <li className="flex items-center gap-2">✓ Kendi ofisinizde çalışan yerel donanım</li>
                  <li className="flex items-center gap-2">✓ Sıfır kullanıcı lisans ücreti (Ömür boyu ücretsiz)</li>
                  <li className="flex items-center gap-2">✓ Dahili FXO/FXS gateway ve analog hat desteği</li>
                  <li className="flex items-center gap-2">✓ GDMS Bulut yönetim sistemi ile uzaktan konfigürasyon</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Bulut Santral Demo & Keşif Talebi →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
