import { useNavigate } from "react-router-dom";

type Genres = {
  genres: string[];
};

function HomeCategory(prop: { data: Genres[] }) {
  const category: string[] = [
    ...new Set(prop.data.flatMap((v) => v.genres)),
  ].sort();

  const nav = useNavigate();

  const ctg_onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const ctgURL = event.currentTarget.textContent;
    nav(`/category/${ctgURL}`);
  };

  return (
    <div className="homeCategory">
      <div className="homeCTG_title">카테고리</div>
      <ul className="homeCTG_ul">
        {category.map((v, i) => (
          <li key={i} className="homeCTG_li">
            <button onClick={ctg_onClick}>{v}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCategory;
