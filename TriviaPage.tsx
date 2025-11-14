import React from 'react';

const TRIVIA_APP_URL = 'https://trivia-master-4882e.web.app/';

interface TriviaPageProps {
  navigateToPage: (page: string) => void;
}

const TriviaPage: React.FC<TriviaPageProps> = ({ navigateToPage }) => {
  return (
    <main style={{
      height: '100vh',
      width: '100vw',
      background: 'var(--charcoal)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
    }}>
      <div style={{ marginBottom: '16px', flexShrink: 0 }}>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); navigateToPage('home'); }} 
          style={{
            color: 'var(--light-gray)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '15px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          &larr; Back to Home
        </a>
      </div>

      <div style={{
        flex: 1,
        border: '2px solid rgba(59, 130, 246, 0.2)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 80px -20px rgba(59, 130, 246, 0.25)',
        display: 'flex',
      }}>
        <iframe
          src={TRIVIA_APP_URL}
          title="Elevated AI Trivia Professor"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="microphone"
        />
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '16px',
        flexShrink: 0,
        fontSize: '14px',
        color: 'var(--steel-gray)'
      }}>
        Or, open the{' '}
        <a
          href={TRIVIA_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--blue-light)',
            textDecoration: 'underline'
          }}
        >
          AI Trivia Professor in a new tab
        </a>.
      </div>
    </main>
  );
};

export default TriviaPage;
