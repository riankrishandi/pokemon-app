import {
  useState,
  useContext,
  useRef,
  useCallback
} from 'react'
import { MyPokemonContext } from '../context'
import { usePokemonList } from '../hooks'
import {
  Layout,
  PokemonGridView,
  PokemonListBanner
} from '../components'

export default function PokemonList() {
  const pokemonCtx = useContext(MyPokemonContext)
  const {
    pokemons = [],
    error,
    hasMore,
    loading
  } = usePokemonList(0)

  // infinite scroll observer
  const observer = useRef()
  const lastListElementRef = useCallback(node => {
    if (loading)
      return;

    if (observer.current)
      observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prev => prev + 20)
      }
    })

    if (node)
      observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <Layout>
      <PokemonListBanner
        caughtNumber={pokemonCtx.pokemons.length}
      />
      <br />
      <h3>Find Pokemons</h3>
      <br />
      <PokemonGridView
        data={pokemons}
        lastListElementRef={lastListElementRef}
      />
    </Layout>
  )
}
