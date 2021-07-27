import styled from 'styled-components';
import { mediaQueries } from '../../common/mediaQueries';

export const Wrap = styled.main`
  margin: 0 10vw;
  ${mediaQueries('md')`
  margin: 0;
  `}
`;
