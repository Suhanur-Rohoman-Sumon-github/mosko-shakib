import { FaPenNib } from "react-icons/fa";
import Title from "../../../../componnet/title/Title";
import useSingleInstractorCardData from "../../../../hook/useSingleInstractorCardData";

const MyClsees = () => {
    const [SingleCardata] =useSingleInstractorCardData()
    if (!SingleCardata) {
        
        return <div className="w-4/12 mx-auto mt-72"><span className="loading loading-spinner loading-lg  mx-auto"></span></div>;
      }
    //   TODO : make update when click this 
    const handleUpdateClass = (id) => {
        console.log(id)
    }
    return (
        <div>
            <Title title='my class' subTitle='my added class'></Title>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th>Total Enrolled Students</th>
                                <th>class name</th>
                                <th>stetus</th>
                                <th>Feedback</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {SingleCardata.map((clas, index) => (
                                <tr className="card-text-secondary" key={clas._id}>
                                    <td>{index + 1}</td>
                                    <td>{clas.erroledStudent}</td>
                                    <td>{clas.className}</td>
                                    <td>{clas.status}</td>
                                    <td>
                                        {clas.feedbackData && clas.feedbackData.length > 0 ? (
                                            clas.feedbackData.map((item, itemIndex) => (
                                                <div key={itemIndex}>{item}</div>
                                            ))
                                        ) : (
                                            <div>No feedback available</div>
                                        )}
                                    </td>
                                    <td>

                                        <button

                                            onClick={() => handleUpdateClass(clas._id)}
                                            className="btn btn-primary ml-2"
                                        >
                                            update
                                            <FaPenNib className="text-green-500" />
                                        </button>

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

export default MyClsees;