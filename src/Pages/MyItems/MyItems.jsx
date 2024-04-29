import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyItems = () => {
    const [items, setItem] = useState([])

    const { user } = useContext(AuthContext)
    // console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:5000/crafts/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [user])

    // console.log(items)
    return (
        <div className="container mx-auto ">
            <h2>Total items: {items.length}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {items.map(item => (

                    <div key={item._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt={item.item_name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.item_name}</h2>
                            <p>{item.short_description}</p>
                            <div>
                                Price: {item.price}
                                <br />
                                <span className="badge badge-ghost badge-sm">{item.processing_time
                                }</span>
                            </div>
                            <div className="flex gap-2">
                                <Link to={`/craft-details/${item._id}`}>
                                    <button className="btn  btn-info">View details</button>
                                </Link>
                                <button className="btn btn-warning">Edit</button>
                                <button className="btn btn-error">X</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyItems;