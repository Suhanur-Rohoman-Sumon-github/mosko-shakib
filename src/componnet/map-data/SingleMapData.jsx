import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const SingleMapData = ({ item }) => {
    const { name, description, image, rating, totalStudents } = item
    return (
        <div className="card card-compact w-full shadow-white border border-white shadow-xl hover:shadow-green-500 bg-opacity-30 hover:bg-gradient-to-br from-pink-500 to-green-500 animate-gradient  transition duration-300">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title card-text-primary">{name}</h2>
                <p className='card-text-secondary'>{description}</p>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
                <p className='card-text-secondary'>total studets : {totalStudents}</p>
            </div>
        </div>
    );
};

export default SingleMapData;