

const InsreactorCardes = ({item}) => {
    const {email,name,photo} = item
    return (
        <div>
            <div  className="card card-background  w-full shadow-white border border-white shadow-xl hover:shadow-green-500 bg-opacity-30 hover:bg-gradient-to-br  from-red-500 via-black to-green-500 animate-gradient  transition duration-300">
            <figure><img src={photo} className="w-full h-64 " alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title ">{name}</h2>
                <p className='card-text-secondary'>{email}</p>
             
            </div>
        </div>
        </div>
    );
};

export default InsreactorCardes;