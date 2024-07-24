import React, { useEffect, useState } from 'react';
import ProjectCards from '../Components/ProjectCards';
import ProjectCardInfo from './ProjectCardInfo';
import { FaChevronDown } from "react-icons/fa";

const Projects: React.FC = (  ) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateOpacity = (sectionTop: number, sectionHeight: number) => {
    if (scrollY + window.innerHeight / 2 > sectionTop && scrollY + window.innerHeight / 2 < sectionTop + sectionHeight) {
      return 1;
    }
    return 0.3;
  };

  return (
    <section id="projects" style={{ paddingBottom: 20 }}>
      <div
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '40px'
        }}>
        <p>Scroll below to see projects</p>
        <FaChevronDown />
      </div>
      {ProjectCardInfo.map((project, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              const sectionTop = el.offsetTop;
              const sectionHeight = el.offsetHeight;
              el.style.opacity = String(calculateOpacity(sectionTop, sectionHeight));
            }
          }}
          style={projectStyle}
          >
          <div style={{...projectTitleHeaderStyle, marginLeft: '15px', marginRight: '15px'}}>
            <div>
              <b>{project.title}</b>
            </div>
            <div style={{ marginTop: 4 }}>
              <i>~{project.dates}</i>
            </div>
          </div>
          <ProjectCards
            cards={project.cards}
          />
        </div>
      ))}
    </section>
  );
};

// styles
const projectTitleHeaderStyle: React.CSSProperties = {
  padding: '13px',
  backgroundColor: 'powderblue',
  borderRadius: '5px',
  marginTop: '12px',
};

const projectStyle: React.CSSProperties = {
  transition: 'opacity 0.5s ease',
};

export default Projects;
