import { FC } from 'react';

interface IErrorMessage {
  message: string;
  visible: boolean;
}

export const ErrorMessage: FC<IErrorMessage> = ({ message, visible }) => (
  <span className={`error ${visible ? 'error-vissible' : 'error-hidden'}`}>{message}</span>
);
