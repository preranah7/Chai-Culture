import { useState, useEffect } from 'react';
import { Crown, Instagram, Facebook, Twitter, Mail, Moon, Sun } from 'lucide-react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 28,
    seconds: 58
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSocialClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you! We will notify you when we launch.');
      setEmail('');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* Background Image Section */}
      <div className="image-section">
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1668887467400-eb7a3ad45c47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFpJTIwdGVhJTIwY3VwJTIwc3BpY2VzJTIwY2lubmFtb258ZW58MXx8fHwxNzY5NTgwOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Chai Tea"
            className="chai-image"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Decorative Dot */}
        <div className="decorative-dot"></div>
        
        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Logo */}
        <div className="logo">
          <div className="logo-content">
            <Crown size={26} strokeWidth={1.5} />
            <span className="logo-text">CHAI CULTURE</span>
          </div>
          <div className="logo-underline"></div>
        </div>

        {/* Badge */}
        <div className="badge">
          <div className="badge-dot"></div>
          <span>LAUNCHING SPRING 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="main-heading">
          Brew the Royal<br />Tradition
        </h1>

        {/* Description */}
        <p className="description">
          Experience the authentic taste of premium instant chai tea, crafted with centuries-old recipes from royal Indian households. A perfect blend of aromatic spices and rich tea leaves.
        </p>

        {/* Countdown Timer */}
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>

        {/* Email Form */}
        <form className="email-form" onSubmit={handleNotify}>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="notify-button">
            Sign Up <span className="arrow">→</span>
          </button>
        </form>

        <p className="form-subtext">
          Join our exclusive list for early access and special offers
        </p>

        {/* Social Links */}
        <div className="social-section">
          <span className="social-label">Follow us</span>
          <div className="social-links">
            <a href="#" className="social-link" onClick={handleSocialClick}>
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" onClick={handleSocialClick}>
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" onClick={handleSocialClick}>
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" onClick={handleSocialClick}>
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          © 2026 Chai Culture. Crafted with tradition and excellence.
        </footer>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* <div className="modal-icon">
              <Sparkles size={32} />
            </div> */}
            <h2 className="modal-title">Brewing Something Special</h2>
            <p className="modal-text">
              We're crafting something special here. This feature is currently in the lab, steeping to perfection.
            </p>
            <p className="modal-subtext">
              Stay tuned for updates! Good things take time, like a perfect cup of chai.
            </p>
            <button className="modal-button" onClick={() => setShowModal(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;