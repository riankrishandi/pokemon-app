import styled from '@emotion/styled'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <br />
      <StyledDiv>
        <p>Create with React Next.js</p>
        <p>Libraries:</p>
        <ul>
          <li>React Bootstrap for UI components</li>
          <li>Emotion for writing styles with Javascript</li>
          <li>Apollo GraphQL for data fetching</li>
        </ul>
        <p>View source code on <StyledA href="https://github.com/riankrishandi/pokemon-app"> Github repo</StyledA></p>
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  text-align: left;
  margin: 0 15px;
`

const StyledA = styled.a`
  color: #0056b3;
`