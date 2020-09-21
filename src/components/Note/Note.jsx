import React, { useState } from "react";
import Add from "./Add";
import Search from "./Search";

const Note = () => {
  const [display, setdisplay] = useState({
    addcomponent: false,
    searchComponent: false,
  });
  const onClickHandler = (display) => {
    setdisplay({
      ...display,
      [display]: true,
    });
  };
  return (
    <div>
      {display.addcomponent ? <Add /> : null}
      {display.searchComponent ? <Search /> : null}
      <button onClick={() => onClickHandler("search")}>Search on|off</button>
      <button onClick={() => onClickHandler("add")}>Add on|off</button>
    </div>
  );
};

export default Note;
