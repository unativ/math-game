import * as types from '../constants/ActionTypes'

export function submitAnswer(text) {
  return { type: types.SUBMIT_ANSWER, text }
}
