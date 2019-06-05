import React from 'react';

const improvedCard = props => {
    return (
        <li className="col-sm-4">
            <article className="movie">
                <h2>{props.title}</h2>
                <p>Director: {props.director}</p>

                {props.hasOscars ? <p>¡Ganó algunos Oscars!</p> : <p>Sin Orcars</p>}

                <button onClick={props.removeMovieFromState}>Eliminar</button>
            </article>
        </li>
    )
};

export default improvedCard;