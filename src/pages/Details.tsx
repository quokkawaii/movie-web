import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Home_movie = {
  id: number; // 영화 고유 ID
  title: string; // 영화 제목
  rating: number; // 영화 평점
  genres: string[]; // 장르 배열
  small_cover_image: string; // 작은 포스터 이미지 URL
  medium_cover_image: string;
  large_cover_image: string; // 큰 포스터 이미지 URL
};

function Details() {
  let { details_id } = useParams();
  const [detail_loading, set_detail_loading] = useState<boolean>(true);
  const DETAIL_MOVIE_API: string = `https://yts.mx/api/v2/movie_details.json?movie_id=${details_id}&with_cast=true`;
  const [detail_movie_data, set_detail_movie_data] = useState<Home_movie[]>([]);
  const details_movie_fetch = async () => {
    const response = await fetch(DETAIL_MOVIE_API);
    const json = await response.json();
    set_detail_movie_data(json);
    set_detail_loading(false);
  };

  useEffect(() => {
    details_movie_fetch();
  }, []);

  console.log(details_id, detail_movie_data);
  return <div>{detail_loading ? "loading" : ""}</div>;
}

export default Details;
