import { useState } from 'react';
import './App.css';

function App() {
  // Local state to simulate live EC2 interactions
  const [serverStatus, setServerStatus] = useState('Online');
  const [requestCount, setRequestCount] = useState(1420);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate pulling fresh backend metrics
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setRequestCount(prev => prev + Math.floor(Math.random() * 50) + 1);
      setIsRefreshing(false);
    }, 800);
  };

  // Toggle server power states
  const toggleServer = () => {
    setServerStatus(prev => (prev === 'Online' ? 'Stopped' : 'Online'));
  };

  return (
    <div className="app-container">
      {/* Sticky Header Nav */}
      <header className="app-header">
        <h1>EC2 Cloud Console</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className={`status-badge ${serverStatus.toLowerCase()}`}>
            Instance: {serverStatus}
          </span>
        </div>
      </header>

      {/* Main Layout Area */}
      <main className="app-main">
        {/* Dynamic Typography Hero Banner */}
        <section className="hero-section">
          <h2>React App Deployed successfully</h2>
          <p>
            Your frontend is compiled into lightning-fast static assets and served 
            efficiently through an Nginx proxy on an AWS EC2 instance.
          </p>
        </section>

        {/* Responsive Dashboard Grid */}
        <div className="card-grid">
          {/* Card 1: Infrastructure Info */}
          <div className="card">
            <h3>EC2 Instance Specs</h3>
            <p>
              Hosted on an Ubuntu Server environment. Configured with secure inbound firewall rules on Port 80.
            </p>
            <button 
              className="btn-primary" 
              onClick={toggleServer}
              style={{ backgroundColor: serverStatus === 'Stopped' ? '#ef4444' : '' }}
            >
              {serverStatus === 'Online' ? 'Stop Instance' : 'Start Instance'}
            </button>
          </div>

          {/* Card 2: Live Proxy Analytics */}
          <div className="card">
            <h3>Nginx Live Metrics</h3>
            <p>
              Handling internal reverse routing. Currently serving <strong>{requestCount}</strong> mock requests safely.
            </p>
            <button 
              className="btn-primary" 
              onClick={handleRefresh} 
              disabled={isRefreshing || serverStatus === 'Stopped'}
            >
              {isRefreshing ? 'Polling...' : 'Refresh Logs'}
            </button>
          </div>

          {/* Card 3: Continuous Deployment */}
          <div className="card">
            <h3>CI/CD Pipeline</h3>
            <p>
              Connected via Git. Future updates can be automatically pulled, built, and served instantly on production.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Open Repository
            </a>
          </div>
        </div>
      </main>

      {/* Structured Footer */}
      <footer className="app-footer">
        <p>© 2026 AWS EC2 React Production Demo. Built with modern performance patterns.</p>
      </footer>
    </div>
  );
}

export default App;

