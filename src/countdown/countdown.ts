import moment from "moment";

export const countdown = () => {
  const targetDate = moment(
    process.env.REACT_APP_COUNTDOWN_DATE,
    "YYYY-MM-DD HH:mm:ss"
  );
  const currentDate = moment();
  console.log({ targetDate, currentDate });
  const duration = moment.duration(targetDate.diff(currentDate));

  return {
    years: duration.years(),
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
};
