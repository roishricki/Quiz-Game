import React, { useState } from "react";
import Question from "./Question";
import "./Game.css";
import User from "./User";

const Game = (props) => {
  const questionList = [
  
    {
      question: "?מהו שיא העולם בריצת 100 מטרים",
      optionA: "9.25",
      optionB: "9.58",
      optionC: "9.84",
      optionD: "9.75",
      answer: "9.58"
    },
    {
      question: "?מהי עיר הבירה של דנמרק",
      optionA: "קופנהגן",
      optionB: "סטוקהולם",
      optionC: "אוסלו",
      optionD: "וילנה",
      answer: "קופנהגן"
    },
    {
      question: "?איזה חברה היא לא שוודית",
      optionA: "IKEA",
      optionB: "Spotify",
      optionC: "Nestle",
      optionD: "H&M",
      answer: "Nestle",
    },
    {
      question: "? פי כמה גדולה השמש מכדור הארץ",
      optionA: "פי 300",
      optionB: "פי 3,000",
      optionC: "פי 3 מליון ",
      optionD: "פי 1.3 מליון",
      answer: "פי 1.3 מליון"
    },
    {
      question: "? מי מהבאים לא זכה בפרס נובל",
      optionA: "ברק אובמה",
      optionB: "מהטמה גנדי",
      optionC: "ווינסטון צ'רצ'יל",
      optionD: "אלברט איינשטיין",
      answer: "מהטמה גנדי"
    },
    {
      question: "? מה גובהו של הפסל המפורסם של ישו בברזיל - ריו דה ז'ניירו",
      optionA: "38 M",
      optionB: "20 M",
      optionC: "50 M",
      optionD: "15 M",
      answer: "38 M",
    },
    {
      question: "? מהי הקבוצה הראשונה שבה שיחק יוסי בניון בחו'ל כשחקן בוגר",
      optionA: "ווסטהם יונייטד",
      optionB: "ראסינג סנטאנדר",
      optionC: "ליברפול",
      optionD: "צ'לסי",
      answer: "ראסינג סנטאנדר",
    },
    {
      question: "? מהי המדינה הקטנה בעולם אחרי הוותיקן",
      optionA: "ישראל",
      optionB: "טובלו",
      optionC: "מונקו",
      optionD: "סן מרינו",
      answer: "מונקו",
    },
    {
      question: "? מהי דמנציה",
      optionA: "הזדקנות",
      optionB: "האי עליו יושבת ונציה",
      optionC: "הפרעות אישיות גבולית",
      optionD: "אובדן היכולת האינטלקטואלית",
      answer: "אובדן היכולת האינטלקטואלית",
    },
    {
      question: "? איזה נשיא אמריקני נורה בחזהו בזמן שנשא נאום",
      optionA: "תאודור רוזוולט",
      optionB: "ג'ון קנדי",
      optionC: "ג'ורג' וושינגטון",
      optionD: "ריצ'רד ניקסון",
      answer: "תאודור רוזוולט",
    }
  ];

  const [score, setScore] = useState(0);
  const [hearts,setHearts] = useState(3);
  const[level,setLevel] = useState(0);

  const updateScore = () => {
    console.log("Update Score");
    setScore(score + 100);
  };
  const updateHearts =()=>{
    console.log("Update Heart");
    setHearts(hearts-1);
  }
  const updateLevel =()=>{
    console.log("Update Level");
    setLevel(level + 1);
  }
  

  return (
    <div>
      {(hearts>0) &&(
        <Question
        quest={questionList[level].question}
        A={questionList[level].optionA}
        B={questionList[level].optionB}
        C={questionList[level].optionC}
        D={questionList[level].optionD}
        answer={questionList[level].answer}
        onUpdateScore={updateScore}
        onUpdateHearts={updateHearts}
        onUpdateLevel={updateLevel}
        currentLevel = {level}
      />
      )}
      <div className="game">
        {(hearts===0) && (<div>
          <h2 style={{color : "red",fontSize:"100px",textShadow :"0 0 5px #FF0000",fontFamily:"fantasy"}}>GAME OVER</h2>
          <h2 style={{color : "white",fontSize:"60px",textShadow :"0 0 5px #000000",fontFamily:"fantasy"}}>Your Score : {score}</h2>
          </div>
        )}
       
      </div>
      <div className='game'>
       {(hearts>0) && (<img src="/images/Heart.png" alt="" />)}
       {(hearts>1) && (<img src="/images/Heart.png" alt="" />)}
       {(hearts>2) && (<img src="/images/Heart.png" alt="" />)}
       {(hearts>0)&&(<User points={score} />)}
          <div>
          <button
          type="button"
          onClick={props.onBackToMenu}
          className="game button"
        >
          Back To Menu
        </button>
          </div>
        </div>
    </div>
  );
};

export default Game;
