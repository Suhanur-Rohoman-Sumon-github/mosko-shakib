import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import useContexts from "../../../hook/useContexts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sinup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { handleSinup, updateUserProfile, handleGoogleSinin } = useContexts()
    const navigat = useNavigate()

    const onSubmit = data => {
        const { name, email, password, photo } = data

        handleSinup(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                axios.post('http://localhost:5000/users', { email, name, rules: 'user',photo })
                .then(data => {
                    console.log(data.data)
                })
                navigat('/')

            })
            .catch(err => console.error(err))

    };
    const handleGooglesinin = () => {
        handleGoogleSinin()
            .then(result => {
                console.log(result.user)
                navigat('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen card-background pt-16 mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl  card-text-secondary borders">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} placeholder="your name" className="input input-bordered" />
                            </div>
                            {errors.name?.type === 'required' && <p className="text-red-500">name is required</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photo", { required: true })} placeholder="your photo url" className="input input-bordered" />
                            </div>
                            {errors.photo?.type === 'required' && <p className="text-red-500">Photo URL  is required</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} placeholder="your email" className="input input-bordered" />
                            </div>
                            {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered  w-full" />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>

                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">password must be atlist 6 charectar</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-500">Password is smaller then 20 charectar</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">password must be one uppercase one lower case one numbar and one special cherecter</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">confirm Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showConfirmPassword ? 'text' : 'password'}  {...register('confirm-password', {
                                        required: true,
                                        validate: (value) => value === watch('password')
                                    })} placeholder="confirm-password" className="input input-bordered w-full" />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                            {errors['confirm-password']?.type === 'required' && (
                                <p className="text-red-500">Confirm password is required</p>
                            )}
                            {errors['confirm-password']?.type === 'validate' && (
                                <p className="text-red-500">Password must match the previous password</p>
                            )}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">sinup <FaSignInAlt /></button>
                            </div>
                        </form>
                        <p className="mx-4">have an account plaeace<Link to={'/login'} ><button className="btn btn-link card-text-secondary">login </button></Link> </p>
                        <div className="divider">OR</div>
                        <button onClick={handleGooglesinin} className="btn btn-primary mb-4 mx-4"><img src="data:image/png;base64,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" className="h-4 w-4" alt="" /> continue with google</button>

                    </div>
                    <div data-aos="fade-left" className="md:w-10%  ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets10.lottiefiles.com/packages/lf20_xlmz9xwm.json"
                            style={{ height: "full", width: "full" }}
                        >
                            <Controls

                                buttons={[
                                    "play",
                                    "repeat",
                                    "frame",
                                    "debug",
                                    "snapshot",
                                    "background"
                                ]}
                            />
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sinup;