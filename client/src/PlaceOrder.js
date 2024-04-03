import {useState} from 'react'
import axios from 'axios'

const PlaceOrder = () => {
    const [price, setPrice] = useState('Amount Details');
    const [ordersData, setOrdersData] = useState({
      name: "",
      phone: "",
      date: "",
      quantity: "",
    });
    const onChangeHandler = (e) => {
      setOrdersData({
        ...ordersData,
        [e.target.name]: e.target.value,
      });
      e.target.name === "quantity" && setPrice(e.target.value * 300);
    };

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const {data} = await axios.post('/orders',ordersData)
      console.log(ordersData, data);
    };
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper formbold-input-flex">
        <div className="formbold-img">
          <img
            src={"https://iftarparty.com/images/infographic.jpeg"}
            alt="iftar box img"
          />
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="name" className="formbold-form-label">
                Name
              </label>
              <input
                required
                onChange={onChangeHandler}
                type="text"
                name="name"
                placeholder="Your Name"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-3 formbold-input-wrapp">
              <label htmlFor="phone" className="formbold-form-label">
                Phone
              </label>

              <div>
                <input
                  required
                  onChange={onChangeHandler}
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  className="formbold-form-input"
                />
              </div>
            </div>
          </div>

          <div className="formbold-input-flex">
            <div className="formbold-mb-3">
              <label htmlFor="date" className="formbold-form-label">
                Delivery Date?
              </label>
              <input
                required
                onChange={onChangeHandler}
                type="date"
                name="date"
                className="formbold-form-input"
              />
            </div>

            <div className="formbold-mb-5">
              <label htmlFor="time" className="formbold-form-label">
                Order Closing Time for Today
              </label>
              <input
                required
                onChange={onChangeHandler}
                disabled
                name="time"
                placeholder="4:59 pm 🕔"
                className="formbold-form-input timeColor"
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div className="formbold-mb-5">
              <label htmlFor="quantity" className="formbold-form-label">
                Quantity of Boxes?
              </label>
              <input
                required
                onChange={onChangeHandler}
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                placeholder="5"
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="amount" className="formbold-form-label">
                Price
              </label>
              <input
                onChange={onChangeHandler}
                disabled
                name="amount"
                placeholder="amount details"
                value={`INR : ${price}`}
                className="formbold-form-input priceColor"
              />
            </div>
          </div>
          <input type="submit" value={"Place Order"} className="formbold-btn" />
        </form>
      </div>
    </div>
  );
}

export default PlaceOrder