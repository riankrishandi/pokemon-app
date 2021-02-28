import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`

const gqlVariables = {
  limit: 20,
  offset: 0
}

function usePokemonList(offset) {
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
    notifyOnNetworkStatusChange: true
  })
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    if (offset > 0) {
      fetchMore({
        variables: { offset }
      })
    }
  }, [fetchMore, offset])

  useEffect(() => {
    if (data) {
      const { results, count } = data.pokemons
      setHasMore(results.length < count)
    }
  }, [data])

  return {
    pokemons: data?.pokemons?.results,
    error,
    hasMore,
    loading
  }
}

export default usePokemonList