import React, { useEffect } from 'react';

interface HomePageProps {
  navigateToPage: (page: string) => void;
}

/* Two-tone ShopCommand™: "Shop" in white, "Command" in blue, ™ superscript */
const ShopCommand = () => (
  <><span style={{ color: 'var(--text-primary)' }}>Shop</span><span style={{ color: 'var(--primary-blue)' }}>Command</span><sup style={{ fontSize: '0.4em', color: 'var(--text-muted)', verticalAlign: 'super' }}>&trade;</sup></>
);

const HomePage: React.FC<HomePageProps> = ({ navigateToPage }) => {
  useEffect(() => {
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

    const elementsToObserve = document.querySelectorAll('.feature, .card, .product-highlight-grid, .partner-card, .founder-card, .feature-card');
    elementsToObserve.forEach(el => {
      observer.observe(el);
    });

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
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="organic-shape shape-1"></div>
        <div className="container hero-inner">
          <div>
            <span className="badge">Elevating Education &bull; Service Excellence</span>
            <h2>Transform Your <span>Automotive Future</span> With Cutting-Edge Training</h2>
            <p style={{ fontSize: '22px', fontWeight: 600, color: 'var(--accent-cyan)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Educate. Elevate. Excel.
            </p>
            <p>AI-powered training tools built by educators and technicians — for educators, technicians, and the shops that employ them.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#products" className="btn primary">Our Products</a>
              <a href="#about" className="btn secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" style={{ padding: '120px 0', background: 'linear-gradient(0deg, var(--navy-dark), var(--navy-base))' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Our Products</div>
              <h3>Built for the Modern Shop &amp; Classroom</h3>
            </div>
          </div>

          {/* --- ShopCommand Educator --- */}
          <div style={{ marginBottom: '120px' }}>
            <div className="product-highlight-grid" style={{ marginBottom: '0' }}>
              <div className="product-text">
                <div className="badge" style={{ animation: 'none' }}>For Educators &amp; Schools</div>
                <h3 style={{ fontSize: '44px', margin: '16px 0 16px', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
                  <ShopCommand /> Educator
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  The AI-powered command center for automotive instructors. 12 integrated tools covering every part of the teaching workflow — from lesson creation to assessment to program management.
                </p>
                <a href="mailto:info@elevatedautosolutions.com?subject=ShopCommand%20Educator%20Inquiry" className="btn primary" style={{ marginTop: '24px' }}>
                  Request a Demo
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--navy-deepest)',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-soft)',
                border: '2px solid var(--border-subtle)',
                overflow: 'hidden',
                padding: '0'
              }}>
                <img src="/ShopCommand Educator.png" alt="ShopCommand Educator Portal logo" style={{ maxWidth: '100%', width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Educator Feature Card Grid */}
            <div className="feature-card-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { icon: '📋', title: 'Lesson Studio', desc: 'Turn any topic into a complete, print-ready lesson plan — Classroom Mode and Shop Mentorship formats.' },
                { icon: '⚡', title: 'Lesson Prep', desc: 'Bell ringers, vocabulary builders, and R.O. templates to kick off every class with purpose.' },
                { icon: '🔧', title: 'Lab Bench', desc: 'Step-by-step lab procedures aligned to MLR, AST, and MAST program standards.' },
                { icon: '📊', title: 'Assessment Suite', desc: 'Rubrics, skills checklists, quick quizzes, and practical exams with customizable scoring.' },
                { icon: '🎯', title: 'Instructor Tools', desc: 'Learning objectives, student feedback, and scenario coaching — built for new instructors.' },
                { icon: '🤖', title: 'TechAssist AI', desc: 'AI diagnostic assistant with calculators, analyzers, and 100+ shop tools by ASE category.' },
                { icon: '📚', title: 'Curriculum Tools', desc: 'Course maps, analogies, and differentiation strategies to structure your entire program.' },
                { icon: '🎓', title: 'Learning Academy', desc: '66+ self-paced coaching lessons on classroom management, delivery, and assessment.' },
                { icon: '🗣️', title: 'Huddle Builder', desc: 'Create shop huddle briefs and floor tools to keep your team aligned daily.' },
                { icon: '📦', title: 'Inventory Tracker', desc: 'Track equipment, flag items out of service, and manage service alerts.' },
                { icon: '🚗', title: 'Vehicle Fleet', desc: 'Manage your program vehicles and keep fleet records organized.' },
                { icon: '💰', title: 'Program Budget', desc: 'Track spending, monitor your budget, and manage purchase commitments.' }
              ].map((feat, i) => (
                <div key={i} className="feature-card">
                  <div className="fc-icon">{feat.icon}</div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- ShopCommand Industry --- */}
          <div style={{ marginBottom: '120px' }}>
            <div className="product-highlight-grid" style={{ marginBottom: '0' }}>
              <div className="product-text">
                <div className="badge" style={{ animation: 'none' }}>For Shops &amp; Dealer Groups</div>
                <h3 style={{ fontSize: '44px', margin: '16px 0 16px', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
                  <ShopCommand /> Industry
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  AI-powered training and onboarding for repair shops, dealer groups, and industry organizations. Get entry-level techs up to speed faster and keep your team sharp with continuous learning.
                </p>
                <a href="mailto:info@elevatedautosolutions.com?subject=ShopCommand%20Industry%20Inquiry" className="btn primary" style={{ marginTop: '24px' }}>
                  Request a Demo
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--navy-deepest)',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-soft)',
                border: '2px solid var(--border-subtle)',
                overflow: 'hidden',
                padding: '0'
              }}>
                <img src="/ShopCommand Industry Portal.png" alt="ShopCommand Industry Portal logo" style={{ maxWidth: '100%', width: '100%', display: 'block' }} />
              </div>
            </div>

            {/* Industry Feature Card Grid */}
            <div className="feature-card-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {[
                { icon: '📈', title: 'Technician Onboarding', desc: 'Structured learning paths that take new hires from day one to productive — faster.' },
                { icon: '🤖', title: 'TechAssist AI Mentor', desc: 'Three modes — Learning, Working, and Expert — adapting to each technician\'s skill level.' },
                { icon: '🧰', title: 'Digital Toolbox', desc: 'Compression calculators, fuel trim analyzers, brake diagnostics, and 100+ more tools.' },
                { icon: '📊', title: 'Team Progress', desc: 'Track certifications, training completion, and skill development across your team.' },
                { icon: '📖', title: 'ASE-Aligned Content', desc: '1,000+ lessons covering technical and soft skills, aligned with industry standards.' },
                { icon: '🏢', title: 'Scalable', desc: 'Works for a single-location independent shop or a multi-location dealer group.' }
              ].map((feat, i) => (
                <div key={i} className="feature-card">
                  <div className="fc-icon">{feat.icon}</div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- AI Trivia Professor --- */}
          <div>
            <div className="product-highlight-grid" style={{ marginBottom: '0' }}>
              <div className="product-text">
                <div className="badge" style={{ animation: 'none' }}>For Everyone</div>
                <h3 style={{ fontSize: '44px', margin: '16px 0 16px', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
                  Elevat<span style={{ color: 'var(--primary-blue)' }}>Ed</span> AI Trivia Professor
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Our AI-powered trivia platform transforms any content into an engaging educational game. Built for educators, trainers, and anyone who wants to make learning interactive and fun.
                </p>
                <div className="btn primary" onClick={() => navigateToPage('trivia')} style={{ marginTop: '24px' }}>
                  Try It Free Now
                </div>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                alignItems: 'start'
              }}>
                <img src="/Trivia Gameplay 5.png" alt="ElevatED AI Trivia Professor - Game modes" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} />
                <img src="/Trivia Gameplay 6.png" alt="ElevatED AI Trivia Professor - AI evaluation" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} />
                <img src="/Trivia Gameplay 7.png" alt="ElevatED AI Trivia Professor - Multiplayer mode" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} />
              </div>
            </div>

            {/* Trivia Feature Card Grid */}
            <div className="feature-card-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { icon: '✨', title: 'AI-Generated Content', desc: 'Powered by Google Gemini — create custom trivia on any topic in seconds.' },
                { icon: '📄', title: 'Document Upload', desc: 'Instantly create games from your own PDFs, study guides, or company docs.' },
                { icon: '🧠', title: 'Smart Assessment', desc: 'AI evaluates free-form answers with intelligent, nuanced feedback.' },
                { icon: '🎮', title: 'Multiple Game Modes', desc: 'Solo, vs. AI, or real-time classroom showdown — pick your format.' }
              ].map((feat, i) => (
                <div key={i} className="feature-card">
                  <div className="fc-icon">{feat.icon}</div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDING PARTNERS ===== */}
      <section id="founders" style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--navy-base), var(--navy-dark))' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Founding Partners</div>
              <h3>Built With the Industry, Not Just for It</h3>
            </div>
          </div>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '800px', marginBottom: '48px' }}>
            <ShopCommand /> is shaped by the shops that use it every day. Our founding partners committed early — investing their time, feedback, and trust to help us build something that actually works on the shop floor.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { name: 'Wayne Watson', shop: 'Auto Works', location: 'Woodbury, MN' },
              { name: 'Tony Hoffman', shop: 'Superior Automotive', location: 'Eagan, MN' },
              { name: 'Tom Archambault', shop: 'BLVD Autoworks', location: 'St. Anthony, MN' },
              { name: 'Dan Sjolseth', shop: 'Founding Sponsor', location: 'Minnesota' }
            ].map((founder, i) => (
              <div key={i} className="founder-card" style={{
                background: 'var(--navy-card)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: 'var(--shadow-soft)',
                textAlign: 'center',
                transition: 'all 0.4s ease'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-cyan))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '24px'
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 4px' }}>{founder.name}</h4>
                <p style={{ fontSize: '15px', color: 'var(--primary-blue)', fontWeight: 700, margin: '0 0 8px' }}>{founder.shop}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>{founder.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS & AFFILIATIONS ===== */}
      <section id="partners" style={{ padding: '80px 0', background: 'var(--navy-deepest)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Partners &amp; Affiliations</div>
              <h3>Trusted by Industry Leaders</h3>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                name: 'NACAT',
                role: 'Allied Member',
                desc: 'ElevatEd is an Allied Member of the North American Council of Automotive Teachers. Matt and Jeff will be presenting "AI in the Garage" at the NACAT AEC 2026 conference in June.'
              },
              {
                name: 'AASP-MN',
                role: 'Industry Partner',
                desc: 'Partnering with the Alliance of Automotive Service Providers of Minnesota to bring AI-powered training tools to member shops and support the next generation of technicians through MNCARS.'
              },
              {
                name: 'MTTIA',
                role: 'Conference Presenters & Sponsors',
                desc: 'Presenting hands-on AI workshops at the 2026 MTTIA Annual Conference in Brainerd, MN — reaching 100+ transportation instructors across a five-state region.'
              }
            ].map((partner, i) => (
              <div key={i} className="partner-card" style={{
                background: 'var(--navy-card)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.4s ease'
              }}>
                <h4 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 12px' }}>{partner.name}</h4>
                <p style={{ fontSize: '14px', color: 'var(--accent-cyan)', fontWeight: 700, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '1px' }}>{partner.role}</p>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--navy-dark), var(--navy-base))' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">About Us</div>
              <h3>Built By Educators &amp; Technicians</h3>
            </div>
          </div>

          {/* --- Our Story --- */}
          <div className="about-story-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div>
              <h4 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 20px', letterSpacing: '-0.5px' }}>Our Story</h4>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: '0 0 24px' }}>
                We saw a critical gap: automotive education lagged behind the technology transforming the industry. Technicians and educators needed cutting-edge tools to bridge real-world diagnostics with classroom learning, but solutions were fragmented and outdated.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: 0 }}>
                Elevat<span style={{ color: 'var(--primary-blue)' }}>Ed</span> was born to modernize technical training through AI-powered tools that empower instructors and engage students — making training <strong style={{ color: 'var(--blue-light)' }}>faster, clearer, and more effective.</strong>
              </p>
            </div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <img src="/Our Story.webp" alt="ElevatED Automotive Solutions - Our Story" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>

          {/* --- What We Do --- */}
          <div className="card" style={{ marginBottom: '80px' }}>
            <p style={{ fontSize: '20px', lineHeight: 1.9, marginBottom: '32px', color: 'var(--text-secondary)' }}>
              Elevat<span style={{ color: 'var(--primary-blue)' }}>Ed</span> Automotive Solutions helps transportation programs and industry teams apply AI where it actually moves the needle. We pair real-world shop experience with modern tooling to make training <strong style={{ color: 'var(--blue-light)' }}>faster, clearer, and more engaging.</strong>
            </p>

            <div className="highlight-box">
              <p style={{ margin: 0, fontSize: '17px', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-cyan)' }}>&#10003;</strong> ASE-aligned content and assessments<br />
                <strong style={{ color: 'var(--accent-cyan)' }}>&#10003;</strong> Interactive, AI-mentored lessons and diagnostic tools<br />
                <strong style={{ color: 'var(--accent-cyan)' }}>&#10003;</strong> Real-world shop experience meets cutting-edge technology<br />
                <strong style={{ color: 'var(--accent-cyan)' }}>&#10003;</strong> Presenting at NACAT AEC 2026 and MTTIA 2026
              </p>
            </div>

            <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '2px solid var(--border-subtle)' }}>
              <p style={{ margin: '8px 0', fontSize: '17px', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--blue-light)' }}>Location:</strong> Minnesota, USA
              </p>
              <p style={{ margin: '8px 0', fontSize: '17px', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--blue-light)' }}>Email:</strong>{' '}
                <a href="mailto:info@elevatedautosolutions.com" style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'underline' }}>
                  info@elevatedautosolutions.com
                </a>
              </p>
            </div>
          </div>

          {/* --- Meet the Founders --- */}
          <div>
            <h4 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 40px', letterSpacing: '-0.5px', textAlign: 'center' }}>Meet the Founders</h4>
            <div className="founders-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* Matt */}
              <div style={{
                background: 'var(--navy-card)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.4s ease'
              }}>
                <div style={{ padding: '32px 32px 0', textAlign: 'center' }}>
                  <img src="/Matt Boudinot.webp" alt="Matt Boudinot" style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--border-subtle)',
                    marginBottom: '20px'
                  }} />
                  <h4 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 4px' }}>Matt Boudinot</h4>
                  <p style={{ fontSize: '14px', color: 'var(--accent-cyan)', fontWeight: 700, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Co-Founder &amp; Chief Technical Architect</p>
                </div>
                <div style={{ padding: '0 32px 32px' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 16px' }}>
                    20+ years in the automotive industry and 11 years in higher education. Matt specializes in AI curriculum development, ADAS/hybrid/electrical diagnostics, and building immersive learning experiences that bridge the gap between the classroom and the shop floor.
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--primary-blue)', fontWeight: 600, margin: '0 0 12px' }}>
                    Outstanding Educator Award (2024/2025)
                  </p>
                  <a href="https://www.linkedin.com/in/matthewboudinot/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--blue-light)', fontWeight: 600, textDecoration: 'underline' }}>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Jeff */}
              <div style={{
                background: 'var(--navy-card)',
                border: '2px solid var(--border-subtle)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.4s ease'
              }}>
                <div style={{ padding: '32px 32px 0', textAlign: 'center' }}>
                  <img src="/Jeff Copeland.webp" alt="Jeff Copeland" style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--border-subtle)',
                    marginBottom: '20px'
                  }} />
                  <h4 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 4px' }}>Jeff Copeland</h4>
                  <p style={{ fontSize: '14px', color: 'var(--accent-cyan)', fontWeight: 700, margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Co-Founder &amp; Chief Strategy Officer</p>
                </div>
                <div style={{ padding: '0 32px 32px' }}>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 16px' }}>
                    23+ years in the automotive education field with expertise in instructional design, AI integration, and interactive simulations for real-world technical training. Jeff brings deep classroom knowledge and a passion for building tools that actually work for instructors.
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--primary-blue)', fontWeight: 600, margin: '0 0 12px' }}>
                    23 years continuous service in higher education
                  </p>
                  <a href="https://www.linkedin.com/in/jeff-copeland-b340391a/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--blue-light)', fontWeight: 600, textDecoration: 'underline' }}>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
