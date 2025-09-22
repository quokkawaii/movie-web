import { useParams } from "react-router-dom";

function Details() {
  let details_id = useParams();
  const DETAIL_MOVIE_API = import.meta.env.VITE_DETAIL_MOVIE_API;

  return <div>maybe Movie pages with Details.tsx!!!</div>;
}

export default Details;
