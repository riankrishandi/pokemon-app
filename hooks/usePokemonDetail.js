import { useQuery, gql } from '@apollo/client'

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id,
      name,
      moves {
        move {
          name
        }
      },
      types {
        slot,
        type {
          name
        },
      },
      weight,
      height
    }
  }
`

function usePokemonDetail(name) {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name }
  })

  return {
    pokemon: data?.pokemon,
    error,
    loading
  }
}

export default usePokemonDetail