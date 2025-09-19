import { useState, useEffect } from "react";

function Home() {
  // type
  type Home_movie = {
    id: number; // 영화 고유 ID
    title: string; // 영화 제목
    rating: number; // 영화 평점
    genres: string[]; // 장르 배열
    small_cover_image: string; // 작은 포스터 이미지 URL
    large_cover_image: string; // 큰 포스터 이미지 URL
  };

  // API 패치 + 데이터 저장
  const movie_API_URL: string =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year&limit=50";
  const [movie_datas, setMovie_datas] = useState<Home_movie[]>([]);

  const movie_fetch = async () => {
    const response = await fetch(movie_API_URL);
    const json = await response.json();
    setMovie_datas(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    movie_fetch();
  }, []);

  // 변수 영역
  console.log(movie_datas);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      {/* 로딩 */}
      {loading ? "로딩 중 입니다." : ""}

      {/* Welecome page UI */}
      <ul>
        {movie_datas.map((v: Home_movie, i: number) => {
          return (
            <li key={i}>
              <img src={v.small_cover_image} />
              <div>id : {v.id}</div>
              <div>title : {v.title}</div>
              <div>rating : {v.rating} </div>
              <div>genres : {v.genres}</div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;

// Movie API : "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
