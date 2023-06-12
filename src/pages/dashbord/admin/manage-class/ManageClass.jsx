import Title from "../../../../componnet/title/Title";
import useInstractorsCartData from "../../../../hook/useInstractorsCartData";
import {FaRegCheckCircle,FaRegWindowClose,FaRegCommentDots}from "react-icons/fa";

const ManageClass = () => {
    const [instractorClass] =useInstractorsCartData()
    
    return (
        <div>
            <Title title='manage class' subTitle='manage instractors classes'></Title>
            <>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th> Image</th>
                                <th>Class</th>
                                <th>name</th>
                                <th>email</th>
                                <th>Available</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instractorClass.map((classes, index) => <tr className="card-text-secondary" key={classes._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classes.className}
                                    </td>
                                    <td>
                                        {classes.instractotName}
                                    </td>
                                    <td>
                                        {classes.instractotEmail}
                                    </td>
                                    <td>
                                        {classes.AvailableSeats}
                                    </td>
                                    <td>
                                        {classes.Price}
                                    </td>
                                    <td>
                                        {classes.status}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary"><FaRegCheckCircle className="text-green-500"/>Aprove</button>
                                        <button className="btn btn-primary mt-2  "><FaRegWindowClose className="text-red-500" />Deny</button>
                                        <button className="btn btn-primary mt-2 "><FaRegCommentDots />Fedbck</button>
                                    </td>
                                 
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
        </div>
    );
};

export default ManageClass;