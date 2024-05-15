/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(service);
  const { img, price, title, service_id, _id } = service;
  return (
    <div className="border-2 p-2 rounded-xl justify-between flex flex-col shadow-xl">
      <figure className="">
        <img
          className="h-auto md:h-[240px] object-cover  w-full p-3"
          src={img}
          alt="Service image"
        />
      </figure>
      <div className="card-bod p-4">
        <h2 className="card-title font-bold mb-2">{title}</h2>
        <h2 className="card-title justify-between font-bold text-red-500 text-lg">
          Price: ${price}
          <Link to={`/checkout/${_id}`}>
            <button className="hover:text-red-700 duration-200 flex items-center gap-1 text-sm">
              Book Now
              <IoMdArrowForward className="w-5 h-5" />
            </button>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default ServiceCard;
