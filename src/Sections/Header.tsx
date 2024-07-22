import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => (
  <header>
    <h1 style={{ textAlign: 'center' }}>Oliver Hood</h1>
    <nav style={navStyles}>
      <a
        style={activeSection === 'about' ? activeLinkStyles : linkStyles}
        href="#about"
        onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
      >
        About
      </a>
      <a
        style={activeSection === 'projects' ? activeLinkStyles : linkStyles}
        href="#projects"
        onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}
      >
        Projects
      </a>
    </nav>
  </header>
);

const navStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px', // Space between links
};

const linkStyles: React.CSSProperties = {
  display: 'inline-block',
  width: '100px',
  height: '40px',
  backgroundColor: 'gainsboro',
  textAlign: 'center',
  lineHeight: '40px', // Center text vertically
  textDecoration: 'none',
  color: 'black',
  borderRadius: '25px'
};

const activeLinkStyles: React.CSSProperties = {
  ...linkStyles,
  backgroundColor: 'lightblue',
};

export default Header;
