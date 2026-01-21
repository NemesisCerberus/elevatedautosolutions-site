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
            <h2 style={{ lineHeight: 1.2, wordSpacing: '0.1em' }}>Developing Today's Workforce and Tomorrow's Technicians</h2>
            <p>We deliver cutting-edge automotive training that empowers individuals, professionals, and organizations to thrive in a rapidly evolving industry.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('workforce'); }} className="btn primary">Book a Demo</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('schedule-consultation'); }} className="btn secondary">Schedule a Consultation</a>
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
              <div className="badge" aria-hidden="true">🎓 Educational Institutions</div>
              <h4>Institutional Learning</h4>
              <p><strong>Purpose:</strong> Empower schools and colleges with modern, AI-driven curriculum and assessments</p>
              <ul>
                <li>AI-powered lesson planning &amp; content generation</li>
                <li>ASE-aligned curriculum development &amp; support</li>
                <li>Interactive simulations and lab activities</li>
                <li>Student engagement &amp; assessment tools</li>
                <li>Instructor dashboards with progress tracking</li>
              </ul>
            </article>
            
            <article className="feature" role="listitem">
              <div className="badge" aria-hidden="true">🏢 Workforce Training</div>
              <h4>Industry Solutions</h4>
              <p><strong>Purpose:</strong> Keep technicians competitive through continuous upskilling and team development</p>
              <ul>
                <li>Just-in-time technical training (diagnostics, ADAS, hybrid systems)</li>
                <li>Technician certification prep &amp; advancement</li>
                <li>Mentorship &amp; leadership development programs</li>
                <li>Shop consulting for team development &amp; retention</li>
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
            {/* Origin Story */}
            <div style={{ marginBottom: '48px' }}>
              <h4 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--charcoal)' }}>Our Story</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--soft-gray)' }}>
                    We saw a critical gap: automotive education lagged behind the technology transforming the industry. Technicians and educators needed cutting-edge tools to bridge real-world diagnostics with classroom learning, but solutions were fragmented and outdated. ElevatED was born to modernize technical training through AI-powered tools that empower instructors and engage students—making training faster, clearer, and more effective.
                  </p>
                </div>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src="/Our Story.webp" 
                    alt="ElevatED Automotive Solutions - Our Story"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Company Overview */}
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

            {/* Founders Section */}
            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '2px solid rgba(59, 130, 246, 0.1)' }}>
              <h4 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px', color: 'var(--charcoal)', textAlign: 'center' }}>Meet the Founders</h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '40px' }}>
                {/* Matt Boudinot */}
                <div style={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '2px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <img 
                    src="/Matt Boudinot.webp" 
                    alt="Matt Boudinot, Co-Founder & AI Integration Strategist"
                    style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      marginBottom: '16px',
                      display: 'block',
                      margin: '0 auto 16px'
                    }}
                  />
                  <h5 style={{ fontSize: '20px', fontWeight: 700, margin: '12px 0', color: 'var(--charcoal)' }}>Matt Boudinot</h5>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary-blue)', margin: '8px 0' }}>Co-Founder &amp; AI Integration Strategist</p>
                  
                  <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--soft-gray)', margin: '16px 0', textAlign: 'left' }}>
                    <p><strong>20+ years</strong> automotive industry | <strong>11 years</strong> higher education</p>
                    <p>Specializes in AI curriculum development, ADAS/hybrid/electrical diagnostics, and immersive learning experiences.</p>
                    <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--steel-gray)' }}>Outstanding Educator Award (2024/2025)</p>
                  </div>
                  
                  <a 
                    href="https://www.linkedin.com/in/matthewboudinot/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--primary-blue)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      marginTop: '12px',
                      fontSize: '14px'
                    }}
                  >
                    <span>LinkedIn Profile</span>
                    <span style={{ fontSize: '16px' }}>↗</span>
                  </a>
                </div>

                {/* Jeff Copeland - Placeholder */}
                <div style={{
                  textAlign: 'center',
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  border: '2px solid rgba(59, 130, 246, 0.1)'
                }}>
                  <img 
                    src="/Jeff Copeland.webp" 
                    alt="Jeff Copeland, Co-Founder & Automotive Technology Instructor"
                    style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      marginBottom: '16px',
                      display: 'block',
                      margin: '0 auto 16px'
                    }}
                  />
                  <h5 style={{ fontSize: '20px', fontWeight: 700, margin: '12px 0', color: 'var(--charcoal)' }}>Jeff Copeland</h5>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary-blue)', margin: '8px 0' }}>Co-Founder &amp; Automotive Technology Instructor</p>
                  
                  <div style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--soft-gray)', margin: '16px 0', textAlign: 'left' }}>
                    <p><strong>23+ years</strong> automotive education field</p>
                    <p>Expert in instructional design, AI integration, and interactive simulations for real-world technical training.</p>
                    <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--steel-gray)' }}>23 years continuous service in higher education</p>
                  </div>
                  
                  <a 
                    href="https://www.linkedin.com/in/jeff-copeland-b340391a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--primary-blue)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      marginTop: '12px',
                      fontSize: '14px'
                    }}
                  >
                    <span>LinkedIn Profile</span>
                    <span style={{ fontSize: '16px' }}>↗</span>
                  </a>
                </div>
              </div>
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

      <section id="blog" style={{ padding: '120px 0', background: 'linear-gradient(0deg, var(--off-white), #FFFFFF)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">From the Blog</div>
              <h3>Insights & Industry Updates</h3>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '40px'
          }}>
            {/* Blog Post Card 1 */}
            <article style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'white',
              border: '2px solid rgba(59, 130, 246, 0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onClick={() => navigateToPage('blog')}
            >
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                color: 'white',
                fontWeight: 700,
                overflow: 'hidden'
              }}>
                <img src="/How Gamified Learning.webp" alt="Gamified Learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Product Spotlight
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 12px', color: 'var(--charcoal)' }}>
                  How Gamified Learning Increases Student Engagement
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--soft-gray)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Discover how interactive, game-based learning transforms passive students into engaged learners who actually care about getting it right.
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--steel-gray)' }}>Jan 20, 2026</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }} style={{
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Read More <span style={{ fontSize: '12px' }}>→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Blog Post Card 2 */}
            <article style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'white',
              border: '2px solid rgba(59, 130, 246, 0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onClick={() => navigateToPage('blog')}
            >
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img src="/Expanding the Pathway.webp" alt="Expanding the Pathway" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Industry Insights
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 12px', color: 'var(--charcoal)' }}>
                  Expanding the Pathway: Traditional Training + Flexible Learning
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--soft-gray)', lineHeight: 1.6, marginBottom: '16px' }}>
                  Why both traditional apprenticeships and flexible learning options matter for the future of automotive education.
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--steel-gray)' }}>Jan 20, 2026</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }} style={{
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Read More <span style={{ fontSize: '12px' }}>→</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Blog Post Card 3 */}
            <article style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'white',
              border: '2px solid rgba(59, 130, 246, 0.1)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onClick={() => navigateToPage('blog')}
            >
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img src="/From Technician to Educator.webp" alt="From Technician to Educator" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Education
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, margin: '8px 0 12px', color: 'var(--charcoal)' }}>
                  From Technician to Educator: Why Skilled Instructors Need Better Tools
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--soft-gray)', lineHeight: 1.6, marginBottom: '16px' }}>
                  The transition from master technician to classroom instructor is harder than it looks. Here's why educators deserve better support.
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--steel-gray)' }}>Jan 20, 2026</span>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }} style={{
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Read More <span style={{ fontSize: '12px' }}>→</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToPage('blog'); }} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--primary-blue)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
            }}
            >
              View All Articles <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;