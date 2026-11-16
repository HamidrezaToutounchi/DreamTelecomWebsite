import React, { useState, useMemo } from 'react';
import { Search, Cpu, ChevronRight, PackageSearch, Filter, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ProductsPage({ viewProductDetail, activeCategory, setActiveCategory, navigateTo }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Tümü',
    'Birleşik İletişim',
    'Ağ Çözümleri',
    'Tümleşik Ağ ve PBX (GCC)',
    'Bulut ve Yönetim'
  ];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (activeCategory && activeCategory !== 'Tümü') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(p => 
        p.model.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q)) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="py-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf2fa] text-[#004A93] text-xs font-mono font-bold mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>GRANDSTREAM.COM.TR RESMİ DONANIM VE AĞ REPERTUVARI</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Grandstream Donanım Kataloğu
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Lisans ücreti gerektirmeyen UCM6300 IP santraller, kurumsal GRP serisi telefonlar, Wi-Fi 7 access pointler ve Layer 3 switchler.
              </p>
            </div>

            {/* Real-time Search */}
            <div className="w-full lg:w-80">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Model veya özellik ara (örn: UCM6300, Wi-Fi 7)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:border-[#004A93] focus:ring-2 focus:ring-[#004A93]/15 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#004A93] text-white shadow-sm' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'Tümü' ? `Tüm Ürünler (${PRODUCTS.length})` : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="flex items-center justify-between mb-6 text-xs text-slate-500 font-mono">
            <span>GÖSTERİLEN: <strong className="text-slate-900">{filteredProducts.length}</strong> MODEL</span>
            <span className="flex items-center gap-1 text-[#78C042] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Orijinal Ürün & Resmi Garanti
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
              <PackageSearch className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">Aramanıza Uygun Model Bulunamadı</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">Lütfen farklı bir model adı veya kategori seçerek tekrar deneyin.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('Tümü'); }}
                className="cursor-pointer px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200"
              >
                Tüm Kataloğu Sıfırla
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div 
                  key={p.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col justify-between hover:shadow-xl hover:border-[#004A93]/40 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold leading-normal">
                        {p.subcategory}
                      </span>
                      {p.badge && (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md leading-normal ${
                          p.featured ? 'bg-[#004A93] text-white shadow-xs' : 'bg-emerald-50 text-[#3b7517] border border-emerald-200'
                        }`}>
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* Product Photo */}
                    <div className="h-44 rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-4 group-hover:bg-slate-100/70 transition-colors">
                      <img 
                        src={p.imageUrl} 
                        alt={p.model}
                        className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
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
                    {/* Dedicated Full Page Detail (NO POPUP!) */}
                    <button 
                      onClick={() => viewProductDetail(p)}
                      className="cursor-pointer text-xs font-bold text-[#004A93] hover:text-[#0082A6] flex items-center gap-1 py-1"
                    >
                      <span>Ürünü İncele</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button 
                      onClick={() => navigateTo('iletisim')}
                      className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-[#004A93] hover:text-white transition-colors"
                    >
                      Fiyat İste
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#004A93] via-[#005da8] to-[#0082A6] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white">Grandstream Projeleriniz İçin Özel Teklif Alın</h3>
              <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-xl">
                Otel, hastane, çağrı merkezi veya çok şubeli kurumsal projelerinizde toplu alım ve anahtar teslim kurulum desteği.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-xl font-bold text-xs bg-white text-[#004A93] hover:bg-sky-50 shadow-md transition-all shrink-0"
            >
              Proje Teklifi İsteyin →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
