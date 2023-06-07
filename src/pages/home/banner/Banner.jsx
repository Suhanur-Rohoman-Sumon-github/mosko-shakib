import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper card-background"
            >
                <SwiperSlide className=" ">
                    <div className="hero min-h-screen" >
                        <div></div>
                        <div className="hero-content">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-primary">Master the Art of Batting</h1>
                                <p className="mb-5 text-secondary">At mosko shakib, we specialize in honing your batting skills to perfection. Our expert coaches provide comprehensive training in techniques, footwork, shot selection, and scoring strategies. Join us to elevate your batting prowess and dominate the crease like a true champion.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className="hero min-h-screen " >
                        <div className=" "></div>
                        <div className="hero-content ">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-primary">Unleash Your Bowling Potential</h1>
                                <p className="mb-5 text-secondary">Discover the secrets of becoming a formidable bowler at mosko shakib. Our qualified coaches will guide you through the nuances of seam and swing bowling, spin variations, accuracy, and bowling tactics. Join our training program to refine your skills and take your bowling performance to new heights.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className="hero min-h-screen">
                        <div className=" "></div>
                        <div className="hero-content  ">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-primary">Become a Defensive Wall in Fielding</h1>
                                <p className="mb-5 text-secondary">Fielding is a crucial aspect of the game, and at mosko shakib, we emphasize building a solid defensive foundation. Our fielding training focuses on agility, catching techniques, throwing accuracy, positioning, and teamwork. Join us to become an impenetrable wall in the field and make game-changing contributions.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" ">
                    <div className="hero min-h-screen" >
                        <div className=" "></div>
                        <div className="hero-content  ">
                            <div className="">
                                <h1 className="mb-5 text-5xl font-bold text-primary">All-Round Excellence in Cricket Skills</h1>
                                <p className="mb-5 text-secondary">At mosko shakib, we believe in nurturing all-round cricketers. Our comprehensive training program covers batting, bowling, and fielding, enabling you to excel in every aspect of the game. Join our academy to develop a well-rounded skill set and become a complete player on the field.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;