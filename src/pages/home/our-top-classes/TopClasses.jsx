import MapData from "../../../componnet/map-data/MapData";
import Title from "../../../componnet/title/Title";
import UseAOSInit from "../../../hook/UseAOSInit";
import useFilterData from "../../../hook/useFilterData";
import { FaArrowRight } from "react-icons/fa";

const TopClasses = () => {
  <UseAOSInit />
  const  [populars] = useFilterData()
    return (
        <>
        <Title data-aos="fade-up" title='our top classes' subTitle='top class'/>
        <div className="mt-24 py-36 px-4 card-background">
           <MapData items={populars}></MapData>
           <div className="md:w-2/12 mx-auto"> 
           <button className="btn btn-primary mt-8">view all course<FaArrowRight /> </button>
           </div>
        </div>
       
        </>
    );
};

export default TopClasses;