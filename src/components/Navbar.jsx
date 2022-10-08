import { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";



const Navbar = () => {
  const { carrito } = useContext(Context);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count, 0 );
  return (
    <div className="navbar text-white bg-info py-3 fixed-top">
      <div className="container d-block ">
        <div className="d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white logo-nombre mx-1 mb-0">
            <h1 className="mb-0 nav-h1">
             
            🍕 Pizzería Mamma Mia!
            </h1>
          </Link>

          <Link to="/carrito" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0 text-decoration-none text-white">
              
              Total: ${(total)}
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;