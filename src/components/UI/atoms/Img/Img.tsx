import { FC } from 'react';

interface IImg extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string;
}

export const Img: FC<IImg> = ({ alt = '', ...rest }) => (
  <div className="image">
    <img alt={alt} {...rest} />
  </div>
);
