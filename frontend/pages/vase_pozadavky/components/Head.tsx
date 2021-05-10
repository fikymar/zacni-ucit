import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.section`
  height: 45vh;
  width: 100vw;
  margin-left: -275px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeading = styled.h1`
  width: 38%;
  height: 3vh;
  font-size: 4rem;
  font-weight: 600;
  color: white;
  z-index: 1;
`;
const Text = styled.p`
  width: 38%;
  font-size: 1.5rem;
  font-weight: 300;
  color: white;
  z-index: 1;
`;

const Head = () => {
  return (
    <>
      <MainWrapper>
        <MainHeading>Vyber si co začneš učit</MainHeading>
        <Text>
          Hledáme ve 176 kurzech. Pomůžeme ti najít rekvalifikaci, doplnit si
          pedagogické minimum nebo další specializaci.
        </Text>
      </MainWrapper>
    </>
  );
};

export default Head;
