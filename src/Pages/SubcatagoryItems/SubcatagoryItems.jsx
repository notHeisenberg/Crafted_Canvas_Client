import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const SubcatagoryItems = () => {

    const location = useLocation()
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000${location.pathname}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchItems();
    }, [location.pathname]);
    console.log(items)
    return (
        <div className="container mx-auto relative mt-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="rounded-lg h-[500px]" src={item.image} alt={item.item_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.item_name}</h2>
                            <p>{item.short_description}</p>
                            <div>
                                Price: {item.price}
                                <br />
                                <span className="badge badge-ghost badge-sm bg-slate-200">{item.processing_time
                                }</span>
                            </div>
                            <div className="flex gap-2">
                                <Link to={`/craft-details/${item._id}`}>
                                    <button className="btn  btn-info">View details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubcatagoryItems;