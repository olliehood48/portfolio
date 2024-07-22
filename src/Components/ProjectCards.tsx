import React, { useState } from 'react';

interface Card {
  id: number;
  title: string;
  cardInfo: string;
  image?: string;
  demoLink?: string;
  technologies?: Array<String>;
}

interface ProjectCardsProps {
  cards: Card[];
  description: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ cards, description }) => {
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

  const getCardStyle = (index: number): React.CSSProperties => {
    const isCenter = index === centerIndex;
    const scale = isCenter ? 1.2 : 1;
    const zIndex = isCenter ? 1 : 0;
    const opacity = isCenter ? 1 : 0.5;
    const spacing = isCenter ? 100 : 200; // Adjust spacing as needed
    const transform = `scale(${scale}) translateX(${(index - centerIndex) * (250 + spacing)}px)`;

    return {
      position: 'absolute',
      padding: 10,
      left: `${35 + (10 * index)}%`,
      transform: `translateX(-50%) ${transform}`,
      width: '450px',
      height: '400px',
      transition: 'transform 0.8s ease, width 0.8s ease, height 0.8s ease, opacity 0.8s ease',
      backgroundColor: 'gainsboro',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      opacity,
      zIndex
    };
  };

  const arrowStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '46px',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2
  };

  return (
    <div>
      <h4 style={{ marginLeft: 6 }}>- {description}</h4>

      <div style={{ position: 'relative', width: '100%', height: '450px', paddingTop: '40px', paddingBottom: '20px', overflow: 'hidden' }}>
        {centerIndex > 0 && (
          <button style={{ ...arrowStyle, left: '10px' }} onClick={prevCard}>
            {'<'}
          </button>
        )}

        <div style={{ position: 'relative', width: '100%', height: '100%', marginLeft: 10, marginRight: 10 }}>
          {cards.map((card, index) => (
            <div key={card.id} style={getCardStyle(index)}>
              {card.image ? (
                <div>
                  <h3 style={{textAlign: 'center'}}>{card.title}</h3>
                  <img src={card.image} alt={card.image} style={{ width: '100%', height: 'auto', borderRadius: '20px 20px' }} />
                </div>
              ) : (
                <div style = {{margin: 10, justifyContent: 'space-between', height: '100%'}}>
                  <h3 style={{textAlign: 'center'}}>{card.title}</h3>
                  {index === centerIndex && <p>{card.cardInfo}</p>}
                  <div style={{position: 'absolute', marginLeft: 3, bottom: 3}}>
                    {index === centerIndex && card.technologies && (
                      <p>
                        -{'>'} Technologies used: {card.technologies.join(", ")}
                      </p>
                    )}
                    {index === centerIndex && card.demoLink && (
                      <p>
                        -{'>'} demo link: <a href={card.demoLink} target="_blank" rel="noopener noreferrer">{card.demoLink}</a>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {centerIndex < cards.length - 1 && (
          <button style={{ ...arrowStyle, right: '10px' }} onClick={nextCard}>
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
