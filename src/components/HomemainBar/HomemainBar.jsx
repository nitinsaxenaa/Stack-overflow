import React from 'react'
import './HomemainBar.css'
import { useLocation, useNavigate}  from 'react-router-dom'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'
const HomemainBar = () => {
  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector((state) => state.questionsReducer);
  console.log(questionsList)
  // var questionList = [{
  //   _id:1,
  //   votes : 1,
  //   upvotes:3,
  //   downVotes: 2,
  //   noOfAnswers:2,
  //   questionTitle: "What is a function ?",
  //   questionBody: "It meant to be ",
  //   questionTags: ["java" , "nodejs" , "react js" , "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "Jan 2",
  //     userId: 2,
  //   }]
  // }, {
  //   _id:2,
  //   votes : 1,
  //   upvotes:3,
  //   downVotes: 2,
  //   noOfAnswers:2,
  //   questionTitle: "What is a function ?",
  //   questionBody: "It meant to be ",
  //   questionTags: [" java " , "nodejs " , " react js " , "mongodb "],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "Jan 2",
  //     userId: 2,
  //   }]
  // },{
  //   _id:3,
  //   votes : 1,
  //   upvotes:3,
  //   downVotes: 2,
  //   noOfAnswers:2,
  //   questionTitle: "What is a function ?",
  //   questionBody: "It meant to be ",
  //   questionTags: ["java" , "nodejs" , "react js" , "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: 'kumar',
  //     answeredOn: "Jan 2",
  //     userId: 2,
  //   }]
  // },]
 
  const checkAuth = () =>{
    if(user === null){
      alert("Login or signup to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question</h1> :<h1>All Question</h1>
        }
        <button onClick = {checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ? 
          <h1>Loading...</h1> : 
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionList = {questionsList.data}/>
          </>
        }
        
      </div>
    </div>
  )
}

export default HomemainBar