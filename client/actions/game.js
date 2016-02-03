import * as types from '../constants/ActionTypes'
import axios from 'axios';

export function checkAnswer(answer) {
  return {
    type: types.CHECK_ANSWER,
    answer
  }
}

export function receiveAnswer(json) {
  console.log("json=", json);
  return {
    question: json.data.correctAnswer.toString(),
    type: types.RECEIVE_ANSWER,
    correctAnswer: json.data.correctAnswer
  }
}

export function postAnswerToServer(answer) {
  return function(dispatch) {
    dispatch(checkAnswer);
    console.log("postAnswerToServer", answer);

    return axios.post('http://localhost:8000/check_answer', { answer: answer} )
      //.then(response => response.json())
      .then(json => dispatch(receiveAnswer(json)))
      .catch(error => console.log(error));
  }
}
