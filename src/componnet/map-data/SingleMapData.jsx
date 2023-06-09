

const SingleMapData = ({item}) => {
    const {name,description,image,rating,totalStudents} = item
    return (
        <div className="card card-compact w-full shadow-white border border-white shadow-xl hover:shadow-green-500 bg-opacity-30 hover:bg-gradient-to-br from-pink-500 to-green-500 animate-gradient text-white  transition duration-300">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>I{description}</p>
            </div>
        </div>
    );
};

export default SingleMapData;