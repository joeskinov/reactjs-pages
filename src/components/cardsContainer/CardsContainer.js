import React from 'react';
import './CardsContainer.css';
import Card from '../card/Card';

function CardsContainer({title, cards}) {
    return (
        <div className="featured-wrapper">
            <div className="container cards-container">
                <h1 className="cards-container-title">{title}</h1>
                <div className="cards-wrapper">
                    {cards &&
                    cards.map((card, i) => (
                        <Card 
                            key={i} 
                            image={card.image} 
                            title={card.title} 
                            textLogo={card.textLogo} 
                            isGive={card.isGive} 
                            earn={card.earn} 
                            completeRatio={card.completeRatio} 
                        />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardsContainer
