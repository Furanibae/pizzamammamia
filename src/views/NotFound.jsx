import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound text-center mt-5">
      <h1 className="py-5">Aquí no hay nada :(</h1>
      <Link className="volver-inicio" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;