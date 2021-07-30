import styled from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';

export const Wrap = styled.main`
  margin: 0 10vw;
  ${mediaQueries('md')`
  margin: 0 2rem;
  `}
`;

export const HeadTitle = styled.h1`
  font-weight: bold;
`;
export const HomeImageWrap = styled.div`
  width: 100%;
  height: auto;
`;
