/* eslint camelcase: ["error", {properties: "never"}] */
import React from 'react'
// import { createClient } from 'contentful'
import Page from '../src/components/page'

const Index = () => <Page />

Index.getInitialProps = async () => {
  // const client = createClient({
  //   space: process.env.contentfulSpaceId,
  //   accessToken: process.env.contentfulDeliveryAPIToken
  // })

  // TODO: Use query parameter to figure out which quiz to show
  return {}
}


export default Index
