import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({
  daysCaption,
  hoursCaption,
  minutesCaption,
  secondsCaption
}) => {
  const [seconds, updateSeconds] = useState(55);
  const [minutes, updateMinutes] = useState(27);
  const [hours, updateHours] = useState(23);
  const [days, updateDays] = useState(1);

  useEffect(() => {
    let secondCounter = setInterval(() => updateSecond(), 1000);
    return () => clearInterval(secondCounter);
  })

  const updateSecond = () => {
    if (seconds === 59) {
      updateSeconds(0);

      if (minutes < 59) {
        updateMinutes(minutes + 1);
      } else {
        updateMinutes(0);

        if (hours < 23) {
          updateHours(hours + 1);
        } else {
          updateHours(0);
          updateDays(days + 1);
        }
      }
      return;
    }

    updateSeconds(seconds + 1);
  }



  return (
    <div className='timer--element'>
      <div className='timer--digit'>
        {days}
        <div className="timer--caption">
          {daysCaption}
        </div>
      </div>
      <div className='timer--digit'>
        {hours}
        <div className="timer--caption">
          {hoursCaption}
        </div>
      </div>
      <div className='timer--digit'>
        {minutes}
        <div className="timer--caption">
          {minutesCaption}
        </div>
      </div>
      <div className='timer--digit'>
        {seconds}
        <div className="timer--caption">
          {secondsCaption}
        </div>
      </div>
    </div>
  )
}

Timer.defaultProps = {
  daysCaption: 'Days',
  hoursCaption: 'Hours',
  minutesCaption: 'Minutes',
  secondsCaption: 'Seconds'
}

export default Timer;