
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import useClasses from "../../hook/useClasses";
import MapData from "../../componnet/map-data/MapData";
const Classes = () => {
    const classes = useClasses()
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
            <section className="card-background py-8 my-8">
                <MapData items={classes}></MapData>
            </section>
        </div>
    );
};

export default Classes;