import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(
        Number(targetDate) - Number(currentTime),
        0
      );
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) clearInterval(timerInterval);
    }, 1000);

    return () => clearInterval(timerInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="flexStart gap-4">
      <StatBox label="Days" value={time.days} />
      <StatBox label="Hours" value={time.hours} />
      <StatBox label="Minutes" value={time.minutes} />
      <StatBox label="Seconds" value={time.seconds} />
    </ul>
  );
};

const StatBox = ({ label, value }: { value: number; label: string }) => {
  return (
    <li className="flexCenter flex-col  border-[1px] shadow-md rounded-sm h-20 w-20">
      <h4 className="font-bold text-2xl">{value}</h4>
      <p className="text-sm">{label}</p>
    </li>
  );
};

export default CountdownTimer;
