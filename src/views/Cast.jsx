import {useState, useEffect,} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Cast = () => {
    
    const { movieId } = useParams()
    const [cast, setCast] = useState(null)
    
    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US`)
                .then(
                    response =>
                        setCast(response.data.cast)
                )
    },[movieId])

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