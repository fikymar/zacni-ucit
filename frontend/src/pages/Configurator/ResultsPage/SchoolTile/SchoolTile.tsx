import React from 'react';
import querystring from 'querystring';

import {
  Top,
  Title,
  Type,
  Paragraph,
  ImageWrapper,
  IconWrapper,
  Line,
  Bottom,
  ChevronWrapper,
} from './styled';

import ClockIcon from '@icons/clock.svg';
import PinIcon from '@icons/pin.svg';
import HatIcon from '@icons/hat.svg';
import TagIcon from '@icons/tag.svg';
import ChevronIcon from '@icons/chevron-right.svg';
import { ConfiguratorValues } from '@pages/Configurator/ConfiguratorLayout/ConfiguratorLayout';
import { useFormikContext } from 'formik';

interface Props {
  schoolName: string;
  type: string;
  description: string;
  duration: string;
  price: string;
  studyType: string;
  location: string;
  href: string;
}

const SchoolTile: React.FC<Props> = ({
  schoolName,
  type,
  description,
  duration,
  price,
  studyType,
  location,
  href,
}) => {
  const { values } = useFormikContext<ConfiguratorValues>();

  return (
    <article>
      <Top href={`${href}?${querystring.stringify(values as any)}`}>
        <ImageWrapper />
        <span>
          <Title>{schoolName}</Title>
          <Type>
            <IconWrapper>
              <HatIcon />
            </IconWrapper>
            {type}
          </Type>
          <Paragraph>{description}</Paragraph>
        </span>
        <ChevronWrapper>
          <ChevronIcon />
        </ChevronWrapper>
      </Top>
      <Bottom>
        <Line>
          <IconWrapper>
            <ClockIcon />
          </IconWrapper>
          {duration}
        </Line>
        <Line>
          <IconWrapper>
            <TagIcon />
          </IconWrapper>
          {price}
        </Line>
        <Line>
          <IconWrapper>
            <HatIcon />
          </IconWrapper>
          {studyType}
        </Line>
        <Line>
          <IconWrapper>
            <PinIcon />
          </IconWrapper>
          {location}
        </Line>
      </Bottom>
    </article>
  );
};

export default SchoolTile;
