import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Loading from "./Loading";
function OrderList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
//   useEffect(() => {
    const getData = async () => {
      try {
        let {data} = await axios.get(`http://172.22.155.111:5000/orders`);
        setLoading(false);
        setData(data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    getData();
//   }, []);
  //   const test = [
  //     { name: "ahmed", phone: "8978", date: "2024-04-04", quantity: "1" },
  //     { name: "adnan", phone: "8978", date: "2024-04-05", quantity: "5" },
  //     { name: "maaz", phone: "8978", date: "2024-04-09", quantity: "30" },
  //   ];

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <center>
          <div className="table-responsive">
            <h1>Iftar Box Orders!</h1>
            <table className="table table-primary">
              <thead>
                <tr>
                  <th className="th">Name</th>
                  <th className="th">Quantity of IftarBox</th>
                  <th className="th">Date of Delivery</th>
                  <th className="th">Contact Number</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele, i) => (
                  <tr key={i}>
                    <td>{ele.name}</td>
                    <td>{ele.quantity}</td>
                    <td>{ele.date}</td>
                    <td>{ele.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      )}
    </>
  );
}

export default OrderList;
