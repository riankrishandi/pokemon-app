import { useState } from 'react'
import {
  ApolloProvider
} from '@apollo/client'
import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'
import { AppProvider } from '../context'
import { useLocalStorage } from '../hooks'
import client from '../apolloClient'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { Layour, Layout, MainNav } from '../components'

function MyApp({ Component, pageProps }) {
  const [myPokemons, setMyPokemons] = useLocalStorage("my-pokemons", [])
  const [showNotif, setShowNotif] = useState(false)

  function checkNickName(inputName) {
    const index = myPokemons.findIndex(pokemon =>
      pokemon.nickName.toLowerCase() === inputName.toLowerCase()
    )

    if (index === -1)
      return true

    return false
  }

  function addPokemon(pokemon) {
    setMyPokemons(previous => [...previous, pokemon])
  }

  function releasePokemon(nickName) {
    setMyPokemons(previous =>
      previous.filter(pokemon => pokemon.nickName !== nickName)
    )
  }

  function showHideNotif(bool) {
    setShowNotif(bool)
  }

  const value = {
    pokemons: myPokemons,
    checkNickName,
    addPokemon,
    releasePokemon,
    showNotif,
    setShowNotif: showHideNotif
  }

  return (
    <ApolloProvider client={client}>
      <AppProvider value={value}>
        <StyledContainer fluid="lg">
          <MainNav />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyledContainer>
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp

const StyledContainer = styled(Container)`
  padding: 0px;
`