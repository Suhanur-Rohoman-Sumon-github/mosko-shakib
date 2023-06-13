import Peralex from "../../peralex/Peralex";
import AboutUs from "../about-us/AboutUs";
import Banner from "../banner/Banner";
import Gelary from "../gelary/Gelary";
import PopularInstractors from "../our-instractors/PopularInstractors";
import TopClasses from "../our-top-classes/TopClasses";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Peralex />
            <TopClasses />
            <PopularInstractors />
            <Gelary />
        </div>
    );
};

export default Home;