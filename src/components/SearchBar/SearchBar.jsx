import {useState} from "react";


function SearchBar({ onSubmit }) {
  const [moviesRequest, setMoviesRequest] = useState('');

  const handleInputChange = event => {
    setMoviesRequest(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
      if (moviesRequest.trim() === '') {
          alert('Enter the name of the film');
            return;
      };

      onSubmit(moviesRequest);
        setMoviesRequest('');
    };

    return (
      <form  onSubmit={handleSubmit}>            
            <input
               
                type="text"            
                placeholder="Search film"
                value={moviesRequest}
                onChange={handleInputChange}
            />
            <button type="submit"  >
            <span >Search</span>
            </button>
        </form>  
    )
}


export default SearchBar;