import { FC, LabelHTMLAttributes } from 'react';

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label: FC<ILabel> = ({ text, ...rest }) => <label {...rest}>{text}</label>;
