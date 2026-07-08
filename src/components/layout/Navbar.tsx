import React from 'react'

interface NavbarProps {
  lang: 'RU' | 'EN'
  setLang: (lang: 'RU' | 'EN') => void
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 40px',
      zIndex: 100,
      background: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.95) 0%, rgba(5, 5, 5, 0.6) 60%, transparent 100%)',
      opacity: 0,
      animation: 'cinematicFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      animationDelay: '1000ms'
    }}>
      <style>{`
        @keyframes cinematicFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* ЛОГОТИП */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer hover:opacity-80 transition-opacity"
        style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px',
        userSelect: 'none'
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          display: 'inline-block',
          boxShadow: '0 0 10px #ffffff'
        }} />
        
        <span style={{ 
          fontSize: '18px', 
          fontWeight: 800, 
          letterSpacing: '1px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <span style={{ color: '#ffffff' }}>InFrame</span>
          <span style={{ color: '#A3A3A3', fontWeight: 400, marginLeft: '2px' }}>Flow</span>
        </span>
      </div>

      {/* НАВИГАЦИЯ И ЯЗЫКИ */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* Кнопки навигации */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a 
            href="#portfolio" 
            style={{ fontSize: '14px', fontWeight: 500, color: '#A3A3A3', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#A3A3A3'}
          >
            {lang === 'RU' ? 'Работы' : 'Works'}
          </a>
          <a 
            href="#contacts" 
            style={{ 
              backgroundColor: '#ffffff', color: '#050505', fontSize: '14px', fontWeight: 600, 
              padding: '8px 20px', borderRadius: '20px', textDecoration: 'none', 
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)', transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          >
            {lang === 'RU' ? 'Связаться' : 'Contact'}
          </a>
        </div>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ */}
        <div style={{ 
          display: 'flex', 
          gap: '4px', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)', 
          padding: '3px', 
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {(['RU', 'EN'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                backgroundColor: lang === l ? '#404040' : 'transparent',
                color: lang === l ? '#ffffff' : '#A3A3A3',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 600,
                transition: 'all 0.2s ease'
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
