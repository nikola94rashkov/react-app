import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ILinkButton {
  text: string;
  to: string;
}

export const LinkButton: FC<ILinkButton> = ({ text, to, ...rest }) => (
  <NavLink to={to} {...rest}>
    {text}
  </NavLink>
);
