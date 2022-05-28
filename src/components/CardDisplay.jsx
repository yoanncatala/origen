import React, { useState,useEffect } from 'react'
import CardRow from './CardRow'
const CardDisplay = (props) => {
    const {cards, gameChanged} = props
    const [topRow, setTopRow] = useState(cards.slice(0, 5))
    const [bottomRow, setBottomRow] = useState(cards.slice(-5))

    useEffect(()=> {
        if(cards != null){
            setTopRow(cards.slice(0, 5))
            setBottomRow(cards.slice(-5));
          }
    },[cards])
  return (
    <div className='card-display'>
        <CardRow cards ={topRow} gameChanged={gameChanged}/>
        <CardRow cards ={bottomRow} gameChanged={gameChanged}/>
    </div>
  )
}

export default CardDisplay