import React, {Component} from "react";
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>1232132</h1>
                <MoviePoster />
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://upload.wikimedia.org/wikipedia/ko/thumb/f/f5/%EB%82%A0%EC%94%A8%EC%9D%98_%EC%95%84%EC%9D%B4.tif/lossless-page1-1200px-%EB%82%A0%EC%94%A8%EC%9D%98_%EC%95%84%EC%9D%B4.tif.png" />
        );
    }
}

export default Movie