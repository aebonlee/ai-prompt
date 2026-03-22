import { Link } from 'react-router-dom'
import site from '../config/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-highlight">AI</span> Prompt
            </div>
            <p>{site.description}</p>
          </div>

          <div>
            <h4 className="footer-heading">커리큘럼</h4>
            <ul className="footer-nav-links">
              {site.footerLinks.map((link, i) => (
                <li key={i}><Link to={link.path}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">정보</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                프롬프트 엔지니어링 학습 플랫폼
              </div>
              <a className="footer-contact-row" href="https://github.com/aebonlee/ai-prompt" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} AI Prompt. All rights reserved.
          <div className="footer-meta">
            <span>React + Vite</span>
            <span className="footer-divider">|</span>
            <span>Supabase Auth</span>
            <span className="footer-divider">|</span>
            <span>Prompt Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
