import { useEffect, useState } from "react";
import { countdown } from "./countdown";
import Counter from "./counter";
import "./clock.css";

const Clock = () => {
  const [timeLeft, setTimeLeft] = useState(countdown());

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(countdown());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="TimeLeft">
      {/* <div className="weddingText">{process.env.REACT_APP_WEDDING_TEXT}</div> */}
      <div className="block">
        {timeLeft.years ? (
          <Counter
            count={timeLeft.years}
            label={timeLeft.years === 1 ? "year" : "years"}
          />
        ) : null}
        {timeLeft.months ? (
          <Counter
            count={timeLeft.months}
            label={timeLeft.months === 1 ? "month" : "months"}
          />
        ) : null}
        {timeLeft.days ? (
          <Counter
            count={timeLeft.days}
            label={timeLeft.days === 1 ? "day" : "days"}
          />
        ) : null}
      </div>
      <div className="block">
        <Counter
          count={timeLeft.hours}
          label={timeLeft.hours === 1 ? "hour" : "hours"}
        />
        <Counter
          count={timeLeft.minutes}
          label={timeLeft.minutes === 1 ? "minute" : "minutes"}
        />
        <Counter count={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default Clock;
