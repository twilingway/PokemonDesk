import React from 'react';
import { navigate } from 'hookrouter';

import Layout from '../../components/Layout';
import Button, { ButtonSizeEnum } from '../../components/Button';

import Heading, { TagEnum } from '../../components/Heading';
import Parallax from '../../components/Parallax';
import s from './home.module.scss';
import { LinkEnum } from '../../routes';

const HomePage = () => (
  <div className={s.root}>
    <Layout className={s.contentWrap}>
      <div className={s.contentText}>
        <Heading tag={TagEnum.h1}>
          Find
          <span className={s.weight400}> all your favorite</span>
          <div>Pokemon</div>
        </Heading>

        <Heading tag={TagEnum.h3}>
          You can know the type of Pokemon, it`s strengths, disadvantages and
          abilities
        </Heading>
        <Button
          size={ButtonSizeEnum.allSpace}
          onClick={() => navigate(LinkEnum.POKEDEX)}>
          See pokemon
        </Button>
      </div>
      <div className={s.contentParallax}>
        <Parallax />
      </div>
    </Layout>
  </div>
);

export default HomePage;
