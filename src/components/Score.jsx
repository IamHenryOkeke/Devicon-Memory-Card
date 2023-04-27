import { useState } from 'react'

const Score = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);    
  return (
    <div className='flex justify-between'>
      <p>Current Score: <span>{currentScore}</span></p>
      <p>Best Score: <span>{bestScore}</span></p>
    </div>
  )
}

export default Score
