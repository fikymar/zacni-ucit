import React, { FC, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import infoIcon from '../../../public/images/info-icon.svg';
import { HintText } from './styled';

type Props = { text: string };

export const Hint: FC<Props> = ({ text }) => (
  <div>
    <Image src={infoIcon} height="13.33" width="13.33" />
    <HintText>{text}</HintText>
  </div>
);
