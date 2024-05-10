// import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import img5 from "../../../../assets/images/banner/5.jpg";
// import img6 from "../../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img5} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* <div id="slide5" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl object-cover" />
        <div className="absolute items-center flex text-white rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 right-5 bottom-0 ">
          <div className="space-y-4 pl-6 md:pl-12 md:w-[440px] ">
            <div>
              <h2 className="text-2xl font-bold md:text-4xl lg:text-6xl">
                Affordable Price For Car Servicing
              </h2>
            </div>
            <p className="text-sm md:text-lg font-thin">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-2 md:gap-5">
              <button className="btn btn-error text-white">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
