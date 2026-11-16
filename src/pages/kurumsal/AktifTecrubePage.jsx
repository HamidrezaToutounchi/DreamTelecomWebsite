import React from 'react';
import { Building2, Landmark, Hotel, GraduationCap, Banknote, HeartPulse, Scale, ShieldCheck, Headphones, HeartHandshake, Store, ShoppingBag, ArrowRight } from 'lucide-react';

const SECTORS = [
  {
    icon: Building2,
    title: 'Kurumsal & Ticari Sektör',
    desc: 'Dream Telekom, kurumsal firmaların iletişim ihtiyaçlarını etkin çözümlerle profesyonel olarak karşılamak için gerekli 10 yıllık birikime sahip olup, 1.000 adedin üzerinde kurumsal firmaya kesintisiz haberleşme sağlamaktadır.'
  },
  {
    icon: Landmark,
    title: 'Kamu Sektörü Tecrübesi',
    desc: 'İletişim teknolojilerini aktif olarak kullanan ve sürekli kendini geliştiren Kamu Sektörü, Dream Telekom\'un derin tecrübeye sahip olduğu alanlardandır. İhaleler, resmi kurumlar, özerk devlet kuruluşları ve devlet finans kurumlarına aktif hizmet verilmektedir.'
  },
  {
    icon: Hotel,
    title: 'Turizm Sektörü Tecrübesi',
    desc: 'Otel, tatil köyü, seyahat ve uçak bileti operasyonlarında yoğun ses trafiğini yöneten yüzlerce turizm ajansı ve otelin donanım ve yazılım ihtiyaçlarına esnek, yüksek çağrı kapasiteli çözümler sunmaktayız.'
  },
  {
    icon: HeartPulse,
    title: 'Sağlık Sektörü Tecrübesi',
    desc: 'Hasta randevu hatırlatma, tahlil durum bildirimleri, doktor nöbet koordinasyonu gibi kritik duyurular için doğru, zamanında ve yedekli santral sistemleriyle sağlık kuruluşlarımızın yanındayız.'
  },
  {
    icon: Banknote,
    title: 'Finans & Borsa Tecrübesi',
    desc: 'Yatırım kurumları, banka, faktoring ve finans kuruluşlarının hissedar ve müşterilerini bilgilendirme, çağrı kaydı ve yüksek güvenlikli şifreli ses (SRTP/TLS) altyapılarını yönetiyoruz.'
  },
  {
    icon: Scale,
    title: 'Hukuk Sektörü Tecrübesi',
    desc: 'Hukuk büroları ve yasal takip merkezleri için kurulan mini çağrı merkezleri ve otomatik arama çözümleri sayesinde iletişim maliyetleri minimize edilirken dosya takip hızı katlanmaktadır.'
  },
  {
    icon: GraduationCap,
    title: 'Eğitim Sektörü Tecrübesi',
    desc: 'Öğrenci, veli ve öğretmen iletişimini canlı tutan özel ve devlet okulları, üniversiteler ve kurs merkezleri için kesintisiz IVR, SMS ve dahili santral ağları tesis edilmektedir.'
  },
  {
    icon: Headphones,
    title: 'Çağrı Merkezleri Tecrübesi',
    desc: 'Kampanya, tanıtım, müşteri ilişkileri ve anket çalışmaları yürüten çağrı merkezleri; yüksek kapasiteli SIP trunk, otomatik IVR ve Monites canlı izleme modüllerimizle maksimum verimle çalışmaktadır.'
  },
  {
    icon: ShieldCheck,
    title: 'Sigorta Sektörü Tecrübesi',
    desc: 'Poliçe vade hatırlatma, hasar ihbar masası ve acil durum çağrıları için sigorta şirketleri ve acentelerine ekonomik, entegre ses ve kayıt çözümleri sunulmaktadır.'
  },
  {
    icon: HeartHandshake,
    title: 'Sivil Toplum Kuruluşları (STK)',
    desc: 'Toplumsal dayanışma projelerinde gönüllü ve yardımsever kitlelerle güvenli iletişim kurmak amacıyla minimum maliyetli kurumsal duyuru ve bilgilendirme altyapıları kuruyoruz.'
  },
  {
    icon: Store,
    title: 'Bayi & Ajans Ağı Tecrübesi',
    desc: 'Portföyünde çok sayıda müşteri bulunan bayi ve ajanslar, Dream Telekom\'un toplu avantajlarından faydalanarak müşterilerine profesyonel santral ve donanım hizmetlerini kendi markalarıyla sunabilmektedir.'
  },
  {
    icon: ShoppingBag,
    title: 'E-Ticaret & Online Satış',
    desc: 'Satış öncesi canlı destek, kargo/sipariş durumu bilgilendirme ve satış sonrası müşteri memnuniyeti süreçlerinde e-ticaret sitelerine tam entegre santral ve CRM hatları sunuyoruz.'
  }
];

export default function AktifTecrubePage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            10 YILLIK BİRİKİM & SEKTÖREL ÇÖZÜMLER
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Aktif Kurumsal Tecrübe
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Farklı iş modellerine ve regülasyonlara göre Dream Telekom'un Türkiye genelinde 1.000'den fazla kurumsal müşteride kanıtlanmış saha tecrübesi bulunmaktadır.
          </p>
        </div>
      </section>

      {/* Grid of Sectors */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#004A93]/10 text-[#004A93] group-hover:bg-[#004A93] group-hover:text-white flex items-center justify-center font-bold mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#004A93] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Banner */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">Sektörünüze Özel Projelendirme</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Her kurumun haberleşme dinamiği farklıdır. Mühendislerimiz firmanızın iş akışını analiz ederek en uygun Grandstream ve PBX topolojisini hazırlar.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer shrink-0 px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#78C042] text-slate-950 hover:bg-[#6ab334] transition-all transform hover:-translate-y-0.5"
            >
              Kurumsal Keşif Talep Et →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
