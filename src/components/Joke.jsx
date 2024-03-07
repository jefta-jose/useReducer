import React from 'react'

const Joke = ({ joke, increaseRates, decreaseRates }) => {
    return (
        <div className="joke">
            <div className="joke-text">{joke.joke}</div>
            <div className="rate">Rating : {joke.rate}</div>
            <div className="joke-buttons">
                <button className="btn btn-sm btn-success"
                    onClick={() => increaseRates(joke.id)}
                >👍</button>
                <button className="btn btn-sm btn-danger"
                    onClick={() => decreaseRates(joke.id)}
                >👎</button>
            </div>
        </div>
    )
}

export default Joke