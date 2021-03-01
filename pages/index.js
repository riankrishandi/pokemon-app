import {
  useState,
  useContext,
  useRef,
  useCallback
} from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { AppContext } from '../context'
import { usePokemonList } from '../hooks'
import {
  PokemonGridView,
  PokemonListBanner
} from '../components'

export default function PokemonList() {
  const {
    pokemons: caught,
    showNotif,
    setShowNotif
  } = useContext(AppContext)
  const [offset, setOffset] = useState(0)
  const {
    pokemons = [],
    error,
    hasMore,
    loading
  } = usePokemonList(offset)

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
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <PokemonListBanner
        caughtNumber={caught.length}
      />
      {
        showNotif && <>
          <br />
          <StyledAlert
            onClose={() => setShowNotif(false)}
            dismissible
            variant="success"
          >
            New pokemon has been added to your collection
          </StyledAlert>
        </>
      }
      <br />
      <h3>Find Pokemons</h3>
      <br />
      {
        error && <>
          <StyledAlert
            variant="danger"
          >
            Fetch data failed. Please refesh your page
          </StyledAlert>
          <br />
        </>
      }
      <PokemonGridView
        data={pokemons}
        lastListElementRef={lastListElementRef}
      />
      <SpinnerWrapper>
        {loading && <Spinner animation="border" />}
      </SpinnerWrapper>
    </>
  )
}

const SpinnerWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledAlert = styled(Alert)`
  margin: 0 15px;
`