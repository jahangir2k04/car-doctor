import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {

    const {user} = useContext(AuthContext);
    const { _id, title, price, img } = useLoaderData();

    const handleCheckout = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const booking = {
            service: title,
            service_id: _id,
            customerName : name,
            email,
            img: img,
            date,
            price: price
        }
        console.log(booking);

        fetch('https://car-doctor-server-three-drab.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <h3 className="text-2xl text-center">Book now : {title}</h3>
            <form onSubmit={handleCheckout}>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" readOnly defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Price</span>
                            </label>
                            <input type="text" name="price" readOnly defaultValue={'$'+price} className="input input-bordered" />
                            
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-block btn-secondary" type="submit" value="Order Confirm" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;