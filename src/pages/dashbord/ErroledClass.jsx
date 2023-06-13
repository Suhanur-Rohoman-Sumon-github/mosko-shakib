
import Title from "../../componnet/title/Title";
import usePaymentsData from "../../hook/usePaymentsData";


const ErroledClass = () => {
    const [payments] = usePaymentsData()
    console.log(payments)
   
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
                                <th>date</th>
                                <th>img</th>
                                <th>corse name</th>
                                <th>user email</th>
                                <th>transiton id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr className="card-text-secondary" key={payment._id}>
                                    <td>
                                    {index + 1}
                                    </td>
                                    <td>
                                    {payment.payment?.date}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={payment?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {payment?.name}
                                    </td>
                                    <td>
                                        {payment?.email}
                                    </td>
                                    <td>
                                        {payment?.trasectionid}
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