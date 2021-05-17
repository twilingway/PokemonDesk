import React from 'react';

import s from './heading.module.scss';

export enum TagEnum {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

interface IHeadingProps {
  tag: TagEnum;
  size?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, tag: Tag, size }) => {
  const style = { '--font-size': size } as React.CSSProperties;

  return (
    <Tag className={s[Tag]} style={style}>
      {children}
    </Tag>
  );
};

export default Heading;
