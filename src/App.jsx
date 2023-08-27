import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OrderPage from "./pages/OrderPage";
import DeliveryPage from "./pages/DeliveryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
