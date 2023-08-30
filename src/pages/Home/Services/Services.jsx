import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);
    const [sortType, setSortType] = useState('');
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${sortType}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [sortType, search]);

    const handleSort = event => {
        setSortType(event.target.value);
    };

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div className="mb-24">
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="flex items-center justify-between">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" ref={searchRef} />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <select className="py-2 px-5 bg-gray-300" onChange={handleSort}>
                    <option value="Default">Default</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="mt-12 text-center">
                <button className="btn btn-outline btn-primary">More Services</button>
            </div>
        </div>
    );
};

export default Services;