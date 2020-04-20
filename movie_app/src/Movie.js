import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Movie.css';

/*
class Movie extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster} />
            </div>
        );
    }
}
*/

function Movie({title, poster}) {
    return (
        <div>
            <h1>{title}</h1>
            <MoviePoster poster={poster} />
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

/*
class MoviePoster extends Component {
    static propTypes = {
        poster: PropTypes.string.isRequired
    };

    render() {
        return (
            <img src={this.props.poster} alt="" />
        );
    }
}
*/

function MoviePoster({poster}) {
    return (
        <img src={poster} alt="" />
    );
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};

export default Movie