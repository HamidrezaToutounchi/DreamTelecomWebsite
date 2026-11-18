import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  UserCheck, 
  Database, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle, 
  Scale, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function GizlilikGuvenlikPage({ navigateTo }) {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#eaf2fa]/70 via-white to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <button onClick={() => navigateTo('home')} className="hover:text-[#004A93] cursor-pointer">Ana Sayfa</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => navigateTo('hakkimizda')} className="hover:text-[#004A93] cursor-pointer">Kurumsal</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#004A93] font-semibold">Gizlilik, Güvenlik ve KVKK</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004A93]/10 text-[#004A93] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-[#78C042]" />
              <span>6698 SAYILI KVKK & BİLGİ GÜVENLİĞİ POLİTİKASI</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Gizlilik ve Güvenlik Bildirimi & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004A93] via-[#0082A6] to-[#78C042]">
                KVKK Aydınlatma Metni
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>{COMPANY_INFO.legalName}</strong> olarak web sitemizi ziyaret eden kullanıcılarımızın, müşterilerimizin ve iş ortaklarımızın kişisel verilerinin korunması, gizliliği ve bilgi güvenliğinin sağlanması en temel kurumsal önceliklerimizdendir.
            </p>
          </div>

          {/* Quick Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#004A93]/10 text-[#004A93] flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#004A93]" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold mb-0.5">Veri Sorumlusu</strong>
                <span className="text-slate-500 leading-tight">Dream Telekomünikasyon Hizmetleri Ltd. Şti.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#78C042]/10 text-[#78C042] flex items-center justify-center font-bold shrink-0">
                <Scale className="w-5 h-5 text-[#78C042]" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold mb-0.5">Yasal Mevzuat</strong>
                <span className="text-slate-500 leading-tight">6698 Sayılı KVKK, 5846 FSEK ve 5651 Sayılı Kanun</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0082A6]/10 text-[#0082A6] flex items-center justify-center font-bold shrink-0">
                <Lock className="w-5 h-5 text-[#0082A6]" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold mb-0.5">Güvenlik Standardı</strong>
                <span className="text-slate-500 leading-tight">Tier III Datacenter, SSL/TLS ve Manyetik Loglar</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-xs">
                <strong className="block text-slate-900 font-bold mb-0.5">KVKK Başvuru Kanalı</strong>
                <a href={`mailto:${COMPANY_INFO.departments[0].email}`} className="text-[#004A93] hover:underline font-mono">
                  {COMPANY_INFO.departments[0].email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs">
                <h3 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-[11px] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#004A93]" />
                  <span>Metin İçeriği ve Başlıklar</span>
                </h3>
                <nav className="space-y-1.5 font-medium text-slate-600">
                  <a href="#genel-bilgilendirme" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    1. Web Sitesi ve Bilgi Güvenliği Bildirimi
                  </a>
                  <a href="#aydinlatma-metni" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    2. KVKK Aydınlatma Metni & Veri Sorumlusu
                  </a>
                  <a href="#islenen-veriler" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    3. İşlenen Kişisel Veri Kategorileri
                  </a>
                  <a href="#isleme-amaclari" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    4. Kişisel Verilerin İşlenme Amaçları
                  </a>
                  <a href="#veri-aktarimi" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    5. Kişisel Verilerin Aktarılması
                  </a>
                  <a href="#toplama-yontemi" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    6. Toplanma Yöntemi ve Hukuki Sebebi
                  </a>
                  <a href="#ilgili-kisi-haklari" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    7. KVKK Madde 11 Uyarınca Haklarınız
                  </a>
                  <a href="#basvuru-iletisim" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    8. Başvuru Usulü ve İletişim Kanalları
                  </a>
                  <a href="#diger-hukumler" className="block py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-[#004A93] transition-colors">
                    9. Fikri Mülkiyet ve Yasal Hükümler
                  </a>
                </nav>
              </div>

              {/* Direct Help / Contact Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#004A93] to-[#041a40] text-white text-xs space-y-4">
                <div className="flex items-center gap-2 text-[#78C042] font-bold text-xs uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>Sorularınız mı var?</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Kişisel verilerinizin işlenmesi, güncellenmesi veya silinmesi konusundaki her türlü talebinizi veri koruma ekibimize doğrudan iletebilirsiniz.
                </p>
                <div className="space-y-2 pt-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#78C042]" />
                    <a href={COMPANY_INFO.phoneTel} className="text-white hover:underline font-bold">
                      {COMPANY_INFO.formattedPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#0082A6]" />
                    <a href={`mailto:${COMPANY_INFO.departments[0].email}`} className="text-white hover:underline">
                      {COMPANY_INFO.departments[0].email}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Legal Text Body */}
            <div className="lg:col-span-8 space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
              
              {/* Section 1 */}
              <div id="genel-bilgilendirme" className="space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Web Sitesi ve Bilgi Güvenliği Bildirimi
                  </h2>
                </div>

                <p>
                  <strong>http://www.dreamtelecom.com.tr</strong> web sitesi <strong>Dream Telekomünikasyon Hizmetleri Ltd. Şti.</strong>’ne aittir ve bu adresi ziyaret eden siz ziyaretçilerimizin/müşterilerimizin bilgi güvenliği, bizim için oldukça büyük önem taşımaktadır. İşbu Gizlilik Politikası ve Aydınlatma Metni, bilgi güvenliği ile ilgili sizi bilgilendirmek üzere hazırlanmıştır.
                </p>

                <p>
                  Kişisel bilgilerinizi paylaşmaksızın web sitemizi dilediğiniz kadar ziyaret edebilirsiniz. Ancak, web sitemizi ziyaretiniz sırasında isminiz ve soyisminiz, posta adresiniz, doğum tarihiniz, cinsiyetiniz, telefon ve faks numaranız, elektronik posta adresiniz vb. kişisel bilgileriniz, sadece sizin bilginiz dahilinde ve sizin tarafınızdan web sitemize verildiğinde kaydedilir. Bu, faaliyetlerin yürütülmesi için gereklidir.
                </p>

                <p>
                  Sizin bilginiz dahilinde bizim tarafımızdan kayıt altına alınan kişisel bilgileriniz yine bizim tarafımızdan en yüksek güvenlik standartlarıyla korunmaktadır. Ancak, web sitemizde ve/veya web sitemiz bünyesinde yer alan Kullanıcı Panelleri menüsündeki sözleşme bilgileri ve şifreli panellere girişte kullandığınız bilgileri kimse ile paylaşmamanızı önemle tavsiye ederiz.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border-l-4 border-[#004A93] text-xs sm:text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Dış Bağlantılar (Linkler):</strong> Web sitemizde, işletmesi Dream Telekomünikasyon Hizmetleri Ltd. Şti. tarafından yapılmayan diğer web sitelerine bağlantılar verebiliriz. Bu web sitelerinden herhangi birini ziyaret ederseniz, orada artık o sitenin gizlilik ve diğer politikaları geçerli olacaktır. Diğer şirketlerin politika ve uygulamalarından sorumlu olmadığımız hususunu burada belirtmek isteriz.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="aydinlatma-metni" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    DREAM TELEKOM GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ
                  </h2>
                </div>

                <div className="p-4 rounded-2xl bg-[#eaf2fa] text-[#004A93] text-xs sm:text-sm font-semibold flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-[#78C042]" />
                  <span>Kişisel Verilerinizin Korunmasına İlişkin Genel Bilgilendirme</span>
                </div>

                <p>
                  İşbu Gizlilik Politikası ve Aydınlatma Metni, kişisel verilerinizin, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu</strong> (Aşağıda “Kanun” olarak anılacaktır.) ve ilgili mevzuata uygun olarak, veri sorumlusu <strong>Dream Telekomünikasyon Hizmetleri Ltd. Şti.</strong> (Aşağıda “Dream Telekom” olarak anılacaktır.) nezdinde işlenmesine ilişkin esasları belirlemektedir.
                </p>

                <p>
                  Dream Telekom bünyesindeki kişisel veriler, yine Dream Telekom’un koruması altındadır. Dream Telekom, Kanun çerçevesinde kişisel verilerin güvenli şekilde muhafazasını ve hukuka uygun olarak işlenmesini sağlamak için mevcut teknolojik ve altyapısal imkanlarını kullanarak, gerekli idari ve teknik tedbirleri almaktadır.
                </p>

                <p>
                  Kişisel verileriniz, faaliyetlerimizi yürütmek amacıyla Dream Telekom tarafından çeşitli yöntemlerle, yazılı ve elektronik ortamda, sadece sizin bilginiz kapsamında toplanmaktadır. Kişisel verileriniz mevcut teknolojinin gerekleri uyarınca, Kanun tarafından öngörülen temel ilkelere, veri işleme şartlarına ve istisnalarına uygun olarak işbu Aydınlatma Metninde belirtilen amaçlarla veri sorumlusu Dream Telekom tarafından Kanuna ve ilgili mevzuata uygun olarak usulünce işlenebilmekte ve aktarılabilmektedir.
                </p>
              </div>

              {/* Section 3 */}
              <div id="islenen-veriler" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    İşlenen Kişisel Veri Kategorileri
                  </h2>
                </div>

                <p>
                  Kişisel veriler, kimliğinizi belirleyen ya da belirlenebilir kılan bilgiler anlamına gelmektedir. Şirketimiz tarafından işlenebilecek kişisel verileriniz, bunlarla sınırlı olmamak üzere, aşağıda kategoriler halinde belirtilmiştir:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#004A93]">
                      Kimlik ve İletişim Bilgileri
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      TCKN, ad, soyad, doğum yeri ve tarihi, medeni durum, cinsiyet, kimlik belgesi örneği ve bunlar gibi kimlik bilgileriniz ile kimliğinizi belirli kılabilecek sair bilgiler; adres, telefon/faks numarası, e-posta adresi vb. gibi iletişim bilgileriniz.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#004A93]">
                      Abonelik & Hizmet Bilgileri
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Müşteri numarası, abonelik sözleşmesi numarası, abonelik türü ve durumu, tarife ve paket bilgileri, katma değerli servis abonelikleri vb. gibi abonelik ile ürün ve hizmetlerin kullanımı ile ilgili bilgileriniz; fatura, borç ve ödemelere ilişkin bilgileriniz.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#0082A6]">
                      Şebeke, Trafik ve Konum Bilgileri
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mesajların ve aramaların tarihi, saati ve arama süresi ile internet ortamında yapılan her türlü erişime ilişkin olarak sisteme bağlantı ile sistemden çıkış tarih ve saat bilgileri, kaynak ve hedef nokta bilgileri vb. gibi trafik verileriniz; cihaz modeli ve teknik veriler.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#0082A6]">
                      Satış Kanalları & Ses Kayıtları
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Satış süreçlerinde ilettiğiniz bilgi ve belgeler; e-posta, çağrı merkezi standartları gereği kalite ve güvenlik amacıyla tutulan sesli görüşme kayıtlarınız; satış kanallarındaki talep ve teklif işlem detaylarınız.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#78C042]">
                      Ürün & Hizmet Kullanım ve Çerez Verileri
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ürün ve hizmetlerin kullanılmasına ilişkin tercihler, alışkanlıklar ve web sitemizdeki davranış bilgileri, oturum ve performans analitiği sağlayan çerez (cookie) verileri.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <strong className="text-slate-900 font-bold text-xs uppercase tracking-wider block text-[#78C042]">
                      Ödeme, Banka ve Risk Bilgileri
                    </strong>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Banka hesap ve IBAN bilgileri, geçmiş dönem ödeme performansları, limit/risk, teminat ve sözleşmelerde yer alan mali teyit bilgileri.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div id="isleme-amaclari" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Kişisel Verilerin İşlenme Amaçları
                  </h2>
                </div>

                <p>Kişisel verileriniz Kanuna ve ilgili yasal mevzuata uygun olarak şu amaçlarla işlenmektedir:</p>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>Ürün ve hizmetlerin sunulması, ücretlendirilmesi ve faturalandırılması; sipariş edilen ve kullanılan telekomünikasyon servislerinin ifası ve takibi.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>Ürün ve hizmetlerin tanıtım ve pazarlaması, kampanya, indirim, koşul ve paket değişikliklerinden haberdar edilmeniz.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>Kurumsal teklif sunulması, ihtiyacınıza özel projelendirme yapılması ve teklif taleplerinizin doğrudan karşılanması.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>Müşteri memnuniyetinin ölçülmesi, çağrı merkezi hizmet kalitesinin artırılması ve soru/şikâyetlerin derhal çözüme kavuşturulması.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>İlgili mevzuat gereği saklanması zorunlu olan trafik ve arama kayıtlarının güvenle muhafazası, yedeklenmesi ve siber güvenliğin temini.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#78C042] shrink-0 mt-0.5" />
                    <span>BTK (Bilgi Teknolojileri ve İletişim Kurumu) ve adli/idari merciler nezdindeki yasal bildirim ve yükümlülüklerin eksiksiz yerine getirilmesi.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div id="veri-aktarimi" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Kişisel Verilerin Aktarılması
                  </h2>
                </div>

                <p>
                  Dream Telekom, kişisel verilerinizi Kanun ve sair mevzuat hükümleri kapsamında, yalnızca meşru amaçlarla sınırlı olmak üzere yurt içi ve yurt dışındaki şu kişi ve kuruluşlara aktarabilir:
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                  <p>• Satın almak istediğiniz veya kullandığınız santral ve ağ donanımlarının temini ve sevkiyatı için anlaşmalı kurye, kargo ve lojistik şirketlerine,</p>
                  <p>• Ürün ve hizmetlerin sunulması için iş birliği yapılan yetkili tedarikçiler, bankalar ve finans kuruluşlarına,</p>
                  <p>• Acil durumlarda ve acil yardım çağrısı halinde adresinizi ve lokasyonunuzu belirleyecek yetkili mercilere,</p>
                  <p>• Hukuki danışmanlar, bağımsız denetçiler ve yetkili temsilcilerinize,</p>
                  <p>• Düzenleyici ve denetleyici kamu kurumları (BTK, mahkemeler, savcılıklar ve icra daireleri) ile kanunen bilgi talep etmeye yetkili adli/idari kurumlara.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="toplama-yontemi" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Veri Toplamanın Yöntemi ve Hukuki Sebebi
                  </h2>
                </div>

                <p>
                  Kişisel verileriniz; abonelik sözleşmesi, doğrudan kurumsal teklif formları, çağrı merkezi, web sitemiz, kısa mesaj (SMS), elektronik posta, sesli yanıt sistemleri ve her türlü yazılı, sözlü ve dijital ortam vasıtasıyla toplanmaktadır.
                </p>
                <p>
                  Bu veriler, Kanunun 5. ve 6. maddelerinde belirtilen sözleşmenin kurulması ve ifası, veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi, kanunlarda açıkça öngörülmesi ve ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatler hukuki sebeplerine dayalı olarak işlenmektedir.
                </p>
              </div>

              {/* Section 7 */}
              <div id="ilgili-kisi-haklari" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    KVKK'nın 11. Maddesi Uyarınca Haklarınız
                  </h2>
                </div>

                <p>
                  6698 Sayılı Kanun’un 11. maddesi uyarınca veri sahibi olarak Dream Telekom’a başvurarak aşağıdaki haklarınızı her zaman kullanabilirsiniz:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>İşlenmişse buna ilişkin ayrıntılı bilgi talep etme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Kanun’un 7. maddesi uyarınca silinmesini veya yok edilmesini talep etme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Düzeltme, silme işlemlerinin verilerin aktarıldığı 3. kişilere bildirilmesini isteme,</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#004A93] shrink-0 mt-0.5" />
                    <span>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</span>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div id="basvuru-iletisim" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Başvuru Usulü, İletişim Kanalları ve Ticari İleti Tercihleri
                  </h2>
                </div>

                <p>
                  Kanunun uygulanmasıyla ilgili taleplerinizi ve kişisel verilerinizle ilgili sorularınızı yazılı olarak noter, iadeli taahhütlü posta ya da şirket sisteminde kayıtlı bulunan e-posta adresiniz üzerinden tarafımıza iletebilirsiniz:
                </p>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#004A93] shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Fiziki Başvuru Adresi:</strong>
                      <span className="text-slate-600">{COMPANY_INFO.legalName} - {COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#0082A6] shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900 block font-bold">E-Posta Başvuru Kanalı:</strong>
                      <a href={`mailto:${COMPANY_INFO.departments[0].email}`} className="text-[#004A93] font-mono font-bold hover:underline">
                        {COMPANY_INFO.departments[0].email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#78C042] shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900 block font-bold">Santral / Müşteri Hizmetleri:</strong>
                      <a href={COMPANY_INFO.phoneTel} className="text-slate-900 font-mono font-bold hover:underline">
                        {COMPANY_INFO.formattedPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                  <strong className="block font-bold">Ticari Elektronik İleti Tercihleri (SMS ve E-Posta Bildirimleri):</strong>
                  <p>
                    Dream Telekom’un sunduğu hizmetlere ilişkin pazarlama, kampanya ve tanıtım amacıyla göndereceği SMS veya e-postaları almak istemiyorsanız; SMS’lerde yer alan ret kodu imkanını kullanarak ya da e-postalardaki üyelikten ayrılma bağlantısı ile tercihlerinizi dilediğiniz an değiştirebilirsiniz.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="diger-hukumler" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#004A93]/10 text-[#004A93] font-bold flex items-center justify-center text-sm">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Fikri Mülkiyet (5846 FSEK) ve Yasal Hükümler
                  </h2>
                </div>

                <p>
                  Ayrıca, 5846 Sayılı <strong>Fikir ve Sanat Eserleri Kanunu</strong> ve 5651 Sayılı <strong>İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun</strong> uyarınca:
                </p>

                <p>
                  Ziyaretçiler ve müşteriler, web sitesi üzerinde Dream Telekom’a veya üçüncü bir kişi veya kuruluşa ait herhangi bir yazı, bilgi, tasarım, logo, ürün görseli ve sair materyallerin Fikir ve Sanat Eserleri Kanunu kapsamında yasal koruma altında olduğunu; bunların Dream Telekom’un yazılı izni olmadan kopyalanamayacağını, değiştirilemeyeceğini, çoğaltılamayacağını ve yayınlanamayacağını kabul ve beyan ederler.
                </p>

                <p>
                  İşbu Gizlilik Politikası ve Aydınlatma Metninden doğabilecek her türlü ihtilaf ve uyuşmazlıklarda <strong>İstanbul Mahkemeleri ve İcra Daireleri</strong> yetkili olup; Dream Telekom’a ait elektronik ortam ve bilgisayar kayıtları 6100 Sayılı Hukuk Muhakemeleri Kanunu (HMK) Madde 193 uyarınca kesin delil sayılacaktır.
                </p>

                <div className="pt-4 text-xs text-slate-500 border-t border-slate-200 flex items-center justify-between">
                  <span>Son Güncelleme: Ocak 2026</span>
                  <button 
                    onClick={() => window.print()} 
                    className="text-[#004A93] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Sayfayı Yazdır / PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
