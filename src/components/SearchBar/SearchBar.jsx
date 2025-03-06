import S from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <>
      <SearchIcon color="white" size={27} className={S.icon} />
      {/* <input
        onKeyUp={submit}
        className={S.input}
        type="text"
        placeholder="Search a tv show you may like"
      /> */}
      <input
        onChange={submit}
        className={S.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
