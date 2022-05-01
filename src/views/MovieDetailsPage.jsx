import { NavLink, Outlet, useParams , useNavigate, useLocation} from 'react-router-dom';
import {
    // useTransition,
    useState, useEffect
} from 'react';
import axios from 'axios';

const MovieDetailsPage = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const navigate = useNavigate() 
    const location = useLocation()
    // const [isPending, startTransition] = useTransition()


    const goBack = () => navigate(
        location.state
            ? `${location.state.from.pathname}${location.state.from.search}`
            : '/movies'
    )

    useEffect(() => {
        // startTransition(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US`)
                .then(response => setMovie(response.data))
        // })
    }, [movieId])

    return (
        <>
            <button onClick={goBack} >Back</button>
             {movie && (
                <div>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}></img>
                <h2>{movie.title}</h2>
                <p>Vote average: {movie.vote_average}</p>
                <p>Overview:</p>
                <p>{movie.overview}</p>
                <p>Genres:</p>
                {movie.genres && (
                    <ul>
                    {movie.genres.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                    </ul>
                )}
                <hr />
                <p>Additional information</p>
                <ul>
                    <li><NavLink to="cast" state={location.state ? { from: location.state.from } : null}>Cast</NavLink></li>
                    <li><NavLink to="reviews" state={location.state ? { from: location.state.from } : null}>Reviews</NavLink></li>
                </ul>          
                <hr />
                    <Outlet />
                </div>
      )}
        </>
    )
}

export default MovieDetailsPage
