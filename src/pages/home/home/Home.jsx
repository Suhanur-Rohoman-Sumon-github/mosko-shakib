import Peralex from "../../peralex/Peralex";
import AboutUs from "../about-us/AboutUs";
import Banner from "../banner/Banner";
import OurInstactor from "../our-instractors/OurInstactor";
import TopClasses from "../our-top-classes/TopClasses";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Peralex />
            <TopClasses />
            <OurInstactor />
        </div>
    );
};

export default Home;