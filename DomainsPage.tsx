import React from 'react';

interface DomainsPageProps {
  navigateToPage: (page: string) => void;
}

interface Domain {
  name: string;
  url: string;
  description?: string;
}

const DomainsPage: React.FC<DomainsPageProps> = ({ navigateToPage }) => {
  const domains: Domain[] = [
    {
      name: 'AASP Alliance TrainingPortal',
      url: 'https://aasp.elevatedautosolutions.com'
    },
    {
      name: 'Program Accreditation Hub',
      url: 'https://accreditationhub.elevatedautosolutions.com'
    },
    {
      name: 'ElevatEd AI Trivia Professor',
      url: 'https://trivia.elevatedautosolutions.com'
    },
    {
      name: 'ShopReady Learning Academy',
      url: 'https://shopready.elevatedautosolutions.com'
    },
    {
      name: 'TechAssist Toolbox',
      url: 'https://techassist.elevatedautosolutions.com'
    },
    {
      name: 'LabReady Task Sheets',
      url: 'https://labready.elevatedautosolutions.com'
    },
    {
      name: 'ShopCommand',
      url: 'https://shopcommand.elevatedautosolutions.com'
    },
    {
      name: 'LabBench Custom Task Sheets',
      url: 'https://labbench.elevatedautosolutions.com'
    }
  ];

  return (
    <main className="container">
      <div style={{ minHeight: '60vh', paddingTop: '40px', paddingBottom: '40px' }}>
        <h1>Internal Domains</h1>
        <p style={{ color: '#999', marginBottom: '30px' }}>
          Restricted access - custom domains for internal use
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '20px'
        }}>
          {domains.map((domain, index) => (
            <a
              key={index}
              href={domain.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                transition: 'all 0.3s ease',
                backgroundColor: '#f9f9f9'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f0f0f0';
                (e.currentTarget as HTMLElement).style.borderColor = '#888';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#f9f9f9';
                (e.currentTarget as HTMLElement).style.borderColor = '#ddd';
              }}
            >
              <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{domain.name}</h3>
              <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>
                {domain.url}
              </p>
              {domain.description && (
                <p style={{ margin: '0', color: '#999', fontSize: '14px' }}>
                  {domain.description}
                </p>
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => navigateToPage('home')}
          style={{
            marginTop: '40px',
            padding: '10px 20px',
            backgroundColor: '#fff',
            border: '1px solid #333',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ← Back to Home
        </button>
      </div>
    </main>
  );
};

export default DomainsPage;
