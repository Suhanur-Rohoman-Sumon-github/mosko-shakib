

const Title = ({title,subTitle}) => {
    return (
        <div className="my-12">
            <p className="text-center text-secondary text-2xl uppercase">{title}</p>
            <hr className="w-4/12  mx-auto my-4"/>
            <h1 className="text-center text-4xl text-primary font-bold uppercase">{subTitle}</h1>
            <hr className="w-4/12  mx-auto my-4"/>
        </div>
    );
};

export default Title;