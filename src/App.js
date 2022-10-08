import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./context/Context";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Detalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;