import './AddMovies.css';
import { useState } from 'react';

export default function AddMovies({onAddMovie}){

    const [title, setTitle] = useState("");
    const [openingText, setOpeningText] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    const submitHandler = (event) => {
    event.preventDefault();

        const newMovie = {
            title: title,
            openingText: openingText,
            releaseDate: releaseDate,
        };

        console.log(newMovie);

       if (onAddMovie) {
         onAddMovie(newMovie);
           }

        setTitle("");
        setOpeningText("");
        setReleaseDate("");
  };


    return(
        <section className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='control'>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className='control'>
                    <label>Opening Text</label>
                    <textarea
                        rows="4"
                        value={openingText}
                        onChange={(e) => setOpeningText(e.target.value)}
                        required
                    >
                    </textarea>
                </div>
                <div className='control'>
                    <label>Release Date</label>
                    <input
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                        required
                    />
                </div>
                <button className='button'>Add Movie</button>
            </form>
        </section>
    )

}