/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Card from './card'
import ResultsIntro from './results-intro'
import ResultsBreakdown from './results-breakdown'

const score = (selectedAnswers, questions) => selectedAnswers.filter((answer, index) => questions[index].answerNumber === ({ a: 1, b: 2, c: 3})[answer])
.length

const QuizResults = ({selectedAnswers, title, questions}) => (
  <>
    <Card>
      <ResultsIntro score={score(selectedAnswers, questions)} title={title} questions={questions} />
    </Card>
    <Card isLast>
      <ResultsBreakdown selectedAnswers={selectedAnswers} questions={questions} />
    </Card>
  </>
)

export default QuizResults