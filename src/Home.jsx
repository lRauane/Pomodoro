import { SiTailwindcss, SiVercel, SiReact } from "react-icons/si";
import Header from "./components/Header";

import NavBar from "./components/navBar";
import Pomodoro from "./components/Pomodoro";

function Home() {
  return (
    <div className="max-m-[1440px] flex flex-col bg-zinc-900">
      <NavBar />

      <div className="flex w-full flex-col mx-auto">
        <Header />

        <Pomodoro />       

        <footer className="h-full pt-20 pb-5 flex justify-center items-center">
          <p className="flex gap-2 items-center">
            Build with
            <a href="https://tailwindcss.com/" target="_blank">
              <SiTailwindcss size={40} />
            </a>
            <a href="https://vercel.com/" target="_blank">
              <SiVercel size={32} />
            </a>
            <a href="https://reactjs.org/" target="_blank">
              <SiReact size={32} />
            </a>
            & 🤍
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
