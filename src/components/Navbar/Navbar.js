import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { SidebarData } from "./SidebarData";
import GoogleKeep from "./google_keep.svg";
import style from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={style.navbar}>
          <div className={style.navContent}>
            <div>
              <Link to="#" className={style.menuBar}>
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>

            <div className={style.brandContent}>
              <img src={GoogleKeep} alt="" className={style.brandLogo} />
              <h1>Keep Clone</h1>
            </div>
          </div>
          
          <div><Searchbar /></div>
        </div>

        <nav
          className={
            sidebar ? `${style.navmenu} ${style.active}` : style.navmenu
          }
        >
          <ul className={style.navMenuItems} onClick={showSidebar}>
            <li className={style.navbarToggle}>
              <Link to="#" className={style.menuBar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((data, index) => {
              return (
                <li key={index} className={style.navText}>
                  <Link to={data.path}>
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
