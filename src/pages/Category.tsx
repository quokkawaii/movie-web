import { useParams, Link } from "react-router-dom";
import { useState } from "react";

type Home_movie = {
  id: number; // 영화 고유 ID
  title: string; // 영화 제목
  rating: number; // 영화 평점
  genres: string[]; // 장르 배열
  small_cover_image: string; // 작은 포스터 이미지 URL
  medium_cover_image: string;
  large_cover_image: string; // 큰 포스터 이미지 URL
};

function Category() {
  const { category_title } = useParams();

  const movie_API_URL: string = import.meta.env.VITE_MOVIE_API;
  const [movie_datas, setMovie_datas] = useState<Home_movie[]>([]);

  const movie_fetch = async () => {
    const response = await fetch(movie_API_URL);
    const json = await response.json();
    const movies = json.data.movies as Home_movie[];
    setMovie_datas(movies.filter((v) => v.genres.includes(category_title!)));
  };

  movie_fetch();

  return (
    <div className="home">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="homeTitle">Quokka Movie</div>
      </Link>
      <div>카테고리 : {category_title}</div>
      <ul>
        {movie_datas.map((v, i) => (
          <li key={i} className="category_content">
            <img src={v.medium_cover_image} />
            <div>title : {v.title} </div>
            <Link to={`/movie/${v.id}`}>
              <div>자세히 보기 </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
