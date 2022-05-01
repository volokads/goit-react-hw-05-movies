import {
    useState, useEffect,
    // useTransition
} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Cast = () => {
    
    const { movieId } = useParams()
    const [cast, setCast] = useState(null)
    // const [isPending, startTransition] = useTransition()
    
    useEffect(() => {
        // startTransition(() => { 
            axios.get(`http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US`)
                .then(
                    response =>
                        // console.log(response)
                        setCast(response.data.cast)
                )
        // })
    })

//     useEffect(() => {
//     startTransition(() => {
//       applyFilter(query, setFilteredNode);
//     });
//   }, [query, startTransition]);
   return (
        <>            
            {cast && (
            <ul>
              {cast.map(({ id, name,profile_path,character }) => (
                  <li key={id}>
                      {profile_path && (<img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name}></img>)}
                      <p>{name}</p>
                      <p>{character}</p>

                  </li>
              ))}
            </ul>
          )}
            
        </>
    )
}


export default Cast