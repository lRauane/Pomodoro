import React from 'react';
import { GiTomato } from "react-icons/gi";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";

const NavBar = () => {
  return (
    <div>
      <nav className="flex fixed w-full items-center p-5 justify-between border-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10">
        <div className="flex items-center gap-4">
          <a href="" className="flex items-center gap-2">
            <GiTomato size={32}/>
            <h1 className="font-bold">Pomodoro</h1>
          </a>
        </div>

        <ul className="flex gap-6">
          <li>
            <a href="">
              <GithubLogo size={32} />
            </a>
          </li>
          <li>
            <a href="">
              <LinkedinLogo size={32} />
            </a>
          </li>
          <li>
            <a href="">
              <InstagramLogo size={32} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
