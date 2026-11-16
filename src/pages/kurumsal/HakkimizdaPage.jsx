import React from 'react';
import { Shield, Target, Users, Award, CheckCircle2, ChevronRight, Server, PhoneCall, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function HakkimizdaPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004A93]/10 text-[#004A93] text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#78C042]" />
              <span>KURUMSAL PROFİL & VİZYON</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              Rüya Hızında İletişim, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004A93] to-[#0082A6]">
                10 Yıllık Güven ve Mühendislik
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Türkiye telekomünikasyon sektöründe IP Santral, Bulut PBX, sistem izleme, CRM yazılımları ve Grandstream donanım çözümlerini tek çatı altında sunan Dream Telecom, işletmenizin dijital haberleşme omurgasını kurar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Core Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                İşletmenizin Çekirdek Yetkinliklerine Odaklanmasını Sağlıyoruz
              </h2>
              <p>
                Türkiye'de telekomünikasyon sektöründe IP Santral, Sanal Santral, Sistem İzleme Yazılımı, CRM yazılımları, IP Kamera Sistemleri; sistemlere ait donanımlar ve katma değerli hizmetleri tek panelde birleştirerek müşterilerine hizmet veren <strong className="text-slate-900 font-semibold">DREAM TELECOM</strong>, sektörde öncü bir konuma sahiptir.
              </p>
              <p>
                Dream Telekom müşteri odaklı ve katma değerli çözümleriyle bütün iletişim ihtiyaçlarınıza cevap vermeye yönelik kurulmuş güvenilir çözüm ortağınızdır. Sizler sektörünüzde daha iyi hizmet verebilmek için çekirdek yetkinliklerinize odaklanırken, outsource ettiğiniz kurumsal telekomünikasyon altyapısı bizim güvencemizde çalışır.
              </p>
              <p>
                Hedefimiz firmanızın iletişim ve haberleşme ile ilgili tüm ihtiyaç ve projelerine en kısa sürede kalıcı çözümler üretmek ve sizleri en etkili, kesintisiz haberleşme ağlarıyla buluşturmaktır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Hedef ve Misyon</h4>
                  <p className="text-xs text-slate-600">
                    İnovatif teknolojileri yakından takip ederek işletmelere en ekonomik, en hızlı ve sıfır lisans maliyetli haberleşme sunmak.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#78C042]/10 text-[#5c9e29] flex items-center justify-center font-bold mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Etik Değerler & Güven</h4>
                  <p className="text-xs text-slate-600">
                    İş ahlakı ve etik ilkelerle hareket ederek müşterilerimizin tam güvenini kazanmak en değerli sermayemizdir.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#004A93] via-[#003870] to-[#041a40] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="text-4xl font-extrabold text-white">10+ Yıl</div>
                  <div className="text-sm text-blue-200 mt-1">Sektörel Altyapı ve Telekom Tecrübesi</div>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="text-4xl font-extrabold text-white">1.000+</div>
                  <div className="text-sm text-blue-200 mt-1">Aktif Hizmet Alan Kurumsal Müşteri</div>
                </div>

                <div className="border-b border-white/10 pb-6">
                  <div className="text-4xl font-extrabold text-[#78C042]">33+ Model</div>
                  <div className="text-sm text-blue-200 mt-1">Yetkili Grandstream Donanım Çözüm Ortaklığı</div>
                </div>

                <div>
                  <div className="text-4xl font-extrabold text-white">%99.999</div>
                  <div className="text-sm text-blue-200 mt-1">Datacenter ve Ses Omurgası Uptime Güvencesi</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Dream Telecom */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider">KURUMSAL AVANTAJLAR</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">Neden Dream Telecom?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Grandstream Donanım Güvencesi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tüm IP PBX, masaüstü IP telefonlar ve ağ bileşenleri orijinal Grandstream donanımlarıyla tam uyumlu anahtar teslim devreye alınır.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center font-bold mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Yedekli Datacenter Altyapısı</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Çoklu coğrafi datacenter yedekliliği ve dark fiber ring bağlantısı ile santral ve ses omurganız asla kesintiye uğramaz.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#78C042]/10 text-[#5c9e29] flex items-center justify-center font-bold mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">7/24 Mühendislik Desteği</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Robotik çağrı merkezleri yerine doğrudan santral ve IP ağ uzmanlarımızın yer aldığı teknik NOC masasından anında destek alın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">
            İletişim Altyapınızı Profesyonellere Emanet Edin
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Kurumsal IP santral, SIP trunk ve Grandstream donanım projeleriniz için ücretsiz yerinde keşif ve demo talep edin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              Ücretsiz Keşif & Teklif Al
            </button>
            <button 
              onClick={() => navigateTo('referanslar')}
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
            >
              Referanslarımızı İnceleyin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
