import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Provides a common layout for all nested routes by rendering
// the shared Navbar and displaying the active page through <Outlet />.
function Layouts() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layouts;
