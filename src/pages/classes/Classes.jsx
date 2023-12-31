
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import MapData from "../../componnet/map-data/MapData";
import useInstractorsCartData from "../../hook/useInstractorsCartData";
const Classes = () => {
    // const classes = useClasses()
    const [instractorClass] =useInstractorsCartData()
    if(!instractorClass){
        return  <div className="w-4/12 mx-auto mt-72"><span className="loading loading-spinner loading-lg  mx-auto"></span></div>;
    }
    return (
        <div>
            <section className=" pt-20 h-screen">
                <div className=" md:flex items-center  ">
                    <div className="md:mx-auto md:w-[50%]">
                        <h1 data-aos="fade-up" className="mb-5 text-5xl text-center font-bold text-primary"> our classes</h1>


                    </div>
                    <div data-aos="fade-up" className="md:w-50% mx-auto ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://assets5.lottiefiles.com/packages/lf20_jfXcHs2ED8.json"
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
            <section className=" py-8 my-8">
                <MapData items={instractorClass}></MapData>
            </section>
        </div>
    );
};

export default Classes;