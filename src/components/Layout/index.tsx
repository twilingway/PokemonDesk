import React from 'react';
import cn from 'classnames';
import s from './layout.module.scss';

interface ILayout {
  className?: string;
}

const Layout: React.FC<ILayout> = ({ children, className }) => (
  <div className={cn(s.root, className)}>{children}</div>
);
export default Layout;
