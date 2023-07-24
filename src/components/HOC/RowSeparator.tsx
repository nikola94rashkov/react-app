import { FC, ReactNode } from 'react';

interface IRowSeparator {
  children: ReactNode;
}

export const RowSeparator: FC<IRowSeparator> = ({ children }) => <div className="row">{children}</div>;
