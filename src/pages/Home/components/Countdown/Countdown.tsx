import { CyclesContent } from "../../../../contexts/CycleContents";
import { differenceInSeconds } from "date-fns";
import { CountDownContainer, Separator } from "../../styles";
import { useContext, useEffect } from "react";
export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecoundsPassed, callSetAmountSecoundsPassed } = useContext(CyclesContent);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const currentSeconds = activeCycle ? totalSeconds - amountSecoundsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }else{
      document.title = "Timer";
    }
  }, [minutes, seconds, activeCycle]);

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          callSetAmountSecoundsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          callSetAmountSecoundsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, callSetAmountSecoundsPassed]);

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  );
}
