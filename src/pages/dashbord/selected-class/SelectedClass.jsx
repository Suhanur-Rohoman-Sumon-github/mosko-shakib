import Title from "../../../componnet/title/Title";
import useCarts from "../../../hook/useCarts";
import { FaTrashAlt,FaCreditCard } from "react-icons/fa";

const SelectedClass = () => {
    const [carts] = useCarts()
    if (!Array.isArray(carts)) {
        // Handle the case when data is still being fetched or is not an array
        return <div className='flex justify-center items-center mt-[30%]'><progress className="progress w-56"></progress>.</div>
    }
    const handleDelete = (id) =>{
        console.log(id)
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
                                        <button className="btn btn-primary lg:ml-4">pay<FaCreditCard /> </button>
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