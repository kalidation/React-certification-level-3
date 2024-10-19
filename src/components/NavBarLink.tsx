import { FC } from "react";
import { Link } from "react-router-dom";

type TProps = {
  to: string;
  title: string;
};

const NavBarLink: FC<TProps> = (props) => {
  const { title, to } = props;

  return (
    <Link to={to}>
      <span className="hover:cursor-pointer hover:text-blue-100">{title}</span>
    </Link>
  );
};

export default NavBarLink;
