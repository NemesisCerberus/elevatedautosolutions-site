import React, { useState } from 'react';

interface ProductsPageProps {
  navigateToPage: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ navigateToPage }) => {
  const [currentTriviaImageIndex, setCurrentTriviaImageIndex] = useState(0);
  const [currentShopReadyImageIndex, setCurrentShopReadyImageIndex] = useState(0);
  
  const triviaImages = [
    { src: '/Trivia Gameplay 1.png', alt: 'Game board selection' },
    { src: '/Trivia Gameplay 2.png', alt: 'Question interface' },
    { src: '/Trivia Gameplay 3.png', alt: 'Answer submission' },
    { src: '/Trivia Gameplay 4.png', alt: 'AI feedback' },
    { src: '/Trivia Gameplay 5.png', alt: 'Score tracking' },
    { src: '/Trivia Gameplay 6.png', alt: 'Game progress' },
    { src: '/Trivia Gameplay 7.png', alt: 'Results summary' },
  ];

  const shopReadyImages = [
    { src: '/ShopReady/ShopReady1.webp', alt: 'ShopReady interface 1' },
    { src: '/ShopReady/ShopReady2.webp', alt: 'ShopReady interface 2' },
    { src: '/ShopReady/ShopReady3.webp', alt: 'ShopReady interface 3' },
    { src: '/ShopReady/ShopReady4.webp', alt: 'ShopReady interface 4' },
    { src: '/ShopReady/ShopReady5.webp', alt: 'ShopReady interface 5' },
    { src: '/ShopReady/ShopReady6.webp', alt: 'ShopReady interface 6' },
    { src: '/ShopReady/ShopReady7.webp', alt: 'ShopReady interface 7' },
    { src: '/ShopReady/ShopReady8.webp', alt: 'ShopReady interface 8' },
    { src: '/ShopReady/ShopReady9.webp', alt: 'ShopReady interface 9' },
    { src: '/ShopReady/ShopReady10.webp', alt: 'ShopReady interface 10' },
    { src: '/ShopReady/ShopReady11.webp', alt: 'ShopReady interface 11' },
  ];

  const nextTriviaImage = () => {
    setCurrentTriviaImageIndex((prev) => (prev + 1) % triviaImages.length);
  };

  const prevTriviaImage = () => {
    setCurrentTriviaImageIndex((prev) => (prev - 1 + triviaImages.length) % triviaImages.length);
  };

  const nextShopReadyImage = () => {
    setCurrentShopReadyImageIndex((prev) => (prev + 1) % shopReadyImages.length);
  };

  const prevShopReadyImage = () => {
    setCurrentShopReadyImageIndex((prev) => (prev - 1 + shopReadyImages.length) % shopReadyImages.length);
  };

  const CheckmarkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.44 14.35l-3.71-3.71.71-.71 3 3 7.29-7.29.71.71-8 8z" fill="currentColor"/>
    </svg>
  );

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '120px 0 80px', background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '24px'
            }}>
              ✨ Our Products
            </span>
            <h1 style={{ 
              fontSize: '52px', 
              fontWeight: 900, 
              marginBottom: '16px', 
              color: 'white', 
              letterSpacing: '-1.5px',
              lineHeight: 1.2
            }}>
              Transform Learning with ElevatED
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              Cutting-edge tools designed to engage learners, empower educators, and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ElevatED AI Trivia Professor Product */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(0deg, #FFFFFF, var(--off-white))' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            '@media (max-width: 1024px)': {
              gridTemplateColumns: '1fr',
              gap: '48px'
            }
          }}>
            {/* Left - Content */}
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Featured Product
              </div>
              <h2 style={{ 
                fontSize: '48px', 
                fontWeight: 900, 
                marginBottom: '24px', 
                color: 'var(--charcoal)', 
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}>
                The ElevatED AI Trivia Professor
              </h2>
              
              <p style={{ 
                fontSize: '18px', 
                color: 'var(--soft-gray)', 
                lineHeight: 1.8,
                marginBottom: '32px'
              }}>
                Our premier AI-powered trivia platform transforms any content into an engaging educational game. Built for educators, trainers, and anyone who wants to make learning interactive and fun.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: 'var(--charcoal)',
                  marginBottom: '20px'
                }}>
                  Key Features
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                    fontSize: '16px',
                    color: 'var(--soft-gray)',
                    lineHeight: 1.6
                  }}>
                    <CheckmarkIcon /> 
                    <div>
                      <strong style={{ color: 'var(--charcoal)' }}>AI-Generated Content:</strong> Powered by Google Gemini, create custom trivia on any topic in seconds.
                    </div>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                    fontSize: '16px',
                    color: 'var(--soft-gray)',
                    lineHeight: 1.6
                  }}>
                    <CheckmarkIcon /> 
                    <div>
                      <strong style={{ color: 'var(--charcoal)' }}>Document Upload Games:</strong> Instantly create games from your own PDFs, study guides, or company docs.
                    </div>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                    fontSize: '16px',
                    color: 'var(--soft-gray)',
                    lineHeight: 1.6
                  }}>
                    <CheckmarkIcon /> 
                    <div>
                      <strong style={{ color: 'var(--charcoal)' }}>Smart Answer Assessment:</strong> AI evaluates free-form answers, providing intelligent, nuanced feedback.
                    </div>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    gap: '12px', 
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                    fontSize: '16px',
                    color: 'var(--soft-gray)',
                    lineHeight: 1.6
                  }}>
                    <CheckmarkIcon /> 
                    <div>
                      <strong style={{ color: 'var(--charcoal)' }}>Multiple Game Modes:</strong> Compete solo, against an AI, or in a real-time classroom showdown.
                    </div>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => navigateToPage('trivia')}
                style={{
                  background: 'var(--primary-blue)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--primary-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Try It Now
              </button>
            </div>

            {/* Right - Carousel */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                <img 
                  src={triviaImages[currentTriviaImageIndex].src} 
                  alt={triviaImages[currentTriviaImageIndex].alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Carousel Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px'
              }}>
                <button
                  onClick={prevTriviaImage}
                  style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2563EB';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ←
                </button>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  {triviaImages.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentTriviaImageIndex(index)}
                      style={{
                        width: currentTriviaImageIndex === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: currentTriviaImageIndex === index ? 'var(--primary-blue)' : 'rgba(59, 130, 246, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTriviaImage}
                  style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2563EB';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ShopReady Learning Platform Product */}
      <section style={{ padding: '120px 0', background: '#e8f4ff !important' }}>
        <div className="container" style={{ background: '#e8f4ff !important' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            background: '#e8f4ff !important',
            '@media (max-width: 1024px)': {
              gridTemplateColumns: '1fr',
              gap: '48px'
            }
          }}>
            {/* Right - Carousel (images will be added here) */}
            <div style={{ order: 2 }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                maxWidth: '280px',
                margin: '0 auto'
              }}>
                <img 
                  src={shopReadyImages[currentShopReadyImageIndex].src} 
                  alt={shopReadyImages[currentShopReadyImageIndex].alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Carousel Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px'
              }}>
                <button
                  onClick={prevShopReadyImage}
                  style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2563EB';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ←
                </button>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center'
                }}>
                  {shopReadyImages.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentShopReadyImageIndex(index)}
                      style={{
                        width: currentShopReadyImageIndex === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: currentShopReadyImageIndex === index ? 'var(--primary-blue)' : 'rgba(59, 130, 246, 0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextShopReadyImage}
                  style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    border: 'none',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2563EB';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'var(--primary-blue)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  →
                </button>
              </div>
            </div>

            {/* Left - Content */}
            <div style={{ order: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary-blue)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Product
              </div>
              <h2 style={{ 
                fontSize: '48px', 
                fontWeight: 900, 
                marginBottom: '24px', 
                color: 'var(--charcoal)', 
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}>
                ShopReady Learning Platform
              </h2>
              <p style={{ fontSize: '20px', color: 'var(--soft-gray)', lineHeight: 1.8, marginBottom: '32px' }}>
                Master Automotive Technology with AI-Powered Training. Comprehensive, bite-sized lessons and intelligent mentoring for technicians at every level.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '16px' }}>
                  Key Features
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <CheckmarkIcon />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal)' }}>AI-Powered R.A.C.E. Mentor:</strong>
                      <span style={{ color: 'var(--soft-gray)' }}>24/7 personalized help for every question and challenge.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <CheckmarkIcon />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal)' }}>1,000+ Bite-Sized Lessons:</strong>
                      <span style={{ color: 'var(--soft-gray)' }}>690+ technical ASE topics + 376+ essential soft skills.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <CheckmarkIcon />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal)' }}>Comprehensive ASE Coverage:</strong>
                      <span style={{ color: 'var(--soft-gray)' }}>Engine repair, diagnostics, transmissions, brakes, and ADAS.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <CheckmarkIcon />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal)' }}>Mobile-Optimized & Accessible:</strong>
                      <span style={{ color: 'var(--soft-gray)' }}>Learn anywhere with voice accessibility and progress tracking.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckmarkIcon />
                    <div>
                      <strong style={{ display: 'block', color: 'var(--charcoal)' }}>Personalized Learning Paths:</strong>
                      <span style={{ color: 'var(--soft-gray)' }}>Streak rewards, achievement milestones, and adaptive progression.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{
                background: 'var(--off-white)',
                padding: '24px',
                borderRadius: '12px',
                marginBottom: '32px',
                borderLeft: '4px solid var(--primary-blue)'
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '12px' }}>
                  Perfect For
                </h4>
                <p style={{ fontSize: '15px', color: 'var(--soft-gray)', margin: 0, lineHeight: 1.6 }}>
                  Individual technicians seeking continuous learning, vocational students mastering core ASE competencies, educational institutions and training programs, and working professionals advancing their careers.
                </p>
              </div>

              <button 
                style={{
                  background: 'var(--primary-blue)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'var(--primary-blue)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ padding: '120px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ 
              fontSize: '44px', 
              fontWeight: 900, 
              marginBottom: '16px', 
              color: 'var(--charcoal)',
              letterSpacing: '-1px'
            }}>
              Use Cases
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: 'var(--soft-gray)', 
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The ElevatED AI Trivia Professor adapts to any learning environment.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '🎓',
                title: 'Educational Institutions',
                description: 'Engage students with interactive classroom experiences that boost retention and participation.'
              },
              {
                icon: '🏢',
                title: 'Corporate Training',
                description: 'Deliver compliance training, onboarding, and professional development with measurable engagement.'
              },
              {
                icon: '🔧',
                title: 'Technical Training',
                description: 'Create specialized assessments for automotive, healthcare, IT, and skilled trades certification.'
              },
              {
                icon: '📚',
                title: 'Self-Paced Learning',
                description: 'Enable individuals to learn at their own pace with personalized feedback and progress tracking.'
              },
              {
                icon: '🏆',
                title: 'Competitive Learning',
                description: 'Gamify training with leaderboards, badges, and real-time competition to drive engagement.'
              },
              {
                icon: '🎯',
                title: 'Assessment & Testing',
                description: 'Replace traditional exams with intelligent, adaptive assessments that evaluate real understanding.'
              }
            ].map((useCase, index) => (
              <div
                key={index}
                style={{
                  padding: '32px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
                  border: '2px solid rgba(59, 130, 246, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{useCase.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: 'var(--charcoal)' }}>
                  {useCase.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--soft-gray)', lineHeight: 1.6 }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '44px', 
              fontWeight: 900, 
              marginBottom: '16px', 
              color: 'white',
              letterSpacing: '-1px'
            }}>
              Ready to Transform Learning?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              Start with a free trial or schedule a demo to see how ElevatED can work for your organization.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigateToPage('trivia')}
                style={{
                  background: 'white',
                  color: 'var(--primary-blue)',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Try for Free
              </button>
              <button 
                onClick={() => alert('Schedule Demo - Coming Soon')}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
