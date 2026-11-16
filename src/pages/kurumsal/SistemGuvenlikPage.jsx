import React from 'react';
import { ShieldCheck, Server, Lock, Activity, Cpu, CheckCircle2, AlertTriangle, KeyRound } from 'lucide-react';

export default function SistemGuvenlikPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-mono font-bold text-[#004A93] uppercase tracking-wider mb-2">
            KESİNTİSİZ ALTYAPI & BİLGİ GÜVENLİĞİ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Sistem ve Veri Güvenliği
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Yüksek IT güvenliğinin gerektirdiği maliyet ve işgücünden tasarruf edin. Dream Telekom sistemlerinde ses ve veri omurganız çoklu veri merkezlerinde tam yedekli korunur.
          </p>
        </div>
      </section>

      {/* Main Pillars */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-16">
            
            {/* Datacenter Standards */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold mb-6">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Tier III Standartlarında Datacenter
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Dream Telekom, yüksek standartlara sahip Datacenter merkezlerinde müşterilerine ve kendi sistem altyapısına 7/24 hizmet vermektedir.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Dream Datacenter altyapısı, genişleyen <strong>dark fiber omurgası</strong> ile birden fazla lokasyona çapraz bağlı durumda aktif-aktif yedekliliğe sahiptir.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>Çoklu operatör bağımsız Dark Fiber ring hatları</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>2N Kesintisiz Güç Kaynağı (UPS) ve Jeneratör yedekliği</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>Hassas iklimlendirme ve FM200 gazlı yangın söndürme</span>
                </div>
              </div>
            </div>

            {/* Physical & Logical Security */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center font-bold mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Fiziksel Tehdit Önleme & Manyetik Kart Girişi
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Datacenter personeli tarafından yazılı izni onaylanmayan ve randevu ile önceden bildirilmemiş hiçbir ziyaretçi, yetkisiz personel veya iş ortağı girişine güvenlik standartları gereği izin verilmez.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Tüm kabinet ve sunucu odası girişlerinde manyetik güvenlik kartları kullanılmakta, her giriş-çıkış anlık loglanarak biyometrik ve kamera kayıtlarıyla eşleştirilmektedir.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>Biyometrik doğrulama ve manyetik kartlı denetim logları</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>7/24 Kapalı devre HD CCTV kamera kaydı ve fiziksel güvenlik</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#78C042]" />
                  <span>Yetkisiz erişim denemelerinde anında sesli ve dijital alarm</span>
                </div>
              </div>
            </div>

          </div>

          {/* Network and Disaster Recovery */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#004A93] to-[#041a40] text-white space-y-8">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold text-[#78C042] uppercase tracking-wider">
                FELAKET SENARYOLARINA KARŞI HAZIRLIK
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-4">
                Çoklu Coğrafi Yedeklilik & Sıfır Veri Kaybı
              </h2>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Dream Telekom sistemlerinde, kurum verileri ve ses kayıtları farklı kriz (deprem, enerji kesintisi, hat kopması) senaryolarına karşı daima güvende tutulması amacıyla çoklu yedekli olarak farklı coğrafi veri merkezlerinde eş zamanlı barındırılır.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-[#78C042]">TLS & SRTP</div>
                <div className="text-xs text-blue-200">Uçtan uca şifreli ses sinyalleşmesi ile çağrı gizliliği tam koruma altında.</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-[#78C042]">Failover</div>
                <div className="text-xs text-blue-200">Bir omurga hattında kesinti olduğunda 0.1 saniye içinde yedek hatta otomatik geçiş.</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-[#78C042]">GDPR & KVKK</div>
                <div className="text-xs text-blue-200">Tüm ses kayıtları ve veriler Türkiye sınırları içerisindeki yerli sunucularda saklanır.</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
