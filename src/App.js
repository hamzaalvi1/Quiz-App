import './App.css';
import QuizCard from './Screens/QuizCard';
import {useState,useEffect} from "react"

function App() {
  const [questions, setQuestions] = useState([])
  const [currentQuestion,setCurrentQuestion] = useState(0)

  
  const getQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    const tempQuestions = await response.json()
    setQuestions(tempQuestions.results)
  }

 useEffect(()=>{
  
  getQuestions()
 
 },[]) 
  return (
    <div className="App">
     <QuizCard questionsList={questions} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
    </div>
  );
}

export default App;
