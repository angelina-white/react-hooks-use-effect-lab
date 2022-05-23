import React, { useState } from "react";
import { useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  useEffect(() => 
  {
    let myInterval = setInterval(() => 
    {
      if (timeRemaining > 0) 
      {
          setTimeRemaining(timeRemaining - 1);
      }
      else
      {
        {onAnswered(false)}
        setTimeRemaining(10)
      }
    }, 1000)
  return ()=> {
      clearInterval(myInterval);
    };
});

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
