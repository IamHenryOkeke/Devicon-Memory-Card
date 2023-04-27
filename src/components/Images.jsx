import PropTypes from 'prop-types'

const Images = ({data, handleClick}) => { 
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 gap-7 md:gap-12 mx-4 md:mx-10 lg:mx-96 mb-7'>
          {data.map(item => (
            <div key={item.id} className='cursor-pointer shadow-2xl py-3 transition-all ease-in-out delay-150 border-2 rounded-md flex flex-col gap-4 items-center hover:scale-110 duration-300'>
                <img src={item.url} onClick={(e) => handleClick(e)} alt={item.name} className='w-1/2'/>
                <p className="text-xs md:text-base">{item.name}</p>
            </div>
          ))}
    </div>
  )
}

export default Images

Images.propTypes = {
  data: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
  
}