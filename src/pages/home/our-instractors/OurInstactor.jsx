import InstarctorMap from "../../../componnet/map-data/instractorMap.jsx/InstarctorMap";
import Title from "../../../componnet/title/Title";
import UseAOSInit from "../../../hook/UseAOSInit";
import usePopularInstactor from "../../../hook/usepopularInstactor";
import { FaArrowRight } from "react-icons/fa";

const OurInstactor = () => {
    <UseAOSInit />
    const popularInstactor = usePopularInstactor()
    return (
       <div >
      <Title   title='our instractor' subTitle='our popular instarctors'></Title>
        <div  className="card-background py-24 px-4">
         <InstarctorMap   items={popularInstactor}></InstarctorMap>
         <div className="md:w-2/12 mx-auto"> 
           <button className="btn btn-primary mt-8">view all instractors<FaArrowRight /> </button>
           </div>
        </div>
        
       </div>
    );
};

export default OurInstactor;