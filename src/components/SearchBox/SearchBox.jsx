import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (ev) => {
    dispatch(changeFilter(ev.target.value.trim()));
  };

  const handleReset = () => {
    dispatch(changeFilter(""));
  };

  const boxId = useId();
  return (
    <div className={css.container}>
      <div className={css.searchForm}>
        <label htmlFor={boxId}>Find contacts by name</label>
        <input
          type="text"
          id={boxId}
          className={css.input}
          value={filter}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleReset} className={css.btn}>
        Reset
      </button>
    </div>
  );
}
