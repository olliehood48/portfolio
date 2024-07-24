import React, { useState } from 'react';
import { ProjectCardsProps, Technologies } from '../types';
import { CardPhotos } from '../images/imageLinks';
import { isMobile } from '../mobileCheck';

const ProjectCards: React.FC<ProjectCardsProps> = ({ cards }) => {
  const [centerIndex, setCenterIndex] = useState<number>(0);

  const nextCard = () => {
    if (centerIndex < cards.length - 1) {
      setCenterIndex(centerIndex + 1);
    }
  };

  const prevCard = () => {
    if (centerIndex > 0) {
      setCenterIndex(centerIndex - 1);
    }
  };

  const getCardStyle = (index: number, noCards: number): React.CSSProperties => {
    const isCenter = index === centerIndex;
    const scale = isCenter ? 1.2 : 1;
    const zIndex = isCenter ? 1 : 0;
    const opacity = isCenter ? 1 : 0.5;

    const spacing = isCenter ? 100 : 200; // Adjust spacing as needed
    // const mobileSpacing = 0; // No spacing in mobile

    // Calculate transformation based on card position
    const transformOffset = isMobile
      ? (index - centerIndex) * 100 // shift fully for mobile
      : (index - centerIndex) * (280 + spacing); // space normally for desktop

    const transform = `scale(${scale}) translateX(${transformOffset}px)`;

    return {
      position: 'absolute',
      left: isMobile ? '47.2%' : `${40 + ((30/noCards) * index)}%`,
      transform: `translateX(-50%) ${transform}`,
      width: isMobile ? '75%' : '450px',
      height: '400px',
      transition: 'transform 0.8s ease, width 0.8s ease, height 0.8s ease, opacity 0.8s ease',
      backgroundColor: 'azure',
      border: '0.3px solid lightblue',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '17px',
      opacity,
      zIndex,
    };
  };

  const arrowStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '40px',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
  };

  return (
    <div>
      {/* <h4 style={{ marginLeft: 6 }}>- {description}</h4> */}

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '450px',
          marginTop: '20px',
          paddingTop: '40px',
          paddingBottom: '20px',
          overflow: 'hidden',
        }}
      >
        {(centerIndex > 0 && window.innerWidth > 768) && (
          <button style={{ ...arrowStyle, left: '10px' }} onClick={prevCard}>
            {'<'}
          </button>
        )}

        <div style={{ position: 'relative', width: '100%', height: '100%', marginLeft: 10, marginRight: 10 }}>
          {cards.map((card, index) => (
            <div key={card.id} style={getCardStyle(index, cards.length)}>
              <h3 style={{ textAlign: 'center', position: 'absolute', top: '5px'}}>{card.title}</h3>
              {card.image ? (
                // show image card
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                  <img
                    src={card.image}
                    alt={card.title}  
                    style={{ width: '95%', height: 'auto', borderRadius: '20px' }}
                  />
                </div>
              ) : (
                // show video
                (card.video ? (
                  <div style={{marginTop: '50px'}}>
                    <video controls style= {{ 
                      width: '100%',
                      maxWidth: '400px', 
                      maxHeight: '300px'
                    }}>
                      <source src={card.video} type="video/mp4" style={{height: '10px', width: '10px'}} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  // show cardInfo
                  <div style={{ margin: '20px', marginTop: (card.technologies ? '40px' : '60px'), paddingTop: '20px', justifyContent: 'space-between', height: '100%' }}>
                    {index === centerIndex && <p>{card.cardInfo}</p>}
                    {(index === centerIndex && card.GitHubLink) && (
                      <a href={card.GitHubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    )}
                    <div style={{ position: 'absolute', width: '100%', marginLeft: (isMobile ? '20px' : '0px'), bottom: '13px', left: (isMobile ? '0px': '68px') }}>
                      {index === centerIndex && card.technologies && (
                        <div>
                          {card.technologies?.map((tech) => {
                            // show technologies
                            const imgSrc = CardPhotos.Technologies[tech as keyof Technologies];

                            return imgSrc ? (
                              <img src={imgSrc} alt={tech} key={tech} style={{ width: (isMobile ? '55px' : '75px'), height: (isMobile ? '55px' : '75px'), marginRight: '40px' }} />
                            ) : (
                              <span key={tech} style={{ margin: '5px', textAlign: 'center' }}>{tech}</span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        {(centerIndex < cards.length - 1 && window.innerWidth > 768) && (
          <button style={{ ...arrowStyle, right: '10px' }} onClick={nextCard}>
            {'>'}
          </button>
        )}


        {/* next/prev buttons different for mobile */}
        {window.innerWidth <= 768 && (
          <div style={{ flexDirection: 'row' }}>
            {centerIndex > 0 && <button style={{ ...arrowStyle, left: '-38px' }} onClick={prevCard}>
              {'<'}
            </button>}
            {/* <div style = {{width: 40}}/> */}
            {centerIndex < cards.length - 1 && <button style={{ ...arrowStyle, right: '-38px' }} onClick={nextCard}>
              {'>'}
            </button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
