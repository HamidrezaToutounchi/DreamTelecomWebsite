import React, { useState } from 'react';
import { 
  Phone, Mail, ChevronDown, Menu, X, Sparkles, Server, Shield, 
  Activity, Headset, ArrowRight, Video, Wifi, Building2, Layers, Cpu 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Header({ currentView, navigateTo, activeCategory, setActiveCategory }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);
  const [mobileHizmetlerOpen, setMobileHizmetlerOpen] = useState(false);
  const [mobileUrunlerOpen, setMobileUrunlerOpen] = useState(false);

  const handleNav = (view, cat = null, brand = null) => {
    if (brand !== null && window.setProductBrandFilter) {
      window.setProductBrandFilter(brand);
    }
    if (cat !== null) setActiveCategory(cat);
    navigateTo(view);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200">
      
      {/* 1. Top Announcement Bar */}
      {announcementVisible && (
        <div className="bg-gradient-to-r from-[#FFF9EE] via-[#F8FAFC] to-[#EFF6FF] border-b border-[#F7E7CD] text-[#7A5B28] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 font-medium transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 truncate mx-auto sm:mx-0">
              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold bg-[#004A93]/10 text-[#004A93] border border-[#004A93]/20 tracking-wide shrink-0">
                GRANDSTREAM • JABRA • FANVIL
              </span>
              <span className="truncate text-slate-700 font-semibold">Kurumsal Santral, Video Konferans & Ağ Donanımları</span>
              <span className="hidden md:inline text-slate-400">•</span>
              <button 
                onClick={() => handleNav('iletisim')} 
                className="font-bold text-[#004A93] hover:underline cursor-pointer shrink-0 ml-1 inline-flex items-center gap-1"
              >
                <span>Hızlı Keşif & Teklif</span>
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

      {/* 2. Top Utility Bar */}
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

      {/* 3. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-22">
          
          {/* Logo */}
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

          {/* Desktop Navigation Menus */}
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

            {/* Ürünler Mega Dropdown (Grandstream + Jabra + Fanvil) */}
            <div className="relative group py-6">
              <button 
                onClick={() => handleNav('urunler')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  currentView === 'urunler' || currentView === 'urun-detay' 
                    ? 'text-[#004A93] font-bold' 
                    : 'hover:text-[#004A93]'
                }`}
              >
                <span>Ürünler</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#004A93] transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute -left-36 top-full w-[820px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-5 text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    KURUMSAL DONANIM & TEKNOLOJİ PORTFÖYÜ
                  </span>
                  <button 
                    onClick={() => handleNav('urunler', 'Tümü')}
                    className="text-[#004A93] hover:text-[#003870] font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tüm Ürün Kataloğu (73 Model)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  
                  {/* Sütun 1: Grandstream */}
                  <div className="p-3.5 rounded-2xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#004A93] text-white flex items-center justify-center font-bold">
                        <Server className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Grandstream</h4>
                        <span className="text-[10px] text-slate-500">Santral & Ağ Donanımları</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 pt-1">
                      <button 
                        onClick={() => handleNav('urunler', 'Birleşik İletişim', 'Grandstream')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">UCM6300 IP Santraller</div>
                        <div className="text-[10px] text-slate-500">Lisanssız PBX santral ailesi</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'Ağ Çözümleri', 'Grandstream')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">Wi-Fi 7 AP & PoE Switch</div>
                        <div className="text-[10px] text-slate-500">GWN serisi kurumsal ağ omurgası</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'Tümleşik Ağ ve PBX (GCC)', 'Grandstream')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">GCC 4'ü 1 Arada Cihazlar</div>
                        <div className="text-[10px] text-slate-500">Router + PBX + Switch + Firewall</div>
                      </button>
                    </div>
                  </div>

                  {/* Sütun 2: Jabra */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#D97706] text-white flex items-center justify-center font-bold">
                        <Video className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Jabra</h4>
                        <span className="text-[10px] text-slate-500">Video Bar & Kurumsal Kulaklık</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <button 
                        onClick={() => handleNav('urunler', 'Video Konferans', 'Jabra')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">PanaCast 50 Video Barlar</div>
                        <div className="text-[10px] text-slate-500">180° Panoramik 4K Teams odası</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'Ofis Kulaklıkları', 'Jabra')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">Evolve2 Serisi Kulaklıklar</div>
                        <div className="text-[10px] text-slate-500">ANC gürültü engelleme & konfor</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'Konferans Hoparlörü', 'Jabra')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">Speak2 Konferans Hoparlörleri</div>
                        <div className="text-[10px] text-slate-500">Yankı kesicili masaüstü toplantı sesi</div>
                      </button>
                    </div>
                  </div>

                  {/* Sütun 3: Fanvil */}
                  <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 hover:border-rose-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#DC2626] text-white flex items-center justify-center font-bold">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs">Fanvil</h4>
                        <span className="text-[10px] text-slate-500">SIP Telefon & İnterkom Sistemleri</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <button 
                        onClick={() => handleNav('urunler', 'IP Masa Telefonları', 'Fanvil')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">V & X Serisi IP Telefonlar</div>
                        <div className="text-[10px] text-slate-500">Renkli ekranlı yönetici ve operatör</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'İnterkom & Kapı Telefonu', 'Fanvil')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">SIP İnterkom & Kapı Paneli</div>
                        <div className="text-[10px] text-slate-500">Görüntülü diafon & acil çağrı</div>
                      </button>
                      <button 
                        onClick={() => handleNav('urunler', 'Paging & Seslendirme', 'Fanvil')}
                        className="w-full text-left p-1.5 rounded-lg hover:bg-white/80 block cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-slate-800 text-[11px]">PA3 / PA2 Paging Gateway</div>
                        <div className="text-[10px] text-slate-500">IP seslendirme & anons ağ geçidi</div>
                      </button>
                    </div>
                  </div>

                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#78C042]" />
                    <span>Tüm ürünlerde 2 yıl resmi Türkiye distribütör garantisi & proje desteği</span>
                  </span>
                  <button 
                    onClick={() => handleNav('iletisim')}
                    className="font-bold text-[#004A93] hover:underline"
                  >
                    Toplu Teklif İste →
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

          {/* Action CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNav('iletisim')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#004A93] hover:bg-[#003870] text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Hızlı Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 4. Full Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          
          {/* Kurumsal Accordion */}
          <div>
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
                  • Sistem & Veri Güvenliği
                </button>
                <button onClick={() => handleNav('banka-hesaplari')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • Banka Hesap Bilgileri
                </button>
              </div>
            )}
          </div>

          {/* Hizmetler Accordion */}
          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => setMobileHizmetlerOpen(!mobileHizmetlerOpen)}
              className="flex items-center justify-between w-full text-left py-1 text-sm font-bold text-slate-800"
            >
              <span>Hizmetler</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileHizmetlerOpen ? 'rotate-180 text-[#004A93]' : ''}`} />
            </button>
            {mobileHizmetlerOpen && (
              <div className="pl-4 pt-2 space-y-2 text-xs">
                <button onClick={() => handleNav('ip-sanal-santral')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • IP Sanal Santral (Bulut PBX)
                </button>
                <button onClick={() => handleNav('sip-trunk')} className="block w-full text-left py-1 text-slate-600 hover:text-[#004A93]">
                  • SIP Trunk & Sabit Numara
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

          {/* Ürünler Accordion */}
          <div className="border-t border-slate-100 pt-3">
            <button 
              onClick={() => setMobileUrunlerOpen(!mobileUrunlerOpen)}
              className="flex items-center justify-between w-full text-left py-1 text-sm font-bold text-slate-800"
            >
              <span>Ürünler (Grandstream • Jabra • Fanvil)</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileUrunlerOpen ? 'rotate-180 text-[#004A93]' : ''}`} />
            </button>
            {mobileUrunlerOpen && (
              <div className="pl-4 pt-2 space-y-2.5 text-xs">
                <div className="pt-1">
                  <strong className="text-[#004A93] block font-mono text-[11px] mb-1">GRANDSTREAM</strong>
                  <button onClick={() => handleNav('urunler', 'Birleşik İletişim', 'Grandstream')} className="block w-full text-left py-0.5 text-slate-600">
                    • UCM6300 IP Santraller & Telefonlar
                  </button>
                  <button onClick={() => handleNav('urunler', 'Ağ Çözümleri', 'Grandstream')} className="block w-full text-left py-0.5 text-slate-600">
                    • Wi-Fi 7 / 6E AP & PoE Switch
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-50">
                  <strong className="text-[#D97706] block font-mono text-[11px] mb-1">JABRA</strong>
                  <button onClick={() => handleNav('urunler', 'Video Konferans', 'Jabra')} className="block w-full text-left py-0.5 text-slate-600">
                    • PanaCast 50 180° Video Barlar
                  </button>
                  <button onClick={() => handleNav('urunler', 'Ofis Kulaklıkları', 'Jabra')} className="block w-full text-left py-0.5 text-slate-600">
                    • Evolve2 ANC Kulaklıklar & Speak2
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-50">
                  <strong className="text-[#DC2626] block font-mono text-[11px] mb-1">FANVIL</strong>
                  <button onClick={() => handleNav('urunler', 'IP Masa Telefonları', 'Fanvil')} className="block w-full text-left py-0.5 text-slate-600">
                    • V & X Serisi Renkli SIP Telefonlar
                  </button>
                  <button onClick={() => handleNav('urunler', 'İnterkom & Kapı Telefonu', 'Fanvil')} className="block w-full text-left py-0.5 text-slate-600">
                    • SIP İnterkom & Paging Gateway
                  </button>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button onClick={() => handleNav('urunler', 'Tümü')} className="block w-full text-left py-1 font-bold text-[#004A93]">
                    • Tüm Ürün Kataloğu (73 Model) →
                  </button>
                </div>
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
