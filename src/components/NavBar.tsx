import { FC, PropsWithChildren } from "react";

const Navbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">React certification level 3</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden lg:block flex-1 ">
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
