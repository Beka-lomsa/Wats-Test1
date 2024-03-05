import { useEffect, useState } from "react";
import "./clock.css";

const Clock = ({ clocksDisplay }: { clocksDisplay: string }) => {
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
    const formattedHours = hours < 10 ? "0" + hours : hours.toString();
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();

    return (
      <div>
        <p>
          {formattedHours}:{formattedMinutes} {ampm}
        </p>
      </div>
    );
  };

  //  24 Hours Display
  const TwentyFourHoursClock = () => {
    const currentTime = new Date();
    let hours: string | number = currentTime.getHours();
    let minutes: string | number = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours.toString();
    minutes = minutes < 10 ? "0" + minutes : minutes.toString();

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
      {clocksDisplay === "12-hours" ? <TwelveHoursClock /> : <TwentyFourHoursClock />}
    </div>
  );
};

export default Clock;
