import { Outlet } from "react-router-dom";

import Footer from "@/layouts/baselayout/footer";
import Header from "@/layouts/baselayout/header";

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
