import { useState } from "react";
import Layout from "../../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

function Order() {
  const { cartsData } = useSelector((state) => state.cart);
  const [details, setDetails] = useState({
    paymentMethod: "OFFLINE",
    address: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleUserInput(e) {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (details.paymentMethod === "" || details.address === "") {
      toast.error("Please fill details");
      return;
    }

    const response = await dispatch(placeOrder());
    console.log(response);
    if (response?.payload?.data?.success) {
      toast.success("Order Placed");
      navigate("/order/success");
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <Layout>
      <section className=" text-gray-600 body-font min-h-60">
        <div className="container px-5 py-24  mx-auto">
          <div className="flex flex-col text-center mb-12 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-700 mb-4">
              Thank for choosing us
            </h1>
            <p className="lg:w-2/3 text-base mx-auto leading-relaxed">Total</p>
            <span className="font-bold text-red-400">
              ₹
              {cartsData?.items.length === 0
                ? ""
                : cartsData?.items.reduce(
                    (acc, item) => acc + item?.quantity * item?.product?.price,
                    0
                  )}
            </span>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className=" relative w-full flex-grow">
              <label
                htmlFor="paymentMethod"
                className="text-gray-500 text-sm leading-7"
              >
                Payemnt Method
              </label>
              <select
                name="paymentMethod"
                required
                onChange={handleUserInput}
                className="p-2 rounded-md focus:outline-none"
              >
                <option value="OFFLINE">Offline</option>
                <option value="ONLINE">Online</option>
              </select>
            </div>

            {/* For Address */}
            <div className="w-full relative flex-grow">
              <label htmlFor="address" className="leading-7 text-md">
                Address{" "}
              </label>
              <textarea
                name="address"
                onChange={handleUserInput}
                placeholder="Enter Your Address."
                id=""
                className="w-full border p-2 rounded-md focus:outline-none text-gray-700"
              ></textarea>
            </div>
            <button className="text-white bg-orange-400 p-2 rounded-md mt-2">
              Place Order
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Order;
