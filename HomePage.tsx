import React, { useEffect, useState } from 'react';

interface HomePageProps {
  navigateToPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const triviaImages = [
    { src: '/Trivia Gameplay 1.png', alt: 'Game board selection' },
    { src: '/Trivia Gameplay 2.png', alt: 'Question interface' },
    { src: '/Trivia Gameplay 3.png', alt: 'Answer submission' },
    { src: '/Trivia Gameplay 4.png', alt: 'AI feedback' },
    { src: '/Trivia Gameplay 5.png', alt: 'Score tracking' },
    { src: '/Trivia Gameplay 6.png', alt: 'Game progress' },
    { src: '/Trivia Gameplay 7.png', alt: 'Results summary' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % triviaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + triviaImages.length) % triviaImages.length);
  };
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = 'slide-in-up 0.6s ease-out forwards';
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.feature, .card, .product-highlight-grid');
    elementsToObserve.forEach(el => {
      observer.observe(el);
    });

    // Cleanup function
    return () => {
      elementsToObserve.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const CheckmarkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.44 14.35l-3.71-3.71.71-.71 3 3 7.29-7.29.71.71-8 8z" fill="currentColor"/>
    </svg>
  );

  return (
    <main>
      <section className="hero">
        <div className="organic-shape shape-1"></div>
        <div className="container hero-inner">
          <div>
            <span className="badge">✨ Elevating Education • Service Excellence</span>
            <h2>Transform Your <span>Automotive Future</span> With Cutting-Edge Training</h2>
            <p>We deliver cutting-edge automotive training that empowers individuals, professionals, and organizations to thrive in a rapidly evolving industry.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#services" className="btn primary">Explore Our Services</a>
              <a href="#about" className="btn secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-professor" style={{ padding: '120px 0', background: 'linear-gradient(0deg, #FFFFFF, var(--off-white))' }}>
        <div className="container">
          <div className="product-highlight-grid">
            <div className="product-text">
              <div className="section-title">Featured Product</div>
              <h3 style={{ fontSize: '44px', margin: '0 0 16px', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--charcoal)' }}>
                The ElevatED AI Trivia Professor
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--soft-gray)', lineHeight: 1.8 }}>
                Our premier AI-powered trivia platform transforms any content into an engaging educational game. It's the ultimate tool for educators, trainers, and trivia lovers.
              </p>
              <ul className="feature-list">
                <li><CheckmarkIcon /> <strong>AI-Generated Content:</strong> Powered by Google Gemini, create custom trivia on any topic in seconds.</li>
                <li><CheckmarkIcon /> <strong>Document Upload Games:</strong> Instantly create games from your own PDFs, study guides, or company docs.</li>
                <li><CheckmarkIcon /> <strong>Smart Answer Assessment:</strong> AI evaluates free-form answers, providing intelligent, nuanced feedback.</li>
                <li><CheckmarkIcon /> <strong>Multiple Game Modes:</strong> Compete solo, against an AI, or in a real-time classroom showdown.</li>
              </ul>
              <div className="btn primary" onClick={() => navigateToPage('trivia')}>
                Try It Free Now
              </div>
            </div>
            <div className="product-images" style={{ 
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {/* Main Image */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                border: '2px solid rgba(59, 130, 246, 0.2)',
                aspectRatio: '16/9',
                background: 'var(--off-white)'
              }}>
                <img 
                  src={triviaImages[currentImageIndex].src} 
                  alt={`ElevatED AI Trivia Professor - ${triviaImages[currentImageIndex].alt}`}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'opacity 0.3s ease'
                  }} 
                />
                
                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                    zIndex: 2
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)')}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                
                {/* Next Button */}
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    color: 'white',
                    fontSize: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                    zIndex: 2
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)')}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
              
              {/* Dot Indicators */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '16px'
              }}>
                {triviaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentImageIndex ? 'var(--primary-blue)' : 'rgba(59, 130, 246, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      padding: 0
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Image Counter */}
              <div style={{
                textAlign: 'center',
                marginTop: '8px',
                fontSize: '14px',
                color: 'var(--soft-gray)',
                fontWeight: 600
              }}>
                {currentImageIndex + 1} / {triviaImages.length}nswer submission" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                <img src="/Trivia Gameplay 4.png" alt="ElevatED AI Trivia Professor - AI feedback" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                <img src="/Trivia Gameplay 5.png" alt="ElevatED AI Trivia Professor - Score tracking" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                <img src="/Trivia Gameplay 6.png" alt="ElevatED AI Trivia Professor - Game progress" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                <img src="/Trivia Gameplay 7.png" alt="ElevatED AI Trivia Professor - Results summary" 
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="organic-shape shape-2"></div>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Our Services</div>
              <h3>Three Powerful Pathways</h3>
            </div>
          </div>
          
          <div className="features" role="list">
            <article className="feature" role="listitem">
              <div className="badge" aria-hidden="true">🔧 DIY Enthusiasts</div>
              <h4>Enthusiast Learning</h4>
              <p><strong>Purpose:</strong> Make automotive knowledge accessible and enjoyable for everyone</p>
              <ul>
                <li>Introductory video tutorials</li>
                <li>"Fix-It-Yourself" mini-courses</li>
                <li>Tool walkthroughs and system basics</li>
                <li>Flexible pay-per-view or subscription access</li>
              </ul>
            </article>
            
            <article className="feature" role="listitem">
              <div className="badge" aria-hidden="true">🎓 Aspiring Techs</div>
              <h4>Professional Training</h4>
              <p><strong>Purpose:</strong> Provide career-ready, certification-aligned training for future technicians</p>
              <ul>
                <li>Comprehensive ASE prep modules</li>
                <li>System-specific virtual courses</li>
                <li>Career development tracks</li>
                <li>Instructor dashboards with progress tracking</li>
              </ul>
            </article>
            
            <article className="feature" role="listitem">
              <div className="badge" aria-hidden="true">🏢 Organizations</div>
              <h4>Business Solutions</h4>
              <p><strong>Purpose:</strong> Deliver customized, high-impact training and consulting for teams</p>
              <ul>
                <li>On-site training services</li>
                <li>Custom course bundles</li>
                <li>Mentorship programs for techs &amp; instructors</li>
                <li>Consulting for curriculum, operations, and retention</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="about" style={{ background: 'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.04))' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">About Us</div>
              <h3>Built By Educators &amp; Technicians</h3>
            </div>
          </div>
          
          <div className="card">
              <p style={{ fontSize: '20px', lineHeight: 1.9, marginBottom: '32px' }}>
              ElevatED Automotive Solutions helps transportation programs and industry teams apply AI where it actually moves the needle. We pair real‑world shop experience with modern tooling to make training <strong style={{ color: 'var(--blue-dark)' }}>faster, clearer, and more engaging.</strong>
            </p>
            
            <div className="highlight-box">
              <p style={{ margin: 0, fontSize: '17px' }}>
                <strong>✓</strong> ASE‑aligned content and assessments<br />
                <strong>✓</strong> Interactive, mentor‑guided lessons and apps<br />
                <strong>✓</strong> Real-world shop experience meets cutting-edge technology
              </p>
            </div>
            
            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '2px solid rgba(59, 130, 246, 0.1)' }}>
              <p style={{ margin: '8px 0', fontSize: '17px' }}>
                <strong style={{ color: 'var(--blue-dark)' }}>📍 Location:</strong> Minnesota, USA
              </p>
              <p style={{ margin: '8px 0', fontSize: '17px' }}>
                <strong style={{ color: 'var(--blue-dark)' }}>📧 Email:</strong> 
                <a href="mailto:info@elevatedautosolutions.com" style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'underline' }}>
                  info@elevatedautosolutions.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;