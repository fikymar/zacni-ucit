import React, { FC } from 'react';
import InfoIcon from '@icons/info_icon.svg';
import { HintText } from './styled';

type Props = { text: string };

export const Hint: FC<Props> = ({ text }) => (
  <div>
    <InfoIcon />
    <HintText>{text}</HintText>
  </div>
);
