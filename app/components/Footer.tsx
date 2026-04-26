import FeatherBg from './FeatherBg'

export default function Footer() {
  return (
    <footer>
      <FeatherBg />
      <div className="footer-copy">© 2026 Pujun Bhatnagar</div>
      {/* Peacock — India's national bird */}
      <div className="footer-diya" aria-hidden="true">
        <svg width="24" height="22" viewBox="0 0 38 35" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          {/* 5 tail feather stems fanning upward, each tipped with a peacock eye */}
          <path d="M19,25 Q5,16 3,5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="3" cy="5" r="2.4"/>
          <path d="M19,25 Q10,12 10,4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="10" cy="4" r="2.4"/>
          <path d="M19,25 L19,3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="19" cy="3" r="2.4"/>
          <path d="M19,25 Q28,12 28,4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="28" cy="4" r="2.4"/>
          <path d="M19,25 Q33,16 35,5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="35" cy="5" r="2.4"/>
          {/* Body */}
          <ellipse cx="19" cy="31" rx="5" ry="4"/>
          {/* Neck */}
          <path d="M19,27 Q18,25 19,23" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          {/* Head */}
          <circle cx="19" cy="21" r="3"/>
          {/* Crest — 3 fine plumes */}
          <path d="M17,18 L16,16" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
          <circle cx="16" cy="15.5" r="1"/>
          <path d="M19,18 L19,15" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
          <circle cx="19" cy="14.5" r="1"/>
          <path d="M21,18 L22,16" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
          <circle cx="22" cy="15.5" r="1"/>
        </svg>
      </div>
      <div className="footer-icons">
        <a href="mailto:pujun@trykintsugi.com" aria-label="Email" className="footer-icon-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 7 10-7" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/pujun" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="https://trykintsugi.com" target="_blank" rel="noopener noreferrer" aria-label="Kintsugi" className="footer-icon-link footer-kintsugi-link">
          Kintsugi
        </a>
      </div>
    </footer>
  )
}
