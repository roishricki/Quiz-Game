import React from 'react';
import './FirstPage.css';

const FirstPage = (props) =>{

     
    return (
        <div className = 'first-page'>
            <h1> Welcome to Shricki Quiz !!</h1>
             <p>click START to play !</p>
             <button type="button" onClick ={props.onPlay}>START</button>
        </div>
    );
} 

export default FirstPage;