import data from '../../data.json';

const Images = () => {
  
  return (
    <div className='grid grid-cols-2 gap-10'>
      {data.items.map(item => (
        <div key={item.id} className='cursor-pointer py-3 transition-all ease-in-out delay-150 border-2 border-rose-500 rounded-md flex flex-col gap-4 items-center hover:border-4 duration-300'>
            <img src={item.url} alt={item.name} className='w-1/3'/>
            <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Images
