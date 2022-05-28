import React from 'react'
import Card from './Card'

const CardRow = (props) => {
    const { cards, gameChanged} = props
    
  return (
    <div className='card-row'>
        {
            cards != null ? 
            cards.map(card => {
                return (
                    <Card gameChanged={gameChanged} key={card} cardName={card} dual={ card === "prince" ? "jumeau" : null } />
                )
            })
            :
            null
        }
    </div>
  )
}

export default CardRow