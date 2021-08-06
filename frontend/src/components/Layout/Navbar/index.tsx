import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Wrapper, Logo, List, Item, NavLink, Burger } from './styled';
import BurgerIcon from '@icons/burger_icon.svg';
import menuItems from '../../../constants/menu';

type Props = {};

export const Navbar: FC<Props> = () => {
  const [listOpened, setListOpened] = useState(false);

  return (
    <nav>
      <Wrapper className="navbar">
        <Burger type="button" onClick={() => setListOpened(!listOpened)}>
          <BurgerIcon width="32" height="32" viewbox="0 0 32 32" />
        </Burger>
        <Logo>ZačniUČIT</Logo>
        <List listOpened={listOpened}>
          {menuItems.map((item, idx) => (
            <Item key={idx}>
              <Link href={item.route}>
                <NavLink>{item.label}</NavLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
    </nav>
  );
};
