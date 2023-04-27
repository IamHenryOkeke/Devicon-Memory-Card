import Footer from "./components/Footer"
import Score from "./components/Score"
import Images from "./components/Images"
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
      <div className="main-container font-body">
        <Score currentScore = {currentScore} bestScore = {bestScore}/>
        <Images data={imageArray} handleClick={incScore}/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App

