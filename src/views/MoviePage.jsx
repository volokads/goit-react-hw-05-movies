import {
    // useTransition,
    useState, useEffect
} from "react"
import axios from "axios"
import { Link, useSearchParams, useLocation } from "react-router-dom"
// import { toast } from 'react-toastify'
import SearchBar from "../components/SearchBar/SearchBar"


const MoviePage = () => {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchQuery, setSearchQuery] = useState( searchParams.get('query') ?? '');
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    // const [isPending, startTransition] = useTransition()


    const handleformSubmit = searchQuery => { 
        setSearchQuery(searchQuery);
        setSearchParams({ query: searchQuery });
        setMovies([])
    }

    useEffect(() => {
        // startTransition(() => {
            if (!searchQuery) {
                return
            }
            // fetchSearchMovies(searchQuery).then(response => setMovies(response.result))
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US&query=${searchQuery}&page=1&include_adult=true`)
                .then(response => setMovies(response.data.results))
        // })
    }, [searchQuery])
    
    return (
        <div>
           <SearchBar onSubmit={handleformSubmit}/>

            {movies && (
                <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={ `${movie.id}`} state={{from: location}}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default MoviePage
