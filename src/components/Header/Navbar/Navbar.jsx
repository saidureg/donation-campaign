import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-6 max-w-[1320px] mx-4 lg:mx-auto ">
      <Logo></Logo>
      <ul className="flex gap-4 md:gap-8">
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
            to="/donations"
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
