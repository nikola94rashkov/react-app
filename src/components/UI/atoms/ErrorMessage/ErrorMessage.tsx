import { FC } from 'react';
import './ErrorMessage.scss';

interface IErrorMessage {
  message: string;
  visible: boolean;
}

export const ErrorMessage: FC<IErrorMessage> = ({ message, visible }) => (
  <span className={`error ${visible ? 'error-visible' : 'error-hidden'}`}>{message}</span>
);
