import { useEffect, useState } from "react";
import { countdown } from "./countdown";
import Counter from "./counter";

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
      <div className="block">
        {timeLeft.years ? (
          <Counter
            count={timeLeft.years}
            label={timeLeft.years > 1 ? "years" : "year"}
          />
        ) : null}
        {timeLeft.months ? (
          <Counter
            count={timeLeft.months}
            label={timeLeft.months > 1 ? "months" : "month"}
          />
        ) : null}
        {timeLeft.days ? (
          <Counter
            count={timeLeft.days}
            label={timeLeft.days > 1 ? "days" : "day"}
          />
        ) : null}
      </div>
      <div className="block">
        {timeLeft.hours ? (
          <Counter
            count={timeLeft.hours}
            label={timeLeft.hours > 1 ? "hours" : "hour"}
          />
        ) : null}
        {timeLeft.minutes ? (
          <Counter
            count={timeLeft.minutes}
            label={timeLeft.minutes > 1 ? "minutes" : "minute"}
          />
        ) : null}
        <Counter count={timeLeft.seconds} label="seconds" />
      </div>
    </div>
  );
};

export default Clock;
