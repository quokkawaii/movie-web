import { Link } from "react-router-dom";
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

function HomePopMovie(prop: { data: Home_movie[] }) {
  const HPMoiveData: Home_movie[] = [...prop.data].sort(
    (a, b) => b.rating - a.rating
  );
  const [more, setMore] = useState<boolean>(false);
  const [moreBtnText, setMoreBtnText] = useState<string>("더보기 ⏷");
  const [n, setN] = useState<number>(3);

  // btn func
  const moreBtnFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const next: boolean = !more;
    setMore(next);
    setMoreBtnText(next ? "간단히 접기 ⏶" : "더보기 ⏷");
    setN(next ? 9 : 3);
  };

  return (
    <div>
      <h1 className="PopMovieTitle">인기 영화</h1>
      <ul className="PopMovieUl">
        {HPMoiveData.slice(0, n).map((v: Home_movie) => (
          <li key={v.id}>
            <Link to={`/movie/${v.id}`}>
              <img src={v.medium_cover_image} />
            </Link>
          </li>
        ))}
      </ul>
      <button className="moreBtn" onClick={moreBtnFunc}>
        {moreBtnText}
      </button>
    </div>
  );
}

export default HomePopMovie;

/* 
        {
        HPMoiveData.map((v: Home_movie, i: number) => {
          return (
            <li key={i}>
              <Link to={`/movie/${v.id}`}>
                <img src={v.medium_cover_image} />
              </Link>
            </li>
          );
        })}

*/
