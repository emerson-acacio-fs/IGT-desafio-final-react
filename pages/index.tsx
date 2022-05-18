import type { NextPage } from "next"
import styled from "styled-components"

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
`

const Home: NextPage = () => {
  return (
    <div>
      <h1>welcome to next.js!</h1>
      <Main>Olá next</Main>
    </div>
  )
}

export default Home
