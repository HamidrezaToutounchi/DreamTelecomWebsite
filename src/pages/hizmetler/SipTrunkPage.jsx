import React from 'react';
import { Network, Zap, Shield, Phone, TrendingDown, ArrowRight, CheckCircle2, Server } from 'lucide-react';

export default function SipTrunkPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0082A6]/10 text-[#0082A6] text-xs font-semibold mb-4">
            <Network className="w-3.5 h-3.5 text-[#0082A6]" />
            <span>KURUMSAL SES BAĞLANTISI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            SIP Trunk & Numara Taşıma
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mevcut kurumsal telefon numaralarınızı değiştirmeden taşıyın; sabit hat ücretlerinden kurtularak iletişim maliyetlerinizde %70'e varan tasarruf sağlayın.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold mb-6">
                <TrendingDown className="w-6 h-6 text-[#78C042]" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">%70'e Varan Tasarruf</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Geleneksel bakır hatların aylık sabit hat kiraları, taahhüt cezaları ve yüksek dakika ücretlerinden kurtulun. Yalnızca konuştuğunuz kadar ödeyin.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center font-bold mb-6">
                <Zap className="w-6 h-6 text-[#0082A6]" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Sınırsız Eşzamanlı Kanal</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fiziksel kablo çekmeye gerek kalmadan tek bir SIP trunk üzerinden 10, 50, 100 veya 1000 eşzamanlı ses kanalı anında aktive edilebilir.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#004A93]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold mb-6">
                <Shield className="w-6 h-6 text-[#004A93]" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">TLS / SRTP Şifreleme</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tüm ses sinyalleşmesi ve medya akışı endüstri standardı TLS ve SRTP şifreleme protokolleriyle korunur; çağrı dinlemelerine karşı tam güvenlik sağlanır.
              </p>
            </div>
          </div>

          {/* Detailed Features */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Grandstream IP Santralinizle Kusursuz SIP Trunk Uyumu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#78C042] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Grandstream UCM Uyumlu</strong>
                    UCM6301, UCM6302, UCM6304 ve UCM6308 serisi santrallerinizle doğrudan SIP trunk register veya IP bazlı (peering) entegrasyon.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#78C042] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">0850 ve Coğrafi Numara Tahsisi</strong>
                    Kurumsal kimliğinizi yansıtan prestijli 0850 numaralar veya 0212, 0216, 0312 vb. tüm Türkiye il alan kodlu hat tahsisi.
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#78C042] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Kesintisiz Numara Taşıma</strong>
                    Mevcut Türk Telekom veya diğer operatör numaralarınız hiçbir ses kesintisi yaşanmadan Dream Telecom güvencesiyle taşınır.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#78C042] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Yedekli POP Noktaları</strong>
                    İstanbul içi çift datacenter üzerinden çift IP omurgası sayesinde internet kesintilerinde bile çağrılar GSM veya alternatif hatta otomatik yönlendirilir.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigateTo('iletisim')}
              className="cursor-pointer px-8 py-3.5 rounded-full font-bold text-sm bg-[#004A93] hover:bg-[#003870] text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              SIP Trunk Teklifi & Numara Taşıma Başvurusu →
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
