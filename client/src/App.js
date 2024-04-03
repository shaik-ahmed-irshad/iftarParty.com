import { Routes, Route } from "react-router-dom";
import "./App.css";
import PlaceOrder from "./PlaceOrder";
import OrderList from "./OrderList";

function App() {

  return (
    <>
      <Routes>
        <Route path="/orders" element={<OrderList />} />
        <Route path="/" element={<PlaceOrder />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
