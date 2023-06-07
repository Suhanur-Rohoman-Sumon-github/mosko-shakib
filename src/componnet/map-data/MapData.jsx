import SingleMapData from "./SingleMapData";


const MapData = ({items}) => {
    return (
        <div>
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