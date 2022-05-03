import { useParams } from "react-router-dom";
import {
    Suspense,
    // useTransition,
    useState, useEffect
} from "react";
import axios from "axios"

const Reviews = () => {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    // const [isPending, startTransition] = useTransition()

   

    useEffect(() => {
        // startTransition(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US&page=1`)
                .then(response =>
                    // console.log(response)
                    setMovie(response.data.results)
                )
        // })
    })
    
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
            {movie.length !== 0 ? (
            <ul>
              {movie.map(({ id, author, content }) => (
                  <li key={id}>                      
                      <h3>Author: {author}</h3>
                      <p>{content}</p>

                  </li>
              ))}
            </ul>
            ):(
            <p>We don`t have any reviews for this movie</p>
                )}
                </Suspense>
        </>
    )
};

export default Reviews
