import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default (props) => {
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        metascore: 0,
        stars: [],
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err.response));
    }, [])

    return <form onSubmit={ev => {
        let id = props.match.params.id;
        ev.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(() => {props.history.push(`/movies/${id}`)})
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