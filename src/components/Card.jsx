import React, { useEffect, useState, useCallback } from 'react'
import './Card.css';
const Card = (props) => {
  const [, updateState] = useState();
 const forceUpdate = useCallback(() => updateState({}), []);

  const { cardName, gameChanged, dual } = props
  var path = `assets/${cardName}.png`
  
  useEffect(() => {
      forceUpdate()
}, [gameChanged])
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className="card-front">
                <img src={path} className={dual ? "dual dual-first" : ""} alt="Front Card"  />
                {dual ? <img className="dual dual-second" src={`assets/${dual}.png`} alt="Dual Card"  />:null}
            </div>
            <div className="card-back">
                <img src="assets/back.png" alt="Back card"  />
            </div>
        </div>     
    </div>
  )
}

export default Card