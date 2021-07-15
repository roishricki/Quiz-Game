import React, { useState } from "react";
import "./Question.css";

const Question = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const[isRight,setIsRight]=useState(false);
  const[isAnswered,setIsAnswered]=useState(false);
  const[lastAnswer,setLastAnswer]=useState(props.answer);

  const checkIfARight = () => {
    if (props.A.toString() === props.answer.toString()) {
      props.onUpdateScore();
      setIsRight(true);
    } else {
      props.onUpdateHearts();
      setIsRight(false);
    }
    levelUP();
  };

  const checkIfBRight = () => {
    if (props.B.toString() === props.answer.toString()) {
      props.onUpdateScore();
      setIsRight(true);
    } else {
      props.onUpdateHearts();
      setIsRight(false);
    }
    levelUP();
  };

  const checkIfCRight = () => {
    if (props.C.toString() === props.answer.toString()) {
      props.onUpdateScore();
      setIsRight(true);
    } else {
      props.onUpdateHearts();
      setIsRight(false);
    }
    levelUP();
  };

  const checkIfDRight = () => {
    if (props.D.toString() === props.answer.toString()) {
      props.onUpdateScore();
      setIsRight(true);
    } else {
      props.onUpdateHearts();
      setIsRight(false);
    }
    levelUP();
  };
  const levelUP = () => {
      setIsAnswered(true);
    setIsClicked(false);
    props.onUpdateLevel();
    setLastAnswer(props.answer);
  };


  const message =()=>{
    return (<div>
    {(isRight&&isAnswered)&&(<div>
      <h style={{ color: 'greenyellow' ,textShadow :"0 0 3px #000000"}}>CORRECT</h>
      <p style={{fontSize : '20px',color: 'greenyellow' ,textShadow :"0 0 3px #000000",marginTop:"10px"}}>You Got 100 Points !</p>
      </div>)}
    {(!isRight&&isAnswered)&&(<div>
      <h style={{ color: 'red' ,textShadow :"0 0 2px #FF0000"}}>WRONG!</h>
      <p style={{ color: 'red' ,textShadow :"0 0 2px #FF0000",fontSize:"30px",marginTop:"10px"}}>Correct Answer : {lastAnswer}</p>
      </div>)}
    </div>);
  }

  return (
    <div className="question">
      {!isClicked && (
        <div>
          <h1>{props.quest}</h1>
          <p style={{textAlign:"center",fontFamily:"fantasy"}}>Level : {props.currentLevel+1}</p>
          <button onClick={checkIfARight}>{props.A}</button>
          <button onClick={checkIfBRight}>{props.B}</button>
          <button onClick={checkIfCRight}>{props.C}</button>
          <button onClick={checkIfDRight}>{props.D}</button>
          {message()}
        </div>
      )}
    </div>
  );
};

export default Question;
