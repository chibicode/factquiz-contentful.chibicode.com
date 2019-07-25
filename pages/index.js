/* eslint camelcase: ["error", {properties: "never"}] */
import React from 'react'
import { createClient } from 'contentful'
import Page from '../src/components/page'

const Index = ({ data }) => {
  return <Page title={data.fields.title} description={data.fields.description} questions={data.fields.questions.map(q => q.fields)} />
}

Index.getInitialProps = async ({ query }) => {
  const client = createClient({
    space: process.env.contentfulSpaceId,
    accessToken: process.env.contentfulDeliveryAPIToken
  })

  const data = await client.getEntry(query.id || '5M71CoUHIWUkFjkS74l9pu')

  return { data }
}


export default Index
