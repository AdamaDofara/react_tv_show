import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import S from "./style.module.css";



export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={()=>{onClick(tvShow)}} className={S.container}>
      <img
        className={S.img}
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className={S.title} >{tvShow.name}</div>
    </div>
  );
}
