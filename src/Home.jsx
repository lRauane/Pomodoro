import { SiTailwindcss, SiVercel, SiReact } from "react-icons/si";
import Header from "./components/Header";

import NavBar from "./components/navBar";
import Pomodoro from "./components/Pomodoro";
import { Popover } from "./components/Popover";

function Home() {
  return (
    <div className="max-m-[1440px] flex flex-col bg-zinc-900">
      <NavBar />

      <div className="flex flex-col mx-auto">
        <Header />
        <Pomodoro />
      </div>
      <div className="flex flex-col gap-5 bg-zinc-800 p-[50px] rounded-xl mt-6 items-center mx-auto">
        <h1>Ferramentas adicionais</h1>
        <Popover />
      </div>


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
  );
}

export default Home;
