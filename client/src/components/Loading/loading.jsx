import React from "react";
import pokeball from "../Loading/VexuoSc.gif";
import css from "../Loading/loading.module.css";
const Loading = () => {
  return (
    <div>
      <img className={css.img} src={pokeball} alt="loading" />
    </div>
  );
};

export default Loading;
