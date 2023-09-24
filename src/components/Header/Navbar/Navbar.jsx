import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo></Logo>
      <ul className="flex gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-[#0B0B0B]"
                : isActive
                ? "text-[#FF444A] underline"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-[#0B0B0B]"
                : isActive
                ? "text-[#FF444A] underline"
                : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-[#0B0B0B]"
                : isActive
                ? "text-[#FF444A] underline"
                : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
