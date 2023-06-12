import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useContexts from '../../hook/useContexts';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SingleMapData = ({ item }) => {
    const { name, description, image, rating, Price, seats } = item
    const navigat = useNavigate()
    const { user } = useContexts()
    const handleAddtoCart = (item) => {
        const { name, image, Price, } = item
        const email = user?.email
        const cartsInfo = {
            name,
            image,
            Price,
            email
        }
        if (!user) {
            Swal.fire({
                title: 'please login',
                text: "You won't be able to add cart",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigat('/login')
                }
            })
        }
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartsInfo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(data)
            })
    }
    return (
        <div className="card card-background card-compact w-full shadow-white border border-white shadow-xl hover:shadow-green-500 bg-opacity-30 hover:bg-gradient-to-br from-pink-500 to-green-500 animate-gradient  transition duration-300">
            <figure><img src={image} className='h-64 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title card-text-primary">{name}</h2>
                <p className='card-text-secondary'>{description}</p>
                <Rating
                    style={{ maxWidth: 120 }}
                    value={rating}
                    readOnly
                />
                <p className='card-text-secondary'>price: {Price}$</p>
                <p className='card-text-secondary'>avilable seats : {seats}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddtoCart(item)} className="btn btn-primary w-full">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleMapData;