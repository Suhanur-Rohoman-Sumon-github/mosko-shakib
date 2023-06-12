import InstarctorMap from "../../../componnet/map-data/instractorMap.jsx/InstarctorMap";
import Title from "../../../componnet/title/Title";
import UseAOSInit from "../../../hook/UseAOSInit";
import usePopularInstactor from "../../../hook/usepopularInstactor";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const OurInstactor = () => {
   <UseAOSInit />
  
    const popularInstactor = usePopularInstactor()
    return (
       <div >
      <Title   title='our instractor' subTitle='our popular instarctors'></Title>
        <div  className=" py-24 px-4">
         <InstarctorMap   items={popularInstactor}></InstarctorMap>
         <div className="md:w-2/12 mx-auto"> 
           <Link to={'/instractor'}><button className="btn btn-primary mt-8">view all instractors<FaArrowRight /> </button></Link>
           </div>
        </div>
        
       </div>
    );
};

export default OurInstactor;