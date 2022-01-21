import { FC } from 'react';

import Header from "../components/BaseLayout/Header";
import Footer from "../components/BaseLayout/Footer";
import Container from "../components/BaseLayout/Container"

interface Props {
    children: JSX.Element;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default Object.assign(BaseLayout, {Header, Footer, Container});