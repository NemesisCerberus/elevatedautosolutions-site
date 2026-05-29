import React, { useEffect } from 'react';

interface ServicesPageProps {
  navigateToPage: (page: string) => void;
}

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.44 14.35l-3.71-3.71.71-.71 3 3 7.29-7.29.71.71-8 8z" fill="currentColor"/>
  </svg>
);

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateToPage: _navigateToPage }) => {
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

    const elementsToObserve = document.querySelectorAll('.feature, .card, .feature-card, .service-offer-card, .partner-card');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => elementsToObserve.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="organic-shape shape-1"></div>
        <div className="container hero-inner">
          <div>
            <span className="badge">AI Consulting &bull; Technical Training</span>
            <h2>Expert training and AI consulting. <span>Built by practitioners.</span></h2>
            <p>
              ElevatEd Automotive Solutions helps education programs integrate AI into the way they teach — and helps automotive businesses develop stronger technicians. We've done the work ourselves. Now we help others do it too.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="mailto:info@elevatedautosolutions.com" className="btn primary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIDGING SECTION ===== */}
      <section style={{ padding: '80px 0', background: 'var(--navy-dark)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '32px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 24px', letterSpacing: '-0.5px' }}>
            Two ways we work with organizations
          </h3>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.85, margin: 0 }}>
            Whether you lead an education program looking to build real AI capacity across your faculty, or you run an automotive business looking to develop your technicians — we bring the same foundation: hands-on experience, no-hype implementation, and a track record of building tools that actually get used.
          </p>
        </div>
      </section>

      {/* ===== LINE A — INSTITUTIONAL AI CONSULTING ===== */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--navy-base), var(--navy-dark))' }}>
        <div className="container">
          {/* Section header */}
          <div style={{ marginBottom: '56px' }}>
            <div className="section-title" style={{ marginBottom: '12px', letterSpacing: '2px', fontSize: '12px' }}>
              For Community Colleges &nbsp;&middot;&nbsp; CTE Programs &nbsp;&middot;&nbsp; Technical Schools &nbsp;&middot;&nbsp; Workforce Development Organizations
            </div>
            <h3 style={{ fontSize: '40px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 20px', letterSpacing: '-1px' }}>
              AI Integration for Education
            </h3>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: '820px', margin: 0 }}>
              Most institutions know AI is coming. Few know where to start, which tools actually fit their programs, or how to get faculty bought in. We do — because we've built the tools and taught with them. And while our roots are in technical education, the approach applies across programs: automotive, HVAC, welding, healthcare, manufacturing, and beyond.
            </p>
          </div>

          {/* Two offer cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '32px' }}>

            {/* Card 1 — AI Integration Audit & Roadmap */}
            <div className="service-offer-card" style={{
              background: 'var(--navy-card)',
              border: '2px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🗺️</div>
              <h4 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 16px', letterSpacing: '-0.3px' }}>
                AI Integration Audit &amp; Roadmap
              </h4>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 28px' }}>
                A structured assessment of where your institution stands on AI adoption — and a clear, written roadmap for where to go next. We review your current tools, instructional workflows, and faculty capacity, then deliver a prioritized plan your team can actually execute.
              </p>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>
                  What you get
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Current-state assessment of AI readiness across your program',
                    'Opportunity mapping by department and function',
                    'Written report with prioritized recommendations',
                    'Live readout call with Q&A'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }}>
                        <CheckmarkIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'var(--navy-deepest)', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', borderLeft: '3px solid var(--primary-blue)' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px' }}>
                  Who it's for
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
                  Department chairs, deans, and workforce development directors who need a clear picture before committing to a direction.
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href="mailto:info@elevatedautosolutions.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    paddingBottom: '2px',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = 'var(--primary-blue)')}
                  onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
                >
                  Send us a note &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 — Faculty AI Enablement Workshop */}
            <div className="service-offer-card" style={{
              background: 'var(--navy-card)',
              border: '2px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🎓</div>
              <h4 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 16px', letterSpacing: '-0.3px' }}>
                Faculty AI Enablement Workshop
              </h4>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 28px' }}>
                A hands-on, half-day or full-day workshop that gives your instructors practical AI skills they can use immediately — not a lecture on trends, but actual tools and workflows built around technical education. We've delivered this from the inside: we're instructors who use AI in our own programs every day.
              </p>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>
                  What you get
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Half- or full-day workshop (on-site or virtual)',
                    'Participant materials and reference guides',
                    'Live tool demonstrations with real instructional use cases',
                    'Follow-up Q&A session'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }}>
                        <CheckmarkIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'var(--navy-deepest)', borderRadius: '12px', padding: '16px 20px', marginBottom: '28px', borderLeft: '3px solid var(--primary-blue)' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px' }}>
                  Who it's for
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
                  Technical education faculty, program coordinators, and CTE directors looking to build genuine AI fluency across their team.
                </p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href="mailto:info@elevatedautosolutions.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--primary-blue)',
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    paddingBottom: '2px',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = 'var(--primary-blue)')}
                  onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
                >
                  Send us a note &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== LINE B — INDUSTRY TECHNICAL TRAINING ===== */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(0deg, var(--navy-dark), var(--navy-base))' }}>
        <div className="container">
          {/* Section header */}
          <div style={{ marginBottom: '56px' }}>
            <div className="section-title" style={{ marginBottom: '12px', letterSpacing: '2px', fontSize: '12px' }}>
              For Independent Shops &nbsp;&middot;&nbsp; Dealerships &nbsp;&middot;&nbsp; Fleets &nbsp;&middot;&nbsp; Municipal Garages
            </div>
            <h3 style={{ fontSize: '40px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 20px', letterSpacing: '-1px' }}>
              Hands-On Technical Training for Your Team
            </h3>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: '820px', margin: 0 }}>
              On-site. Practical. Built around the work your technicians actually do. Every engagement starts with a conversation — we'll figure out the right format, topic, and scope for your team before anything gets scheduled.
            </p>
          </div>

          {/* Single offer card */}
          <div style={{ maxWidth: '720px' }}>
            <div className="service-offer-card" style={{
              background: 'var(--navy-card)',
              border: '2px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '48px',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔧</div>
              <h4 style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 16px', letterSpacing: '-0.3px' }}>
                On-Site Technical Training
              </h4>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, margin: '0 0 32px' }}>
                No two shops are in the same place. Some need a focused half-day on a single topic; others want a multi-session series to build foundational skills across their whole team. We start with a short conversation about your technicians' experience levels, the vehicles you're working on, and what gaps are showing up in the bay — then we put together something that actually fits.
              </p>

              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>
                  Topics we work in
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Electrical systems and circuit diagnosis',
                    'Hybrid and EV safety fundamentals',
                    'Diagnostic strategy and workflow',
                    'Scan tool data interpretation',
                    'General technical foundations'
                  ].map((topic, i) => (
                    <span key={i} style={{
                      display: 'inline-block',
                      background: 'var(--navy-deepest)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 12px' }}>
                  What you can expect
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'A free intro call to understand your team\'s needs before any commitment',
                    'Training delivered at your location, using your equipment and vehicles',
                    'Participant materials built around your specific focus area',
                    'Flexible format — a single session or an ongoing series, depending on what makes sense'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }}>
                        <CheckmarkIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:info@elevatedautosolutions.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  borderBottom: '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s'
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = 'var(--primary-blue)')}
                onMouseOut={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
              >
                Send us a note &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY ELEVATED ===== */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--navy-dark), var(--navy-base))' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-title">Credibility</div>
              <h3>Why ElevatEd</h3>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: '0 0 20px' }}>
              ElevatEd Automotive Solutions was founded by two career automotive educators who got tired of watching the industry talk about AI and technology without actually delivering useful tools.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: '0 0 20px' }}>
              <strong style={{ color: 'var(--blue-light)' }}>Matt Boudinot</strong> has spent over 20 years teaching automotive service technology and has been building and deploying AI tools for automotive training since before most shops had heard of ChatGPT. He's presented on AI in automotive education at national conferences and is the lead developer behind ElevatEd's suite of training products — used today by shops and instructors across the country.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: '0 0 20px' }}>
              <strong style={{ color: 'var(--blue-light)' }}>Jeff Copeland</strong> brings equal depth in automotive instruction with a focus on curriculum development, ASE-aligned content, and technician training delivery. His work has been recognized with the MTTIA Hall of Fame Award. He leads training design and operations for ElevatEd's service delivery.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.9, margin: 0 }}>
              Together, they've built something most consultants can't offer: they know the work because they've done it — in the classroom, in the shop, and in the code.
            </p>
          </div>

          {/* Proof points */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {[
              '20+ years of automotive instruction experience',
              '2024/2025 Outstanding Educator of the Year',
              'Active AI product developer — tools in use by real shops today',
              'National conference presenter on AI in automotive education',
              'Credentialed instructors with ASE and automotive industry background',
              'Real shops and schools using ElevatEd tools right now'
            ].map((point, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '16px 20px',
                background: 'var(--navy-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px'
              }}>
                <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '1px' }}>
                  <CheckmarkIcon />
                </span>
                <span style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section style={{ padding: '100px 0', background: 'var(--navy-deepest)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h3 style={{ fontSize: '36px', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 20px', letterSpacing: '-0.5px' }}>
            Not sure which service fits?
          </h3>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.85, margin: '0 0 40px' }}>
            Send us a note. Tell us a little about your organization and what you're trying to solve — we'll get back to you within one business day and let you know honestly whether we can help.
          </p>
          <a href="mailto:info@elevatedautosolutions.com" className="btn primary">
            Send Us a Message &rarr;
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
