import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-7 pt-10">
                <img src={img} className="rounded-xl h-52" />
            </figure>
            <div className="card-body ">
                <h2 className="text-3xl">{title}</h2>
                <p className="text-2xl text-orange-600">Price :${price}</p>
                <div className="card-actions">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;