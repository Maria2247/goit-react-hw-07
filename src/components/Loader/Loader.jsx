import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <Hourglass
      visible={true}
      height="40"
      width="40"
      ariaLabel="hourglass-loading"
      colors={["#3a7952", "##9edbb5"]}
      wrapperClass={css.loader}
    />
  );
}
