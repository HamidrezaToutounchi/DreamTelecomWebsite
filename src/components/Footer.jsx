import React from 'react';
import { MapPin, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer({ navigateTo, setActiveCategory }) {
  const handleNav = (view, cat = null, brand = null) => {
    if (brand !== null && window.setProductBrandFilter) {
      window.setProductBrandFilter(brand);
    }
    if (cat !== null) setActiveCategory(cat);
    navigateTo(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071530] text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          
          {/* Company Bio */}
          <div className="lg:col-span-2 space-y-5">
            <button 
              onClick={() => handleNav('home')} 
              className="flex items-center cursor-pointer"
            >
              <img 
                src="/assets/logo.png" 
                alt="Dream Telecom" 
                className="h-12 sm:h-14 w-auto object-contain brightness-110"
                onError={(e) => { e.target.src = 'assets/logo.png'; }}
              />
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-white block font-semibold mb-1">{COMPANY_INFO.name}</strong>
              Türkiye genelinde kurumsal IP Santral, Sanal Santral, Monites Bulut İzleme ve Grandstream, Jabra ve Fanvil yetkili donanım çözümleri ile 10 yılı aşkın süredir işletmelere kesintisiz haberleşme altyapısı sunar.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0082A6] shrink-0 mt-1" />
                <span className="text-slate-400">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#78C042] shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="font-mono font-bold text-white hover:text-[#78C042] text-sm sm:text-base">
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#78C042]">
                <Award className="w-4 h-4 text-[#78C042]" />
                <span>Grandstream • Jabra • Fanvil Yetkili Çözüm Sağlayıcısı</span>
              </div>
            </div>
          </div>

          {/* Col 2: Kurumsal */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Kurumsal</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('hakkimizda')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Hakkımızda & Vizyon
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('aktif-tecrube')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Aktif Kurumsal Tecrübe
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sistem-guvenlik')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Sistem & Veri Güvenliği
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('banka-hesaplari')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Banka Hesap Bilgileri
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('referanslar')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Müşteri Referansları
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hizmetlerimiz */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Hizmetlerimiz</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('ip-sanal-santral')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  IP Sanal Santral (Bulut PBX)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sip-trunk')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  SIP Trunk & Numara Taşıma
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('monites')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Monites Yerli Bulut İzleme
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('crm')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  CRM Çağrı Yönetimi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('paketler')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Hazır Çözüm Paketleri
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Ürün Portföyü */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Donanım & Ürünler</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('urunler', 'Tümü', 'Grandstream')} className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Grandstream Santral & Ağ</span>
                  <ArrowUpRight className="w-3 h-3 text-[#0082A6]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('urunler', 'Tümü', 'Jabra')} className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Jabra Video Bar & Kulaklık</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D97706]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('urunler', 'Tümü', 'Fanvil')} className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                  <span>Fanvil SIP Telefon & İnterkom</span>
                  <ArrowUpRight className="w-3 h-3 text-[#DC2626]" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('urunler', 'Tümü')} className="text-[#78C042] font-semibold hover:underline transition-colors cursor-pointer flex items-center gap-1">
                  <span>Tüm Ürün Kataloğu (73 Model)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#78C042]" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('sistem-guvenlik')} className="hover:text-slate-400 cursor-pointer">Gizlilik ve Güvenlik</button>
            <button onClick={() => handleNav('sistem-guvenlik')} className="hover:text-slate-400 cursor-pointer">Bilgi Güvenliği</button>
            <button onClick={() => handleNav('iletisim')} className="text-[#78C042] hover:underline cursor-pointer font-semibold">İletişim & Destek</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
