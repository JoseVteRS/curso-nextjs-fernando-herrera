import { GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Lista de animales'>
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((pokemon: SmallPokemon) => {
              return (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              )
            })
          }
        </Grid.Container>

      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
