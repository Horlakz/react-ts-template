import { FC } from "react";

import { AppLayoutProps } from "./applayout.interface";

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div className="bg-primary text-white min-h-screen">{children}</div>;
};

export default AppLayout;
