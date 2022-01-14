import { FC } from 'react';

import Header from "../components/BaseLayout/Header";
import Footer from "../components/BaseLayout/Footer";

interface Props {
    children: JSX.Element;
}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default BaseLayout;