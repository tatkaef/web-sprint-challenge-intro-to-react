import React from "react";
import Headerstyle from "./Headerstyle";

function Header(props) {
  const { ch, id } = props;

  return (
    <div className="header">
      <Headerstyle>
        <h2>{ch.name}</h2>
      </Headerstyle>
      <button
        onClick={() => {
          const el = document.getElementById(`${id}`);
          el.classList.toggle("close-pr");
        }}
      >
        *****
      </button>
    </div>
  );
}

export default Header;
