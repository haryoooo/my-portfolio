import { useState, useEffect } from 'react';
import ClockIcon from '../assets/icon/clock.svg';
import PinIcon from '../assets/icon/pin.svg';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      // Get GMT offset in hours
      const offset = -now.getTimezoneOffset() / 60;
      const offsetString = offset >= 0 ? `GMT+${offset}` : `GMT${offset}`;

      setCurrentTime(`${hours}:${minutes} ${offsetString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full py-4">
      <div className="max-w-4xl mx-auto px-3 md:px-[50px]">
        <div className="flex justify-between items-center gap-4 text-md text-gray-600">
          <div className="flex justify-center items-center gap-2">
            <img src={PinIcon} width={20} height={20} alt="pin" />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={ClockIcon} width={20} height={20} alt="clock" />
            <span>{currentTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
