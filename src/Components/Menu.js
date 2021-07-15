import React,{useState} from 'react';
import './Menu.css';
import FirstPage from './FirstPage';
import Game from './Game';
const Menu = () => {
    const [isPlay,setIsPlay] = useState(false);
    const starPlayHandler = () =>{
        console.log("Play!");
        setIsPlay(true);
    }
    const stopPlayHandler = () =>{
        console.log("Back To Menu");
        setIsPlay(false);
    }
    
    return (
        <div>
           {!isPlay && (<FirstPage 
           onPlay = {starPlayHandler}/>)}
          {isPlay && ( <Game
            onBackToMenu = {stopPlayHandler}/>)}
        </div>
    );
}


export default Menu;