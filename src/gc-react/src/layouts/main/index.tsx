import { ReactNode } from "react";
import Menu from "../../components/Menu";

const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-[100vh] flex flex-col h-full">
      <div>
        <Menu />
      </div>
      <div className="grow bg-secondary flex">{children}</div>
    </div>
  );
};

export default MainLayout;
