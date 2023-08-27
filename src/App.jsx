import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OrderPage from "./pages/OrderPage";
import DilveryPage from "./pages/DilveryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="delivery" element={<DilveryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
