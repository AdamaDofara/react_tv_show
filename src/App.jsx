import "./global.css";
import S from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListitem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import logo from "./assets/images/logo.png";
export function App() {
  const [currentTVShoww, SetCurrentTVShow] = useState();
  const [recommandationList, SetRecommandationList] = useState([]);

  async function fetchPopulars() {
    try {
      const popular = await TVShowAPI.fetchPopulars();
      if (popular.length > 0) {
        SetCurrentTVShow(popular[0]);
      }
    } catch (error) {
      alert("Error lors de la recherche des films populaires");
    }
  }

  async function fetchRecommandations(tvShowId) {
    try {
      const recommandations = await TVShowAPI.fetchRecommandations(tvShowId);
      if (recommandations.length > 0) {
        SetRecommandationList(recommandations.slice(0, 10));
      }
    } catch (error) {
      alert("Error lors de la recherche des films recommandés");
    }
  }

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        SetCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Error lors de la recherche du film");
    }
  }

  //Populart
  useEffect(() => {
    fetchPopulars();
  }, []);

  //Recommadations list
  useEffect(() => {
    if (currentTVShoww) {
      fetchRecommandations(currentTVShoww.id);
    }
  }, [currentTVShoww]);

  function setCurrentTVShowFromRecommandation(tvShow) {
    alert(JSON.stringify(tvShow));
  }
  return (
    <div
      className={S.main_container}
      style={{
        background: currentTVShoww
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShoww.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={S.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Whatowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      {currentTVShoww && (
        <div className={S.tv_show_detail}>
          <TVShowDetail tvShow={currentTVShoww} />
        </div>
      )}
      <div className={S.recommandations}>
        {recommandationList && recommandationList.length > 0 && (
          <TVShowList
            onClickItem={SetCurrentTVShow}
            tvShowList={recommandationList}
          />
        )}
      </div>
    </div>
  );
}
