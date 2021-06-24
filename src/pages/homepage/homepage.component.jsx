import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../../components/menu-item/menu-item.component.jsx";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <MenuItem />
    </div>
  </div>
);

export default HomePage;
