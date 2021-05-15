import React from 'react';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import s from './header.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.pokemonLogo}>
        <PokemonLogoSvg />
      </div>
      <div className={s.menuWrap}>
        {MENU.map(({ id, link, value }) => (
          <a href={link} className={s.menuLink} key={id}>
            {value}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Header;
