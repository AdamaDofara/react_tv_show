import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import S from "./style.module.css";

export  function TVShowDetail ({tvShow}) {
    const rating = tvShow.vote_average/2;
    return(
        <div>
            <div className={S.title}>{tvShow.name}</div>
            <div className={S.rating_container}>
                <FiveStarRating rating={rating} />
                <div className={S.rating}>{rating}</div>
            </div>
            <div className={S.overview}>{tvShow.overview==="" ? "No available description": tvShow.overview}</div>
        </div>
    );
}