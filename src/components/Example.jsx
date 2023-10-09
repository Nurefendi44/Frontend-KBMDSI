import React, { memo, useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './Example.css';

const Example = () => {

const currentTime = new Date();


const startTime = new Date(currentTime);
startTime.setHours(1, 0, 0, 0);


const timeDiff = startTime.getTime() - currentTime.getTime();


const tenDaysInMilliseconds = 10 * 24 * 3600 * 1000;
const twentyThreeHoursInMilliseconds = 23 * 3600 * 1000;
const targetTime = startTime.getTime() + tenDaysInMilliseconds + twentyThreeHoursInMilliseconds;

  return (
    <div>
     <FlipClockCountdown to={targetTime} className='flip-clock' />;
    </div>
  );
};

export default memo(Example);
