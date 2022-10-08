import { useContext } from "react";
import Context from "../context/Context";


const Carrito = () => {
  const { carrito } = useContext(Context);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <div className="p-5">
        <div className=" bg-light w-75 m-auto p-5">
          <h5>Detalles:</h5>
          <div className="p3 bg-white">
            {carrito.map((producto, i) => (
              <div key={i} className="d-flex justify-content-between py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={producto.img} width="50" alt="" />
                  <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                </div>

                <div className="d-flex justify-content-end align-items-center">
                  <h6 className="mb-0 p-2 text-success">
                    ${(producto.price * producto.count)}
                  </h6>
                  <button
                    className="btn btn-danger"
                  >
                    -
                  </button>
                  <b className="mx-2">{producto.count}</b>
                  <button
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <h2 className="my-4">Total: ${(total)}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
