import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ButtonsPomodoro from "./ButtonsPomodoro";

const Pomodoro = () => {
  const [time, setTime] = useState(1500); // 25 minutos
  const [estaAtivo, setEstaativo] = useState(false);


  // Utilizar um useEffect para atualizar o tempo restante
  // A cada segundo enquanto o temporizador estiver ativo
  useEffect(() => {
    let intervalo = null;

    if (estaAtivo && time > 0) {
      intervalo = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [estaAtivo, time]);

  /*
  Criar 3 funções para manipular o estado do temporizador
  */
  // iniciarTempo para iniciar tmporizador
  const startTimer = () => {
    setEstaativo(true);
  };
  // paraTempo para parar temporizador
  const paraTempo = () => {
    setEstaativo(false);
  };

  // reseteTempo para reiniciar temporizador
  const reseteTempo = () => {
    setTime(1500);
    setEstaativo(false);
  };

  // função para formatar tempo
  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
  };

  return (
    <div className="flex flex-col items-center ">
      <CircularProgressbar
        value={(time / 1500) * 100}
        text={formatarTempo(time)}
        styles={{
          root: { width: "400px", height: '500px', },
          path: { stroke: '#BF0003' },
          text: { fill: "#fff", fontSize: "20px" }
        }}
      />

      <div className="mt-5 flex justify-between w-{200px}">
        {!estaAtivo && <ButtonsPomodoro title="Iniciar" click={startTimer}/>}
        {estaAtivo && (
          <>
          <ButtonsPomodoro title="Pausar" click={paraTempo}/>
          <ButtonsPomodoro title="Reiniciar" click={reseteTempo}/>
          </>
        )}
      </div>
    </div>
  );
}

export default Pomodoro;
