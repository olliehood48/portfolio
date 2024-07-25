import React from 'react';
import { isMobile } from '../mobileCheck';
import { CardPhotos } from '../images/imageLinks';

const technologies = ["Python", "JavaScript", "TypeScript", "MongoDB", "Pandas", "Numpy", "Tailwind", "NodeJS", "TKinter", "Express", "Matplotlib", "PowerBI"]

const Header: React.FC = () => (
  <header style = {headerStyle}>
    <h3 style = {{ fontSize: 25, marginLeft: '15px' }}>Oliver Hood</h3>
    <div style = {aboutStyle}>
      <a style = {{ fontSize: 17, fontWeight: 'bold' }}>Info: <br/></a>
      <span>- mobile: 07469 212 800<br/></span>
      <span>- email: ollie@hoodies.co.uk<br/></span>
      <a>{"- "}
      <a
        href={CardPhotos.CV.CVpdf}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}
      >
        CV (pdf) <br/><br/>
      </a></a>
      <a style = {{ fontSize: 17, fontWeight: 'bold' }}>About: <br/></a>
      <span>- 2:1, Mathematics with industrial placement, University of Leeds<br/></span>
      <span>
        - As a mathematician, I didn't have much direct exposure to programming, until I was doing my placement year at Rolls-Royce Motor Cars and began automating Excel processes using Pandas. 
        This sparked my interest in programming and I decided to teach myself how to develop my own app. Along with using Python to model simulations of a mathematical algorithm,
        I believe in the last 18 months I have provided myself with a solid understanding of programming fundamentals, to where I am now keen to apply what I have learnt in an industry setting.  
      <br/><br/></span>
      <a style = {{ fontSize: 17, fontWeight: 'bold' }}>Technologies: <br/></a>
      <div style = {{ marginLeft: '5%', marginTop: '30px', marginBottom: '10px', width: (isMobile ? '100%' : '100%') }}>
        {technologies?.map((tech) => {
          // show technologies
          const imgSrc = CardPhotos.Technologies[tech];

          return imgSrc ? (
              <img src={imgSrc} alt={tech} key={tech} style={{ width: (isMobile ? '55px' : '60px'), height: (isMobile ? '55px' : '75px'), marginRight: '40px' }} />
          ) : (
            <span key={tech} style={{ margin: '5px', textAlign: 'center' }}>{tech}</span>
          );
        })}
      </div>
    </div>
  </header>
);

const headerStyle: React.CSSProperties = {
  width: (isMobile ? '' : '95%'),
  alignItems: 'center',
  marginTop: '30px',
  marginLeft: '30px',
  marginRight: '30px',
  display: 'inline-block',
  backgroundColor: 'powderblue',
  borderRadius: '10px',
  paddingLeft: '10px'
};

const aboutStyle: React.CSSProperties = {
  backgroundColor: 'azure',
  width: (isMobile ? '90.5%' : '97.7%'),
  borderRadius: '10px',
  marginBottom: '10px',
  padding: '10px',
  marginTop: '40px',
}

export default Header;
