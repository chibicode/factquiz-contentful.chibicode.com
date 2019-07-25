import React from 'react'
import GlobalStyles from './global-styles'
import Head from './head'
import Container from './container'
import Quiz from './quiz'

const Page = ({ title, description, questions }) => (
  <>
    <GlobalStyles />
    <Head title={`${title}チンパンジークイズ`} />
    <Container>
      <Quiz {...{ title, description, questions }} />
    </Container>
  </>
)

export default Page
