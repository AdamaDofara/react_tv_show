import { TVShowListItem } from "../TVShowListitem/TVShowListItem";
import S from "./style.module.css";
export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <>
      <div className={S.title}>You may also like:</div>
      <div className={S.list}>
        {tvShowList.map((tvShow) => {
          return(<span key={tvShow.id} className={S.tv_show_list_item}>
            <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
          </span>);
        })}
      </div>
    </>
  );
}
