import { FC } from "react";

import { Children } from "./interface";

const AppLayout: FC<Children> = ({ children }) => {
  return <div className="bg-primary text-white min-h-screen">{children}</div>;
};

export default AppLayout;
