import React from 'react';
import { 
  PhoneCall, ShieldCheck, Activity, Radio, Cpu, Award, ArrowRight, 
  CheckCircle2, Server, Headphones, Headset, Zap, Star, ChevronRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import PartnerMarquee from '../components/PartnerMarquee';

export default function HomePage({ navigateTo, viewProductDetail, setActiveCategory }) {
  // Grab 4 featured Grandstream products for the curated spotlight
  const spotlightProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION: Grandstream Focused Corporate Hero */}
      <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
        
        {/* Soft Ambient Glows matching Logo Colors */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/40 via-teal-50/30 to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="pointer-events-none absolute top-40 right-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Partnership Badge (Compact & elegant on mobile) */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#78C042] animate-pulse shrink-0"></span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-tight">
                <span className="hidden sm:inline">DREAM TELECOM × </span>GRANDSTREAM
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#004A93]">Yetkili Çözüm Ortağı</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-snug sm:leading-[1.15] mb-3 sm:mb-6 px-1">
              Rüya Hızında İletişim & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004A93] via-[#0082A6] to-[#004A93]">
                Profesyonel Grandstream
              </span> Altyapısı
            </h1>
            
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10 px-2 sm:px-0">
              Lisans ücreti gerektirmeyen Grandstream UCM IP santralleri, masaüstü IP telefonlar, Wi-Fi 7 ağ çözümleri ve Dream Telecom'un 10 yıllık mühendislik tecrübesi ile işletmenizi geleceğe taşıyın.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-14 w-full">
              <button 
                onClick={() => navigateTo('iletisim')}
                className="cursor-pointer w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#004A93] hover:bg-[#003870] shadow-md shadow-[#004A93]/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-[#78C042]" />
                <span>Ücretsiz Altyapı Analizi & Teklif</span>
              </button>

              <button 
                onClick={() => { setActiveCategory('Tümü'); navigateTo('urunler'); }}
                className="cursor-pointer w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center gap-2 transition-all hover:border-slate-300"
              >
                <Cpu className="w-4 h-4 text-[#0082A6]" />
                <span>Grandstream Kataloğunu İncele</span>
              </button>
            </div>
          </div>

          {/* LIVE TELECOM METRIC & CONSOLE HERO MOCKUP */}
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xl p-6 sm:p-8 overflow-hidden">
              
              {/* Telemetry Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#78C042] animate-pulse"></div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 tracking-wider">DREAM TELECOM NOC • MERKEZİ SANTRAL VE SES OMURGASI</div>
                    <div className="text-[11px] text-slate-500 font-mono">İstanbul Datacenter & GDMS Cloud Kümesi</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    SLA: 99.999%
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sky-50 text-[#004A93] font-bold border border-sky-200">
                    GDMS SYNCED
                  </span>
                </div>
              </div>

              {/* 4 Telemetry Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Sektörel Tecrübe</span>
                    <Award className="w-4 h-4 text-[#004A93]" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-950 font-mono">10+ <span className="text-xs font-normal text-slate-500">Yıl</span></div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">1.000+ Kurumsal Firma</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>SIP Gecikme (RTT)</span>
                    <Activity className="w-4 h-4 text-[#0082A6]" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-950 font-mono">1.2 <span className="text-xs font-normal text-slate-500">ms</span></div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">Sıfır Ses Gecikmesi</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Grandstream Modeli</span>
                    <Cpu className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-950 font-mono">33 <span className="text-xs font-normal text-slate-500">Model</span></div>
                  <div className="text-[11px] text-[#004A93] font-semibold mt-1">Sıfır Dokunuş Provizyon</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span>Monites 7/24 NOC</span>
                    <ShieldCheck className="w-4 h-4 text-[#78C042]" />
                  </div>
                  <div className="text-2xl font-extrabold text-slate-950 font-mono">7/24 <span className="text-xs font-normal text-slate-500">İzleme</span></div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">Yerli Bulut Monitoring</div>
                </div>

              </div>

              {/* Preview Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>TLS 1.3 & SRTP Medya Şifreleme:</span>
                  <span className="text-slate-400 select-none filter blur-[6px]">GS_SEC_DREAM_PROV_2026_X0928</span>
                </div>
                <button 
                  onClick={() => navigateTo('hakkimizda')}
                  className="text-[#004A93] font-bold hover:underline text-[11px] cursor-pointer"
                >
                  Veri Merkezi & Güvenlik Altyapımız →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. PARTNERS & HARDWARE MARQUEE (Large, Prominent Logos - Image 4 Fix) */}
      <PartnerMarquee />

      {/* 3. ABOUT COMPANY SUMMARY: Real Corporate Story from Dream Telecom HTML Files */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] text-xs font-mono font-bold">
                <span>DREAM TELECOM HAKKINDA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                İletişim İhtiyaçlarınıza Tek Panelde Uçtan Uca Çözüm
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Türkiye telekomünikasyon sektöründe IP Santral, Sanal Santral, Sistem İzleme Yazılımı (Monites), CRM Çağrı Yönetimi ve IP Kamera sistemlerini tek panelde birleştirerek müşterilerine hizmet veren <strong>DREAM TELEKOM</strong>, sektörde güçlü ve güvenilir bir çözüm ortağıdır.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                Sizler sektörünüzde daha iyi hizmet verebilmek için çekirdek yetkinliklerinize odaklanırken, outsource ettiğiniz telekomünikasyon ve santral hizmetleri bizim 10 yıllık güvencemizde kesintisiz çalışır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[#004A93] font-bold text-lg mb-1">Kurumsal</div>
                  <p className="text-xs text-slate-500">1.000'den fazla kurumsal firmaya kesintisiz santral.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[#5c9e29] font-bold text-lg mb-1">Kamu & Sağlık</div>
                  <p className="text-xs text-slate-500">Hastaneler, resmi kurumlar ve finans kuruluşları.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[#0082A6] font-bold text-lg mb-1">Turizm</div>
                  <p className="text-xs text-slate-500">Yüzlerce otel ve seyahat acentesi için santral.</p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => navigateTo('hakkimizda')}
                  className="cursor-pointer inline-flex items-center gap-2 text-xs font-bold text-[#004A93] hover:text-[#003870]"
                >
                  <span>Kurumsal Yapımız ve Veri Merkezi Güvenliği Hakkında Detaylar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-gradient-to-tr from-[#004A93] to-[#0082A6] p-1 shadow-2xl">
                <div className="rounded-xl bg-slate-900 p-6 sm:p-8 text-white space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#78C042]/20 text-[#78C042] flex items-center justify-center font-bold">
                        10Y
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">Sektörel Birikim & Uzmanlık</div>
                        <div className="text-xs text-slate-400">Kurumsal Telekom Çözüm Sağlayıcısı</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white/10 text-emerald-300 text-xs font-mono font-bold">VERİ MERKEZİ</span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#78C042] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Çoklu Yedekli Datacenter</strong>
                        <span className="text-slate-400">Equinix ve Radore veri merkezlerinde barındırılan dark fiber altyapısı ile kesintisiz yedeklilik.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-[#0082A6] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Monites ile 7/24 Canlı İzleme</strong>
                        <span className="text-slate-400">Servis kesintilerini sıfıra indiren Türkiye'nin ilk bulut tabanlı yerli telemetri sistemi.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Grandstream Yetkili Donanım Entegrasyonu</strong>
                        <span className="text-slate-400">Lisanssız UCM IP PBX santral, Wi-Fi 7 erişim noktaları ve GRP masaüstü IP telefonlar.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Santral & NOC Destek:</span>
                    <a href={COMPANY_INFO.phoneTel} className="text-[#78C042] font-bold text-sm hover:underline">
                      0212 929 99 00
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTIONS (4 Strategic Pillars) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] text-xs font-mono font-bold mb-3">
                <span>// TELEKOMÜNİKASYON HİZMETLERİMİZ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Şirketinize Özel Kurumsal İletişim Hizmetleri
              </h2>
            </div>
            <button 
              onClick={() => navigateTo('cozumler')}
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-[#004A93] hover:text-[#003870] whitespace-nowrap"
            >
              <span>Tüm Hizmet Detayları</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. IP Sanal Santral */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#eaf2fa] text-[#004A93] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">IP Sanal Santral</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Fiziksel santral kutusu ve kablo karmaşası olmadan, bulut üzerinden çalışan zengin IVR ve ses kayıt özellikli yeni nesil IP santral.
                </p>
              </div>
              <button 
                onClick={() => navigateTo('cozumler')}
                className="cursor-pointer pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004A93]"
              >
                <span>Detayları İncele</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 2. SIP Trunk */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#0082A6]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#e6f5f8] text-[#0082A6] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">SIP Trunk & VoIP</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Mevcut sabit numaralarınızı kesintisiz taşıyın veya 0850 ve coğrafi numaralar tahsis edin. Sabit hat ücreti olmadan yüksek tasarruf.
                </p>
              </div>
              <button 
                onClick={() => navigateTo('cozumler')}
                className="cursor-pointer pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0082A6]"
              >
                <span>Detayları İncele</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 3. Monites İzleme */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#78C042]/50 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">Monites İzleme Yazılımı</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Türkiye'nin ilk yerli bulut monitoring çözümü. Marka-model bağımsız tüm santral, server ve IP cihazlarınızı 7/24 lisanssız izleyin.
                </p>
              </div>
              <button 
                onClick={() => navigateTo('cozumler')}
                className="cursor-pointer pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#5c9e29]"
              >
                <span>Detayları İncele</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4. CRM Çağrı Yönetimi */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-500/50 hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Headset className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">CRM Çağrı Yönetimi</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Müşteri aradığında anında ekrana düşen sipariş ve görüşme geçmişi. En az bekleme süresi, otomatik IVR ve ölçümleme.
                </p>
              </div>
              <button 
                onClick={() => navigateTo('cozumler')}
                className="cursor-pointer pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600"
              >
                <span>Detayları İncele</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GRANDSTREAM SPOTLIGHT: Curated Showcase (No clutter, 4 featured products) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] text-xs font-mono font-bold mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>GRANDSTREAM.COM.TR RESMİ PORTFÖYÜ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Öne Çıkan Grandstream Donanımları
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Lisanssız UCM IP santraller, yeni nesil Wi-Fi 7 erişim noktaları ve renkli ekranlı masaüstü telefonlar.
              </p>
            </div>

            <button 
              onClick={() => { setActiveCategory('Tümü'); navigateTo('urunler'); }}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[#004A93] text-white hover:bg-[#003870] shadow-md transition-all shrink-0"
            >
              <span>Tüm Donanım Kataloğunu İncele</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlightProducts.map((p) => (
              <div 
                key={p.id}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#004A93]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold leading-normal">
                      {p.subcategory}
                    </span>
                    {p.badge && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] border border-[#004A93]/20 leading-normal">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <div className="h-40 rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-4 group-hover:bg-slate-100/70 transition-colors">
                    <img 
                      src={p.imageUrl} 
                      alt={p.model}
                      className="max-h-32 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.src = 'https://www.grandstream.com/hubfs/Email%20Assets%20Q4%202020/UCM6300_series.png'; }}
                    />
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#004A93] transition-colors mb-1 line-clamp-1" title={p.model}>
                    {p.model}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button 
                    onClick={() => viewProductDetail(p)}
                    className="cursor-pointer text-xs font-bold text-[#004A93] hover:text-[#0082A6] flex items-center gap-1"
                  >
                    <span>Ürünü İncele</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button 
                    onClick={() => navigateTo('iletisim')}
                    className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-[#004A93] hover:text-white transition-colors"
                  >
                    Teklif İste
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PROJECT PACKAGES OVERVIEW (WITHOUT PRICES - Project consultation focused) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] text-xs font-mono font-bold mb-3">
              <span>// KURUMSAL PROJELENDİRME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              İhtiyacınıza Özel Çözüm Paketleri
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Kullanıcı başına lisans sürprizi olmadan; firmanızın ölçeğine, şube sayısına ve santral ihtiyacına göre projelendirilen çözümler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Bulut Tabanlı Çözüm</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">KOBİ Bulut Santral</h3>
                <p className="text-xs text-slate-500 mb-6">Ofis içi temel iletişim ve esnek bulut santral arayan işletmeler için.</p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <span className="text-xs font-bold text-slate-800 block">Proje & Dahiliye Özel Bütçeleme</span>
                  <span className="text-[11px] text-slate-500">Kullanılan kanal ve özellik kadar esnek maliyet</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 10 - 50 Dahili Kullanıcı Desteği</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 0850 ve Coğrafi Numara Tahsisi</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Temel IVR & Karşılama Anonsları</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Mobil ve Web Uygulama Softphone</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-3 rounded-xl border border-slate-300 text-center font-bold text-xs text-slate-800 hover:bg-slate-50"
                >
                  Keşif & Fiyat Teklifi Al
                </button>
              </div>
            </div>

            {/* Package 2: FEATURED */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#004A93] to-[#003870] text-white shadow-xl flex flex-col justify-between relative ring-4 ring-[#004A93]/20">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-teal-300 uppercase">Donanım + Santral</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#78C042] text-slate-950 uppercase">EN ÇOK TERCİH EDİLEN</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-1 mb-2">Grandstream Kurumsal Paket</h3>
                <p className="text-xs text-slate-200 mb-6">UCM6302 IP Santral + GRP serisi Gigabit masaüstü IP telefonlar.</p>

                <div className="p-3 bg-white/10 rounded-xl border border-white/15 mb-6 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Donanım:</span>
                    <strong className="text-teal-300">UCM6302 IP PBX</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Masaüstü:</span>
                    <strong className="text-white">GRP2602P Gigabit</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Lisans:</span>
                    <strong className="text-emerald-400">Ömür Boyu Sıfır Lisans</strong>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 75 - 450 Eşzamanlı Çağrı Kapasitesi</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> GDMS Bulut Uzaktan Yönetim</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Grandstream Wave Softphone Uygulaması</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 7/24 Öncelikli Teknik Destek</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-3.5 rounded-xl font-bold text-xs text-center bg-white text-[#004A93] hover:bg-slate-100 shadow-md"
                >
                  Kurumsal Proje Teklifi İsteyin
                </button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Holding & Çok Şubeli</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Enterprise Özel Çözüm</h3>
                <p className="text-xs text-slate-500 mb-6">Çağrı merkezleri, hastaneler, oteller ve çok şubeli holdingler için.</p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <span className="text-xs font-bold text-slate-800 block">Özel Mühendislik Projesi</span>
                  <span className="text-[11px] text-slate-500">Yerinde keşif ve yedekli santral mimarisi</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> 3.000+ Dahili & High-Availability Çift Santral</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Wi-Fi 7 Ağ Kurulumu & Layer 3 PoE Switch</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Özel CRM/ERP REST API Entegrasyonu</li>
                  <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Atanmış Dedicated NOC Mühendisi</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => navigateTo('iletisim')}
                  className="cursor-pointer block w-full py-3 rounded-xl border border-slate-300 text-center font-bold text-xs text-slate-800 hover:bg-slate-50"
                >
                  Mühendisimiz ile Görüşün
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CTA CONSULTATION SECTION */}
      <section className="py-20 bg-[#071530] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-emerald-300 text-xs font-mono font-bold mb-4">
            <Zap className="w-3.5 h-3.5 text-[#78C042]" />
            <span>KURUMSAL ALTYAPI DANIŞMANLIĞI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            İletişim Altyapınızı Hemen Bugün Güçlendirin
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Dream Telecom uzmanları mevcut telefon santralinizi ve veri ağınızı incelesin; işletmenize en uygun Grandstream ve bulut santral mimarisini çıkarsın.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer px-8 py-3.5 rounded-xl font-bold text-xs bg-[#004A93] hover:bg-[#003870] text-white shadow-lg"
            >
              Ücretsiz Keşif Formunu Doldurun →
            </button>
            <a 
              href={COMPANY_INFO.phoneTel}
              className="px-8 py-3.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#78C042]" />
              <span>0212 929 99 00</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
