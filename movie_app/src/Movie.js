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

function Movie({title, poster, genres, synopsis}) {
    // 클래스 이름 작명은 카카오톡 클론하기 강좌에 있음
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
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

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    );
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    );
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}

export default Movie