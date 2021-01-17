import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

const StyledDiv = styled.div`
  padding: 1rem;
  text-align: right;
`;

const CountDown: React.FC<{ updateWeather: () => void }> = ({
  updateWeather,
}) => {
  const [seconds, setseconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => {
        let updatedSeconds = seconds - 1;
        setseconds(updatedSeconds);
      }, 1000);
    } else {
      updateWeather();
      setseconds(10);
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
