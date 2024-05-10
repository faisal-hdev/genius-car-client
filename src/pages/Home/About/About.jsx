import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-10">
      <div className="hero-content flex-col md:gap-20 p-0 lg:flex-row">
        <div className="lg:w-1/2 relative ">
          <img
            src={person}
            className="w-full rounded-lg shadow-2xl lg:h-[500px] object-cover"
          />
          <img
            src={parts}
            className="w-2/3 absolute -right-5 top-72 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <h1 className="text-lg md:text-2xl text-red-500 font-bold py-3">
            About Us!
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="pb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
