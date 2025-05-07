import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import "./Header.css";
export const Header = () => {
  const product = useSelector((state) => state.CartSlice.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Redux shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>cart: {product.length} </span>
      </Link>
    </header>
  );
};
