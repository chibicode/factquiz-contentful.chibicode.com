/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import MonkeyEmoji from './twemoji/1f435'
import ThinkEmoji from './twemoji/1f914'
import VsEmoji from './twemoji/1f19a'
import Emoji from './emoji'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Intro = ({ title, description, questions }) => <>
  <h1
    css={css`
      margin: 0 0 0.5rem;
      text-align: center;
      font-size: 1.75rem;
      line-height: 1.2;
    `}
  >
    {title}
    <br />
    チンパンジークイズ
  </h1>
  {documentToReactComponents(
  description
)}
  <div
    css={css`
      text-align: center;
      font-size: 2.75rem;
      margin-bottom: 1rem;
    `}
  >
    <Emoji>
      <ThinkEmoji />
    </Emoji>{' '}
    <Emoji>
      <VsEmoji />
    </Emoji>{' '}
    <Emoji>
      <MonkeyEmoji />
    </Emoji>
  </div>
  <p>
    クイズは全部で{questions.length}問。チンパンジーなら、だいたい{questions.length/3}問正解します。あなたは
    <strong>{questions.length/3 + 1}問以上正解</strong>
    し、見事チンパンジーに勝てるでしょうか？ぜひチャレンジしてみてください！
  </p>
</>

export default Intro
