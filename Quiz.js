import React from "react";
import { useState } from "react";
import "./quiz.css";

export default function Quiz() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "How many fundamentals of web development are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: true },
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
      ],
    },

    {
      questionText: "React.js is used in?",
      answerOptions: [
        { answerText: "Frontend", isCorrect: true },
        { answerText: "Backend", isCorrect: false },
        { answerText: "Both of the above", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },

    {
      questionText: "Node.js is used in?",
      answerOptions: [
        { answerText: "Frontend", isCorrect: false },
        { answerText: "Backend", isCorrect: true },
        { answerText: "Both of the above", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "MERN Stack consist of which technologies ?",
      answerOptions: [
        { answerText: "Only Angular", isCorrect: false },
        { answerText: "Angular.js & React.js", isCorrect: false },
        { answerText: "Database React Express only", isCorrect: false },
        { answerText: "Database React Express Node", isCorrect: true },
      ],
    },

    {
      questionText: "Founder of Facebook is ?",
      answerOptions: [
        { answerText: "Mark Zuckerbergr", isCorrect: true },
        { answerText: "Mark Holand", isCorrect: false },
        { answerText: "Mark Clark" ,isCorrect: false },
        { answerText: "Mark Bruce", isCorrect: false },
      ],
    },

    {
      questionText: "Founder of JavaScipt is ?",
      answerOptions: [
        { answerText: "Michael Clark", isCorrect: false  },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Brenden Eich" ,isCorrect: true },
        { answerText: "Bruce Wayne", isCorrect: false },
      ],
    },
    
  ];
  // let questionCount = 1;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState(true);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // alert("Your quiz has now finished.");
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function scoreMethod()
  {
    let score_p = document.getElementById('score_p');
    let btn_restart = document.getElementById('restart_div');
    let score_btn = document.getElementById('score_btn');
    score_btn.style.display = "none";
    let grade = document.getElementById('grade');
    btn_restart.style.display = "block";
    let percentage_p = document.getElementById('percentage_p');


    score_p.innerHTML = `Your obtained ${score} marks out of ${questions.length}`;
    let percentage = Number(((score/(questions.length)) * 100));

   
       percentage_p.innerHTML = `So your percentage is = ${percentage.toFixed(3)}`;
    
    if(percentage >=90)
    {
      grade.innerHTML = `You achieved A+ in the quiz. Ma Sha Allah outstanding performance.`;
    }
    else if(percentage >=80)
    {
      grade.innerHTML = `You achieved A-grade in the quiz. Ma Sha Allah very nice, keep it up.`;
    }
    else if(percentage >=70)
    {
      grade.innerHTML = `You achieved B-grade in the quiz. Thats very nice.`;
    }
    else if(percentage >=60)
    {
      grade.innerHTML = `You achieved C-grade in the quiz. Work hard and try to upgrade your level.`;
    }
    else{
      grade.innerHTML = `Sorry you are fail. You are below the boundary. Work hard and be motivated.`
    }
  }

  return (
    <div className="Quiz_div">
      {screen ? (
        <div className="opening_div">
          <h1> Welcome to Quiz App</h1>
          <p>Click the below button for starting the quiz.</p>
          <button id="btn_start" onClick={() => setScreen(false)}>
            Start the Quiz
          </button>
        </div>
      ) : (
        <div>
          {showScore ? (
            <div className="score-section">
              <h1>Result Section: </h1>
             <p id="score_p"> Click the following button in order to see the score:</p>
             <p id="percentage_p">Percentage</p>
             <h2 id="grade">Grade content comes here</h2>
             <button id="score_btn" onClick={scoreMethod}>Click Here</button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>{currentQuestion + 1} / <bold> {questions.length}</bold></span>
                </div>

                <div className="question-text">
                  <h1>{questions[currentQuestion].questionText}</h1>
                </div>
              </div>
              <div className="answer-section">
                {/* <button id="btn">{questions[0].answerOptions[0].answerText}</button> */}
                {questions[currentQuestion].answerOptions.map((answerItem) => {
                  return (
                    <button
                      id="btn"
                      onClick={() =>
                        handleAnswerOptionClick(answerItem.isCorrect)
                      }
                    >
                      {answerItem.answerText}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
      <div id="restart_div">
        <button id="btn_restart" onClick={() => window.location.reload()}>
          Restart the Quiz
        </button>
      </div>
    </div>
  );
}
