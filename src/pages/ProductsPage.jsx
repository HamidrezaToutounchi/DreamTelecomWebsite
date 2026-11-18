import React, { useState, useMemo, useEffect } from 'react';
import { Search, Cpu, ChevronRight, PackageSearch, Filter, ShieldCheck, Video, Phone, Server, Layers, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const BRAND_TABS = [
  { id: 'Tümü', label: 'Tüm Markalar', count: PRODUCTS.length, badgeClass: 'bg-slate-100 text-slate-800' },
  { id: 'Grandstream', label: 'Grandstream', count: PRODUCTS.filter(p => p.brand === 'Grandstream').length, badgeClass: 'bg-sky-50 text-[#004A93] border-sky-200' },
  { id: 'Jabra', label: 'Jabra', count: PRODUCTS.filter(p => p.brand === 'Jabra').length, badgeClass: 'bg-amber-50 text-amber-800 border-amber-200' },
  { id: 'Fanvil', label: 'Fanvil', count: PRODUCTS.filter(p => p.brand === 'Fanvil').length, badgeClass: 'bg-rose-50 text-rose-800 border-rose-200' }
];

export default function ProductsPage({ viewProductDetail, activeCategory, setActiveCategory, navigateTo }) {
  const [selectedBrand, setSelectedBrand] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  // Allow global navigation from Header mega-menu
  useEffect(() => {
    window.setProductBrandFilter = (brand) => {
      setSelectedBrand(brand || 'Tümü');
    };
    return () => {
      delete window.setProductBrandFilter;
    };
  }, []);

  // Compute available categories based on selected brand
  const availableCategories = useMemo(() => {
    const list = selectedBrand === 'Tümü' ? PRODUCTS : PRODUCTS.filter(p => p.brand === selectedBrand);
    const set = new Set();
    list.forEach(p => {
      if (p.category) set.add(p.category);
    });
    return ['Tümü', ...Array.from(set)];
  }, [selectedBrand]);

  // Filter products by Brand, Category, Search
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (selectedBrand !== 'Tümü') {
      list = list.filter(p => p.brand === selectedBrand);
    }

    if (activeCategory && activeCategory !== 'Tümü') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.model.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q)) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        (p.shortDescription && p.shortDescription.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedBrand, activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header Banner with Rich Corporate Colors */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-[#eaf2fa]/70 via-slate-50/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004A93]/10 text-[#004A93] text-xs font-mono font-bold mb-3 border border-[#004A93]/20">
                <Layers className="w-3.5 h-3.5 text-[#004A93]" />
                <span>KURUMSAL DONANIM & BİRLEŞİK İLETİŞİM PORTFÖYÜ</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                Ürün & Donanım Kataloğu
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Grandstream lisanssız IP santralleri, Jabra akıllı video bar ve ANC kulaklıkları, Fanvil kurumsal SIP telefon ve interkom sistemleri.
              </p>
            </div>

            {/* Real-time Search */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Model, marka veya özellik ara (örn: UCM6300, PanaCast, V67)..."
                  className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-2 focus:ring-[#004A93]/15 shadow-sm transition-all"
                />
              </div>
            </div>
          </div>

          {/* 1. Brand Selector Tabs (Color-coded for Corporate Recognition) */}
          <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200/80 mb-4">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>MARKA:</span>
            </span>

            {BRAND_TABS.map((b) => {
              const isActive = selectedBrand === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => {
                    setSelectedBrand(b.id);
                    setActiveCategory('Tümü');
                  }}
                  className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    isActive 
                      ? 'bg-[#004A93] text-white border-[#004A93] shadow-md transform -translate-y-0.5' 
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <span>{b.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {b.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2. Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">KATEGORİ:</span>
            {availableCategories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#78C042] text-slate-950 font-bold shadow-xs' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/90'
                }`}
              >
                {cat === 'Tümü' ? 'Tüm Kategoriler' : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center justify-between mb-6 text-xs text-slate-500 font-mono">
            <span>
              GÖSTERİLEN: <strong className="text-slate-900">{filteredProducts.length}</strong> MODEL 
              {selectedBrand !== 'Tümü' && <span className="text-[#004A93] font-bold ml-1.5">({selectedBrand})</span>}
            </span>
            <span className="flex items-center gap-1.5 text-[#78C042] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Yetkili Satıcı & 2 Yıl Resmi Garanti</span>
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <PackageSearch className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">Aramanıza Uygun Ürün Bulunamadı</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">Lütfen farklı bir marka veya arama kelimesi seçerek tekrar deneyin.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedBrand('Tümü'); setActiveCategory('Tümü'); }}
                className="cursor-pointer px-5 py-2.5 rounded-xl bg-[#004A93] text-white text-xs font-bold hover:bg-[#003870] shadow-sm"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((p) => {
                // Color-coded badge for brand identification
                let brandBadgeStyle = 'bg-sky-50 text-[#004A93] border-sky-200';
                if (p.brand === 'Jabra') {
                  brandBadgeStyle = 'bg-amber-50 text-amber-800 border-amber-200';
                } else if (p.brand === 'Fanvil') {
                  brandBadgeStyle = 'bg-rose-50 text-rose-800 border-rose-200';
                }

                return (
                  <div 
                    key={p.id}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 flex flex-col justify-between hover:shadow-xl hover:border-[#004A93]/40 transition-all duration-300 group"
                  >
                    <div>
                      {/* Top Badges (Brand + Category/Special) */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border font-mono ${brandBadgeStyle}`}>
                          {p.brand}
                        </span>

                        {p.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 truncate max-w-[150px]">
                            {p.badge}
                          </span>
                        )}
                      </div>

                      {/* Product Photo Container */}
                      <div 
                        onClick={() => viewProductDetail(p)}
                        className="h-44 rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-4 group-hover:bg-slate-100/70 transition-colors cursor-pointer"
                      >
                        <img 
                          src={p.imageUrl} 
                          alt={p.model}
                          className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { 
                            e.target.src = p.brand === 'Jabra' 
                              ? 'https://assets2.jabra.com/9/e/7/0/9e70ea511c911cf658d575dfa8e97f5ef6e58b1a_50_Black_Front_180_Screen_01.png'
                              : 'https://www.grandstream.com/hubfs/Email%20Assets%20Q4%202020/UCM6300_series.png'; 
                          }}
                        />
                      </div>

                      {/* Subcategory */}
                      <span className="text-[11px] font-mono text-slate-400 block mb-1">
                        {p.category} • {p.subcategory}
                      </span>

                      {/* Model Title - Clickable full-page navigation (NO POPUP!) */}
                      <h3 
                        onClick={() => viewProductDetail(p)}
                        className="font-bold text-sm text-slate-900 group-hover:text-[#004A93] transition-colors mb-1 line-clamp-1 cursor-pointer" 
                        title={p.model}
                      >
                        {p.model}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {p.shortDescription}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button 
                        onClick={() => viewProductDetail(p)}
                        className="cursor-pointer text-xs font-bold text-[#004A93] hover:text-[#0082A6] flex items-center gap-1 py-1"
                      >
                        <span>Detaylı İncele</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button 
                        onClick={() => {
                          if (window.setPreselectedService) {
                            window.setPreselectedService(`${p.brand} ${p.model}`);
                          }
                          navigateTo('iletisim');
                        }}
                        className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-[#004A93] hover:text-white transition-colors"
                      >
                        Fiyat İste
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#004A93] via-[#005da8] to-[#0082A6] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-sky-200 mb-1">
                KURUMSAL PROJE & TOPLU TEDARİK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Grandstream, Jabra ve Fanvil Donanımlarında Özel İskonto
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-xl leading-relaxed">
                Otel, hastane, çağrı merkezi veya çok şubeli şirket projelerinizde yerinde keşif, demo cihaz ve toptan alım fiyatı için bize ulaşın.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer whitespace-nowrap px-8 py-4 rounded-xl font-bold text-xs bg-white text-[#004A93] hover:bg-sky-50 shadow-md transition-all shrink-0"
            >
              Kurumsal Proje Teklifi Al →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
