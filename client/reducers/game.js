import { SUBMIT_ANSWER, CHECK_ANSWER, RECEIVE_ANSWER } from '../constants/ActionTypes'

const initialState = 
  {
    question: '42 + 2',
    //answer: '',
    waitingForAnswer: false
  }


export default function game(state = initialState, action) {
  switch (action.type) {
    case CHECK_ANSWER:
      return {
        waitingForAnswer: true,
        question: "checking answer..."
      }
    case RECEIVE_ANSWER:
      console.log("RECEIVE_ANSWER", action);
      return {
        question: action.question,
        waitingForAnswer: false,
        nowPlaying: action.nowPlaying,
        turn: 7,
        correctAnswer: action.correctAnswer
      }
    default:
      return state
  }
}
