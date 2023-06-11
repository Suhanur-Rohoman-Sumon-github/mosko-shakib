import Swal from "sweetalert2";
import Title from "../../../componnet/title/Title";
import useCarts from "../../../hook/useCarts";
import { FaTrashAlt,FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedClass = () => {
    const [carts,refech] = useCarts()
    if (!Array.isArray(carts)) {
        // Handle the case when data is still being fetched or is not an array
        return <div className='flex justify-center items-center mt-[30%]'><progress className="progress w-56"></progress>.</div>
    }
    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    refech()
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                          
                    }
                })
            }
          })
    }
    return (
        <>
            <Title title='selected class' subTitle='my selected class'></Title>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th>img</th>
                                <th>name</th>
                                <th>price</th>
                                <th>actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, index) => <tr className="card-text-secondary" key={cart._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cart.name}
                                    </td>
                                    <td>
                                        {cart.Price}
                                    </td>
                                    <td>
                                    <button onClick={()=>handleDelete(cart._id)} className="btn btn-primary ">delete<FaTrashAlt />  </button>
                                       <Link to={'/dashbord/payment'}> <button className="btn btn-primary lg:ml-4">pay<FaCreditCard /> </button></Link>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SelectedClass;