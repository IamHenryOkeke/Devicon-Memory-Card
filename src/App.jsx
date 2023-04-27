import Footer from "./components/Footer"
// import Score from "./components/Score"
// import Images from "./components/Images"
import Header from "./components/Header"
import data from '../data.json';
import { useEffect, useState } from "react";


const App = () => {
  const imageArray = data.items;
  const [list, setList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  const incScore = (e) => {
    setList([...list, e.target.alt])
    if(list.includes(e.target.alt)){
      setCurrentScore(0);
      setList([]);
    }else{
      setCurrentScore(currentScore => currentScore + 1);
    } 
  }
  useEffect(()=>{
    if(currentScore > bestScore){
      setBestScore(currentScore);
    }
    shuffleArray(imageArray);
  }, [currentScore, bestScore]);

  return (
    <div className="p-0 m-0 box-border">
      <Header/>
      {/* <Score/>
      <Images/> */}
      <div className="main-container font-body">
        <div className='flex justify-between mx-4 md:mx-10 lg:mx-96 my-7'>
          <p className="px-7 py-2 rounded-2xl text-white bg-red-400 shadow-2xl">Current Score: <span>{currentScore}</span></p>
          <p className="px-7 py-2 rounded-2xl text-white bg-green-500 shadow-2xl">Best Score: <span>{bestScore}</span></p>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 gap-7 md:gap-12 mx-4 md:mx-10 lg:mx-96 mb-7'>
          {imageArray.map(item => (
            <div key={item.id} className='cursor-pointer shadow-2xl py-3 transition-all ease-in-out delay-150 border-2 rounded-md flex flex-col gap-4 items-center hover:scale-110 duration-300'>
                <img src={item.url} onClick={(e) => incScore(e)} alt={item.name} className='w-1/2'/>
                <p className="text-xs md:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
     
      <Footer/>
    </div>
  )
}

export default App

