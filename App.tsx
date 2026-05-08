import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import TriviaPage from './TriviaPage';
import BlogPage from './BlogPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

  // Handle hash-based routing on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/blog')) {
      setCurrentPage('blog');
    }
  }, []);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateToHomeAndScroll = (hash: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
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
              <img src={logoSrc} alt="ElevatED Automotive Solutions logo" className="brand-logo" style={{ borderRadius: '10px' }} />
              <h1 aria-label="ElevatEd Automotive Solutions">Elevat<span>Ed</span> Automotive Solutions</h1>
            </a>
            <nav className="menu" aria-label="Primary">
              <a href="#products" onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('#products'); }}>Products</a>
              <a href="#partners" onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('#partners'); }}>Partners</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); navigateToHomeAndScroll('#about'); }}>About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }}>Blog</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('trivia'); }}>AI Professor</a>
              <a href="mailto:info@elevatedautosolutions.com">Contact</a>
            </nav>
          </div>
        </header>
      )}

      {currentPage === 'home' && <HomePage navigateToPage={navigateToPage} />}
      {currentPage === 'trivia' && <TriviaPage navigateToPage={navigateToPage} />}
      {currentPage === 'blog' && <BlogPage navigateToPage={navigateToPage} />}

      {currentPage !== 'trivia' && (
        <footer style={{
          background: 'var(--navy-deepest)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '32px 0'
        }}>
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              &copy; <span id="year"></span> Elevat<span style={{ color: 'var(--primary-blue)' }}>Ed</span> Automotive Solutions LLC. All rights reserved.
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
              Educate. Elevate. Excel.
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default App;
