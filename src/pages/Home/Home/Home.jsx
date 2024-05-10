import About from "../About/About";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import MeetOurTeam from "../MeetOurTeam/MeetOurTeam";

const Home = () => {
  return (
    <div className="space-y-10 px-5 lg:px-0">
      <Banner />
      <About />
      <Services />
      <MeetOurTeam />
    </div>
  );
};

export default Home;
