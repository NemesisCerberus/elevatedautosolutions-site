import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import TriviaPage from './TriviaPage';
import BlogPage from './BlogPage';
import ProductsPage from './ProductsPage';
import DomainsPage from './DomainsPage';

interface TriviaPageProps {
  navigateToPage: (page: string) => void;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        navigateToPage('domains');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToHomeAndScroll = (hash: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for HomePage to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const logoSrc = "/ElevatED White Background.png";

  return (
    <>
      {currentPage !== 'trivia' && (
        <header>
          <div className="container nav" role="navigation" aria-label="Main">
            <a href="#" onClick={(e) => { 
              e.preventDefault();
              const newCount = logoClickCount + 1;
              setLogoClickCount(newCount);
              if (newCount === 3) {
                navigateToPage('domains');
                setLogoClickCount(0);
              } else {
                navigateToPage('home');
                setTimeout(() => setLogoClickCount(0), 2000);
              }
            }} className="brand" style={{ cursor: 'pointer' }}>
              <img src={logoSrc} alt="ElevatED Automotive Solutions logo" className="brand-logo" />
              <h1 aria-label="ElevatED Automotive Solutions">
                <span style={{ color: '#64748B' }}>Elevat</span><span style={{ color: '#0066ff' }}>Ed</span><span style={{ color: '#64748B' }}> Automotive Solutions</span>
              </h1>
            </a>
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className={mobileMenuOpen ? 'open' : ''} />
              <span className={mobileMenuOpen ? 'open' : ''} />
              <span className={mobileMenuOpen ? 'open' : ''} />
            </button>
            <nav 
              className={`menu ${mobileMenuOpen ? 'active' : ''}`}
              aria-label="Primary"
            >
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('products'); }}>Products</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }}>Blog</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('#about'); }}>About</a>
              <a href="mailto:info@elevatedautosolutions.com">Contact</a>
            </nav>
          </div>
        </header>
      )}

      {currentPage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {currentPage === 'trivia' && <TriviaPage navigateToPage={navigateToPage} />}
      {currentPage === 'blog' && <BlogPage navigateToPage={navigateToPage} />}
      {currentPage === 'products' && <ProductsPage navigateToPage={navigateToPage} />}
      {currentPage === 'domains' && <DomainsPage navigateToPage={navigateToPage} />}

      {currentPage !== 'trivia' && currentPage !== 'domains' && (
        <footer>
          <div className="container footer-grid">
            <div style={{ fontSize: '15px' }}>
              © <span id="year"></span> ElevatED Automotive Solutions LLC. All rights reserved.
            </div>
            <div className="social" aria-label="Social links">
              {/* Social icons would go here */}
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default App;