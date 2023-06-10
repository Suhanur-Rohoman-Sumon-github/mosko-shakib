import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import useContexts from "../../../hook/useContexts";

const Sinup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { handleSinup } = useContexts()
    console.log(handleSinup)
    const onSubmit = data => {
        console.log(data)

    };
    return (
        <div>
            <div className="hero min-h-screen card-background mb-16">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div data-aos="fade-right" className="card flex-shrink-0 w-full max-w-sm shadow-2xl  card-text-secondary border-white border border-spacing-4 shadow-white">
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
                            {errors.password?.type === 'required' && <p className="text-red-500">name is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">password must be atlist 6 charectar</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-500">Password is smaller then 20 charectar</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">password must be one uppercase one lower case one numbar and one special cherecter</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <div className="relative">
                                    <input type="password"  {...register('confirm-password', {
                                        required: true,
                                        validate: (value) => value === watch('password')
                                    })} placeholder="confirm-password" className="input input-bordered w-full" />
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                        <button className="btn btn-primary mb-4 mx-4"><img src="data:image/png;base64,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" className="h-4 w-4" alt="" /> continue with google</button>
                        <button className="btn btn-primary mb-4 mx-4"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAB6CAMAAAAF6AYEAAAAZlBMVEUAAAD////7+/sLCwvl5eXo6Oju7u48PDympqbS0tLPz8+AgIAfHx/4+PjX19fy8vJra2saGhq0tLR3d3dmZmZISEhDQ0NQUFDe3t4SEhKJiYkpKSmWlpY0NDS6urrJycleXl6enp48KymcAAAEYUlEQVR4nO2b2ZKqMBCG2TfZFBAEZXn/lzx6FE2HoARH01b1dzfOpKp/0+ktGU0jCIIgCIIgCIIgCIIgCMI8mKpN+GsORb1r/cqyrMpvd3VxUG3Qn7DPPEvnsbxsr9qwN8naqaybuDZTbdx6mqNtzOi6YNjHRrWJq3CPzhNZV5yjq9pMebI5N+Sc8td8sgwW6boQlKqNlWGTLBZ2dsmNanOXs5PQdWGn2uCFnHxJYbrun1QbvQS3kham69UPSAujFcJ0PQpVG/6Kvb1KmK7byDObucYVr1S4GwH54PHAV238M4aHncazklH8Z4Nq8+fJH2ZWfZl6r/J14qVl//BfI1ctYI4to8T7/0kezEfKKLgK8RilW5XmP4EpPYyxYsruBWTi2Lbt3MUHYym8YfwRaTGSMvuTFOOnZu0kcZuVbhNeaNwya+PEqe+RsGR2OkrVmP6cbce4ms38wp32lyGbvNgM2GH0x549RJbEQtDI9R+y7h2sP1FWfcy+1ZQg8NmvF9yB9Ri+PrQD9jnLq0AXjku6D9q4ihJ+88byPnkDixUb26ZtdIi3eKXHrUQ2OzChM+qxxNoYLu1w1fwhdClDpkU+wbXIelAYGSWr9gEuxnXQ4LSqkuuPucnJ8iP6DaBtsoUt/F5kzujngTlJts9KwWrnIxauxAU9piG9HsSQBNOsJwUNpkxpdQWkeVStDKwj5AskkA0NTNczR3BQWun1LVhff8DCtXh/quz4AQvX8q4yWJthms5BZYH0ev9HlL0ZG1F5I4wgb+YzVBEERn1D9jFEA5djivowU0s3j7BtRZWpYXUlHRxh0EdVXXEVseTd7Al2CqgqYr7jl3PHGi7G1cVwYxq5eSj3teDqPHtonNSm8WMvXNOCkLMuWv58seCv2HBNePipnB4vtS/kfBHbVI6PArpuLZMWTp7UYapALpSTdyDWkoSbToShm35r02d/UfvqJfS2nV5jo7uxGGepdubmu3vebvP5esJN+bP5H3RbNl7wOWfL6uxhc9XWOX/iTLNJj634tY/MleK3yK+mGal2alx2O6LEhzu3j6PZZzAYn4Tcb+B32n63BbGcb0uyOV04b+AfrcygmcWGiQ3TQpDPYSOoWjOG+3g+14aBSXBTD0tFsvQ1s6EvMXZp5wKkcR9F8tTDDmJhCbLy48G9tj07VezdsnAiqN0P4vedyC5yWcZ9Op+sbXHY9NkxK3JBG2oK30FimsbxmGMlcqmsmrbXqlrzBVFBqEx+TPlNxsbf6c8/HEytbLRQcHhEyrA//y5uJW7ytGQXKLOKZwsw4I6JrMtuBbFg+jhVFqEaWIlh7tPtuPOtKJ6W/BNlknf2inC5hsafHjReWfATws7u171UBsur7nf+d3DDTlbjF8p+6b+0NK0PFisL+u+b9xZZskhZ8lMbdqXx7JfKbO93ThhLMThPY6MzoM/O86SdVfWCz/vK6jBdk62hEY/mDrhm3ARBEARBEARBEARBEATxRf4BaswthpOyp6UAAAAASUVORK5CYII=" className="h-8 rounded-full w-8" alt="" /> continue with github</button>
                    </div>
                    <div data-aos="fade-left" className="md:w-10% ">
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