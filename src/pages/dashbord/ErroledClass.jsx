import { FaTrashAlt } from "react-icons/fa";
import Title from "../../componnet/title/Title";
import usePaymentsData from "../../hook/usePaymentsData";


const ErroledClass = () => {
    const [payments, refetch] = usePaymentsData()
    
    
    const handleDelete =() =>{
// TODO:add delete in this field
    }
    return (
        <>
            <Title title='erroled class' subTitle='my erroled class'></Title>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th>img</th>
                                <th>corse name</th>
                                <th>user email</th>
                                <th>transiton id</th>
                                <th>actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr className="card-text-secondary" key={payment._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={payment.payment.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {payment.payment.name}
                                    </td>
                                    <td>
                                        {payment.payment.email}
                                    </td>
                                    <td>
                                        {payment.payment.trasectionid}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(payment._id)} className="btn btn-primary ">delete<FaTrashAlt />  </button>
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

export default ErroledClass;