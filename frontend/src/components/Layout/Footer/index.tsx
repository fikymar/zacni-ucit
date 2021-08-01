import React, { FC } from 'react';
import { FooterSection1, Flex1, FlexColumn } from './styled';
import Image from 'next/image';
import hatIcon from '../../../../public/images/hat-icon.svg';
import rowRight from '../../../../public/images/row-right-icon.svg';
import Link from 'next/link';
import { H3, LinkLight, LinkRegular } from '../../Typography';
import StyleWrapper from '../../StyledWrapper';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <footer>
      <FooterSection1 className="footer_section1">
        <Flex1>
          <FlexColumn>
            <LinkRegular
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Můžu učit?
            </LinkRegular>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Pedagogické minimum
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Jací učitelé chybí
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Zákon o ped.pracovnících
            </LinkLight>
          </FlexColumn>
          <FlexColumn>
            <LinkRegular
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proč jít učit?
            </LinkRegular>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Příběhy učitelů
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Platy učitelů
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Co můžete dělat ve škole?
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Volná místa ve školství
            </LinkLight>
          </FlexColumn>
        </Flex1>
        <Flex1>
          <FlexColumn>
            <LinkRegular
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chci zkusit učit
            </LinkRegular>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Zkus učit!
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Den pro školu
            </LinkLight>
          </FlexColumn>
          <FlexColumn>
            <LinkRegular
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chci se zaučit
            </LinkRegular>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Zauč se!
            </LinkLight>
            <LinkLight href="http://" target="_blank" rel="noopener noreferrer">
              Tipy pro začínající učitele
            </LinkLight>
          </FlexColumn>
        </Flex1>
        <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
          Začni učit!je projektem spolku Výluka
        </LinkRegular>
        <LinkRegular href="http://" target="_blank" rel="noopener noreferrer">
          Naši partneři a přispějte
        </LinkRegular>
      </FooterSection1>
      <section className="footer_section2">
        <H3>Výluka, z.s</H3>
      </section>
    </footer>
  );
};

export default Footer;
