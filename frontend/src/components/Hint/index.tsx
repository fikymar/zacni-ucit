import React, { FC, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import infoIcon from '../../../public/images/info-icon.svg';
import { HintText } from './styled';

type Props = { hintText: string };

export const Hint: FC<Props> = ({ hintText }) => (
  <div>
    <Image src={infoIcon} height="13.33" width="13.33" />
    <HintText>{hintText}</HintText>
  </div>
);
