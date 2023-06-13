import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import useManageUser from "../../hook/useManageUser";
import InsreactorCardes from "./InsreactorCardes";

const Instractors = () => {
    const [instractors, setInstractors] = useState()
    // const instactors = useInstactor()
    // const instractors = useInstorFilterData()
    const user = useManageUser()
    useEffect(() => {
        const instractor = user.filter(user => user.rules === 'instractor');
        
        // Only update instractors if the user array has changed
        if (JSON.stringify(instractors) !== JSON.stringify(instractor)) {
            setInstractors(instractor);
        }
    }, [user,instractors]);
    if (!instractors) {
        // Add a loading state or return an error message if instractors is undefined
        return <div>Loading...</div>;
      }
    
    return (
        <>
            <section className=" pt-20 h-screen">
                <div className=" md:flex items-center  ">
                    <div className="md:mx-auto md:w-[50%]">
                        <h1 data-aos="fade-up" className="mb-5 text-5xl text-center font-bold text-primary">meet our instractors</h1>


                    </div>
                    <div data-aos="fade-up" className="md:w-50% mx-auto ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets2.lottiefiles.com/packages/lf20_ikvz7qhc.json"
                            style={{ height: "400px", width: "full" }}
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
            </section>
            <section data-aos="fade-up" className="md:w-4/12 mx-auto ">
                <div className="card  w-full shadow-white border border-white shadow-xl hover:shadow-green-500 bg-opacity-30 hover:bg-gradient-to-br  from-red-500 via-black to-green-500 animate-gradient  transition duration-300">
                    <figure><img src="data:image/jpeg;base64,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" className="w-full h-64" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  card-text-primary">Shakib All Hasan </h2>
                        <p className="card-text-secondary ">CEO</p>
                    </div>
                </div>
                <hr />
            </section>
            <section data-aos="fade-up" className=" my-8 pt-8">
            <div  className="grid md:grid-cols-3 gap-8">
                           {
                instractors.map(item =><InsreactorCardes key={item._id}
                    item={item}
                ></InsreactorCardes> )
            }        </div>
            </section>
        </>
    );
};

export default Instractors;