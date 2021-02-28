import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      PokemonList: {
        keyFields: [],
        fields: {
          results: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            }
          }
        }
      }
    }
  }),
  link: new HttpLink({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql"
  })
})

export default client