import { SUBMIT_ANSWER } from '../constants/ActionTypes'

const initialState = 
  {
    question: '42 + 2',
    answer: ''
  }


export default function game(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return {
        answer: action.answer,
        question: 'new'
      }

    default:
      return state
  }
}
