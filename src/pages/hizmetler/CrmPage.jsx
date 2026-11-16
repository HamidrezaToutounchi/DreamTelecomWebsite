import React from 'react';
import { Headphones, Sparkles, BarChart3, Users, Mic, Clock, ShieldCheck, ArrowRight, Layers, PhoneIncoming } from 'lucide-react';

const CRM_FEATURES = [
  {
    title: 'Bulut Dream CRM',
    desc: 'Lokasyonunuzda pahalı sunuculara veya santral donanımlarına ihtiyaç duymadan, yalnızca bir kulaklık ve internet bağlantısıyla çalışan web tabanlı çağrı merkezi çözümüdür.'
  },
  {
    title: 'En Az Bekleme Süresi',
    desc: 'Gelişmiş çağrı dağıtım algoritmaları ve ses kuyruğu yönetimi ile arayan müşterilerinizin hatta bekleme sürelerini en aza indirerek müşteri memnuniyetini yükseltir.'
  },
  {
    title: 'Otomatik IVR & Sesli Anket',
    desc: 'Satışını yapmak istediğiniz ürün ya da hizmetin ses kaydını otomatik aratarak dinletir; müşterinin tuşlamasına göre çağrıyı anında boş temsilciye aktarır.'
  },
  {
    title: 'Manuel Arama (Maske) Modu',
    desc: 'Sisteme yüklenen kurumsal müşteri datalarını operatörlerin önüne tek tuşla getirerek güvenli ve kontrollü giden arama imkanı sunar.'
  },
  {
    title: 'Kurumsal Hafıza & Pop-Up Ekran',
    desc: 'Çağrı geldiğinde müşterinin adı, önceki talepleri ve sipariş geçmişi temsilcinin ekranında anında belirir; böylece hızlı ve kişiselleştirilmiş hizmet sunulur.'
  },
  {
    title: 'Uçtan Uca Ses Kayıt Arşivi',
    desc: 'Tüm gelen ve giden görüşmeler yüksek ses kalitesiyle bulutta arşivlenir, olası hukuki veya ticari ihtilafları engellemek için anında dinlenebilir.'
  },
  {
    title: 'Web Üzerinden Yönetici Paneli',
    desc: 'Çağrı merkezi yöneticileri, sahadaki veya ofisteki temsilcilerini istedikleri yerden canlı izleyebilir, çağrıya fısıldama yapabilir veya dahil olabilir.'
  },
  {
    title: 'Detaylı İstatistik & Raporlama',
    desc: 'Agent performansları, mola süreleri, ortalama çağrı yanıt süreleri ve satış başarı oranları gerçek zamanlı grafiklerle raporlanır.'
  }
];

export default function CrmPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-4 border border-indigo-200">
            <Headphones className="w-3.5 h-3.5 text-indigo-600" />
            <span>BULUT ÇAĞRI MERKEZİ & İLİŞKİ YÖNETİMİ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            CRM Çağrı Yönetimi
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Sipariş yönetimi, satış, teknik destek ve müşteri hizmetleri süreçlerinizi tek merkezden yönetin. Müşterilerinizle kurduğunuz her teması kurumsal hafızaya kaydedin.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CRM_FEATURES.map((feat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sektörel Kullanım */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Hangi Sektörler Bulut CRM Tercih Ediyor?</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-2xl">
              Turizm, Hukuk, Sigorta, Sağlık, E-Ticaret ve Pazarlama alanlarında gelen ve giden çağrılarını yönetmek, ölçümlemek ve ticari verimi katlamak isteyen kurumlar Dream CRM kullanıyor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block text-sm">Turizm & Rezervasyon</strong>
                <p>Gelen çağrıda oda ve rezervasyon durumunu ekranda görüp saniyeler içinde rezervasyon tamamlama.</p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block text-sm">Hukuk & Dosya Takibi</strong>
                <p>İrtibat kurulması gereken müvekkil ve borçlulara toplu bilgilendirme ve otomatik randevu araması.</p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
                <strong className="text-slate-900 block text-sm">Sağlık & Randevu</strong>
                <p>Randevu teyidi, hekim değişiklikleri ve ameliyat bilgilendirmelerinde sıfır hata ile arama yürütme.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Dream CRM Çözümünü Canlı Deneyin →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
