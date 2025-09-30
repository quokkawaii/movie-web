import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import quokka from "../img/쿼카사진2.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Home_movie = {
  id: number; // 영화 고유 ID
  title: string; // 영화 제목
  rating: number; // 영화 평점
  genres: string[]; // 장르 배열
  small_cover_image: string; // 작은 포스터 이미지 URL
  medium_cover_image: string;
  large_cover_image: string; // 큰 포스터 이미지 URL
};

function HomeHeader(prop: { data: Home_movie[] }) {
  const movie_data = prop.data;
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const searchButton = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector(
      "input"
    ) as HTMLInputElement;

    movie_data.forEach((v: Home_movie) => {
      if (search.trim().toUpperCase() === v.title.trim().toUpperCase()) {
        navigate(`/movie/${v.id}`);
      }
    });

    input.value = "";
  };

  return (
    <div>
      <div className="homeHeader">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="homeTitle">Quokka Movie</div>
        </Link>
        <form className="homeSearch" onSubmit={searchButton}>
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input type="text" onChange={searchInput} />
        </form>
        <img className="quokka" src={quokka} />
      </div>
    </div>
  );
}

export default HomeHeader;
