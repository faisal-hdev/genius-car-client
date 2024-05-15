import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, _id, img } = service;
  console.log(service);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const bookingInfo = {
      customerName: name,
      price: price,
      email,
      img,
      date,
      service: title,
      service_id: _id,
    };
    console.log(bookingInfo);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert("Service Booking successfully");
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Order Confirm Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-10 md:py-24">
      <h2 className="text-center md:text-3xl">Book Service : {title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$ " + price}
              // name="dueAmount"
              placeholder="Your Password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-error text-white"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
