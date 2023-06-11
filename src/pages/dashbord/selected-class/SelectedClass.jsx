import Title from "../../../componnet/title/Title";
import useCarts from "../../../hook/useCarts";


const SelectedClass = () => {
    const [carts] = useCarts()
    console.log(carts)
    if (!Array.isArray(carts)) {
        // Handle the case when data is still being fetched or is not an array
        return <div className='flex justify-center items-center mt-[30%]'><progress className="progress w-56"></progress>.</div>
    }
    return (
        <>
            <Title title='selected class' subTitle='my selected class'></Title>
            <div className="card-background">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="card-text-primary">
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
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