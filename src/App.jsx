import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Core Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import ReferanslarPage from './pages/ReferanslarPage';

// Dedicated Kurumsal Pages
import HakkimizdaPage from './pages/kurumsal/HakkimizdaPage';
import AktifTecrubePage from './pages/kurumsal/AktifTecrubePage';
import SistemGuvenlikPage from './pages/kurumsal/SistemGuvenlikPage';
import BankaHesaplariPage from './pages/kurumsal/BankaHesaplariPage';

// Dedicated Hizmetler Pages
import IpSanalSantralPage from './pages/hizmetler/IpSanalSantralPage';
import SipTrunkPage from './pages/hizmetler/SipTrunkPage';
import MonitesPage from './pages/hizmetler/MonitesPage';
import CrmPage from './pages/hizmetler/CrmPage';

import { PRODUCTS } from './data/products';

const VALID_VIEWS = [
  'home',
  'hakkimizda',
  'aktif-tecrube',
  'sistem-guvenlik',
  'banka-hesaplari',
  'ip-sanal-santral',
  'sip-trunk',
  'monites',
  'crm',
  'referanslar',
  'cozumler',
  'urunler',
  'paketler',
  'iletisim'
];

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync with window.location.hash for shareable URLs and browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('urun/')) {
        const productId = hash.replace('urun/', '');
        const found = PRODUCTS.find(p => p.id === productId);
        if (found) {
          setSelectedProduct(found);
          setCurrentView('urun-detay');
          return;
        }
      }

      if (VALID_VIEWS.includes(hash)) {
        setCurrentView(hash);
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view, resetScroll = true) => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? '' : view;
    if (resetScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const viewProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentView('urun-detay');
    window.location.hash = `urun/${product.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    navigateTo('urunler');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#004A93] selection:text-white">
      
      {/* Global Header */}
      <Header 
        currentView={currentView}
        navigateTo={navigateTo}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage 
            navigateTo={navigateTo}
            viewProductDetail={viewProductDetail}
            setActiveCategory={setActiveCategory}
          />
        )}

        {/* Dedicated Kurumsal Pages */}
        {currentView === 'hakkimizda' && (
          <HakkimizdaPage navigateTo={navigateTo} />
        )}
        {currentView === 'aktif-tecrube' && (
          <AktifTecrubePage navigateTo={navigateTo} />
        )}
        {currentView === 'sistem-guvenlik' && (
          <SistemGuvenlikPage navigateTo={navigateTo} />
        )}
        {currentView === 'banka-hesaplari' && (
          <BankaHesaplariPage navigateTo={navigateTo} />
        )}

        {/* Dedicated Hizmetler Pages */}
        {currentView === 'ip-sanal-santral' && (
          <IpSanalSantralPage navigateTo={navigateTo} />
        )}
        {currentView === 'sip-trunk' && (
          <SipTrunkPage navigateTo={navigateTo} />
        )}
        {currentView === 'monites' && (
          <MonitesPage navigateTo={navigateTo} />
        )}
        {currentView === 'crm' && (
          <CrmPage navigateTo={navigateTo} />
        )}

        {/* Dedicated Referanslar Page */}
        {currentView === 'referanslar' && (
          <ReferanslarPage navigateTo={navigateTo} />
        )}

        {/* General Solutions Overview */}
        {currentView === 'cozumler' && (
          <SolutionsPage navigateTo={navigateTo} />
        )}

        {/* Product Catalog & Details */}
        {currentView === 'urunler' && (
          <ProductsPage 
            viewProductDetail={viewProductDetail}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            navigateTo={navigateTo}
          />
        )}
        {currentView === 'urun-detay' && (
          <ProductDetailPage 
            product={selectedProduct}
            onBack={handleBackToProducts}
            onInquire={() => navigateTo('iletisim')}
          />
        )}

        {/* Packages & Consultation */}
        {currentView === 'paketler' && (
          <PackagesPage navigateTo={navigateTo} />
        )}

        {/* Contact Page with Google Maps */}
        {currentView === 'iletisim' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        navigateTo={navigateTo}
        setActiveCategory={setActiveCategory}
      />

    </div>
  );
}
