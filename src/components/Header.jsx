import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, Sparkles, Server, Shield, Activity, Headset, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Header({ currentView, navigateTo, activeCategory, setActiveCategory }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);
  const [mobileHizmetlerOpen, setMobileHizmetlerOpen] = useState(false);
  const [mobileGrandstreamOpen, setMobileGrandstreamOpen] = useState(false);

  const handleNav = (view, cat = null) => {
    if (cat !== null) setActiveCategory(cat);
    navigateTo(view);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200">
      
      {/* 1. Warm Top Announcement Bar (Slim, single-line mobile, no squishing) */}
      {announcementVisible && (
        <div className="bg-[#FFF9EE] border-b border-[#F7E7CD] text-[#7A5B28] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 font-medium transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 truncate mx-auto sm:mx-0">
              <span className="inline-flex items-center justify-center px-1.5 sm:px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#78C042]/20 text-[#4c8720] border border-[#78C042]/40 tracking-wide shrink-0">
                GRANDSTREAM YETKİLİ
              </span>
              <span className="truncate text-slate-700">Kurumsal IP Santral & Ağ Çözümleri</span>
              <span className="hidden md:inline text-slate-400">•</span>
              <button 
                onClick={() => handleNav('iletisim')} 
                className="font-bold text-[#004A93] hover:underline cursor-pointer shrink-0 ml-1 inline-flex items-center gap-1"
              >
                <span>Hızlı Keşif</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <button 
              onClick={() => setAnnouncementVisible(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer p-1 shrink-0"
              title="Kapat"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* 2. Top Utility Bar (Cleaned: NO STH, NO Destek/Bakiye portal, Real verified phone) */}
      <div className="bg-white border-b border-slate-100 text-xs text-slate-600 py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#78C042] animate-pulse"></span>
              Kurumsal Telekomünikasyon & Santral Sistemleri
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">10+ Yıllık Sektörel Tecrübe • 1.000+ Kurumsal Müşteri</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={`mailto:${COMPANY_INFO.departments[0].email}`} 
              className="flex items-center gap-1.5 hover:text-[#004A93] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0082A6]" />
              <span>{COMPANY_INFO.departments[0].email}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={COMPANY_INFO.phoneTel} 
              className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#004A93] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#78C042]" />
              <span>Santral: {COMPANY_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Spacious Main Navigation Bar (Clean at 1024px, 1280px+) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-22">
          
          {/* Logo with enlarged, proud prominence */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center py-1 sm:py-2 shrink-0 cursor-pointer group"
          >
            <img 
              src="/assets/logo.png" 
              alt="Dream Telecom" 
              className="h-10 sm:h-13 lg:h-16 w-auto object-contain transition-transform group-hover:scale-102"
              onError={(e) => { e.target.src = 'assets/logo.png'; }}
            />
          </button>

          {/* Desktop Navigation Menus (Appears at xl: 1280px+ to ensure zero collision) */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
            
            {/* Kurumsal Dropdown */}
            <div className="relative group py-6">
              <button 
                onClick={() => handleNav('hakkimizda')}
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  ['hakkimizda', 'aktif-tecrube', 'sistem-guvenlik', 'banka-hesaplari'].includes(currentView) 
                    ? 'text-[#004A93] font-bold' 
                    : 'hover:text-[#004A93]'
                }`}
              >
                <span>Kurumsal</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004A93] transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 top-full w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <button 
                  onClick={() => handleNav('hakkimizda')} 
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'hakkimizda' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900">Hakkımızda</div>
                  <div className="text-[11px] text-slate-500">Şirket profili ve 10 yıllık vizyon</div>
                </button>
                <button 
                  onClick={() => handleNav('aktif-tecrube')} 
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'aktif-tecrube' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900">Aktif Kurumsal Tecrübe</div>
                  <div className="text-[11px] text-slate-500">Kamu, sağlık, turizm ve 1.000+ müşteri</div>
                </button>
                <button 
                  onClick={() => handleNav('sistem-guvenlik')} 
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'sistem-guvenlik' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900">Sistem & Veri Güvenliği</div>
                  <div className="text-[11px] text-slate-500">Datacenter ve dark fiber altyapısı</div>
                </button>
                <button 
                  onClick={() => handleNav('banka-hesaplari')} 
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'banka-hesaplari' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900">Banka Hesap Bilgileri</div>
                  <div className="text-[11px] text-slate-500">Garanti BBVA ve İş Bankası IBAN</div>
                </button>
              </div>
            </div>

            {/* Hizmetler Dropdown */}
            <div className="relative group py-6">
              <button 
                onClick={() => handleNav('ip-sanal-santral')}
                className={`flex items-center gap-1 transition-colors cursor-pointer ${
                  ['ip-sanal-santral', 'sip-trunk', 'monites', 'crm', 'cozumler'].includes(currentView) 
                    ? 'text-[#004A93] font-bold' 
                    : 'hover:text-[#004A93]'
                }`}
              >
                <span>Hizmetler</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004A93] transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <button 
                  onClick={() => handleNav('ip-sanal-santral')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'ip-sanal-santral' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#004A93]"></span> IP Sanal Santral (Bulut PBX)
                  </div>
                  <div className="text-[11px] text-slate-500">Sıfır donanım maliyeti, sınırsız dahili</div>
                </button>
                <button 
                  onClick={() => handleNav('sip-trunk')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'sip-trunk' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0082A6]"></span> SIP Trunk & Numara Taşıma
                  </div>
                  <div className="text-[11px] text-slate-500">0850 ve coğrafi hatlar, %70 tasarruf</div>
                </button>
                <button 
                  onClick={() => handleNav('monites')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'monites' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#78C042]"></span> Monites İzleme Yazılımı
                  </div>
                  <div className="text-[11px] text-slate-500">Türkiye'nin yerli bulut monitoring sistemi</div>
                </button>
                <button 
                  onClick={() => handleNav('crm')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors ${currentView === 'crm' ? 'bg-[#eaf2fa] text-[#004A93]' : ''}`}
                >
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span> CRM Çağrı Yönetimi
                  </div>
                  <div className="text-[11px] text-slate-500">Entegre ses kaydı, IVR ve agent paneli</div>
                </button>
              </div>
            </div>

            {/* Grandstream Donanım Dropdown (NO awkward 33 Model badge) */}
            <div className="relative group py-6">
              <button 
                onClick={() => handleNav('urunler')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView === 'urunler' || currentView === 'urun-detay' 
                    ? 'text-[#004A93] font-bold' 
                    : 'hover:text-[#004A93]'
                }`}
              >
                <span>Grandstream Donanım</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004A93] transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-0 top-full w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="text-[10px] font-mono font-bold text-[#004A93] uppercase px-2 mb-2">GRANDSTREAM PORTFÖYÜ</div>
                
                <button 
                  onClick={() => handleNav('urunler', 'Birleşik İletişim')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors"
                >
                  <div className="font-bold text-slate-900">UCM6300 Santraller & IP Telefonlar</div>
                  <div className="text-[11px] text-slate-500">Lisanssız PBX santral ve GRP serisi masaüstü</div>
                </button>

                <button 
                  onClick={() => handleNav('urunler', 'Ağ Çözümleri')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors"
                >
                  <div className="font-bold text-slate-900">Wi-Fi 7 / 6E AP & Layer 3 Switch</div>
                  <div className="text-[11px] text-slate-500">GWN serisi PoE omurga ve dış ortam AP</div>
                </button>

                <button 
                  onClick={() => handleNav('urunler', 'Tümleşik Ağ ve PBX (GCC)')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-50 block cursor-pointer transition-colors"
                >
                  <div className="font-bold text-slate-900">GCC 4'ü 1 Arada Tümleşik Ağ ve PBX</div>
                  <div className="text-[11px] text-slate-500">Next-gen firewall + PBX + router + switch</div>
                </button>

                <div className="mt-2 pt-2 border-t border-slate-100">
                  <button 
                    onClick={() => handleNav('urunler', 'Tümü')}
                    className="w-full text-center py-2.5 rounded-xl bg-[#eaf2fa] text-[#004A93] font-bold text-xs hover:bg-[#d8e8f8] transition-colors cursor-pointer"
                  >
                    Tüm Grandstream Modellerini Gör →
                  </button>
                </div>
              </div>
            </div>

            {/* Standalone Nav Items */}
            <button 
              onClick={() => handleNav('paketler')}
              className={`transition-colors cursor-pointer ${currentView === 'paketler' ? 'text-[#004A93] font-bold' : 'hover:text-[#004A93]'}`}
            >
              Çözüm Paketleri
            </button>

            <button 
              onClick={() => handleNav('referanslar')}
              className={`transition-colors cursor-pointer ${currentView === 'referanslar' ? 'text-[#004A93] font-bold' : 'hover:text-[#004A93]'}`}
            >
              Referanslar
            </button>

            <button 
              onClick={() => handleNav('iletisim')}
              className={`transition-colors cursor-pointer ${currentView === 'iletisim' ? 'text-[#004A93] font-bold' : 'hover:text-[#004A93]'}`}
            >
              İletişim
            </button>
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('iletisim')}
              className="hidden sm:flex cursor-pointer px-5 lg:px-6 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-[#004A93] via-[#005da8] to-[#0082A6] hover:from-[#003870] hover:to-[#006e8d] shadow-md shadow-[#004A93]/20 items-center gap-2 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#78C042]" />
              <span>Ücretsiz Keşif & Teklif</span>
            </button>

            {/* Hamburger Button (Visible on < xl: mobile, tablet & 1024px laptop) */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="xl:hidden p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-[#004A93] hover:bg-slate-50 cursor-pointer transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileOpen ? <X className="w-6 h-6 text-[#004A93]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Complete Responsive Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <button 
            onClick={() => handleNav('home')} 
            className={`block w-full text-left py-2 text-sm font-bold ${currentView === 'home' ? 'text-[#004A93]' : 'text-slate-800'}`}
          >
            Ana Sayfa
          </button>

          {/* Mobile Kurumsal Accordion */}
          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => setMobileKurumsalOpen(!mobileKurumsalOpen)}
              className="flex items-center justify-between w-full text-left py-1 text-sm font-bold text-slate-800"
            >
              <span>Kurumsal</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileKurumsalOpen ? 'rotate-180 text-[#004A93]' : ''}`} />
            </button>
            {mobileKurumsalOpen && (
              <div className="pl-4 pt-2 space-y-2 text-xs">
                <button onClick={() => handleNav('hakkimizda')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Hakkımızda & Vizyon
                </button>
                <button onClick={() => handleNav('aktif-tecrube')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Aktif Kurumsal Tecrübe
                </button>
                <button onClick={() => handleNav('sistem-guvenlik')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Sistem ve Veri Güvenliği
                </button>
                <button onClick={() => handleNav('banka-hesaplari')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Banka Hesap Bilgileri
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hizmetler Accordion */}
          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => setMobileHizmetlerOpen(!mobileHizmetlerOpen)}
              className="flex items-center justify-between w-full text-left py-1 text-sm font-bold text-slate-800"
            >
              <span>Hizmetler & Çözümler</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileHizmetlerOpen ? 'rotate-180 text-[#004A93]' : ''}`} />
            </button>
            {mobileHizmetlerOpen && (
              <div className="pl-4 pt-2 space-y-2 text-xs">
                <button onClick={() => handleNav('ip-sanal-santral')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • IP Sanal Santral (Bulut PBX)
                </button>
                <button onClick={() => handleNav('sip-trunk')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • SIP Trunk & Numara Taşıma
                </button>
                <button onClick={() => handleNav('monites')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Monites İzleme Yazılımı
                </button>
                <button onClick={() => handleNav('crm')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • CRM Çağrı Yönetimi
                </button>
              </div>
            )}
          </div>

          {/* Mobile Grandstream Accordion */}
          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => setMobileGrandstreamOpen(!mobileGrandstreamOpen)}
              className="flex items-center justify-between w-full text-left py-1 text-sm font-bold text-slate-800"
            >
              <span>Grandstream Donanım</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileGrandstreamOpen ? 'rotate-180 text-[#004A93]' : ''}`} />
            </button>
            {mobileGrandstreamOpen && (
              <div className="pl-4 pt-2 space-y-2 text-xs">
                <button onClick={() => handleNav('urunler', 'Birleşik İletişim')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • UCM6300 IP Santraller & Telefonlar
                </button>
                <button onClick={() => handleNav('urunler', 'Ağ Çözümleri')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Wi-Fi 7 / 6E AP & PoE Switch
                </button>
                <button onClick={() => handleNav('urunler', 'Tümleşik Ağ ve PBX (GCC)')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • GCC Tümleşik Cihazlar
                </button>
                <button onClick={() => handleNav('urunler', 'Tümü')} className="block w-full text-left py-1 font-bold text-[#004A93]">
                  • Tüm Grandstream Kataloğu →
                </button>
              </div>
            )}
          </div>

          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => handleNav('paketler')} 
              className={`block w-full text-left py-1 text-sm font-bold ${currentView === 'paketler' ? 'text-[#004A93]' : 'text-slate-800'}`}
            >
              Çözüm Paketleri
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => handleNav('referanslar')} 
              className={`block w-full text-left py-1 text-sm font-bold ${currentView === 'referanslar' ? 'text-[#004A93]' : 'text-slate-800'}`}
            >
              Referanslar
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => handleNav('iletisim')} 
              className={`block w-full text-left py-1 text-sm font-bold ${currentView === 'iletisim' ? 'text-[#004A93]' : 'text-slate-800'}`}
            >
              İletişim & Destek
            </button>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <a 
              href={COMPANY_INFO.phoneTel} 
              className="py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-center text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#78C042]" />
              <span>Santral: {COMPANY_INFO.formattedPhone}</span>
            </a>
            <button 
              onClick={() => handleNav('iletisim')} 
              className="w-full py-3.5 rounded-xl bg-[#004A93] text-white font-bold text-center text-xs shadow-md"
            >
              Ücretsiz Keşif & Teklif Talebi
            </button>
          </div>

        </div>
      )}

    </header>
  );
}
