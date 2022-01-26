import React from 'react';
import "./quiz.css"
import Questions from '../../Components/Questions';

const QuizCard = ({questionsList,setCurrentQuestion,currentQuestion}) => {
  return( 
  <div className='quizBox'>
      <div className="quiz-header">
          <h1>Quiz App</h1>
      </div>

      <Questions questionsList={questionsList} setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
   

  </div>
  );
};

export default QuizCard;
