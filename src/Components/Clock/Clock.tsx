import { useEffect, useState } from "react";
import "./clock.css";

const Clock = ({clocksDisplay}: {clocksDisplay : string}) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  // 12 Hours Display
  const TwelveHoursClock = () => {
    const currentTime = time;
    let hours: number = currentTime.getHours();
    let minutes: number = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? parseInt("0" + minutes) : minutes;

    return (
      <div>
        <p>
          {hours}:{minutes} {ampm}
        </p>
      </div>
    );
  };

  //  24 Hours Display
  const TwentyFourHoursClock = () => {
    const currentTime = new Date();
    let hours: number = currentTime.getHours();
    let minutes: number = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours < 10 ? parseInt("0" + hours) : hours;
    minutes = minutes < 10 ? parseInt("0" + minutes) : minutes;

    return (
      <div>
        <p>
          {hours}:{minutes} {ampm}
        </p>
      </div>
    );
  };

  return (
    <div>
      {clocksDisplay === "12-hours" ? <TwelveHoursClock /> : <TwentyFourHoursClock/>}  
    </div>
  );
};

export default Clock;
