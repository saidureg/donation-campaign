import { Outlet } from "react-router-dom";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
