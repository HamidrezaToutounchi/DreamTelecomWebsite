// Dream Telecom Multi-Brand Enterprise Product Catalog
// Brands: Grandstream (33) + Jabra (20) + Fanvil (20)
// Total: 73 Enterprise Products

export const PRODUCTS = [
  {
    "id": "ucm6300-series",
    "model": "UCM6300 Serisi (UCM6301 / 6302 / 6304 / 6308)",
    "category": "Birleşik İletişim",
    "subcategory": "IP PBX Santraller",
    "badge": "En Çok Tercih Edilen Santral",
    "featured": true,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "3x Gigabit PoE+",
    "sipGroup": "500 - 3000 Kullanıcı",
    "useCases": [
      "Orta ve büyük ölçekli işletmeler için sıfır lisans maliyetli merkezi ses/video iletişimi",
      "UCM RemoteConnect ve Wave uygulaması ile hibrit / uzaktan çalışma altyapısı",
      "Çok şubeli kurumlar, oteller, hastaneler ve kamu binaları"
    ],
    "shortDescription": "500 ila 3000 kullanıcı ve 450 eşzamanlı çağrı kapasiteli, lisans ücreti gerektirmeyen kurumsal IP PBX santral ailesi.",
    "specs": {
      "Kullanıcı Kapasitesi": "500 - 3000 SIP Kullanıcısı",
      "Eşzamanlı Çağrı": "75 - 450 Çağrı",
      "Analog Portlar": "1/2/4/8 FXS ve 1/2/4/8 FXO",
      "Ağ Arayüzü": "3x Gigabit RJ45 (PoE+ ve NAT Router)",
      "Uzaktan Yönetim": "GDMS ve UCM RemoteConnect"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Email%20Assets%20Q4%202020/UCM6300_series.png",
    "officialUrl": "https://www.grandstream.com/products/ip-pbxs/ucm-series-ip-pbxs/product/ucm6300-series-ip-pbx",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/ucm6300_series/Datasheet_UCM6300_Series_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "clouducm",
    "model": "CloudUCM",
    "category": "Bulut ve Yönetim",
    "subcategory": "Bulut IP PBX",
    "badge": "AWS Altyapılı Bulut",
    "featured": false,
    "poe": false,
    "wifiStandard": "Yok",
    "portGroup": "Bulut Tabanlı",
    "sipGroup": "500 - 3000 Kullanıcı",
    "useCases": [
      "Donanım yatırımı yapmadan bulut üzerinde kurumsal santral kurulumu",
      "Mobil ve masaüstü Wave uygulamalarıyla her yerden ses, görüntü ve sohbet",
      "Dağıtık saha ekipleri ve çok lokasyonlu şirketler"
    ],
    "shortDescription": "AWS altyapılı ölçeklenebilir bulut santral; ses, görüntü ve kurumsal sohbet işbirliğini GDMS üzerinden merkezi yönetimle sunar.",
    "specs": {
      "Altyapı": "AWS Güvenceli Yüksek Erişilebilirlikli Bulut",
      "İletişim Özellikleri": "Sesli/Görüntülü Çağrı, Konferans, Kurumsal Sohbet",
      "Uygulama Desteği": "Wave Desktop, Web ve Mobil (iOS/Android)",
      "Merkezi Yönetim": "GDMS Üzerinden Sıfır Dokunuşla Kurulum",
      "Güvenlik": "Uçtan Uca TLS/SRTP Şifreleme ve SBC Entegrasyonu"
    },
    "imageUrl": "https://www.grandstream.com/hs-fs/hubfs/Vertical_Solution_Pages/Hospitality/UCM6300_Series_ippbx.png?width=300&height=300&name=UCM6300_Series_ippbx.png",
    "officialUrl": "https://www.grandstream.com/products/ip-pbxs/ucm-series-ip-pbxs/product/clouducm",
    "brand": "Grandstream"
  },
  {
    "id": "softwareucm",
    "model": "SoftwareUCM",
    "category": "Bulut ve Yönetim",
    "subcategory": "Yazılım Tabanlı IP PBX",
    "badge": "Sanal Sunucu Uyumlu",
    "featured": false,
    "poe": false,
    "wifiStandard": "Yok",
    "portGroup": "Sanal Ağ",
    "sipGroup": "500 - 3000 Kullanıcı",
    "useCases": [
      "Mevcut VMware, Hyper-V veya KVM veri merkezi altyapısına sahip kurumlar",
      "50 kullanıcıdan 3000+ kullanıcıya esnek kapasite artırımı isteyen işletmeler",
      "Merkezi CRM, ERP ve PMS entegrasyonu gerektiren projeler"
    ],
    "shortDescription": "Kendi sunucunuza veya sanal makineye (VMware, Hyper-V, KVM) kurulabilen, 50 ila 3000+ kullanıcı ölçeklenebilir yazılım santral.",
    "specs": {
      "Sanallaştırma": "VMware ESXi, Microsoft Hyper-V, KVM, Linux",
      "Kullanıcı Kapasitesi": "50 - 3000+ SIP Kullanıcısı",
      "Eşzamanlı Çağrı": "200+ Eşzamanlı Ses ve Video Çağrısı",
      "Entegrasyon": "CRM, PMS (Otel), Active Directory, LDAP",
      "Yönetim": "GDMS ve Web Tabanlı Yönetim Konsolu"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/UCM/UCM6300_back-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-pbxs/ucm-series-ip-pbxs/product/softwareucm",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/SoftwareUCM/Datasheet_SoftwareUCM_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "gcc6010-series",
    "model": "GCC6010 Serisi (GCC6010 / GCC6010W / GCC6011)",
    "category": "Tümleşik Ağ ve PBX (GCC)",
    "subcategory": "UC + Ağ Hepsi-Bir-Arada",
    "badge": "4'ü 1 Arada Tümleşik Ağ & PBX",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "5-10 Port Gigabit + SFP",
    "sipGroup": "12 - 100 Kullanıcı",
    "useCases": [
      "Tek cihazda Firewall, VPN Router, IP PBX Santral ve PoE Switch arayan KOBİ'ler",
      "Şube ofisler, klinikler, butik oteller ve perakende mağazaları",
      "Kablo ve cihaz karmaşasını ortadan kaldıran modern ofis kurulumları"
    ],
    "shortDescription": "IP PBX Santral, Kurumsal Firewall, VPN Router ve PoE Switch / Wi-Fi 6 AP özelliklerini tek cihazda birleştiren 4'ü 1 arada platform.",
    "specs": {
      "Tümleşik Modüller": "IP PBX + Next-Gen Firewall + VPN Router + Ağ Anahtarı / Wi-Fi 6",
      "Ağ Portları": "5 veya 10 Gigabit Ethernet + 2.5G SFP Port",
      "Kablosuz": "Wi-Fi 6 2x2 MU-MIMO (GCC6010W modelinde)",
      "PoE Çıkışı": "4x Gigabit PoE+ Çıkış Portu (36W Bütçe)",
      "Yönetim": "GDMS Bulut, Web GUI, CLI"
    },
    "imageUrl": "https://www.grandstream.com/hs-fs/hubfs/gcc%20image.png?width=300&height=300&name=gcc%20image.png",
    "officialUrl": "https://www.grandstream.com/products/convergence-solutions/gcc6000-series",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/GCC6010%20Series/Datasheet_GCC6010_Series_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "gcc6020-series",
    "model": "GCC6020 Serisi",
    "category": "Tümleşik Ağ ve PBX (GCC)",
    "subcategory": "Kurumsal UC & Ağ Yakınsama",
    "badge": "Kurumsal Next-Gen Güvenlik Duvarı + PBX",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "Multi-Gigabit + 10G SFP+",
    "sipGroup": "100 - 500 Kullanıcı",
    "useCases": [
      "Orta ve büyük ölçekli işletmelerde yüksek hızlı VPN ve IDS/IPS güvenlik duvarı",
      "Çoklu WAN hattı yedekleme (Load Balancing & Failover) ve tümleşik IP santral",
      "Endüstriyel tesisler ve kurumsal genel merkezler"
    ],
    "shortDescription": "Orta ve büyük ölçekli işletmeler için yüksek kapasiteli Birleşik İletişim (IP PBX) + Next-Gen Firewall + Multi-WAN VPN Router.",
    "specs": {
      "Tümleşik Mimari": "Yüksek Kapasiteli IP PBX + Kurumsal Firewall + VPN Router",
      "Güvenlik Duvarı": "DPI, IDS/IPS, İçerik Filtreleme, Anti-Malware",
      "WAN / LAN": "Çoklu Gigabit RJ45, 2.5G ve 10G SFP+ Fiber Portlar",
      "VPN Desteği": "IPSec, OpenVPN, WireGuard, L2TP/PPTP",
      "Yönetim": "GDMS Bulut Platformu ve Yerel Web Arayüzü"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GCC602X%20Series_5.png",
    "officialUrl": "https://www.grandstream.com/products/convergence-solutions/gcc6020-series-grandstream-networks",
    "brand": "Grandstream"
  },
  {
    "id": "grp2601",
    "model": "GRP2601 (P / W)",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Fiyat/Performans Lideri",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "2x Ethernet Port",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Yüksek adetli masaüstü personel telefon kurulumları",
      "Kablo çekilemeyen masalar için Wi-Fi 6 destekli GRP2601W modeli",
      "Kamu kurumları, okullar ve standart ofis masaları"
    ],
    "shortDescription": "2 SIP hesabı, 2 hat, 2.4 inç LCD ekran, PoE (GRP2601P) veya Wi-Fi 6 (GRP2601W) opsiyonu ve 5 yönlü konferans sunan temel IP telefon.",
    "specs": {
      "Hat ve SIP": "2 SIP Hesabı, 2 Hat",
      "Ekran": "2.4 inç (132x48) Grafik LCD Ekran",
      "Model Seçenekleri": "GRP2601P (Entegre PoE) / GRP2601W (Wi-Fi 6)",
      "Ses Özellikleri": "5 Yönlü Sesli Konferans, AI Gürültü Engelleme",
      "Kulaklık ve Yönetim": "RJ9 EHS Kulaklık Desteği, GDMS Bulut Yönetimi"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2601_left_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony-carrier-grade-ip-phones/grp-series-essential-ip-phones/product/grp2601p/w",
    "datasheetUrl": "https://www.grandstream.com/hubfs/PartnerConnect/Comparison%20Charts/GRP261x%20IP%20Phone%20Master%20Comparison%20Chart.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "grp2602",
    "model": "GRP2602 (P / W / G)",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Kurumsal Standart",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "2x Gigabit / Fast Ethernet",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Kurumsal ofis çalışanları ve çağrı merkezi operatörleri",
      "Çift bant Wi-Fi (W) veya Çift Gigabit PoE (G) gerektiren masalar"
    ],
    "shortDescription": "2 hat, 4 SIP hesabı, 2.4 inç arkadan aydınlatmalı LCD, PoE / Çift Bant Wi-Fi / Gigabit opsiyonları ve EHS kulaklık desteği.",
    "specs": {
      "Hat ve SIP": "2 Hat Tuşu, 4 SIP Hesabı",
      "Ekran": "2.41 inç Arkadan Aydınlatmalı LCD Ekran",
      "Bağlantı": "PoE (P), Çift Bant Wi-Fi (W) veya Gigabit (G) Modelleri",
      "Ses": "HD Ses (Opus & G.722), Tam Çift Yönlü Hoparlör",
      "Yönetim": "GDMS Sıfır Dokunuşla Provizyon"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2602_left_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony-carrier-grade-ip-phones/grp-series-essential-ip-phones/product/grp2602-p-w-g",
    "brand": "Grandstream"
  },
  {
    "id": "grp2604p",
    "model": "GRP2603 (P) & GRP2604 (P)",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "BLF Tuşlu Seri",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "2x Gigabit PoE",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Yoğun dahili hat takibi (10 fiziksel BLF tuşu) yapan sekreterya ve departman yöneticileri",
      "Gigabit masaüstü bilgisayar geçişi gerektiren kurumsal çalışma istasyonları"
    ],
    "shortDescription": "3 hat, 6 SIP hesabı, 10 fiziksel BLF hızlı arama tuşu (GRP2604P), Çift Gigabit PoE port ve HD ses kalitesi sunan masaüstü IP telefon.",
    "specs": {
      "Hat ve SIP": "3 Hat, 6 SIP Hesabı",
      "BLF Tuşları": "10 Adet Çift Renkli Fiziksel BLF/Hızlı Arama Tuşu (GRP2604)",
      "Ağ Portları": "2x 10/100/1000 Mbps Gigabit Ethernet (PoE)",
      "Ses": "HD Ahize ve Hoparlör, 5 Yönlü Konferans",
      "Kulaklık": "Plantronics, Jabra ve Sennheiser EHS Desteği"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2604_front_web.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-essential-ip-phones",
    "brand": "Grandstream"
  },
  {
    "id": "grp2612",
    "model": "GRP2612 (P / W / G)",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Renkli Ekran",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "2x Gigabit / Fast Ethernet",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Renkli ekran ve 16 sanal BLF tuşu isteyen uzman ve yöneticiler",
      "Kablosuz masaüstü kurulumları (GRP2612W)"
    ],
    "shortDescription": "4 hat, 2 SIP hesabı (16 sanal BLF), 2.4 inç renkli LCD ekran, PoE, Wi-Fi ve Gigabit model seçeneklerine sahip profesyonel IP telefon.",
    "specs": {
      "Hat ve SIP": "4 Hat Tuşu, 2-4 SIP Hesabı, 16 Sanal BLF",
      "Ekran": "2.4 inç (320x240) Renkli TFT LCD",
      "Kablosuz": "Çift Bant 802.11ac Wi-Fi (GRP2612W modelinde)",
      "Güvenlik": "Güvenli Önyükleme, Çift Firmware Görüntüsü",
      "Ağ": "Entegre PoE ve Gigabit (GRP2612G)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2612_front_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-professional-ip-phones/product/grp2612-p-w-g",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/datasheet_grp2612_english.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "grp2615",
    "model": "GRP2615",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Yönetici & Sekreterya",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "2x Gigabit PoE",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Üst düzey yöneticiler, resepsiyonistler ve yoğun çağrı karşılayan asistanlar",
      "GBX20 ek tuş modülü ile 160'a kadar BLF/hızlı arama tuşu ihtiyacı"
    ],
    "shortDescription": "10 hatlı, 4.3 inç renkli ekranlı, dahili çift bant Wi-Fi ve Bluetooth destekli üst düzey operatör sınıfı IP telefon.",
    "specs": {
      "Hat ve SIP": "10 Hat Tuşu, 5 SIP Hesabı, 40 Dijital BLF",
      "Ekran": "4.3 inç (480x272) Renkli TFT LCD",
      "Kablosuz": "Çift Bant Wi-Fi (802.11a/b/g/n/ac) ve Bluetooth",
      "Ağ ve Güç": "Çift Gigabit Ethernet Portu, Entegre PoE",
      "Genişleme": "GBX20 Ek Modül Desteği (4 adede kadar)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/grp2615_feature_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-professional-ip-phones/product/grp2615",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/Datasheet_GRP2615_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "grp2670",
    "model": "GRP2670",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "7\" Dokunmatik Ekran",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "2x Gigabit PoE",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "CEO, Genel Müdür ve C-Level yönetici masaları",
      "64 sanal BLF kapasiteli dokunmatik kontrol merkezi"
    ],
    "shortDescription": "12 hat, 6 SIP hesabı, 7 inç dokunmatik kapasitif ekran (64 sanal BLF), çift bant Wi-Fi, Bluetooth ve Çift Gigabit PoE sunan üst düzey IP telefon.",
    "specs": {
      "Hat ve SIP": "12 Hat, 6 SIP Hesabı, 64 Sanal Çok Amaçlı Tuş",
      "Ekran": "7 inç (800x480) Kapasitif Dokunmatik Renkli Ekran",
      "Kablosuz": "Entegre Çift Bant Wi-Fi 5 ve Bluetooth",
      "Ağ": "Çift 10/100/1000 Mbps Gigabit Port, PoE",
      "Ses": "Çift Mikrofonlu HD Ses ve Gürültü Kalkanı Teknolojisi"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GRP/GRP2670/GRP2670_frontv2.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-professional-ip-phones/product/grp2670",
    "brand": "Grandstream"
  },
  {
    "id": "gxp2170-series",
    "model": "GXP2135 / GXP2140 / GXP2160 / GXP2170",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Yoğun Çağrı Trafiği",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "2x Gigabit PoE",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Santral operatörleri, çağrı merkezleri ve sevkiyat/lojistik masaları",
      "24 fiziksel BLF tuşu (GXP2160) veya 48 dijital BLF tuşu (GXP2170) gerektiren noktalar"
    ],
    "shortDescription": "8 ila 12 hat, 4 ila 6 SIP hesabı, renkli LCD, Çift Gigabit PoE, dahili Bluetooth ve yoğun çağrı trafiği için fiziksel/dijital BLF tuşları.",
    "specs": {
      "Hat ve SIP": "8 - 12 Hat, 4 - 6 SIP Hesabı",
      "BLF Kapasitesi": "32 - 48 Dijital BLF veya 24 Fiziksel BLF (GXP2160)",
      "Bağlantı": "Çift Gigabit RJ45 (PoE), Dahili Bluetooth",
      "Ekran": "4.3 inç veya 2.8 inç Renkli LCD Ekran",
      "Genişleme Modülü": "GXP2200EXT Modül Desteği (GXP2140/2170)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/APAC/gxp2170_square.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/gxp-series-ip-phones/gxp-series-high-end-ip-phones",
    "brand": "Grandstream"
  },
  {
    "id": "gxp1625-series",
    "model": "GXP1610 / GXP1620 / GXP1625 / GXP1628",
    "category": "Birleşik İletişim",
    "subcategory": "Masaüstü IP Telefonlar",
    "badge": "Ekonomik & Dayanıklı",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "2x Ethernet Port",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Küçük ve orta ölçekli ofisler, depo ve şube telefonları",
      "Klasik, sağlam ve ekonomik masaüstü IP telefon projeleri"
    ],
    "shortDescription": "1-3 SIP hesabı, 2-3 hat tuşu, 132x48 LCD ekran ve PoE desteği (GXP1625/1628) ile küçük ofis ve masaüstü kullanım için ideal seri.",
    "specs": {
      "Hat ve SIP": "1 - 3 SIP Hesabı, 2 - 3 Hat Tuşu",
      "Ekran": "132x48 Arkadan Aydınlatmalı LCD (GXP1620/25/28)",
      "Ağ ve PoE": "Çift 10/100M (GXP1625 PoE) veya Gigabit (GXP1628 PoE)",
      "Konferans": "3 Yönlü Sesli Konferans, EHS Kulaklık Desteği",
      "BLF": "8 Çift Renkli BLF Tuşu (GXP1628 modelinde)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Grandstream_Feb_2021/Image/gxp1620_front_0.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony-gxp-series-ip-phones/gxp-series-basic-ip-phones/product/gxp1620/gxp1625",
    "brand": "Grandstream"
  },
  {
    "id": "ghp630-hotel",
    "model": "GHP610(W) / GHP611(W) / GHP620(W) / GHP630(W)",
    "category": "Birleşik İletişim",
    "subcategory": "Otel IP Telefonları",
    "badge": "Otel & Hastane Özel",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "1x Ethernet PoE / Wi-Fi",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "5 yıldızlı oteller, tatil köyleri, yurtlar ve özel hastaneler",
      "Otel logosu basılabilen özelleştirilebilir ön yüz (faceplate) ve hızlı arama tuşları",
      "Banyo ve oda duvar tipi veya masaüstü kompakt kurulum"
    ],
    "shortDescription": "Otel odaları ve hastaneler için kompakt tasarım, 2 SIP hattı, 10 hızlı arama tuşu, değiştirilebilir ön yüz, PoE veya çift bant Wi-Fi ve renkli LCD.",
    "specs": {
      "Hat ve Hızlı Arama": "2 SIP Hesabı, 2 Hat, 6-10 Hızlı Arama Tuşu",
      "Ekran": "3.5 inç Renkli LCD Ekran (GHP630 / GHP631 modellerinde)",
      "Bağlantı": "PoE (10/100M) veya Entegre Çift Bant Wi-Fi (W Modelleri)",
      "Şarj Portu": "USB Type-C Akıllı Telefon Şarj Çıkışı (GHP620/630)",
      "Montaj": "Masaüstü veya Duvar Tipi Kurulum, Özel Faceplate"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GHP620_GHP621/GHP620_4_500x500.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/hotel-phones/product/ghp630-ghp631",
    "brand": "Grandstream"
  },
  {
    "id": "wp825-series",
    "model": "WP816 / WP820 / WP822 / WP825 / WP826 / WP836 / WP856",
    "category": "Birleşik İletişim",
    "subcategory": "Kablosuz Wi-Fi & DECT",
    "badge": "Wi-Fi 6 & IP67 Dayanıklı",
    "featured": false,
    "poe": false,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "Kablosuz Wi-Fi",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Depo, fabrika, hastane, otel ve güvenlik saha personeli",
      "Ayrı DECT baz istasyonu kurmadan mevcut kurumsal Wi-Fi ağı üzerinden kesintisiz dolaşım (roaming)",
      "IP67 su, toz ve 2.5m düşmeye dayanıklı endüstriyel modeller (WP825 / WP836)"
    ],
    "shortDescription": "Kurumsal taşınabilir Wi-Fi telefonlar; Wi-Fi 6 desteği, bas-konuş (PTT) tuşu, 7.5-12 saat konuşma süresi ve IP67 su/toz/düşme dayanıklılığı.",
    "specs": {
      "Kablosuz": "Çift Bant Wi-Fi 6 / Wi-Fi 5 (Hızlı Roaming 802.11k/v/r)",
      "Dayanıklılık": "IP67 Su/Toz Geçirmez ve 2.5m Düşme Koruması (WP825/WP836)",
      "Batarya Ömrü": "8 - 12 Saat Konuşma, 200+ Saat Bekleme Süresi",
      "Özel Fonksiyonlar": "Bas-Konuş (PTT), Panik Butonu, İvmeölçer / Düşme Algılama",
      "Ekran & Barkod": "Renkli LCD veya Dokunmatik Barkod Okuyuculu PDA (WP856)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/WP/WP825-1-web.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/wifi-cordless/product/wp825",
    "datasheetUrl": "https://www.grandstream.com/hubfs/PartnerConnect/Comparison%20Charts/WP%20Series%20Master_Comparison%20Chart_2022.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "dp752-dect",
    "model": "DP722 / DP730 / DP752 / DP755",
    "category": "Birleşik İletişim",
    "subcategory": "Kablosuz Wi-Fi & DECT",
    "badge": "400m DECT Menzili",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "1x Ethernet PoE",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Mağazalar, restoranlar, klinikler ve çok katlı ofislerde uzun menzilli DECT telsiz telefon",
      "Tek baz istasyonuna (DP752/DP755) 5 ila 10 adet DP722/DP730 el ünitesi eşleştirme"
    ],
    "shortDescription": "DP752/DP755 DECT baz istasyonu (5-10 el ünitesi, 10-20 SIP hesabı, 400m dış / 50m iç menzil) ve DP722/DP730 renkli ekranlı DECT ahizeler.",
    "specs": {
      "Kapsama Menzili": "Dış Ortamda 400 Metre, İç Ortamda 50 Metre",
      "Kapasite": "Baz Başına 5 - 10 DECT Ahize, 10 - 20 SIP Hesabı",
      "Ahize Özellikleri": "Renkli TFT LCD, HD Ses, 20-40 Saat Konuşma Süresi",
      "Güç ve Ağ": "Entegre PoE Destekli DECT Baz İstasyonu",
      "Ek Özellikler": "Bas-Konuş (PTT), Yakınlık ve Hareket Sensörü (DP730)"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/DP/dp752_front_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/ip-voice-telephony/dect-cordless/product/dp752",
    "brand": "Grandstream"
  },
  {
    "id": "gxv3480",
    "model": "GXV3450 / GXV3470 / GXV3480",
    "category": "Birleşik İletişim",
    "subcategory": "Android Görüntülü IP Telefonlar",
    "badge": "Android 11 & 8\" IPS Ekran",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "2x Gigabit PoE+",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Yönetici makamları için masaüstü HD video konferans ve IP telefon bir arada",
      "GDS3710 kapı kameralarını canlı izleme ve dokunmatik ekrandan kapı açma",
      "Zoom, Teams ve Grandstream Wave Android uygulamalarını doğrudan çalıştırma"
    ],
    "shortDescription": "8 inç dokunmatik ekranlı, Android işletim sistemli, Wi-Fi 6 ve 2MP kameralı akıllı masaüstü görüntülü iletişim terminali.",
    "specs": {
      "Hat ve SIP": "16 Hat, 16 SIP Hesabı",
      "Ekran ve Kamera": "5.0\" / 7.0\" / 8.0\" (1280x800) IPS Dokunmatik, 2MP HD Kamera",
      "Kablosuz": "Entegre Wi-Fi 6 ve Bluetooth 5.0",
      "Ses ve Video": "1080p HD Video Konferans, Çift Mikrofon, HDMI Giriş/Çıkış",
      "İşletim Sistemi": "Android 11 ve Google Play / Kurumsal Uygulama Desteği"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GXV/GXV3480_Front.png",
    "officialUrl": "https://www.grandstream.com/products/ip-video-telephony/ip-video-phones-android/product/gxv3480",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/GXV3480/Datasheet_GXV3480_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7674",
    "model": "GWN7670 / GWN7672 / GWN7673 / GWN7674",
    "category": "Ağ Çözümleri",
    "subcategory": "Wi-Fi Access Point",
    "badge": "Yeni Nesil Wi-Fi 7 (11Gbps)",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 7",
    "portGroup": "Multi-Gigabit + 10G SFP+",
    "sipGroup": "Yok",
    "useCases": [
      "Yüksek yoğunluklu kurumsal ofisler, üniversite amfileri, kongre merkezleri ve oteller",
      "Wi-Fi 7 Multi-Link Operation (MLO) ve 4K-QAM ile ultra düşük gecikmeli kablosuz ağ",
      "GDMS Networking ile sınırsız sayıda AP'yi ücretsiz buluttan yönetme"
    ],
    "shortDescription": "Kurumsal yoğun ortamlar için 11Gbps+ toplam kablosuz hız ve 10G port sunan amiral gemisi Wi-Fi 7 (802.11be) Access Point ailesi.",
    "specs": {
      "Wi-Fi Standardı": "Wi-Fi 7 (802.11be) Tri-Band & MLO Desteği",
      "Kablosuz Hız": "3.6Gbps (GWN7670) ila 11Gbps+ (GWN7672/7674) Throughput",
      "Ağ Portları": "Multi-Gigabit 2.5G / 10G Ethernet (PoE+ / PoE++)",
      "İstemci Kapasitesi": "384 - 768 Eşzamanlı Kablosuz İstemci",
      "Yönetim": "GDMS Networking, GWN Manager ve Gömülü Kontrolcü"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GWN7674_1.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7674",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7665",
    "model": "GWN7665",
    "category": "Ağ Çözümleri",
    "subcategory": "Wi-Fi Access Point",
    "badge": "Wi-Fi 6E Tri-Band",
    "featured": true,
    "poe": true,
    "wifiStandard": "Wi-Fi 6E",
    "portGroup": "2.5G + 1G Ethernet PoE+",
    "sipGroup": "Yok",
    "useCases": [
      "6GHz bandı ile parazitsiz yüksek hız arayan modern teknoloji ofisleri ve hastaneler",
      "384 eşzamanlı kullanıcıya kadar kesintisiz video konferans ve veri aktarımı"
    ],
    "shortDescription": "6GHz bandını destekleyen 5.4Gbps hızında kurumsal Tri-Band Wi-Fi 6E kablosuz erişim noktası.",
    "specs": {
      "Wi-Fi Standardı": "Wi-Fi 6E (802.11ax Tri-Band 2.4GHz/5GHz/6GHz)",
      "Kablosuz Hız": "5.4Gbps Toplam Kablosuz Hız",
      "İstemci Kapasitesi": "384 Eşzamanlı Cihaz, 175m Menzil",
      "Ağ Portları": "1x 2.5G RJ45 + 1x 1G RJ45 (PoE/PoE+)",
      "Güvenlik": "WPA3, Anti-Hacking Güvenli Önyükleme, QoS"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GWN7665_Bottom_1.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7665",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/GWN7665/Datasheet_GWN7665_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7660-series",
    "model": "GWN7660 / GWN7664",
    "category": "Ağ Çözümleri",
    "subcategory": "Wi-Fi Access Point",
    "badge": "Kurumsal Wi-Fi 6",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "2x Gigabit / 2.5G PoE+",
    "sipGroup": "Yok",
    "useCases": [
      "Kurumsal ofisler, okullar, AVM'ler ve otellerde standart yüksek performanslı Wi-Fi 6",
      "50 adede kadar AP'yi harici kontrolcü olmadan gömülü master üzerinden yönetme"
    ],
    "shortDescription": "1.77Gbps (GWN7660 2x2 MU-MIMO) ve 3.55Gbps (GWN7664 4x4 MU-MIMO) Wi-Fi 6 hız, 256-512 istemci ve gömülü kontrolcü.",
    "specs": {
      "Wi-Fi Standardı": "Wi-Fi 6 (802.11ax) 2x2 veya 4x4 MU-MIMO & OFDMA",
      "Kablosuz Hız": "1.77Gbps (GWN7660) / 3.55Gbps (GWN7664)",
      "İstemci Kapasitesi": "256 - 512 Eşzamanlı İstemci, 175m Kapsama",
      "Ağ Portları": "Çift Gigabit (GWN7660) veya 1G + 2.5G Port (GWN7664)",
      "Yönetim": "Ücretsiz GDMS Bulut ve Gömülü Kontrolcü"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GWN7664/GWN7664_front.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7664",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7624-inwall",
    "model": "GWN7605 / GWN7615 / GWN7624 (In-Wall)",
    "category": "Ağ Çözümleri",
    "subcategory": "Wi-Fi Access Point",
    "badge": "Otel Odası In-Wall AP",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "4x Gigabit (PoE Passthrough)",
    "sipGroup": "Yok",
    "useCases": [
      "Otel odaları ve öğrenci yurtlarında duvar prizine monte edilen GWN7624 In-Wall AP",
      "Oda içindeki IP telefon ve IPTV'ye doğrudan PoE ve Gigabit port çıkışı sağlama"
    ],
    "shortDescription": "1.27Gbps - 2.03Gbps Wi-Fi 5 serisi ve otel odaları için 3x Gigabit switch portlu duvar içi (In-Wall) GWN7624 modeli.",
    "specs": {
      "Wi-Fi Standardı": "802.11ac Wave-2 MU-MIMO",
      "Kablosuz Hız": "1.27Gbps - 2.03Gbps Toplam Hız",
      "In-Wall Portlar": "1x Gigabit PoE Giriş + 3x Gigabit Çıkış (2x PoE Out - GWN7624)",
      "İstemci Kapasitesi": "100 - 200+ Eşzamanlı Cihaz",
      "Montaj": "Duvar Buat İçi (GWN7624) veya Tavan Montajı"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GWN/GWN7624/GWN7624_4.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/indoor-wifi-access-points/product/gwn7624",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7660lr-outdoor",
    "model": "GWN7670ELR / GWN7660LR / GWN7600LR / GWN7302",
    "category": "Ağ Çözümleri",
    "subcategory": "Dış Ortam AP & PtP Köprü",
    "badge": "IP66 Dış Ortam & 5km PtP",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "2x Gigabit / SFP Fiber",
    "sipGroup": "Yok",
    "useCases": [
      "Tatil köyleri, plajlar, kampüs bahçeleri, açık otoparklar ve fabrikalar",
      "İki bina veya fabrika arasında 5 km mesafeye kadar kablosuz nokta-noktaya (PtP) köprü (GWN7302)"
    ],
    "shortDescription": "IP66/IP67 hava koşullarına dayanıklı dış ortam Wi-Fi 7/6/5 AP'ler (300m-750m menzil) ve 5km menzilli GWN7302 PtP/PtMP kablosuz köprü.",
    "specs": {
      "Koruma Sınıfı": "IP66 / IP67 Su, Toz ve Zorlu Hava Koşulları Dayanımı",
      "Kapsama Menzili": "250m - 300m Açık Alan AP / 5km Kablosuz Köprü (GWN7302)",
      "Kablosuz Teknoloji": "Wi-Fi 7 (GWN7670ELR), Wi-Fi 6 (GWN7660LR) ve PtP Bridge",
      "Ağ Arayüzü": "Çift Gigabit PoE+ ve Fiber SFP Seçenekleri",
      "Anten Yapısı": "Yüksek Kazançlı Dahili veya Sökülebilir Harici Antenler"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GWN/gwn7600lr_mounted_web.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/outdoor-wifi-access-points/product/gwn7600lr",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7830-series",
    "model": "GWN7830 / GWN7831 / GWN7832",
    "category": "Ağ Çözümleri",
    "subcategory": "Network Switch",
    "badge": "Layer 3 Omurga (10G SFP+)",
    "featured": false,
    "poe": false,
    "wifiStandard": "Yok",
    "portGroup": "16-24 Port + 10G SFP+",
    "sipGroup": "Yok",
    "useCases": [
      "Kampüs, otel ve veri merkezi omurga (Core / Aggregation) fiber ağ toplama katmanı",
      "Yüksek hızlı 10Gbps SFP+ fiber bağlantılar ve OSPF/BGP dinamik yönlendirme"
    ],
    "shortDescription": "10G SFP+ fiber ve Gigabit bakır portlu yüksek kapasiteli omurga (Aggregation) switch'ler, OSPF/BGP dinamik yönlendirme ve 240Gbps anahtarlama.",
    "specs": {
      "Switch Katmanı": "Layer 3 Aggregation / Core Switch (OSPF, BGP, RIP)",
      "Fiber Portlar": "4 ila 12 Adet 10Gigabit SFP+ ve Gigabit SFP Portları",
      "Anahtarlama Kapasitesi": "128Gbps - 240Gbps Non-Blocking Kapasite",
      "Yedeklilik": "Çift Yedekli Güç Kaynağı (PSU) Desteği (GWN7831/7832)",
      "Yönetim": "GDMS Bulut, CLI, Web GUI, SNMP, RMON"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GWN7830%20Series/GWN7830%20Series%20Webpage%20Pic%201.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/network-switches/product/gwn7830-gwn7831-gwn7832",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7810-series",
    "model": "GWN7810 Serisi (GWN7811P / 7812P / 7813P / 7816P)",
    "category": "Ağ Çözümleri",
    "subcategory": "Network Switch",
    "badge": "Layer 3 PoE+ Switch",
    "featured": true,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "8 / 16 / 24 / 48 Port + 10G SFP+",
    "sipGroup": "Yok",
    "useCases": [
      "Kurumsal kenar ve dağıtım katmanında IP telefon, Wi-Fi AP ve IP kameraları PoE+ ile besleme",
      "10G SFP+ fiber uplink ile omurgaya darboğazsız bağlanma"
    ],
    "shortDescription": "8 / 16 / 24 / 48 Gigabit port + 10G SFP+ fiber uplink ve akıllı PoE/PoE+ güç dağıtımı sunan Layer 3 yönetilebilir kurumsal ağ anahtarları.",
    "specs": {
      "Switch Katmanı": "Layer 3 Yönetilebilir (RIP, OSPF, DHCP Server, VLAN)",
      "Port Seçenekleri": "8 / 16 / 24 / 48 Gigabit RJ45 + 2/4/6 adet 10G SFP+",
      "PoE Desteği": "Port başına 30W PoE+ (740W'a kadar toplam PoE bütçesi)",
      "Güvenlik & QoS": "802.1X, ARP Inspection, Ses/Video Otomatik QoS",
      "Yönetim": "GDMS Bulut, GWN Manager, Web GUI, CLI, SNMP"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GWN781X%203%20Website%20Upload%20v2.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/network-switches/product/gwn7811p_gwn7812p_gwn7813p",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7800-series",
    "model": "GWN7800 Serisi & GWN7800 Pro (8 / 16 / 24 / 48 Port)",
    "category": "Ağ Çözümleri",
    "subcategory": "Network Switch",
    "badge": "Layer 2+ & Pro-AV",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "8 / 16 / 24 / 48 Port + SFP",
    "sipGroup": "Yok",
    "useCases": [
      "Ofis, okul ve otel kat switch'i olarak güvenli VLAN ve PoE+ dağıtımı",
      "GWN7800 Pro serisi ile profesyonel ses/görüntü (Pro-AV) ve PoE++ (60W) projeleri"
    ],
    "shortDescription": "8 / 16 / 24 / 48 Gigabit port + SFP/SFP+ portları, Pro-AV desteği (GWN7800 Pro) ve gelişmiş katman 2+ güvenlik özellikleri.",
    "specs": {
      "Switch Katmanı": "Layer 2+ Yönetilebilir (Statik Routing, IGMP Snooping)",
      "Port Seçenekleri": "8 / 16 / 24 / 48 Gigabit RJ45 + 2/4 SFP veya 10G SFP+",
      "PoE Gücü": "Akıllı Dinamik PoE/PoE+ ve Pro Serisinde 60W PoE++",
      "Güvenlik": "IP Source Guard, DoS Koruması, Port Security, DHCP Snooping",
      "Yönetim": "Ücretsiz GDMS Bulut Yönetimi"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GWN7800%20Pro%20Series_1.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/network-switches/product/gwn7800_pro_series",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7700-series",
    "model": "GWN7700 (P / PA / M) Serisi",
    "category": "Ağ Çözümleri",
    "subcategory": "Network Switch",
    "badge": "Tak-Çalıştır & 2.5G",
    "featured": false,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "5 / 8 / 16 / 24 Port",
    "sipGroup": "Yok",
    "useCases": [
      "Yapılandırma gerektirmeyen hızlı masaüstü veya kabinet içi port çoklama",
      "Wi-Fi 6/7 AP'ler için 2.5G Multi-Gigabit Unmanaged switch modelleri (GWN7700M)"
    ],
    "shortDescription": "5 / 8 / 16 / 24 Gigabit veya 2.5G Multi-Gigabit tak-çalıştır (Unmanaged) switch modelleri, PoE+ opsiyonları ve fansız sessiz tasarım.",
    "specs": {
      "Switch Tipi": "Yönetilemez (Unmanaged) Tak-Çalıştır",
      "Port Seçenekleri": "5, 8, 16, 24 Gigabit veya 2.5G Multi-Gigabit + SFP+",
      "PoE Desteği": "802.3af/at PoE+ Çıkışlı P ve PA Modelleri",
      "Tasarım": "Dayanıklı Metal Kasa, Masaüstü / Duvar / Rack Montaj",
      "Enerji": "IEEE 802.3az Yeşil Enerji Tasarrufu"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/LATAM/2023/Diciembre%202023/Combined-Figure-GWN7700_01-website.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/network-switches/product/gwn7700-p-pa-series",
    "brand": "Grandstream"
  },
  {
    "id": "gwn7000-routers",
    "model": "GWN7001 / GWN7002 / GWN7003 & GWN7062 (Wi-Fi 6)",
    "category": "Ağ Çözümleri",
    "subcategory": "VPN & Wi-Fi Router",
    "badge": "Multi-WAN VPN Router",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "5-10 Port Gigabit + SFP",
    "sipGroup": "Yok",
    "useCases": [
      "Birden fazla internet hattını (Multi-WAN) birleştirip yedeklemek isteyen işletmeler",
      "Şubeler arası güvenli IPSec / WireGuard / OpenVPN tünel bağlantısı",
      "Küçük ofisler için Wi-Fi 6 Mesh destekli GWN7062 kablosuz router"
    ],
    "shortDescription": "Kurumsal Multi-WAN Gigabit VPN Router (GWN7001/02/03, SFP, PoE giriş/çıkış, DPI güvenlik duvarı) ve AX1800/AX3000 Wi-Fi 6 Mesh Router.",
    "specs": {
      "Yönlendirme": "Multi-WAN Yük Dengeleme ve Otomatik Yedekleme (Failover)",
      "Port Yapısı": "6 - 9x Gigabit RJ45 + 2x Gigabit SFP (GWN7002/7003)",
      "PoE Desteği": "PoE Giriş ve PoE+ Çıkış Portları (GWN7002/7003)",
      "VPN & Güvenlik": "Donanım Hızlandırmalı VPN, DPI Trafik Analizi, Firewall",
      "Kablosuz Model": "GWN7062 Çift Bant Wi-Fi 6 Mesh Router Seçeneği"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GWN7001_02_03/GWN7001_1.png",
    "officialUrl": "https://www.grandstream.com/products/networking-solutions/routers/product/gwn7001_gwn7002_gwn7003",
    "brand": "Grandstream"
  },
  {
    "id": "gds3710",
    "model": "GDS3710 / GDS3712 / GDS3720 Serisi",
    "category": "Birleşik İletişim",
    "subcategory": "Bina Yönetimi & İnterkom",
    "badge": "180° FHD Kamera + RFID",
    "featured": true,
    "poe": true,
    "wifiStandard": "Yok",
    "portGroup": "1x Ethernet PoE",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Plaza, fabrika, okul ve site girişlerinde kartlı/şifreli kapı geçiş kontrolü",
      "GXV3480 masaüstü telefonlara veya GSC3570 iç ünitelere görüntülü SIP çağrısı başlatma",
      "NVR kayıt cihazlarına ONVIF üzerinden 7/24 Full HD güvenlik kamerası akışı"
    ],
    "shortDescription": "180 derece Full HD IP kamera, RFID okuyucu ve tuş takımını birleştiren su/darbe dayanımlı IP Görüntülü Kapı Sistemi.",
    "specs": {
      "Kamera ve Açısı": "1080p Full HD, 180° Hemisferik Görüş Açısı",
      "Geçiş Kontrol": "Dahili RFID Kart Okuyucu + Dokunmatik Tuş Takımı (GDS3710)",
      "Dayanıklılık": "IP66 Hava Koşulları ve IK09/IK10 Metal Gövde Koruması",
      "Ses ve Entegrasyon": "Çift Yönlü HD Ses, SIP Video Streaming, ONVIF, PoE",
      "Giriş / Çıkış": "Elektrikli Kilit Rölesi ve Alarm Sensör Girişleri"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Product%20Images/GDS/gds3710_left_web-website.png",
    "officialUrl": "https://www.grandstream.com/products/facility-management/facility-access-systems/product/gds3710",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/datasheet_gds3710_english.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "gsc3516-paging",
    "model": "GSC3516 / GSC3510 / GSC3506 (v2) / GSC3518HS",
    "category": "Birleşik İletişim",
    "subcategory": "Bina Yönetimi & İnterkom",
    "badge": "SIP Anons & Horn Hoparlör",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "1x Ethernet PoE+",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Okul, hastane, fabrika, AVM ve depolarda IP santral üzerinden genel veya bölgesel sesli anons",
      "Dış ortam fabrika sahaları için IP66 dayanımlı 50W GSC3518HS SIP Horn Hoparlör"
    ],
    "shortDescription": "Tavan/duvar tipi SIP Multicast anons ve çift yönlü konuşma hoparlörleri (15W-30W) ve dış ortam IP66 50W Horn Hoparlör (GSC3518HS).",
    "specs": {
      "Ses Gücü": "15W / 30W İç Ortam (GSC3506/3516) ve 50W Dış Ortam Horn (GSC3518HS)",
      "Mikrofon": "3 Yönlü Hüzmeleme (Beamforming) Mikrofon ile Çift Yönlü Konuşma",
      "Protokoller": "SIP Paging, Multicast Paging, Öncelikli Acil Anons",
      "Bağlantı": "Entegre PoE/PoE+ ve Çift Bant Wi-Fi / Bluetooth (GSC3510/3516)",
      "Koruma": "Dış Ortam Modelinde IP66 Su ve Toz Koruması"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GSC3518HS_5.png",
    "officialUrl": "https://www.grandstream.com/products/facility-management/intercoms-paging/product/gsc3518hs",
    "brand": "Grandstream"
  },
  {
    "id": "gsc3570",
    "model": "GSC3570",
    "category": "Birleşik İletişim",
    "subcategory": "Bina Yönetimi & İnterkom",
    "badge": "7\" Dokunmatik Kontrol Paneli",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 5",
    "portGroup": "2x Ethernet PoE",
    "sipGroup": "1 - 4 SIP Hesabı",
    "useCases": [
      "Güvenlik kulübeleri, daire/ofis girişleri ve toplantı odası kontrol ekranı",
      "GDS serisi kapı interkomları ile görüntülü görüşme ve tek tuşla kapı açma"
    ],
    "shortDescription": "7 inç dokunmatik ekranlı duvar/masaüstü interkom ve güvenlik kontrol paneli; kapı açma, kamera izleme, çift bant Wi-Fi ve PoE.",
    "specs": {
      "Ekran": "7 inç (1024x600) Kapasitif Dokunmatik TFT LCD",
      "İletişim": "4 SIP Hesabı, Çift Yönlü HD Ses ve 720p/1080p Video",
      "Bağlantı": "Çift Bant 802.11ac Wi-Fi ve Entegre PoE",
      "Portlar": "4x Alarm Girişi ve 1x Kilit/Alarm Röle Çıkışı",
      "Montaj": "Duvar Tipi veya Masaüstü Stand Kurulumu"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/Grandstream_Feb_2021/Image/GSC3570_Wall-website.png",
    "officialUrl": "https://www.grandstream.com/products/facility-management/control-stations/product/gsc3570",
    "datasheetUrl": "https://www.grandstream.com/hubfs/Product_Documentation/Datasheet_GSC3570_English.pdf",
    "brand": "Grandstream"
  },
  {
    "id": "ht800-series",
    "model": "HT801 (v2) / HT802 (v2) / HT812 (v2) / HT814 / HT818 / HT841 / HT881",
    "category": "Birleşik İletişim",
    "subcategory": "Gateway & ATA",
    "badge": "Analog / Faks Dönüştürücü",
    "featured": false,
    "poe": false,
    "wifiStandard": "Yok",
    "portGroup": "1-8 FXS / FXO + Gigabit",
    "sipGroup": "1 - 8 SIP Profili",
    "useCases": [
      "Mevcut analog telefonları, DECT cihazları veya faks makinelerini IP santrale bağlama",
      "Türk Telekom veya operatör analog PSTN hatlarını (FXO) IP santrale aktarma (HT841 / HT881)"
    ],
    "shortDescription": "1 / 2 / 4 / 8 FXS portlu (HT801-HT818) ve 4/8 FXO portlu (HT841/HT881) VoIP adaptörleri, T.38 Faks, Gigabit NAT Router ve AES şifreleme.",
    "specs": {
      "Analog Portlar": "1, 2, 4, 8 FXS Port (HT801-818) veya 4/8 FXO Port (HT841/881)",
      "Ağ Portları": "10/100M veya Çift Gigabit RJ45 (Dahili NAT Router)",
      "Faks Desteği": "T.38 Fax-over-IP ve G.711 Fax Pass-Through",
      "Güvenlik": "TLS ve SRTP Şifreleme, TR-069 ve GDMS Uzaktan Yönetim"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/HT801%20v2_2.png",
    "officialUrl": "https://www.grandstream.com/products/gateways-and-atas/analog-telephone-adaptors/product/ht801v2",
    "brand": "Grandstream"
  },
  {
    "id": "gxw4200-4500",
    "model": "GXW4216 / 4224 / 4232 / 4248 (v2) & GXW4501 / 4502 / 4504",
    "category": "Birleşik İletişim",
    "subcategory": "Gateway & ATA",
    "badge": "16-48 FXS & E1/PRI Gateway",
    "featured": false,
    "poe": false,
    "wifiStandard": "Yok",
    "portGroup": "16-48 FXS / 1-4 E1 PRI",
    "sipGroup": "16 - 120 Eşzamanlı Çağrı",
    "useCases": [
      "Otellerde mevcut yüzlerce oda içi analog telefonu IP santral sistemine entegre etme (GXW4200 v2)",
      "Operatör E1/T1/J1 PRI dijital ses devrelerini VoIP ağına dönüştürme (GXW4500)"
    ],
    "shortDescription": "16 / 24 / 32 / 48 FXS portlu yüksek yoğunluklu analog VoIP Gateway (GXW4200 v2) ve 1 / 2 / 4 E1/T1/J1 PRI Dijital VoIP Gateway (GXW4500).",
    "specs": {
      "Analog Kapasite": "16, 24, 32 veya 48 RJ11 FXS Port + Telco 50-Pin Konnektör",
      "Dijital PRI Kapasite": "1, 2 veya 4 Yazılımla Yapılandırılabilir E1/T1/J1 Port (30-120 Çağrı)",
      "Ağ Arayüzü": "Gigabit Ethernet ve Çift Gigabit Port (GXW4500)",
      "Ses & Faks": "Opus, G.722, G.711, T.38 Faks, Taşıyıcı Sınıfı Yankı Engelleme"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/gxw4216-24-32-48-v2-website.png",
    "officialUrl": "https://www.grandstream.com/products/gateways-and-atas/voip-gateways/product/gxw4200-series",
    "brand": "Grandstream"
  },
  {
    "id": "gvc3220-conferencing",
    "model": "GAC2570 & GVC3220 & GUV3000 / GUV3100",
    "category": "Birleşik İletişim",
    "subcategory": "Konferans & İşbirliği",
    "badge": "4K Ultra HD Video Konferans",
    "featured": false,
    "poe": true,
    "wifiStandard": "Wi-Fi 6",
    "portGroup": "Gigabit PoE + HDMI",
    "sipGroup": "5 - 16 SIP Hesabı",
    "useCases": [
      "Yönetim kurulu ve büyük toplantı odaları için 4K PTZ kameralı GVC3220 video konferans sistemi",
      "Kablosuz mikrofonlu ve dahili bataryalı GAC2570 masaüstü sesli konferans telefonu",
      "Çağrı merkezi ve hibrit çalışanlar için GUV3000/3005 gürültü engelleyici USB/RJ9 kulaklık"
    ],
    "shortDescription": "12 hatlı Android kurumsal sesli konferans telefonu (GAC2570), 4K PTZ Ultra HD video konferans sistemi (GVC3220), 1080p Webcam ve Kulaklıklar.",
    "specs": {
      "Video Çözünürlüğü": "4K Ultra HD Kamera, 5x Optik / 12x Zoom PTZ (GVC3220)",
      "Ses Konferansı": "GAC2570: 7\" Dokunmatik Ekran, Kablosuz Yaka Mikrofonu, 4 Saat Batarya",
      "Bağlantı": "Entegre Wi-Fi 6, Bluetooth 5.0, Çift HDMI Çıkış, Miracast/AirPlay",
      "Kişisel Ekipman": "GUV3100 1080p USB Webcam & GUV3000 HD Kulaklık Serisi"
    },
    "imageUrl": "https://www.grandstream.com/hubfs/GVC3220_right.png",
    "officialUrl": "https://www.grandstream.com/products/business-conferencing/full-hd-conferencing/product/gvc3220",
    "brand": "Grandstream"
  },
  {
    "id": "jabra-panacast-50",
    "brand": "Jabra",
    "model": "Jabra PanaCast 50",
    "category": "Video Konferans",
    "subcategory": "Akıllı Video Bar (BYOD)",
    "badge": "En Çok Tercih Edilen Video Bar",
    "featured": true,
    "shortDescription": "180° Panoramik-4K görüntü, 8 mikrofonlu stüdyo kalitesinde ses, Dynamic Composition ve Canlı Beyaz Tahta paylaşımı sunan ödüllü akıllı video bar.",
    "specs": {
      "Kamera ve Çözünürlük": "3x 13MP Kamera ile 180° Panoramik-4K (3840x1080 @ 30fps)",
      "Görüş Açısı": "Yatay: 180°, Dikey: 54°",
      "Yapay Zeka Özellikleri": "Dynamic Composition, Virtual Director, Intelligent Zoom, Canlı Beyaz Tahta",
      "Ses & Hoparlör": "4 adet sıfır titreşimli stereo hoparlör (2x 50mm woofer, 2x 20mm tweeter)",
      "Mikrofon": "8 Beamforming hassas mikrofon dizilimi, yankı ve gürültü engelleme",
      "Bağlantı": "USB-C, USB-A tak-çalıştır, Ethernet (RJ45)",
      "Sertifikalar": "Microsoft Teams, Microsoft Teams Rooms, Zoom, Zoom Rooms"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/4/2/f/142fdb59906cebf07c63b2312f7710001bebf25e_Jabra_PanaCast50_table_stand_grey_02.png",
    "officialUrl": "https://www.jabra.com/en-gb/business/video-conferencing/jabra-panacast-50"
  },
  {
    "id": "jabra-panacast-50-vbs",
    "brand": "Jabra",
    "model": "Jabra PanaCast 50 Video Bar System (VBS)",
    "category": "Video Konferans",
    "subcategory": "All-in-One Android Oda Sistemleri",
    "badge": "Hepsi-Bir-Arada Android",
    "featured": true,
    "shortDescription": "Dahili Android işlemcili 180° Panoramik-4K akıllı video bar ve 10.1 inç dokunmatik PanaCast Control masa tabletinden oluşan hepsi-bir-arada toplantı odası sistemi.",
    "specs": {
      "İşletim Sistemi": "Android tabanlı bağımsız oda mimarisi",
      "Kamera": "3x 13MP Kamera ile 180° Panoramik-4K (3840x1080)",
      "Kontrol Tableti": "10.1 inç HD Dokunmatik PanaCast Control (PoE beslemeli, tek kablo)",
      "Ses & Mikrofon": "8 Beamforming Mikrofon + 4 Titreşimsiz Hoparlör",
      "Bağlantı & Ağ": "Wi-Fi, Bluetooth, 2x Ethernet Gigabit PoE, HDMI Çıkış (Çift Ekran desteği)",
      "Sertifikalar": "Microsoft Teams Rooms on Android, Zoom Rooms"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png",
    "officialUrl": "https://www.jabra.com/business/video-conferencing/jabra-panacast-50-video-bar-system"
  },
  {
    "id": "jabra-panacast-50-room-system",
    "brand": "Jabra",
    "model": "Jabra PanaCast 50 Room System",
    "category": "Video Konferans",
    "subcategory": "Windows Tabanlı Tam Oda Sistemleri",
    "badge": "Windows & MTR On Windows",
    "featured": true,
    "shortDescription": "PanaCast 50 Video Bar, Lenovo ThinkSmart Core Windows işlemci ünitesi ve 10.1 inç ThinkSmart Controller dokunmatik panelden oluşan kurumsal Windows oda çözümü.",
    "specs": {
      "İşlemci Ünitesi": "Lenovo ThinkSmart Core (Intel Core vPro, Windows 11 IoT Enterprise SAC)",
      "Dokunmatik Panel": "10.1 inç Full HD ThinkSmart Controller Dokunmatik Ekran",
      "Video Bar": "Jabra PanaCast 50 (180° Panoramik 4K, 8 Mikrofon, 4 Hoparlör)",
      "Özel Yetenek": "Microsoft Teams Intelligent Speaker (10 kişiye kadar sesli katip & kimlik tanıma)",
      "Yönetim": "Lenovo ThinkSmart Manager & Jabra+ Cloud Platform"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/4/c/a/1/4ca17c389237d27f6781486803fd21fe86babdb2_Jabra_PanaCast50VBS_01.png",
    "officialUrl": "https://www.jabra.com/en-in/business/video-conferencing/jabra-panacast-50-room-system"
  },
  {
    "id": "jabra-panacast-40-vbs",
    "brand": "Jabra",
    "model": "Jabra PanaCast 40 VBS",
    "category": "Video Konferans",
    "subcategory": "Kompakt Video Bar Sistemi",
    "badge": "Kompakt Huddle Çözümü",
    "featured": false,
    "shortDescription": "Küçük toplantı odaları ve odak alanları (Huddle Rooms) için tasarlanmış kompakt, hepsi-bir-arada akıllı video konferans çubuğu.",
    "specs": {
      "Görüş Açısı": "Geniş Açılı 4K Ultra HD Optik Sistem",
      "İşletim Mimarisi": "Android Tabanlı Huddle Room Sistemi + Dokunmatik Kontrol",
      "Ses & Mikrofon": "Yüksek verimli tümleşik hoparlör ve beamforming mikrofonlar",
      "Oda Tipi": "Odak Odası / Huddle Room (2-5 Kişi)",
      "Montaj": "Ekran üstü, ekran altı veya duvar montaj"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/3/e/f/f/3effb4227189ad803cb3160caeb47258a57dfa91_Jabra_PanaCast_40vbs_techspec3.png",
    "officialUrl": "https://www.jabra.com/business/video-conferencing/jabra-panacast-40-vbs"
  },
  {
    "id": "jabra-panacast-20",
    "brand": "Jabra",
    "model": "Jabra PanaCast 20",
    "category": "Video Konferans",
    "subcategory": "Kişisel 4K AI Kameralar",
    "badge": "4K Edge AI Kişisel Kamera",
    "featured": false,
    "shortDescription": "Cihaz içi Edge AI işlemcisiyle Akıllı Işık Optimizasyonu, Akıllı Yakınlaştırma ve Resim İçinde Resim sunan 4K Ultra HD kişisel video konferans kamerası.",
    "specs": {
      "Sensör ve Çözünürlük": "13 Megapiksel 4K Ultra HD (3840x2160 @ 30fps)",
      "Yapay Zeka": "Edge AI İşlemci (Intelligent Zoom, Akıllı Işık Optimizasyonu)",
      "Gizlilik": "Entegre Mekanik Lens Gizlilik Sürgüsü (Privacy Cover)",
      "Resim İçinde Resim": "Picture-in-Picture (PiP) ikinci odak penceresi",
      "Mikrofon": "3 Dahili Çok Yönlü MEMS Mikrofon",
      "Bağlantı": "USB-C 3.0 Tak-Çalıştır, Dayanıklı Taşıma Kılıfı"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/5/e/5/7/5e5780d2896b17079bdfa776b4df15c945d39a79_Jabra_PanaCast20_00s.png",
    "officialUrl": "https://www.jabra.com/business/video-conferencing/jabra-panacast-20"
  },
  {
    "id": "jabra-panacast-meet-anywhere",
    "brand": "Jabra",
    "model": "Jabra PanaCast Meet Anywhere / Meet Anywhere+",
    "category": "Video Konferans",
    "subcategory": "Taşınabilir Konferans Paketleri",
    "badge": "Taşınabilir Konferans Kiti",
    "featured": false,
    "shortDescription": "PanaCast kamera, Speak 750 / Speak2 75 konferans hoparlörü, masa standı ve taşıma çantasından oluşan mobil toplantı seti.",
    "specs": {
      "İçerik": "PanaCast 180° / PanaCast 20 + Speak 750 / Speak2 75 + Masa Standı + 1m USB Kablosu",
      "Çanta": "Özel korumalı fermuarlı seyahat çantası",
      "Kullanım Amacı": "Hibrit çalışanlar, seyahat eden ekipler ve esnek ofisler"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/c/c/f/b/ccfb65e3b0c8558d478dfadd5d53c691e5ef2ee5_Jabra_PanaCast_Meet_Anywhere1s.png",
    "officialUrl": "https://www.jabra.com/business/video-conferencing/jabra-panacast-bundle/buy"
  },
  {
    "id": "jabra-speak2-75",
    "brand": "Jabra",
    "model": "Jabra Speak2 75",
    "category": "Konferans Hoparlörü",
    "subcategory": "Speak2 Serisi",
    "badge": "Amiral Gemisi Ses",
    "featured": true,
    "shortDescription": "65mm süper geniş bant hoparlörü, 4 beamforming mikrofonu ve patentli 360° Mikrofon Kalite Göstergesi LED halkasıyla toplantıların amiral gemisi.",
    "specs": {
      "Hoparlör Boyutu": "65mm Tam Aralıklı Hoparlör (Super-Wideband Ses)",
      "Mikrofon Dizilimi": "4 adet Beamforming Mikrofon (360° Ses Yakalama)",
      "Mikrofon Kalite Göstergesi": "360° LED Işık Halkası (Yeşil / Turuncu / Kırmızı Canlı Geri Bildirim)",
      "Ses Teknolojisi": "Tam Çift Yönlü (Full-Duplex) & Ses Seviyesi Normalleştirme (Voice Level Normalization)",
      "Batarya": "32 Saate Kadar Kablosuz Kullanım Süresi",
      "Bağlantı": "Entegre USB-C + USB-A Tek Kablo, Bluetooth 5.2 (Link 380 adaptörlü opsiyon)",
      "Dayanıklılık": "IP64 Su ve Toz Dayanıklılık Sertifikası"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/d/c/a/4/dca4ff97bffb3ecd87295dfb61418ad532d4579a_00_Speak2_75_MS.png",
    "officialUrl": "https://www.jabra.com/business/speakerphones/jabra-speak-series/jabra-speak2-75"
  },
  {
    "id": "jabra-speak2-55",
    "brand": "Jabra",
    "model": "Jabra Speak2 55",
    "category": "Konferans Hoparlörü",
    "subcategory": "Speak2 Serisi",
    "badge": "Taşınabilir Güç",
    "featured": false,
    "shortDescription": "50mm tam aralıklı hoparlör, 4 beamforming mikrofon, Tam Çift Yönlü ses, 12 saat pil ve çift USB-C/A bağlantı.",
    "specs": {
      "Hoparlör": "50mm Tam Aralıklı Hoparlör",
      "Mikrofon": "4 Beamforming Mikrofon, Full-Duplex Ses",
      "Batarya": "12 Saate Kadar Kablosuz Pil Ömrü",
      "Bağlantı": "Entegre USB-C / USB-A Kablo + Bluetooth 5.1",
      "Koruma": "IP64 Su ve Toz Dayanıklılığı"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/4/f/3/3/4f337b1e661525cd0680f494d71bfc7886308ff2_00_Jabra_Speak2_55_UC.png",
    "officialUrl": "https://www.jabra.com/business/speakerphones/jabra-speak-series/jabra-speak2-55"
  },
  {
    "id": "jabra-speak2-40",
    "brand": "Jabra",
    "model": "Jabra Speak2 40",
    "category": "Konferans Hoparlörü",
    "subcategory": "Speak2 Serisi",
    "badge": "Kablolu Tak-Çalıştır",
    "featured": false,
    "shortDescription": "Kabloyla anında bağlanan, şarj gerektirmeyen, 4 beamforming mikrofonlu ve Full-Duplex sesli konferans hoparlörü.",
    "specs": {
      "Hoparlör": "50mm Hoparlör, Geniş Bant Ses",
      "Mikrofon": "4 Beamforming Mikrofon",
      "Bağlantı": "Entegre Çift Başlıklı USB-C / USB-A Kablo",
      "Güç": "Doğrudan USB üzerinden çalışır (Bataryasız)"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/4/f/3/3/4f337b1e661525cd0680f494d71bfc7886308ff2_00_Jabra_Speak2_55_UC.png",
    "officialUrl": "https://www.jabra.com/business/speakerphones/jabra-speak-series/jabra-speak2-40"
  },
  {
    "id": "jabra-speak-750",
    "brand": "Jabra",
    "model": "Jabra Speak 750",
    "category": "Konferans Hoparlörü",
    "subcategory": "Klasik Speak Serisi",
    "badge": "Kablosuz Stereo Çiftleme",
    "featured": true,
    "shortDescription": "Gerçek Tam Çift Yönlü ses, Hi-Fi müzik kalitesi ve ikinci hoparlörle kablosuz stereo eşleştirme.",
    "specs": {
      "Ses": "Tam Çift Yönlü Ses, Hi-Fi Müzik",
      "Eşleştirme": "İki Speak 750'yi kablosuz birbirine bağlama (12 kişiye kadar)",
      "Batarya": "11 saate kadar pil ömrü",
      "Bağlantı": "USB-A Kablo + Bluetooth (Jabra Link 370 dahil)"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/c/3/3/9/c3393296767374fc002b8fde20b77dcab9f6dd38_a0_Jabra_Speak_750_UC_P01.png",
    "officialUrl": "https://www.jabra.com/business/speakerphones/jabra-speak-series/jabra-speak-750/buy"
  },
  {
    "id": "jabra-evolve2-85",
    "brand": "Jabra",
    "model": "Jabra Evolve2 85",
    "category": "Ofis Kulaklıkları",
    "subcategory": "Evolve2 Serisi",
    "badge": "Premium Over-Ear ANC",
    "featured": false,
    "shortDescription": "10 mikrofonlu dijital hibrit ANC, gizlenebilir mikrofon kolu, 37 saat pil ve 40mm kaçak önleyici hoparlörler.",
    "specs": {
      "ANC": "10 Mikrofonlu Dijital Hibrit ANC",
      "Hoparlör": "40mm Müzik ve Ses Hoparlörleri",
      "Batarya": "37 Saate Kadar Pil Ömrü",
      "Mikrofon Kolu": "Gizlenebilir Manyetik Mikrofon Kolu"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/f/5/3/3/f533de7b571a9ee33edc8770df0c04c681da49c3_Jabra_Evolve2_85_UC_00.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-evolve/jabra-evolve2-85"
  },
  {
    "id": "jabra-evolve2-75",
    "brand": "Jabra",
    "model": "Jabra Evolve2 75",
    "category": "Ofis Kulaklıkları",
    "subcategory": "Evolve2 Serisi",
    "badge": "Hibrit Standart",
    "featured": true,
    "shortDescription": "8 mikrofonlu gelişmiş ses mühendisliği, ayarlanabilir Jabra Advanced ANC ve çift köpüklü deri yastıklar.",
    "specs": {
      "Mikrofon": "8 Mikrofonlu Gelişmiş Dizilim",
      "ANC": "11 Seviyeli Ayarlanabilir Jabra Advanced ANC",
      "Batarya": "36 Saate Kadar Müzik / 24 Saat Konuşma",
      "Konfor": "Çift Köpüklü Ergonomik Kulak Yastıkları"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/4/6/c/2/46c285a2f501c185110159f5432e1250cd2251c8_Evolve2_75_MS_USB_A_01.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-evolve/jabra-evolve2-75"
  },
  {
    "id": "jabra-evolve2-65-flex",
    "brand": "Jabra",
    "model": "Jabra Evolve2 65 Flex",
    "category": "Ofis Kulaklıkları",
    "subcategory": "Evolve2 Serisi",
    "badge": "Katlanabilir Mobil",
    "featured": true,
    "shortDescription": "Katlanabilir menteşe tasarımı, Jabra Air Comfort konforu ve Hibrit ANC.",
    "specs": {
      "Tasarım": "Katlanabilir Menteşe & Air Comfort Kafa Bandı",
      "Gürültü Engelleme": "Hibrit Aktif Gürültü Önleme (ANC)",
      "Kablosuz": "Bluetooth 5.2 + Kablosuz Şarj Standı Desteği"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/2/2/6/1226d76923e8f48a4179aaa3cb477f16a74ed139_02_evolve2_55_ms_stereo.png",
    "officialUrl": "https://www.jabra.com/en-emea/business/office-headsets/jabra-evolve/jabra-evolve2-65-flex"
  },
  {
    "id": "jabra-evolve2-55",
    "brand": "Jabra",
    "model": "Jabra Evolve2 55",
    "category": "Ofis Kulaklıkları",
    "subcategory": "Evolve2 Serisi",
    "badge": "Hafif ANC",
    "featured": false,
    "shortDescription": "Aktif Gürültü Önlemeli (ANC), çift cihaz bağlantılı ve ultra hafif ofis kulaklığı.",
    "specs": {
      "ANC": "Aktif Gürültü Önleme",
      "Bağlantı": "Bluetooth ve Link 380 USB Adaptör",
      "Batarya": "16 Saat Konuşma / 18 Saat Dinleme"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/2/2/6/1226d76923e8f48a4179aaa3cb477f16a74ed139_02_evolve2_55_ms_stereo.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-evolve/jabra-evolve2-55"
  },
  {
    "id": "jabra-evolve2-50",
    "brand": "Jabra",
    "model": "Jabra Evolve2 50",
    "category": "Ofis Kulaklıkları",
    "subcategory": "Evolve2 Serisi",
    "badge": "Kablolu + BT Çift Bağlantı",
    "featured": true,
    "shortDescription": "Kablolu USB bağlantısına ek olarak akıllı telefona Bluetooth ile eşleşebilen ANC'li hibrit model.",
    "specs": {
      "Bağlantı": "Kablolu USB-A veya USB-C + Eşzamanlı Bluetooth",
      "Gürültü Engelleme": "Aktif Gürültü Önleme (ANC)",
      "Mikrofon": "Akıllı mikrofon susturma (kolu kaldırınca sessize alma)"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/2/2/6/1226d76923e8f48a4179aaa3cb477f16a74ed139_02_evolve2_55_ms_stereo.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-evolve/jabra-evolve2-50"
  },
  {
    "id": "jabra-engage-75-se",
    "brand": "Jabra",
    "model": "Jabra Engage 75 SE",
    "category": "Çağrı Merkezi Kulaklıkları",
    "subcategory": "Engage DECT Serisi",
    "badge": "150m DECT & 5 Cihaz",
    "featured": true,
    "shortDescription": "150 metre DECT kablosuz menzil, askeri düzeyde FIPS 256-bit şifreleme ve aynı anda 5 cihaza eşzamanlı bağlantı.",
    "specs": {
      "Kablosuz Menzil": "150 Metreye (490ft) kadar DECT Menzili",
      "Kapasite Yoğunluğu": "Aynı ofiste geleneksel DECT'e göre 3 kat daha fazla eşzamanlı kullanıcı",
      "Çoklu Bağlantı": "Aynı anda 5 Cihaz (1 Masa Telefonu + 2 USB PC + 2 Bluetooth Mobil)",
      "Güvenlik": "DECT Security Level C Üzeri FIPS 256-bit AES Şifreleme",
      "Batarya": "13 Saate Kadar Kesintisiz Konuşma, Hızlı Şarj",
      "İşitme Koruması": "PeakStop ve IntelliTone 2.0 Ses Seviyesi Sınırlama"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/c/c/c/4/ccc404ec906d9c80b3b15373f3132dc75a3e9077_00_Engage_75_Mono_CMF.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-engage/jabra-engage-75-se"
  },
  {
    "id": "jabra-engage-55-se",
    "brand": "Jabra",
    "model": "Jabra Engage 55 SE",
    "category": "Çağrı Merkezi Kulaklıkları",
    "subcategory": "Engage DECT Serisi",
    "badge": "Taşınabilir DECT USB",
    "featured": false,
    "shortDescription": "Hantal baz istasyonu gerektirmeyen, esnek Link 400 USB DECT adaptörüyle 150m menzil sunan taşınabilir DECT kulaklık.",
    "specs": {
      "Menzil": "150 Metre DECT Menzili",
      "Adaptör": "Önceden eşleştirilmiş Link 400 Esnek USB DECT Dongle",
      "Güvenlik": "FIPS 256-bit Askeri Düzey Şifreleme",
      "Ağırlık": "Ultra Hafif Tasarım (Mono veya Stereo Seçeneği)"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/9/c/d/b/9cdb19ced1919783ddcc216a566b0e53d302b67e_Jabra_Engage_55_Mono_UC_Angled_USB_A_Adapter_01.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-engage/jabra-engage-55/buy"
  },
  {
    "id": "jabra-engage-50-ii",
    "brand": "Jabra",
    "model": "Jabra Engage 50 II",
    "category": "Çağrı Merkezi Kulaklıkları",
    "subcategory": "Engage Kablolu Serisi",
    "badge": "Canlı Konuşma Analitiği",
    "featured": true,
    "shortDescription": "3 mikrofonlu yapay zeka destekli gürültü engelleme, Engage+ gerçek zamanlı konuşma analitiği ve SmartRinger akıllı kontrol ünitesi.",
    "specs": {
      "Mikrofon": "3 Mikrofonlu Akıllı Gürültü Engelleme (-36dB)",
      "Yazılım": "Jabra Engage+ Canlı Ajan Rehberliği",
      "Kontrol Ünitesi": "Link Controller (SmartRinger Akıllı Zil ve Ses Kontrolü)",
      "Dayanıklılık": "Tüm gün kullanıma uygun ultra dayanıklı gövde ve kafa bandı"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/5/f/4/3/5f43f4cd2b92b2d9f4716c2bc36e6394288afd2e_Jabra_Engage_50_II_Mono_wLink_Plus_UC_00.png",
    "officialUrl": "https://www.jabra.com/business/office-headsets/jabra-engage/jabra-engage-50-ii"
  },
  {
    "id": "jabra-biz-2400-ii",
    "brand": "Jabra",
    "model": "Jabra Biz 2400 II",
    "category": "Çağrı Merkezi Kulaklıkları",
    "subcategory": "Biz & Pro Serisi",
    "badge": "Ultra Dayanıklı Kevlar",
    "featured": false,
    "shortDescription": "Kevlar takviyeli kopmaz kablo, 360° dönebilen kırılmaz FreeSpin mikrofon kolu ve Air Shock nefes filtresi.",
    "specs": {
      "Kablo": "Kevlar® Güçlendirilmiş Kopmaz Kablo",
      "Mikrofon Kolu": "360° Kırılmaz FreeSpin™ Kolu",
      "Filtre": "Air Shock Nefes ve Patlama Sesi Engelleyici",
      "Bağlantı": "Hızlı Çıkarılabilir QD (Quick Disconnect) veya USB"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/1/6/1/116124aaf35ab7c5fe8ecc2f8190edf735b30407_Jabra_Biz2300_mono_angle_transp_01_Jabra_Biz_2300_QD_Mono_0001_Jabra_Biz2300_mono_angle_transp_.png",
    "officialUrl": "https://www.jabra.com/business/contact-center-headsets/jabra-biz-2400ii/buy"
  },
  {
    "id": "jabra-biz-2300",
    "brand": "Jabra",
    "model": "Jabra Biz 2300",
    "category": "Çağrı Merkezi Kulaklıkları",
    "subcategory": "Biz & Pro Serisi",
    "badge": "49g Ultra Hafif",
    "featured": false,
    "shortDescription": "Sadece 49 gram ağırlığıyla gün boyu hissedilmeyen konfor ve HD ses netliği.",
    "specs": {
      "Ağırlık": "Sadece 49g (Mono) / 68g (Duo)",
      "Mikrofon": "Gürültü Önleyici Mikrofon",
      "Bağlantı": "USB veya QD"
    },
    "useCases": [
      "Hibrit çalışma, kurumsal ofis ve açık ofis çalışanları",
      "Microsoft Teams ve Zoom üzerinden profesyonel toplantılar",
      "Gürültülü ortamlarda kristal netliğinde ses ve yapay zekalı video"
    ],
    "imageUrl": "https://assets2.jabra.com/1/1/6/1/116124aaf35ab7c5fe8ecc2f8190edf735b30407_Jabra_Biz2300_mono_angle_transp_01_Jabra_Biz_2300_QD_Mono_0001_Jabra_Biz2300_mono_angle_transp_.png",
    "officialUrl": "https://www.jabra.com/business/contact-center-headsets/jabra-biz-2300/buy"
  },
  {
    "id": "fanvil-v67",
    "brand": "Fanvil",
    "model": "Fanvil V67",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi Amiral Gemisi Video Telefon",
    "badge": "Amiral Gemisi",
    "featured": true,
    "shortDescription": "7 inç ayarlanabilir dokunmatik ekranlı, 5MP HD dahili kameralı, Android 9.0 işletim sistemli ve antibakteriyel yüzeyli amiral gemisi görüntülü IP telefon.",
    "specs": {
      "SIP Hat ve DSS": "20 SIP Hattı, 112 Tek Dokunuşlu DSS Tuşu",
      "Ekran ve Kamera": "7 inç (1024x600) Ayarlanabilir Dokunmatik, 5MP 1080p Kamera",
      "Kablosuz": "Dahili 2.4G/5G Çift Bant Wi-Fi ve Bluetooth 5.0",
      "Özel Tasarım": "Antibakteriyel Ahize/Tuş Takımı ve RGB Işıklı Tuşlar"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20230714/11044x08v2.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20220321/7299.html"
  },
  {
    "id": "fanvil-v66",
    "brand": "Fanvil",
    "model": "Fanvil V66",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi Üst Düzey İş Telefonu",
    "badge": "7\" Dokunmatik",
    "featured": false,
    "shortDescription": "7 inç ayarlanabilir IPS dokunmatik ekran, 20 SIP hattı, 116 DSS tuşu, dahili çift bant Wi-Fi 6 ve Bluetooth 5.4 destekli kurumsal yönetici telefonu.",
    "specs": {
      "SIP Hat ve DSS": "20 SIP Hattı, 116 DSS Tuşu",
      "Ekran": "7 inç (1024x600) Ayarlanabilir IPS Dokunmatik",
      "Kablosuz": "Dahili 2.4G/5G Wi-Fi 6 ve Bluetooth 5.4",
      "Ağ": "Çift Gigabit Ethernet, PoE"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20241205/1721b4hxb6.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20241205/9270.html"
  },
  {
    "id": "fanvil-v65",
    "brand": "Fanvil",
    "model": "Fanvil V65",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi İş Telefonları",
    "badge": "Çok Satan",
    "featured": false,
    "shortDescription": "4.3 inç ayarlanabilir renkli ekranlı, dahili çift bant Wi-Fi ve Bluetooth 5.0 destekli üst düzey yönetici IP telefonu.",
    "specs": {
      "SIP Hat ve DSS": "20 SIP Hattı, 45 DSS/BLF Tuşu",
      "Ekran": "4.3 inç Ayarlanabilir IPS Renkli Ekran",
      "Kablosuz": "Entegre 2.4G/5G Wi-Fi ve Bluetooth 5.0",
      "Ağ": "Çift Gigabit Ethernet Portu, Entegre PoE"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20230605/1347062820.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20220321/7300.html"
  },
  {
    "id": "fanvil-v64",
    "brand": "Fanvil",
    "model": "Fanvil V64",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi İş Telefonları",
    "badge": "Wi-Fi & BT Dahili",
    "featured": false,
    "shortDescription": "3.5 inç renkli LCD ekran, 12 SIP hattı, 21 DSS tuşu, dahili çift bant Wi-Fi ve Bluetooth 5.0 ile modern ofisler için kurumsal IP telefon.",
    "specs": {
      "SIP Hat ve DSS": "12 SIP Hattı, 21 DSS Tuşu",
      "Ekran": "3.5 inç (480x320) Renkli LCD",
      "Kablosuz": "Dahili 2.4G/5G Wi-Fi ve Bluetooth",
      "Ağ": "Çift Gigabit Port, PoE"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20230605/1354v6806j.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20220321/7301.html"
  },
  {
    "id": "fanvil-v63",
    "brand": "Fanvil",
    "model": "Fanvil V63",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi İş Telefonları",
    "badge": "Kurumsal Standart",
    "featured": false,
    "shortDescription": "2.8 inç renkli ekran, 6 SIP hattı, 21 DSS tuşu, çift Gigabit PoE port ve şık kristal tuş takımıyla kurumsal masaüstü IP telefon.",
    "specs": {
      "SIP Hat ve DSS": "6 SIP Hattı, 21 DSS Tuşu",
      "Ekran": "2.8 inç Renkli Ekran",
      "Ağ": "Çift Gigabit Port, PoE",
      "Ses": "Opus ve G.722 HD Ses"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20230919/10056ndxtb.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20230919/8545.html"
  },
  {
    "id": "fanvil-v62-pro",
    "brand": "Fanvil",
    "model": "Fanvil V62 Pro",
    "category": "IP Masa Telefonları",
    "subcategory": "V Serisi İş Telefonları",
    "badge": "Kablosuz BT Ahize",
    "featured": false,
    "shortDescription": "Kablosuz Bluetooth ahizesi, 2.8 inç renkli ekranı, 12 SIP hattı, dahili Wi-Fi 6 ve Bluetooth 5.4 özelliğiyle özgür hareket imkanı sunan iş telefonu.",
    "specs": {
      "SIP Hat ve DSS": "12 SIP Hattı, 21 DSS Tuşu",
      "Ahize": "Kablosuz Bluetooth Ahize",
      "Kablosuz": "Dahili Wi-Fi 6 ve Bluetooth 5.4",
      "Ağ": "Çift Gigabit PoE"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20241205/1729lr6dx0.png",
    "officialUrl": "https://www.fanvil.com/products/p1/v%20series%20ip%20phone/20241205/9271.html"
  },
  {
    "id": "fanvil-x210",
    "brand": "Fanvil",
    "model": "Fanvil X210 & X210i Konsol IP Telefon",
    "category": "IP Masa Telefonları",
    "subcategory": "X Serisi Konsol & Yönetici Telefonları",
    "badge": "3 Ekranlı Konsol",
    "featured": true,
    "shortDescription": "3 adet renkli ekranı, toplam 106 DSS/BLF tuşu ve X210i modelinde kazboynu anons mikrofonuyla yoğun çağrı trafiğini yöneten konsol IP telefon.",
    "specs": {
      "Ekran Yapısı": "4.3 inç Ana Renkli Ekran + 2x 3.5 inç Yan DSS Renkli Ekran",
      "SIP ve DSS": "20 SIP Hattı, 106 Toplam DSS Tuşu",
      "Varyant": "X210 (Yönetici/Sekreterya) ve X210i (Kazboynu Mikrofonlu Anons)"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210628/1127hv2046.png",
    "officialUrl": "https://www.fanvil.com/products/p1/x/20210921/5040.html"
  },
  {
    "id": "fanvil-x7a",
    "brand": "Fanvil",
    "model": "Fanvil X7A (Kameralı / Standart)",
    "category": "IP Masa Telefonları",
    "subcategory": "X Serisi Dokunmatik Android Telefonlar",
    "badge": "7\" Android",
    "featured": false,
    "shortDescription": "7 inç kapasitif dokunmatik ekran, 20 SIP hattı, 112 DSS tuşu, dahili Wi-Fi/Bluetooth ve opsiyonel USB kameralı Android kurumsal IP telefon.",
    "specs": {
      "Ekran": "7 inç Renkli Dokunmatik Ekran, Android 9.0",
      "SIP ve DSS": "20 SIP Hattı, 112 Sanal DSS Tuşu",
      "Kablosuz": "Dahili Çift Bant Wi-Fi ve Bluetooth"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210623/1647tb08tx.png",
    "officialUrl": "https://www.fanvil.com/products/p1/x/20210921/5044.html"
  },
  {
    "id": "fanvil-x6u",
    "brand": "Fanvil",
    "model": "Fanvil X6U",
    "category": "IP Masa Telefonları",
    "subcategory": "XU Serisi Çift/Üç Ekranlı IP Telefonlar",
    "badge": "3 Renkli Ekran",
    "featured": false,
    "shortDescription": "4.3 inç ana renkli ekran ve 2 adet 2.4 inç yan renkli DSS ekranı, 20 SIP hattı, 60 DSS tuşu, dahili Bluetooth ve Harman hoparlörlü üst düzey telefon.",
    "specs": {
      "Ekran": "4.3 inç Ana Ekran + 2 Adet 2.4 inç Yan Renkli DSS Ekranı",
      "SIP ve DSS": "20 SIP Hattı, 60 DSS Tuşu",
      "Ses": "Harman Kardon Hoparlör, HD Ses"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210629/1500rx2r62.png",
    "officialUrl": "https://www.fanvil.com/products/p1/xu/20210921/5049.html"
  },
  {
    "id": "fanvil-x5u",
    "brand": "Fanvil",
    "model": "Fanvil X5U & X5U-R (Kırmızı Acil)",
    "category": "IP Masa Telefonları",
    "subcategory": "XU Serisi Çift Ekranlı IP Telefonlar",
    "badge": "Çift Ekran + BT",
    "featured": false,
    "shortDescription": "3.5 inç ana renkli ekran + 2.4 inç yan DSS ekranı, 16 SIP hattı, 30 DSS tuşu, dahili Bluetooth, Harman hoparlör ve X5U-R kırmızı acil durum modeli.",
    "specs": {
      "Ekran": "3.5 inç Renkli Ana Ekran + 2.4 inç Renkli Yan DSS Ekranı",
      "SIP ve DSS": "16 SIP Hattı, 30 DSS Tuşu",
      "Özel Model": "X5U-R Kırmızı Acil Durum / İtfaiye / Güvenlik Hattı Modeli"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210629/1552j80h2r.png",
    "officialUrl": "https://www.fanvil.com/products/p1/xu/20210921/5048.html"
  },
  {
    "id": "fanvil-x4u-x3u",
    "brand": "Fanvil",
    "model": "Fanvil X4U & X3U Pro",
    "category": "IP Masa Telefonları",
    "subcategory": "XU Serisi Kurumsal IP Telefonlar",
    "badge": "Çift Gigabit",
    "featured": false,
    "shortDescription": "2.8 inç renkli ana ekran + 2.4 inç yan DSS ekranlı 12 hatlı X4U ve 6 SIP hatlı renkli ekranlı X3U Pro kurumsal Gigabit IP telefonlar.",
    "specs": {
      "X4U Özellikleri": "12 SIP Hattı, Çift Renkli Ekran, 30 DSS Tuşu, Çift Gigabit PoE",
      "X3U Pro Özellikleri": "6 SIP Hattı, 2.8 inç Renkli Ekran, 3 Hat Tuşu, Çift Gigabit"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210629/1747vp8064.png",
    "officialUrl": "https://www.fanvil.com/products/p1/xu/20210921/5046.html"
  },
  {
    "id": "fanvil-h6w-h5w",
    "brand": "Fanvil",
    "model": "Fanvil H6W & H5W Renkli Ekranlı Otel Telefonu",
    "category": "Otel Telefonları",
    "subcategory": "H Serisi Otel IP Telefonları",
    "badge": "3.5\" Renkli Otel",
    "featured": false,
    "shortDescription": "3.5 inç renkli ekranında otel logosu, oda servisi bilgileri ve kapı kamerası gösterebilen, dahili çift bant Wi-Fi ve USB şarj portlu lüks otel IP telefonu.",
    "specs": {
      "Ekran": "3.5 inç Renkli LCD (Otel Tanıtım Görseli Gösterimi)",
      "Wi-Fi": "Dahili 2.4G/5G Wi-Fi",
      "Şarj": "1 Adet USB Şarj Portu"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20241218/11212p8t20.png",
    "officialUrl": "https://www.fanvil.com/products/p1/h%20xiliejiudianhuaji/20240808/8990.html"
  },
  {
    "id": "fanvil-h4w-h3w-h1",
    "brand": "Fanvil",
    "model": "Fanvil H4W / H4 / H3W / H1 Otel Telefonları",
    "category": "Otel Telefonları",
    "subcategory": "H Serisi Otel IP Telefonları",
    "badge": "Otel Standart",
    "featured": false,
    "shortDescription": "Otel odaları için özelleştirilebilir ön yüzeyli (faceplate), 6 hızlı arama tuşlu, USB şarj portlu, PoE ve Wi-Fi (H4W/H3W) seçenekli otel telefonları.",
    "specs": {
      "Modeller": "H4W (Wi-Fi), H4 (PoE), H3W (Wi-Fi), H1 (Ekonomik 8 Hızlı Tuşlu)",
      "Özellik": "Resepsiyon, Kat Hizmetleri, Restoran Tek Tuş Arama"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20240808/1145jj20tl.png",
    "officialUrl": "https://www.fanvil.com/products/p1/h%20xiliejiudianhuaji/20240808/8992.html"
  },
  {
    "id": "fanvil-h2u",
    "brand": "Fanvil",
    "model": "Fanvil H2U Kompakt Duvar / Banyo IP Telefonu",
    "category": "Otel Telefonları",
    "subcategory": "H Serisi Otel IP Telefonları",
    "badge": "Banyo & Duvar Tipi",
    "featured": false,
    "shortDescription": "Otel banyoları, koridorlar, asansör holleri ve hastane odaları için kompakt duvar/masa tipi, 10 hızlı arama tuşlu ve PoE destekli mini IP telefon.",
    "specs": {
      "Tasarım": "Kompakt Duvar ve Masaüstü Kullanım, Siyah ve Beyaz Renk",
      "SIP ve Tuşlar": "2 SIP Hattı, 10 Programlanabilir Hızlı Arama Tuşu, 1 DSS Tuşu"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20220518/1513n642vl.png",
    "officialUrl": "https://www.fanvil.com/products/p1/h%20xiliejiudianhuaji/20210921/5056.html"
  },
  {
    "id": "linkvil-w611w",
    "brand": "Fanvil",
    "model": "LINKVIL W611W Taşınabilir Endüstriyel Wi-Fi Telefon",
    "category": "Kablosuz WiFi Telefonlar",
    "subcategory": "Taşınabilir Wi-Fi IP Telefonlar",
    "badge": "IP67 Dayanıklı",
    "featured": false,
    "shortDescription": "IP67 su, toz ve 1.8 metre düşme dayanıklılığına sahip, depo, fabrika, otel ve hastaneler için tasarlanmış endüstriyel taşınabilir Wi-Fi 6 telefon.",
    "specs": {
      "Dayanıklılık": "IP67 Sertifikalı Su/Toz Geçirmez Gövde",
      "Kablosuz": "Çift Bant 2.4G/5G Wi-Fi 6, Bluetooth 5.0",
      "Batarya": "1900mAh Batarya, 9 Saat Konuşma, 200 Saat Bekleme"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/linkvilresource/Uploads/product/20220815/62f9dea7a5744.png",
    "officialUrl": "https://www.fanvil.com/linkvil/info/id/119.html"
  },
  {
    "id": "fanvil-i64",
    "brand": "Fanvil",
    "model": "Fanvil i64 Tuş Takımlı Görüntülü Kapı İnterkomu",
    "category": "İnterkom & Kapı Telefonu",
    "subcategory": "i6 Serisi Görüntülü Kapı İnterkomları",
    "badge": "IP66 & IK07 Şifreli",
    "featured": false,
    "shortDescription": "Tam sayısal şifre tuş takımı, alüminyum alaşımlı dış ortam tasarımı, 2MP geniş açılı gece görüşlü kamerası ve RFID kart okuyuculu akıllı SIP kapı telefonu.",
    "specs": {
      "Kamera": "2MP 1080p Full HD Geniş Açılı Gece Görüşlü Kamera (ONVIF)",
      "Geçiş Kontrol": "Şifre Tuş Takımı, RFID/IC Kart, İç İstasyon, Uzaktan DTMF ve BLE"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20240605/11564jnr64.png",
    "officialUrl": "https://www.fanvil.com/products/p5/i6%20series%20high-end%20video%20door%20phone/20220402/7321.html"
  },
  {
    "id": "fanvil-i63-i62-i61-i60",
    "brand": "Fanvil",
    "model": "Fanvil i63 / i62 / i61 & i60 / i60K Kapı İnterkomları",
    "category": "İnterkom & Kapı Telefonu",
    "subcategory": "i6 Serisi Görüntülü Kapı İnterkomları",
    "badge": "Villa & Plaza Giriş",
    "featured": false,
    "shortDescription": "5 tuşlu (i63), tek tuşlu (i61/i62) alüminyum alaşım modeller ve kompakt IP65 korumalı i60 / i60K (şifreli) görüntülü kapı telefonları.",
    "specs": {
      "Modeller": "i63 (5 Butonlu), i62 & i61 (Tek Butonlu), i60K (Kompakt Tuş Takımlı), i60 (Kompakt Tek Tuş)",
      "Dayanıklılık": "IP66/IP65 Su ve Toz Koruması, Gece Görüşlü Kamera"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20220402/1629z6r28l.png",
    "officialUrl": "https://www.fanvil.com/products/p5/i6%20series%20high-end%20video%20door%20phone/20220402/7319.html"
  },
  {
    "id": "fanvil-a12v-a11v-i16sv",
    "brand": "Fanvil",
    "model": "Fanvil A12V / A11V / i16SV / i16SV-02P Endüstriyel SOS İnterkomlar",
    "category": "İnterkom & Kapı Telefonu",
    "subcategory": "Dış Ortam Acil Durum (SOS) & Endüstriyel İnterkomlar",
    "badge": "IP66 & IK10 Vandalizm",
    "featured": false,
    "shortDescription": "Otoyol, tünel, otopark, maden ve kampüsler için paslanmaz çelik / alüminyum gövdeli, IP65/IP66 ve IK10 darbe dayanımlı sesli ve kameralı SOS acil çağrı interkomları.",
    "specs": {
      "Modeller": "A12V/A12 (Paslanmaz Çelik), A11V/A11, i16S/i16SV (Tek Buton), i16S-02P/i16SV-02P (Çift Buton)",
      "Dayanıklılık": "IP65/IP66 Su Geçirmezlik ve IK10 Darbe Koruması"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20241211/094368dd40.png",
    "officialUrl": "https://www.fanvil.com/products/p5/sip%20duijiang2/20241211/9306.html"
  },
  {
    "id": "fanvil-i10sv-a10-h501",
    "brand": "Fanvil",
    "model": "Fanvil i10SV / i10S / i10D & A10 / H501 Mini SIP İnterkomlar",
    "category": "İnterkom & Kapı Telefonu",
    "subcategory": "İç Ortam Mini SIP İnterkomlar",
    "badge": "Kompakt Mini İnterkom",
    "featured": false,
    "shortDescription": "Asansörler, gişeler, otopark bariyerleri, temiz odalar ve otel kapı önleri için kompakt tasarımlı sesli ve görüntülü mini SIP interkom ailesi.",
    "specs": {
      "Modeller": "i10S/i10SV/i10SD, i10/i10D, A10 Serisi (Siyah/Beyaz, Wi-Fi), H501 Serisi",
      "Kullanım": "Asansör İçi Acil İletişim, Banka/Hastane Gişesi, Bariyer Noktaları"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20230615/15100bj204.png",
    "officialUrl": "https://www.fanvil.com/products/p5/sip%20duijiang2/20210921/5027.html"
  },
  {
    "id": "fanvil-pa3-pa2s",
    "brand": "Fanvil",
    "model": "Fanvil PA3 & PA2S SIP Paging / Anons Gateway",
    "category": "Paging & Seslendirme",
    "subcategory": "SIP Paging & Ses/Görüntü Ağ Geçitleri",
    "badge": "Amfi IP Dönüştürücü",
    "featured": false,
    "shortDescription": "Mevcut analog anons amfilerini ve hoparlörlerini IP santrale ve SIP Multicast anons sistemine dönüştüren PA3 ve PA2S SIP Paging Gateway modülleri.",
    "specs": {
      "PA3": "Line-In/Line-Out, USB/TF Karttan Zamanlı Zil ve Müzik Yayını, Dahili Amfi Çıkışı",
      "PA2S": "SIP Anons + Acil İnterkom + Kamera Tetikleme Ağ Geçidi"
    },
    "useCases": [
      "Şirket santrali, çağrı merkezi ve plaza ofis masaüstü iletişimi",
      "Grandstream, 3CX, Asterisk ve bulut PBX santrallerle kusursuz entegrasyon",
      "Yüksek dayanıklılık, PoE desteği ve HD ses kalitesi"
    ],
    "imageUrl": "https://www.fanvil.com/upload/images/20210712/1332v00x4d.png",
    "officialUrl": "https://www.fanvil.com/products/p5/wulianwangwangguan_1/20210921/5036.html"
  }
];
