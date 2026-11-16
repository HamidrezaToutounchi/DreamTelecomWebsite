import React from 'react';
import { COMPANY_INFO } from '../data/company';

export default function PartnerMarquee() {
  const partners = COMPANY_INFO.partners;
  // Double list for smooth seamless loop
  const displayList = [...partners, ...partners];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-5 text-center">
        <p className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
          ENTEGRE TEKNOLOJİ, HARDWARE VE TELEKOMÜNİKASYON ORTAKLARIMIZ
        </p>
      </div>

      <div 
        className="relative w-full overflow-hidden" 
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 py-2">
          {displayList.map((partner, idx) => (
            <div 
              key={idx}
              className="h-20 min-w-[160px] sm:min-w-[190px] px-6 py-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#004A93]/40 hover:shadow-md transition-all flex flex-col items-center justify-center gap-1.5 group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-9 sm:max-h-10 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<span class="font-bold text-slate-800 text-sm">${partner.name}</span>`;
                }}
              />
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#004A93] transition-colors whitespace-nowrap">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
