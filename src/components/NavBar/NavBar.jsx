import {
  faBell, faFlag, faGear, faMagnifyingGlass,
  faTable
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import avatar from '../../photo/avatar.png';
const NavBar = () => {
    return (
      <div className="flex">
        <div className="left w-1/5 mt-2 ml-2">
          <span className="text-xl">Dashboard</span>
        </div>
        <div className="right default-font w-full flex justify-end items-center gap-2 text-xl text-gray-400 mr-5 mt-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faFlag} />
          <FontAwesomeIcon icon={faTable} />
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faGear} />
          <img
            src={avatar}
            alt="avatar"
            className="w-8"
            style={{
              height: "40px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    );
};

export default NavBar;