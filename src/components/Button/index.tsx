import React from 'react';
import cn from 'classnames';
import s from './button.module.scss';

export enum ButtonColorEnum {
  green = 'green',
  yellow = 'yellow',
}

export enum ButtonSizeEnum {
  normal = 'normal',
  small = 'small',
  allSpace = 'allSpace',
}

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: ButtonColorEnum;
  size?: ButtonSizeEnum;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  color = ButtonColorEnum.green,
  size = ButtonSizeEnum.normal,
}) => (
  <button type="button" className={cn(s.root, { [s[color]]: color, [s[size]]: size })} onClick={onClick}>
    <div className={s.children}>{children}</div>
  </button>
);

export default Button;
