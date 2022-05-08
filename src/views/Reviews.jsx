import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

const Reviews = () => {
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

   

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0cc59fcf1e5da911ea426bde22319681&language=en-US&page=1`)
                .then(response =>
                    setMovie(response.data.results)
                )
    }, [movieId])
    
    return (
        <>
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
        </>
    )
};

export default Reviews
