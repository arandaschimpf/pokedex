import {ListOfPokemons} from '../services/pokemonService.js'

export default async function PostsPage ({ params }) {
    return (
        <section>
            <ListOfPokemons/>
        </section>
    )
}