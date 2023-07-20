
const fetchPokemons = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'})
        .then(res => res.json())
}
export async function ListOfPokemons () {
    const posts = await fetchPokemons()

    return posts.slice(0,5).map(post => (
                <article key={post.id}>
                <h2 style={{color: '#09f'}}>{post.title}</h2>
                |<p>{post.body}</p>
                <LikeButton id={post.id}/>
                </article>
            ))
}