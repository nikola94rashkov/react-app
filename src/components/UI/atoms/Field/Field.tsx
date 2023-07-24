import { FC, InputHTMLAttributes } from 'react';

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export const Field: FC<IField> = ({ type = 'text', ...rest }) => <input type={type} {...rest} />;
