
import Title from "../../../../componnet/title/Title";
import useInstractorsCartData from "../../../../hook/useInstractorsCartData";
import { FaRegCheckCircle, FaRegWindowClose, FaRegCommentDots } from "react-icons/fa";

const ManageClass = () => {
    const [instractorClass] = useInstractorsCartData();
const handleFeedback = (id) =>{
    console.log(id)
}

    return (
        <div>
            <Title title="manage class" subTitle="manage instractors classes" />
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th>Image</th>
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
                            {instractorClass.map((classes, index) => (
                                <tr className="card-text-secondary" key={classes._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={classes.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{classes.className}</td>
                                    <td>{classes.instractotName}</td>
                                    <td>{classes.instractotEmail}</td>
                                    <td>{classes.AvailableSeats}</td>
                                    <td>{classes.Price}</td>
                                    <td>{classes.status}</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            <FaRegCheckCircle className="text-green-500" />
                                            Aprove
                                        </button>
                                        <button className="btn btn-primary mt-2">
                                            <FaRegWindowClose className="text-red-500" />
                                            Deny
                                        </button>
                                        {/* Open the modal using ID.showModal() method */}
                                        <button
                                            className="btn btn-primary mt-2"
                                            onClick={() => window[`my_modal_${classes._id}`]?.showModal()}
                                        >
                                            <FaRegCommentDots className="text-teal-500" />fedback
                                        </button>
                                        <dialog
                                            id={`my_modal_${classes._id}`}
                                            className="modal"

                                        >
                                            <form method="dialog" className="modal-box card-background">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute text-red-500 right-2 top-2">
                                                    ✕
                                                </button>
                                                <h3 className="card-text-primary">send feedback</h3>
                                                <textarea className="textarea textarea-accent w-full h-full my-4 text-teal-500" placeholder="write feedback "></textarea>
                                                <button onClick={((handleFeedback(classes._id)))} className="btn btn-primary w-full mt-4">send</button>
                                            </form>

                                        </dialog>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;
