import { Link } from "react-router-dom";

type Home_movie = {
  id: number; // 영화 고유 ID
  title: string; // 영화 제목
  rating: number; // 영화 평점
  genres: string[]; // 장르 배열
  small_cover_image: string; // 작은 포스터 이미지 URL
  medium_cover_image: string;
  large_cover_image: string; // 큰 포스터 이미지 URL
};

function HomeRecommend(prop: { data: Home_movie[] }) {
  const rc_data: Home_movie[] = prop.data.sort((a, b) => a.id - b.id);
  const rc_ui: Home_movie[] = rc_data.slice(0, 3);

  return (
    <div className="homeRecommend">
      <div className="homeRc_title">추천영화</div>
      <ul className="homeRc_ul">
        {rc_ui.map((v, i) => (
          <li key={i}>
            <Link to={`/movie/${v.id}`}>
              <img src={v.medium_cover_image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeRecommend;
