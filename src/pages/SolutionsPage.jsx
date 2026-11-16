import React from 'react';
import { PhoneCall, Radio, Activity, Headset, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function SolutionsPage({ navigateTo }) {
  return (
    <div className="bg-white">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono font-bold text-[#0082A6] uppercase tracking-wider mb-2">
            TELEKOMÜNİKASYON ÇÖZÜMLERİ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Kurumsal İletişim Hizmetlerimiz
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            IP Sanal Santral, SIP Trunk, Monites yerli bulut izleme yazılımı ve CRM çağrı yönetimi çözümleriyle firmanızın haberleşmesini güçlendirin.
          </p>
        </div>
      </section>

      {/* Solutions Sections */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-24">
        
        {/* 1. IP Sanal Santral */}
        <div id="sanal-santral" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#eaf2fa] text-[#004A93] flex items-center justify-center font-bold">
              <PhoneCall className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#004A93] uppercase">BULUT IP SANTRAL</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              IP Sanal Santral (Bulut PBX)
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kurumunuzda pahalı fiziksel santral donanımları, kablolama masrafları ve bakım sözleşmelerine gerek kalmadan; internet üzerinden çalışan, modern ve esnek yeni nesil bulut santral sistemi.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> <strong>Sınırsız Dahili & Şube Entegrasyonu:</strong> Tüm şubelerinizi tek santralde ücretsiz konuşturun.</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> <strong>Gelişmiş Sesli Yanıt (IVR):</strong> Müşterilerinizi kurumsal karşılama anonslarıyla yönlendirin.</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> <strong>Mobil ve PC Softphone:</strong> Ofis dışında da masaüstü numaranızdan çağrı alın ve yapın.</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> <strong>Ses Kaydı ve Raporlama:</strong> Tüm görüşmeleri bulutta arşivleyin ve detaylı ölçümleyin.</li>
            </ul>
            <div className="pt-2">
              <button 
                onClick={() => navigateTo('iletisim')}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[#004A93] text-white hover:bg-[#003870] shadow-md transition-all"
              >
                <span>Sanal Santral Teklifi İsteyin</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">SANTRAL YÖNETİM MODÜLÜ</div>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-semibold">Gelen Çağrı Senaryosu (IVR)</span>
                <span className="text-emerald-600 font-bold font-mono">Mesai İçi / Dışı Aktif</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-semibold">Kuyruk Dağıtımı (ACD)</span>
                <span className="text-[#004A93] font-bold font-mono">En Az Konuşan Temsilci</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                <span className="text-slate-800 font-semibold">Görüşme Kaydı (CDR)</span>
                <span className="text-slate-900 font-bold font-mono">Otomatik MP3 Kayıt</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SIP Trunk */}
        <div id="sip-trunk" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-200">
          <div className="lg:col-span-6 order-2 lg:order-1 bg-gradient-to-tr from-slate-900 to-[#004A93] text-white rounded-2xl p-8 space-y-5">
            <div className="text-xs font-mono text-[#78C042] uppercase font-bold">TELEKOM ALTYAPISI</div>
            <h3 className="text-xl font-bold text-white">Yüksek Eşzamanlı SIP Trunk Omurgası</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dream Telecom dark fiber bağlı veri merkezlerinden doğrudan sağlanan SIP Trunk hizmeti ile gelen ve giden çağrı kapasitenizi dilediğiniz gibi ölçekleyin.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
              <div className="p-3.5 bg-white/10 rounded-xl">
                <span className="text-slate-400 block text-[10px]">TASARRUF</span>
                <strong className="text-emerald-400">%70'e Varan Avantaj</strong>
              </div>
              <div className="p-3.5 bg-white/10 rounded-xl">
                <span className="text-slate-400 block text-[10px]">SABİT ÜCRET</span>
                <strong className="text-white">₺0 Sabit Hat</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#e6f5f8] text-[#0082A6] flex items-center justify-center font-bold">
              <Radio className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#0082A6] uppercase">NUMARA TAŞIMA & TAHİSİS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              SIP Trunk & Kesintisiz Numara Taşıma
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mevcut 0212, 0216, 0312 veya diğer coğrafi numaralarınızı sıfır kesintiyle taşıyın. Ya da firmanıza prestij katacak yeni <strong>0850</strong> kurumsal numaraları dakikalar içinde tahsis edelim.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Tek numara üzerinden yüzlerce eşzamanlı çağrı kapasitesi</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Bakır kablo kopması riski olmadan fiber üzerinden güvenli SIP</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#78C042]" /> Kullanılmayan hatlar için ödenen sabit ücretlere son</li>
            </ul>
            <div className="pt-2">
              <button 
                onClick={() => navigateTo('iletisim')}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[#0082A6] text-white hover:bg-[#006e8d] shadow-md transition-all"
              >
                <span>Numara Taşıma Başvurusu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Monites İzleme */}
        <div id="monites" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-200">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-[#f2f9ed] text-[#5c9e29] flex items-center justify-center font-bold">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#5c9e29] uppercase">YERLİ BULUT MONITORING</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Monites Sistem İzleme & Kontrol Yazılımı
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
              "Türkiye'nin ilk bulut tabanlı yerli monitoring çözümüyle tanışın: Siz İsteyin, O İzlesin. Siz İsteyin, O Haber Versin."
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              IP üzerinden yönetilebilen marka-model bağımsız tüm cihazlarınızı tanımlayarak saniyeler içerisinde izlemeye başlayın ve tüm altyapınıza tek bir arayüzden hakim olun.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">7/24 Limitsiz ve Lisanssız</strong>
                <span>Hiçbir lisans engeline takılmadan dilediğiniz kadar cihaz ve servis kontrolü ekleyin.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Operasyonel Giderleri %15 Azaltın</strong>
                <span>Tüm sistemlerinizi yönetmek için koca bir ekip kurmanıza gerek kalmaz; Monites haber verir.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Servis Kesintilerini Sıfırlayın</strong>
                <span>Sorunun erkenden farkına vararak olası felaket durumlarını engelleyin.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Hizmet Kalitenizi %50 Artırın</strong>
                <span>Zamanınızı sorunlarla boğuşarak değil, işinizi büyüterek geçirin.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center space-y-4">
            <img src="/assets/monites.png" alt="Monites Monitoring" className="h-16 mx-auto object-contain" onError={(e) => { e.target.src = 'assets/monites.png'; }} />
            <h4 className="font-bold text-slate-900 text-base">Bulut Monites Kontrol Konsolu</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Amazon AWS bulut ortamında barındırılan altyapı ile IP Santral, Server, Switch ve Kamera sistemlerinizin anlık sağlık durumunu izleyin.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => navigateTo('iletisim')}
                className="cursor-pointer inline-flex items-center gap-2 text-xs font-bold text-[#5c9e29] hover:underline"
              >
                <span>Monites Demo Talebi Oluşturun →</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. CRM Çağrı Yönetimi */}
        <div id="crm" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 border-t border-slate-200">
          <div className="lg:col-span-6 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Headset className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase">ÇAĞRI MERKEZİ & VERİMLİLİK</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              CRM Çağrı Yönetimi Çözümleri
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Turizm, Hukuk, Sigorta, Sağlık, Pazarlama ve Online Ticaret sektörleri; gelen ve giden çağrılarını yönetmek, ölçümlemek, takip etmek ve en yüksek ticari verimi almak için Dream CRM kullanmaktadır.
            </p>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Bulut Dream CRM</strong>
                <span>Lokasyonunuzda herhangi bir donanıma ihtiyaç olmadan, sadece kulaklık ve bilgisayar ile internet olan her yerden çağrı yönetimi.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">En Az Bekleme Süresi</strong>
                <span>Esnek çağrı dağıtım senaryoları ve ses işleme uygulamaları ile müşteri bekleme sürelerini en aza indirir.</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Otomatik IVR Arama Sistemi</strong>
                <span>Satışını yapmak istediğiniz ürün ve hizmetlerinize ilişkin tanıtıcı ses kayıtlarını binlerce müşteriye aynı anda otomatik dinletin.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-8 space-y-4">
            <div className="text-xs font-mono text-indigo-400 font-bold uppercase">CRM ENTEGRASYON PANELİ</div>
            <h4 className="text-lg font-bold text-white">Müşteri Arayınca Geçmişi Anında Ekranda</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pop-up bildirimler ile arayan kişinin sipariş durumu, önceki temsilci notları ve bakiye bilgileri ekranınıza gelsin.
            </p>
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">API Desteği:</span>
              <span className="text-emerald-400 font-bold">REST / Webhook Entegre</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
