import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: center;
`;

//Countdown refreshes the weather data every 10 seconds

const CountDown: React.FC<{ updateWeather: () => void }> = ({
  updateWeather,
}) => {
  //setting state to 10 seconds
  const [seconds, setSeconds] = useState(10);

  //setTimeout counts down every second and once it hits 0, calls updateWeather to refresh the api call and data
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        let updatedSeconds = seconds - 1;
        setSeconds(updatedSeconds);
      }, 1000);
    } else {
      updateWeather();
      setSeconds(10);
    }
  }, [seconds]);

  return (
    <StyledDiv>
      <h3>Refreshing In:</h3>
      <p>{seconds} seconds</p>
    </StyledDiv>
  );
};
export default CountDown;
