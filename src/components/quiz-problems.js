/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import Card from './card'
import Intro from './intro'
import Outro from './outro'
import Map from './map'
import ChoiceButton from './choice-button'
import ExternalLink from './external-link'

const quietCss = css`
  color: #777;
  font-size: 0.825rem;
`

const QuizProblems = ({setAnswer, selectedAnswers, submit, title, description, questions}) => (
  <>
    <Card>
      <Intro title={title} description={description} questions={questions} />
    </Card>
    {questions.map(
      ({question, answer1, answer2, answer3, answer1Image, answer2Image, answer3Image, useGraphic}, index) =>
        selectedAnswers.length >= index && (
          <Card key={question} isLast={selectedAnswers.length === index}>
            <h3
              css={css`
                margin-top: 0;
                font-size: 1rem;
                margin-bottom: 1rem;
              `}
            >
              <span
                css={css`
                  color: #777;
                `}
              >
                質問{index + 1}:
              </span>{' '}
              {question}
            </h3>
            <>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'a'}
                onClick={setAnswer({index, answer: 'a'})}
              >
                {answer1Image ? <Map url={answer1Image.fields.file.url} /> : answer1}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'b'}
                onClick={setAnswer({index, answer: 'b'})}
              >
                {answer2Image ? <Map url={answer2Image.fields.file.url} /> : answer2}
              </ChoiceButton>
              <ChoiceButton
                isSelected={selectedAnswers[index] === 'c'}
                onClick={setAnswer({index, answer: 'c'})}
              >
                {answer3Image ? <Map url={answer3Image.fields.file.url} /> : answer3}
              </ChoiceButton>
            </>
            {index === 0 && (
              <>
                <p css={quietCss}>
                  正しいと思う答えを選んでみてください。最後にある「
                  <strong>何問正解したかチェック！</strong>
                  」ボタンを押すまで何度でも選び直すことができます。
                </p>
                <p css={quietCss}>
                  このクイズについて詳しくは
                  <ExternalLink href="https://github.com/chibicode/factquiz-contentful.chibicode.com">
                    こちら
                  </ExternalLink>
                  。
                </p>
              </>
            )}
          </Card>
        )
    )}
    {selectedAnswers.length === questions.length && (
      <Card isLast>
        <Outro submit={submit} />
      </Card>
    )}
  </>
)

export default QuizProblems
