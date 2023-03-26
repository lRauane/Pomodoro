import React from "react";
import { Code, Coffee, Vibrate } from "phosphor-react";

const Header = () => {
  return (
    <div>
      <header className="flex font-bold mt-20 justify-center text-4xl md:text-5xl lg:text-6xl">
        <div className="flex gap-2">
          <span className="animate-text1 bg-gradient-to-r from-title-1-start-color-100 via-title-1-middle-color-100 to-title-1-end-color-100 bg-clip-text font-black text-transparent">
            Pomodoro
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
