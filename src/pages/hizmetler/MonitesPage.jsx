import React from 'react';
import { Activity, Server, Database, Globe, Shield, Bell, CheckCircle2, Cpu, Eye, Radio, ArrowRight } from 'lucide-react';

const MONITES_MODULES = [
  {
    icon: Phone,
    title: 'Donanım & Uç Nokta Takibi',
    desc: 'Lokasyonlara kurulan Grandstream IP Telefon, ATA, Görüntülü Telefon, IP Santral, FXS-FXO Gateway cihazlarının erişilebilirliğini belirli periyotlarda otomatik register ve test aramaları göndererek doğrular.'
  },
  {
    icon: Radio,
    title: 'Sippy Softswitch İzleme',
    desc: 'Ses altyapınızın en kritik elemanı olan softswitchinizi kesintisiz izler. Register olan ve arama yapan kullanıcıları analiz ederek tanımladığınız kriterlerde anlık SMS/E-posta alarmları üretir.'
  },
  {
    icon: Server,
    title: 'Asterisk & PBX İzleme',
    desc: 'Dünya santral pazarının önemli kısmını oluşturan Asterisk ve Grandstream UCM türevi sistemlerde register kullanıcı durumları, aktif aramalar ve SIP trunk durumları 7/24 takip edilir.'
  },
  {
    icon: Activity,
    title: 'Çağrı Merkezi Canlı Testleri',
    desc: 'Çağrı merkezlerinize otomatik canlı test aramaları göndererek sistemin uçtan uca çalışabilirliğini denetler. Kaçan çağrı adedi, bekleyen kuyruk ve agent mola sürelerini anlık raporlar.'
  },
  {
    icon: Globe,
    title: 'Web, SSL & Domain Denetimi',
    desc: 'Web sitelerinize erişim süreleri, sayfa içerik doğrulaması, URL kontrolleri, SSL sertifikası geçerlilik tarihleri ve kullanıcı giriş ekranlarının doğru yanıt verip vermediği sürekli taranır.'
  },
  {
    icon: Cpu,
    title: 'ESXi & Sanallaştırma Takibi',
    desc: 'Sanal ortamdaki ESX, vCenter ve VM sunucularınızın CPU, RAM, Datastore ve disk kullanım oranlarını tek bir gösterge panelinde eş zamanlı sunar.'
  },
  {
    icon: Database,
    title: 'Veritabanı & Kritik Servisler',
    desc: 'MS SQL, PostgreSQL, MySQL, Oracle, Redis veritabanlarının sorgu yanıt sürelerini ve IIS, Nginx, Apache, Tomcat web servislerinin sağlık durumunu izler.'
  },
  {
    icon: Eye,
    title: 'Dağıtık IP Kamera Projeleri',
    desc: 'Çok lokasyonlu projelerde tüm IP kameraları tek ekranda izleyerek olası arıza veya bağlantı kopmalarında saha ekibine anında bildirim gönderir.'
  }
];

function Phone(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function MonitesPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78C042]/15 text-[#5c9e29] text-xs font-semibold mb-4 border border-[#78C042]/30">
            <Activity className="w-3.5 h-3.5 text-[#5c9e29]" />
            <span>TÜRKİYE'NİN YERLİ BULUT İZLEME YAZILIMI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Monites İzleme Yazılımı
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Siz İsteyin, O İzlesin. Siz İsteyin, O Haber Versin. Tüm telekom santralleriniz, IP telefonlarınız, sunucularınız ve web servisleriniz tek bir canlı NOC ekranında.
          </p>
        </div>
      </section>

      {/* Grid of Capabilities */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">KAPSAMLI DENETİM</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">Monites ile Neleri İzleyebilirsiniz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {MONITES_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#78C042] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#78C042]/10 text-[#5c9e29] flex items-center justify-center font-bold mb-4 group-hover:bg-[#78C042] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{mod.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono font-bold text-[#78C042] uppercase tracking-wider">
                MONITES İLE LİMİTSİZSİNİZ
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Sorunlar Müşterilerinize Yansımadan Haberiniz Olsun
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                İster 1 adet santral, ister 10.000 adet dağıtık IP telefon ve kamera. Monites esnek mimarisi ile her saniye sistemlerinizin nabzını tutar, eşik aşıldığında Telegram, SMS ve E-posta ile teknik ekibinizi uyarır.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#78C042] text-slate-950 hover:bg-[#6ab334] transition-all transform hover:-translate-y-0.5"
                >
                  Monites Canlı Demosunu Talep Edin →
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
