import React, { useState, useContext } from 'react'
import Head from 'next/head'
import { AppContext } from '../context'
import {
  MyPokemonBanner,
  MyPokemonGridView,
  ReleaseModal
} from '../components'

export default function MyPokemon() {
  const {
    pokemons,
    releasePokemon
  } = useContext(AppContext)
  const [showModal, setShowModal] = useState(false)
  const [focusPokemon, setFocusPokemon] = useState({})

  function confirmRelease(pokemon) {
    setFocusPokemon(pokemon)
    setShowModal(true)
  }

  function cancelRelease() {
    setShowModal(false)
  }

  function handleRelease(nickName) {
    setShowModal(false)
    releasePokemon(nickName)
  }

  return (
    <>
      <Head>
        <title>My Pokemon</title>
      </Head>
      <Head>
        <title>My Pokemon</title>
      </Head>
      <MyPokemonBanner
        total={pokemons.length}
      />
      <br />
      {
        pokemons.length == 0 && <>
          <br />
          <h6>You don't have any pokemon right now</h6>
        </>
      }
      <MyPokemonGridView
        confirmRelease={confirmRelease}
        data={pokemons}
      />
      <br />
      <ReleaseModal
        show={showModal}
        onHide={cancelRelease}
        pokemon={focusPokemon}
        handleRelease={handleRelease}
      />
    </>
  )
}