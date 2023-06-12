import {  FaUserCheck, FaUserAlt } from "react-icons/fa";
import Title from "../../../../componnet/title/Title";
import useUser from "../../../../hook/useUser";


const ManageUser = () => {
    const [users, refetch] = useUser()
    const handleMakeInstractor = (id) => {
        fetch(`http://localhost:5000/users/instractors/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            console.log(data)
        })
    }
    const handleMakeAdmin = (id) => {
        
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
            console.log(data)
        })
    }
    return (
        <div>
            <Title title='users' subTitle='manage user'></Title>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>#</th>
                                <th>user name</th>
                                <th>user email</th>
                                <th>role</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr className="card-text-secondary" key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.rules}</td>
                                    <td>
                                        <button
                                         
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="btn btn-primary"
                                        >
                                            make admin
                                            <FaUserAlt className="text-green-500" />
                                        </button>
                                        <button
                                      
                                            onClick={() => handleMakeInstractor(user._id)}
                                            className="btn btn-primary ml-2"
                                        >
                                            make instructor
                                            <FaUserCheck className="text-green-500" />
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

export default ManageUser;
