import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        metascore: 0,
        stars: [],
    });

    return <form onSubmit={ev => {
        ev.preventDefault();
        axios.post(`http://localhost:5000/api/movies`, movie)
            .then(res => {props.history.push(`/movies/${res.data.id}`)})
    }}>
        <input type="text" placeholder="title" value={movie.title}
            onChange={ev => setMovie({...movie, title: ev.target.value})}/>
        <input type="text" placeholder="director" value={movie.director}
            onChange={ev => setMovie({...movie, director: ev.target.value})}/>
        <input type="number" placeholder="metascore" value={movie.metascore}
            onChange={ev => setMovie({...movie, metascore: ev.target.value})}/>
        <button>Submit</button>
    </form>
}