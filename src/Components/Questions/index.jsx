import React,{useEffect,useState} from 'react';
import {decode} from 'html-entities';
const Questions = ({questionsList,setCurrentQuestion,currentQuestion}) => {
    console.log(questionsList)

const [randomOptions,setRandomOptions] = useState([])

const shuffle = (array)=> {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    setRandomOptions(array)
  }

useEffect(()=>{

    const sortOptions = [questionsList[currentQuestion]?.incorrect_answers,questionsList[currentQuestion]?.correct_answer]
    // const shuffledOptions = sortOptions.flat().sort((a, b) => 1 - Math.random())
    // setRandomOptions(shuffledOptions)
    shuffle(sortOptions.flat())

},[currentQuestion])


    const nextQuestionFunc = () => {
    
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
      };
    
      const onResetQuestion = ()=>{
        setCurrentQuestion(0)
      }
    return (
  <div className='questions'>
   <h2>{decode(questionsList[currentQuestion]?.question,{level: "html5"})}</h2>
   <div className="optionContainer">
       {
           randomOptions.map((options,index)=>{
            return(
                <div key={index} className='options'>
                    {options}
                </div>
            )
           })
       }
       {/* <div className="options">
           a. Hyper text transfer package
       </div>
       <div className="options">
           b. Hyper text transfer package
       </div>
       <div className="options">
           c. Hyper text transfer package
       </div>
       <div className="options">
           d. Hyper text transfer package
       </div> */}

   </div>
   <div className="ques-footer">
       {questionsList.length - 1 !== currentQuestion ? <a onClick={nextQuestionFunc}>Next</a>:
       <a onClick={onResetQuestion}>Reset</a>
       }
       
   </div>



  </div>
  );
};

export default Questions;
