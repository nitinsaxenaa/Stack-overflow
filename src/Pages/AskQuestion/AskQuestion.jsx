import React , {useState} from 'react'
import './AskQuestion.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {askQuestion} from '../../actions/question'

const AskQuestion = () => {
    const [questionTitle , setQuestionTitle] = useState('')
    const [questionBody , setquestionBody] = useState('')
    const [questionTags , setquestionTags] = useState('')


    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(askQuestion({questionTitle, questionBody, questionTags , userPosted: User.result.name , userId: User?.result?._id}, navigate))

    }
    const handleEnter = (e) =>{
        if(e.key === ''){
            setquestionBody(questionBody + "\n")
        }
    }
  return (
    <div className='ask-question'> 
    <div className='ask-ques-container'>
        <h1> Ask a Public Question </h1>
        {/* <h1>{questionBody}</h1> */}
        <form onSubmit={handleSubmit}>
            <div className=' ask-form-container'>
                <label htmlFor='ask-ques-title'>
                    <h4>Title</h4>
                    <p> Be specific and imagine you’re asking a question to another person.</p>
                    <input type='text' id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector?'/>
                </label>
                <label htmlFor='ask-ques-body'>
                    <h4>Body</h4>
                    <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.</p>
                    <textarea name='' id='ask-ques-body' onChange={(e) => {setquestionBody(e.target.value)}} cols= "80" rows= "20" onKeyPress = {handleEnter}></textarea>
                </label>
                <label htmlFor='ask-ques-tags'>
                    <h4>Tags</h4>
                    <p> Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                    <input type='text' id='ask-ques-tags' onChange={(e) => {setquestionTags(e.target.value.split(" "))}} placeholder='e.g.(Swift python-3x jquery)'/>
                </label>
            </div>
            <input type='submit' value='Review your question' className='review-btn'/>
        </form>
    </div>
    </div>
  )
}

export default AskQuestion