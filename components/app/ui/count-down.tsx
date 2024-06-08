import { useTheme } from '@/context/theme-context';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

interface CountdownProps {
  durationInSeconds: number; 
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ durationInSeconds, onComplete }) => {
  const [remainingTime, setRemainingTime] = useState(durationInSeconds);
  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => Math.max(0, prevTime - 1));
      if (remainingTime === 0) {
        clearInterval(interval);
        onComplete();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [onComplete, remainingTime, durationInSeconds]);

  const formattedTime = `${Math.floor(remainingTime / 60)}:${remainingTime % 60}`;

  return <Text style={{ color: theme.status.valid, fontWeight: '700' }}>{formattedTime}</Text>;
};

export default Countdown;
