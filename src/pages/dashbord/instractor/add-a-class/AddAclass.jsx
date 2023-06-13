import { useForm } from "react-hook-form";
import Title from "../../../../componnet/title/Title";
import useContexts from "../../../../hook/useContexts";
import axios from "axios";
import useChangeTitle from "../../../../hook/useChangeTitle";


const AddAclass = () => {
    useChangeTitle('mosko shakib | instractor')
    const { user } = useContexts()
    const { register, handleSubmit, formState: { errors },reset  } = useForm();
    const status = 'pending'
    const erroledStudent = 0
    const onSubmit = data =>{
        reset();
        const {AvailableSeats,ClassImage,Price,className,instractotName,instractotEmail} = data
        const seats = parseInt(AvailableSeats, 10);
        axios.post('http://localhost:5000/instractor-class',{AvailableSeats:seats,ClassImage,Price,className,instractotName,instractotEmail,status,erroledStudent})
        
        .then(data=>{
            
        })
    };
    return (
        <div>
            <Title title='add class' subTitle='add a class'></Title>

            <div className=" w-full  shadow-2xl card-background text-teal-500">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Class name</span>
                        </label>
                        <input type="text" placeholder="class name" {...register("className", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.className?.type === 'required' && <p className="text-red-500">class name is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Class Image</span>
                        </label>
                        <input type="text" placeholder="Class Image" {...register("ClassImage", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.ClassImage?.type === 'required' && <p className="text-red-500">Class Image is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">instractot name</span>
                        </label>
                        <input type="text" placeholder="instractot name" {...register("instractotName")} value={user?.displayName} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">instractot email</span>
                        </label>
                        <input type="text" placeholder="instractot name" {...register("instractotEmail")} value={user?.email} className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Available seats</span>
                        </label>
                        <input type="text" placeholder="Available seats"  {...register("AvailableSeats", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.AvailableSeats?.type === 'required' && <p className="text-red-500">Available Seats  is required</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text card-text-secondary">Price</span>
                        </label>
                        <input type="text" placeholder="Price" {...register("Price", { required: true })} className="input input-bordered" />
                    </div>
                    {errors.Price?.type === 'required' && <p className="text-red-500">Price  is required</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAclass;