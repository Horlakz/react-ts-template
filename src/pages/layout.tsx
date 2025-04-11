import { Outlet } from "react-router";

import Footer from "./footer";
import Header from "./header";

const BaseLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default BaseLayout;
