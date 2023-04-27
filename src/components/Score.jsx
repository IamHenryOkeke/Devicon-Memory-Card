import PropTypes from 'prop-types'

const Score = ({currentScore, bestScore}) => {    
  return (
    <div className='flex justify-between mx-4 md:mx-10 lg:mx-96 my-7'>
          <p className="px-7 py-2 rounded-2xl text-white bg-red-400 shadow-2xl">Current Score: <span>{currentScore}</span></p>
          <p className="px-7 py-2 rounded-2xl text-white bg-green-500 shadow-2xl">Best Score: <span>{bestScore}</span></p>
    </div>
  )
}

export default Score

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired
  
}
