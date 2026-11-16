import React from 'react';
import { Building2, Briefcase, Landmark, Hotel, ShieldCheck, Server, CreditCard, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function AboutPage({ navigateTo }) {
  return (
    <div className="bg-white">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            KURUMSAL KİMLİĞİMİZ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Hakkımızda & 10 Yıllık Tecrübemiz
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Türkiye genelinde 1.000'den fazla kurumsal müşteriye yüksek güvenilirlikte IP Santral, Bulut İletişim ve Grandstream yetkili donanım altyapısı sunuyoruz.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-20">
        
        {/* About Company */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#eaf2fa] text-[#004A93] flex items-center justify-center font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              DREAM TELECOM HAKKINDA
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Türkiye'de telekomünikasyon sektöründe IP Santral, Sanal Santral, Sistem İzleme Yazılımı (Monites), CRM yazılımları, IP Kamera Sistemleri; sistemlere ait donanımlar ve katma değerli hizmetleri tek panelde birleştirerek müşterilerine hizmet veren <strong>DREAM TELECOM</strong>, sektörde önemli bir yere sahiptir.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Dream Telekom müşteri odaklı ve katma değerli çözümleriyle bütün iletişim ihtiyaçlarınıza cevap vermeye yönelik kurulmuş star-up çözüm ortağınızdır. Sizler sektörünüzde daha iyi hizmet verebilmek için çekirdek yetkinliklerinize odaklanırken outsource ettiğiniz telekomünikasyon hizmetleri bizim güvencemizde olacaktır.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Hedefimiz firmanızın iletişim ve haberleşme ile ilgili tüm ihtiyaç ve projelerine en kısa sürede çözüm bulmak ve sizleri en etkili iletişim ve haberleşme ağlarıyla buluşturmaktır. Bu çözümler için gerekli altyapıyı sağlamak ve yeni ihtiyaçlarınıza cevap verebilmek için Dream Telekom teknolojideki inovatif fikirlerin takipçisi olmaya devam edecektir.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-8 space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3">Resmi Şirket Künyesi</h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex flex-col py-1 border-b border-slate-100">
                <span className="text-slate-500">Resmi Ticari Ünvan:</span>
                <strong className="text-slate-900 text-sm mt-0.5">{COMPANY_INFO.name}</strong>
              </li>
              <li className="flex flex-col py-1 border-b border-slate-100">
                <span className="text-slate-500">Genel Santral Numarası:</span>
                <strong className="text-[#004A93] font-mono text-base font-bold mt-0.5">{COMPANY_INFO.formattedPhone}</strong>
              </li>
              <li className="flex flex-col py-1 border-b border-slate-100">
                <span className="text-slate-500">Genel Merkez Adresi:</span>
                <span className="text-slate-800 font-medium mt-0.5">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex flex-col py-1">
                <span className="text-slate-500">Yetkili Partnerlik:</span>
                <strong className="text-[#78C042] font-semibold mt-0.5">Grandstream Certified Enterprise Partner</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Aktif Kurumsal Tecrübe */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#5c9e29] uppercase tracking-wider">SEKTÖREL DERİNLİK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1 mb-3">
              Aktif Kurumsal Tecrübemiz
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Farklı iş modellerine göre Dream Telekom'un aktif kurumsal tecrübe ve referansları bulunmaktadır. Müşteri odaklı yaklaşım, hızlı ve esnek çözümleme, uygun maliyetlendirme yapısı ile <strong>10 Yıllık İletişim Tecrübemizin</strong> gururunu taşımaktayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#eaf2fa] text-[#004A93] flex items-center justify-center font-bold mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Kurumsal - Ticari Tecrübe</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kurumsal firmaların iletişim ihtiyaçlarını profesyonel olarak karşılamak için gerekli olan 10 yıllık birikime sahip ve <strong>1.000 adetin üzerinde</strong> kurumsal firmaya kesintisiz hizmet ve çözümü güvenle sağlamaktadır.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#78C042] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center font-bold mb-4">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Kamu Sektörü Tecrübesi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                İletişim teknolojilerini aktif kullanan kamu sektörü, resmi kurumlar, özerk devlet kuruluşları, hastaneler, eğitim ve finans kurumlarına aktif olarak Grandstream santral ve VoIP altyapısı sunulmaktadır.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0082A6] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#e6f5f8] text-[#0082A6] flex items-center justify-center font-bold mb-4">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Turizm & Otelcilik Tecrübesi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tatil, otel, seyahat ve uçak bileti uygulamalarıyla iletişimin en kritik olduğu turizm sektöründe yüzlerce acente ve tesise Grandstream otel IP telefonları ve yüksek eşzamanlı hat çözümleri sağlanmaktadır.
              </p>
            </div>

          </div>
        </div>

        {/* Sistem ve Veri Güvenliği */}
        <div className="pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">GÜVENLİK STANDARTLARI</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Sistem ve Veri Güvenliği
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kurumunuzda esnek ve gelişmiş bir iletişim sistemi kurmanın bir ayağı olan tüm güvenlik gereksinimleri Dream Telekom sistemleri üzerinde sizin için sağlanmıştır. Bu da yüksek IT güvenliğinin gerektirdiği maliyet ve işgücünden tasarruf etmenizi sağlar.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dream Telekom sistemlerinde, veriler farklı durum (felaket vb.) senaryolarına karşı güvende olması amacıyla, çoklu yedekli olarak farklı coğrafi veri merkezlerinde barındırılır.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#78C042] mt-0.5 shrink-0" />
                  <span><strong>Datacenter (Veri Merkezi) Güvenliği:</strong> Genişleyen dark fiber altyapımızla birden fazla lokasyona doğru bağlı durumda yedekliliğe sahibiz.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#78C042] mt-0.5 shrink-0" />
                  <span><strong>Fiziksel Kartlı Giriş Standartları:</strong> Yazılı izin ve randevusu bulunmayan müşteri/personel girişleri engellenmekte, tüm manyetik kart logları raporlanarak fiziksel tehditlerin önüne geçilmektedir.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#78C042] mt-0.5 shrink-0" />
                  <span><strong>Bilgi Güvenliği Politikası:</strong> Elektronik haberleşme standartları kapsamında verilerin gizliliği ve bütünlüğü en yüksek seviyede korunur.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#071530] text-white rounded-2xl p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono text-teal-400">DATACENTER INFRASTRUCTURE</span>
                <span className="text-xs font-mono font-bold text-[#78C042]">99.999% UPTIME</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-slate-900 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">LOKASYONLAR</span>
                  <span className="font-bold text-white">Equinix & Radore TR</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">OMURGA</span>
                  <span className="font-bold text-emerald-400">Dark Fiber Redundant</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">IZLEME</span>
                  <span className="font-bold text-white">Monites 7/24 NOC</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-lg">
                  <span className="text-slate-400 block text-[10px]">ŞİFRELEME</span>
                  <span className="font-bold text-sky-400">SRTP & TLS 1.3</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Banka Hesap Bilgileri */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">RESMİ ÖDEME KANALLARI</span>
            <h2 className="text-2xl font-extrabold text-slate-950 mt-1 mb-2">
              Banka Hesap Bilgilerimiz
            </h2>
            <p className="text-xs text-slate-500">
              Fatura ve donanım ödemelerinizi aşağıdaki resmi şirket hesaplarımıza gerçekleştirebilirsiniz. Havale/EFT açıklamasına abone numaranızı veya şirket unvanınızı yazmayı unutmayınız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {COMPANY_INFO.bankAccounts.map((acc, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between font-bold text-sm text-slate-900 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#004A93]" />
                    <span>{acc.bank}</span>
                  </div>
                  <span className="text-[#004A93] font-mono text-xs font-semibold">{acc.accountType}</span>
                </div>
                <div className="space-y-1 font-mono text-slate-700">
                  <p><span className="text-slate-500 font-sans block text-[11px]">Hesap Sahibi:</span><strong>{acc.receiver}</strong></p>
                  <p className="pt-1"><span className="text-slate-500 font-sans block text-[11px]">IBAN:</span><strong className="text-slate-950 text-sm select-all">{acc.iban}</strong></p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
