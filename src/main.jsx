import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error Boundary para evitar cualquier pantalla en blanco
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#031726',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <img 
            src="/images/fedetco-logo.png" 
            alt="FEDETCO" 
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px', border: '3px solid #06b6d4' }} 
          />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            Portal Oficial FEDETCO
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '400px', marginBottom: '25px', lineHeight: '1.5' }}>
            Se ha detectado una actualización en los datos del portal. Haz clic en el botón de abajo para cargar la versión más reciente.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              backgroundColor: '#06b6d4',
              color: '#031726',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(6, 182, 212, 0.4)'
            }}
          >
            Cargar Portal Actualizado
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
