import MapData from "../../../componnet/map-data/MapData";
import Title from "../../../componnet/title/Title";
import useFilterData from "../../../hook/useFilterData";

const TopClasses = () => {
  const  [populars] = useFilterData()
    return (
        <>
        <Title title='our top classes' subTitle='top class'/>
        <div className="mt-24 py-36 px-4 card-background">
           <MapData items={populars}></MapData>
           <div className="md:w-2/12 mx-auto"> 
           <button className="btn-primary mt-8">view all classes</button>
           </div>
        </div>
       
        </>
    );
};

export default TopClasses;