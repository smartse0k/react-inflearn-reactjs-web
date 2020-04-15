import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "너의 이름은",
        poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/d/d1/%EB%84%88%EC%9D%98_%EC%9D%B4%EB%A6%84%EC%9D%80.jpg/260px-%EB%84%88%EC%9D%98_%EC%9D%B4%EB%A6%84%EC%9D%80.jpg",
    },
    {
        title: "마도카 마기카 반역의 이야기",
        poster: "https://t1.daumcdn.net/cfile/tistory/277D21495326D9032D",
    },
    {
        title: "목소리의 형태",
        poster: "https://lh3.googleusercontent.com/proxy/ubdXbbbTouBgdKoD9LxjRWu6W1A26pUWSKifStZofnrvy0YIC0Y3X2N_ax7FBnDknIFybBeMgoX7GyK2GkLzyPPpXseT3EAyzmyM1g-iB_c_EVQIO8hAahGtDfatO_hL3eWeEtjCb2wQCY3M90rq-OsN3b4AeH-Zi9p9kFKyaKPJn6o0pP-xyQ8ADwlkYSoP6BFPlTyfrae45W2DHQzJ8AgXC2ainXVn6dNIohXa7J-Y3sz4V3zA0VpbGYn3U-qlvMTEUlHO3RJX9g3pB8sfsBYoilbVgyIK148GNj-ALVfGc4lz5jPpJA",
    },
    {
        title: "날씨의 아이",
        poster: "https://file2.nocutnews.co.kr/newsroom/image/2019/11/04/20191104174023351654_0_800_1144.jpg",
    },
];

function App() {
    return (
        <div className="App">
            {movies.map(movie=> {
                return (
                    <Movie key={movie.title} title={movie.title} poster={movie.poster} />
                )
            })}
        </div>
    );
}

export default App;
