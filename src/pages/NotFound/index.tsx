import React from 'react';
import { navigate } from 'hookrouter';
import Heading, { TagEnum } from '../../components/Heading';
import Button, { ButtonColorEnum } from '../../components/Button';
import { LinkEnum } from '../../routes';
import { ReactComponent as TrioSVG } from './assets/teamRocketTrio.svg';
import s from './notFound.module.scss';

function NotFoundPage() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.text}>404</div>
            <TrioSVG className={s.trio} />

            <div className={s.row}>
              <Heading tag={TagEnum.h2} className={s.rocket}>
                The rocket team
              </Heading>
              <Heading tag={TagEnum.h2} className={s.won}>
                has won this time.
              </Heading>
            </div>
            <Button
              color={ButtonColorEnum.yellow}
              onClick={() => navigate(LinkEnum.HOME)}
              className={s.return}>
              Return
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
