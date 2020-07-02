import React from "react";
import "./menu.css";

function Nav(props) {
  return (
    <div className="position">
      <div
        className={props.this.state.active ? "nav-icon open" : "nav-icon"}
        onClick={() =>
          props.this.setState({ active: !props.this.state.active })
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default Nav;
