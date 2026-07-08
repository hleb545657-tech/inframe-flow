import React from 'react'

export const ScrollDivider = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '100px',
      position: 'relative'
    }}>
      {/* Линия с эффектом переливания */}
      <div style={{
        position: 'relative',
        width: '1px',
        height: '70px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to bottom, transparent, #FFFFFF, transparent)',
          animation: 'lightFlow 2.5s infinite linear'
        }} />
      </div>

      <style>{`
        @keyframes lightFlow {
          0% { top: -50%; opacity: 0; }
          30% { opacity: 1; }
          60% { top: 120%; opacity: 0; }
          100% { top: 120%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
