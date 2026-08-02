import { NavLink, useNavigate } from "react-router-dom";
import LogoAsanShop from "../assets/LogoAsanShop.png"; 


const Navbar = ({ cart }) => {
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.q, 0);

const navLinkStyle = ({ isActive }) =>
  `rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
    isActive
      ? "bg-pink-200 text-pink-700 shadow-md"
      : "text-blue-700 hover:bg-pink-100 hover:text-pink-600"
  }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-pink-200 bg-pink-50/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
<img
  src={LogoAsanShop}
  alt="AsanShop Logo"
  onClick={() => navigate("/")}
  className="cursor-pointer h-12 sm:h-16 w-auto object-contain hover:scale-105 transition"
/>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Home */}
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          {/* Products */}
          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? "bg-pink-200 text-pink-700 shadow-md"
                  : "text-blue-700 hover:bg-pink-100 hover:text-pink-600"
              }`
            }
          >
            Cart

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Profile */}
          <NavLink to="/profile" className={navLinkStyle}>
            Profile
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;