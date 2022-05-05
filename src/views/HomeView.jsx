import { Heading } from '../components/PageHeader/PageHeader.styled'
import {useState, useEffect,} from 'react'
import * as filmsAPI from '../fetchAPI/films-api.js'
import { Link, useLocation } from 'react-router-dom'


const HomeView = () => {
    const [movies, setMovies] = useState(null)
    const location = useLocation()

    
    useEffect(() => {
            filmsAPI.fetchTrending().then(setMovies)
    }, [])
    
   

    return (
        <>
            <Heading>Trending today </Heading>
            {movies && (
                <ul>
                    {movies.map(movie =>
                    (
                    <li key={movie.id}>
                        <Link to={ `movies/${movie.id}`} state={{from: location}} >{movie.title}</Link>
                    </li>
                ))}
            </ul>
            )}
        </>
    )
}

export default HomeView