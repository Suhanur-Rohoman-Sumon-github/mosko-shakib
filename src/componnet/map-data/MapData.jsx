import SingleMapData from "./SingleMapData";


const MapData = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 gap-5">
           {
            items.map(item=><SingleMapData 
            key={item._id}
            item ={item}
            ></SingleMapData>)
           } 
        </div>
    );
};

export default MapData;