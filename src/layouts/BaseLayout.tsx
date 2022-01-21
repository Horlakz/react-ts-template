import { FC } from 'react';

// components
import Header from "../components/BaseLayout/Header";
import Footer from "../components/BaseLayout/Footer";
import Container from "../components/BaseLayout/Container"


// Props type
interface Props {
    children: JSX.Element;
}

const BaseLayout: FC<Props> = ({ children }) => {
  
  // default layout for the application
  return (
    <div>
      {children}
    </div>
  );
}

// default export with the components
export default Object.assign(BaseLayout, {Header, Footer, Container});