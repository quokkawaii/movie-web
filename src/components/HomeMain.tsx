import { Link } from "react-router-dom";

function HomeMain(prop: { posterURL: string; id: number }) {
  return (
    <div>
      <Link to={`/movie/${prop.id}`}>
        <img src={prop.posterURL} className="testIMG" />
      </Link>
    </div>
  );
}

export default HomeMain;
