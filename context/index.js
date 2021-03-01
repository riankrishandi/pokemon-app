import React from 'react'

const AppContext = React.createContext({
  pokemons: [],
  checkNickName: () => { },
  addPokemon: () => { },
  releasePokemon: () => { },
  showNotif: false,
  setShowNotif: () => { }
})

function AppProvider({ children, value }) {
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

export {
  AppContext,
  AppProvider
}