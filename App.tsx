import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import TriviaPage from './TriviaPage';
import BlogPage from './BlogPage';
import ProductsPage from './ProductsPage';

interface TriviaPageProps {
  navigateToPage: (page: string) => void;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

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
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} className="brand" style={{ cursor: 'pointer' }}>
              <img src={logoSrc} alt="ElevatED Automotive Solutions logo" className="brand-logo" />
              <h1 aria-label="ElevatED Automotive Solutions">ElevatED Automotive Solutions</h1>
            </a>
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
              }}
            >
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--charcoal)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(11px)' : 'none'
              }} />
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--charcoal)',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }} />
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--charcoal)',
                transition: 'all 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-11px)' : 'none'
              }} />
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

      {currentPage !== 'trivia' && (
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