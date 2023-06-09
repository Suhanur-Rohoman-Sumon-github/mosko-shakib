import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Title from "../../componnet/title/Title";

import UseAOSInit from "../../hook/UseAOSInit";


const Peralex = () => {
    <UseAOSInit />
    return (
           <div data-aos="fade-right" className="my-28 ">
            <Title title='about our bussness' subTitle='about us'></Title>
             <div className="card-background md:flex items-center">
                <div data-aos="zoom-in"  className="md:w-10% ">
                    <Player
                        autoplay
                        speed={1.5}
                        loop
                        src="https://assets10.lottiefiles.com/packages/lf20_xmdlmtgz.json"
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
                <div data-aos="fade-left" className="md:w-[90%] mr-6 ">
                    <h1 data-aos="fade-left" className="text-primary">About US</h1>
                    <p className="text-secondary">Welcome to our cricket academy! We are dedicated to nurturing young talent and providing comprehensive training in all aspects of cricket. Our experienced coaches and state-of-the-art facilities ensure that each player receives personalized attention and develops the skills necessary to excel in the game.</p>
                    <button className="btn-primary"> contact us</button>
                </div>
            </div>
           </div>
    );
};

export default Peralex;