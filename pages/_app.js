import {
  ApolloProvider
} from '@apollo/client'
import { MyPokemonProvider } from '../context'
import { useLocalStorage } from '../hooks'
import client from '../apolloClient'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [myPokemons, setMyPokemons] = useLocalStorage("my-pokemons", [])

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

  const value = {
    pokemons: myPokemons,
    checkNickName,
    addPokemon,
    releasePokemon
  }

  return (
    <ApolloProvider client={client}>
      <MyPokemonProvider value={value}>
        <Component {...pageProps} />
      </MyPokemonProvider>
    </ApolloProvider>
  )
}

export default MyApp
