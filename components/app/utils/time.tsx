import React, { useEffect, useState } from 'react';
import { StyledH4MutedText } from '../ui/styled-components/style-texts';

interface CurrentTimeProps {
  interval?: number; // Interval in milliseconds (default: 1000ms)
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ interval = 1000 }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every 'interval' milliseconds
    }, interval);

    return () => {
      clearInterval(timer); // Cleanup interval on component unmount
    };
  }, [interval]);

  // Format the time to HH:mm:ss (24-hour format)
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return <StyledH4MutedText style={{ fontWeight: 'normal'}} text={formattedTime} />; // Adjust to <Text> for React Native
};

export default CurrentTime;
