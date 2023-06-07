


const AboutUs = () => {
    return (
        
            <div className="md:grid grid-cols-4 mt-11 gap-8 w-8/12  p-10 mx-auto shadow-2xl shadow-white hover:shadow-gray-300 bg-opacity-30 hover:bg-gradient-to-br from-pink-500 to-green-500 animate-gradient text-white  transition duration-300">
                <div >
                    <h1 className="py-8 px-2 bg-gradient-to-r shadow-2xl from-blue-500 via-purple-500 to-pink-500 text-primary text-4xl font-bold rounded-full text-center ">20k+ </h1>
                    <p className="text-center text-2xl text-secondary mt-4">privious student</p>
                </div>
                <div >
                    <h1 className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 py-8 px-2 rounded-full text-center text-primary text-4xl font-bold">8+ </h1>
                    <p className="text-center text-2xl text-secondary mt-4">in national team</p>
                </div>
                <div >
                    <h1 className="py-8 px-2 bg-gradient-to-r shadow-2xl from-indigo-500 via-pink-500 to-orange-500  rounded-full text-primary text-4xl font-bold text-center border-r-[100%]">99% </h1>
                    <p className="text-center text-2xl text-secondary mt-4">posetive ratings</p>
                </div>
                <div >
                    <h1 className="py-8 px-2 bg-gradient-to-r shadow-2xl from-teal-400 via-blue-500 to-purple-500 text-primary text-4xl font-bold rounded-full text-center border-r-[100%]">5 time </h1>
                    <p className="text-center text-2xl text-secondary mt-4">  top in the country</p>
                </div>
            </div>
    );
};

export default AboutUs;