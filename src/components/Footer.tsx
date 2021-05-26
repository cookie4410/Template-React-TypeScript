import React, { VFC } from 'react';

const COPY_RIGHT = '2021 React';

const Footer: VFC<React.HTMLAttributes<HTMLDivElement>> = ({ ...attributes }) => (
  <footer {...attributes}>&copy;{COPY_RIGHT}</footer>
);

export default Footer;
