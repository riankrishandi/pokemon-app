import React from 'react'

const MyPokemonContext = React.createContext({
  pokemons: [],
  checkNickName: () => { },
  addPokemon: () => { },
  releasePokemon: () => { }
})

function MyPokemonProvider({ children, value }) {
  return <MyPokemonContext.Provider value={value}>
    {children}
  </MyPokemonContext.Provider>
}

export {
  MyPokemonContext,
  MyPokemonProvider
}