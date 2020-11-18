import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SummaryText } from 'components/Styles'
import { quiz } from '../reducers/quiz'
import congratulations from '../assets/congrats.jpg'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()

  const correctAnswers = answers.filter((answer) => {
    return answer.isCorrect === true
  })

  const resetQuiz = () => {
    return dispatch(quiz.actions.restart())
  }

  return (
    <section>
      <img src={congratulations} alt="congratulations icon" />
      <div>
        <SummaryText>{correctAnswers.length} correct answers out of 5</SummaryText>
      </div>
      <button type="button" onClick={resetQuiz}>Restart Quiz</button>
    </section>
  )
}