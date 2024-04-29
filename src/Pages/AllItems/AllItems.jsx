import { Link, useLoaderData } from "react-router-dom";


const AllItems = () => {
    const items = useLoaderData()
    console.log(items)
    return (
        <div className="overflow-x-auto container mx-auto">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>

                        <th>Image</th>
                        <th>Item_name</th>
                        <th>Price & processing Time</th>
                        <th>Stock Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        items.map((item) => (
                            // item.email &&
                            <tr key={item._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{item.item_name}</div>
                                        <div className="text-sm opacity-50">{item.subcategory_Name}</div>
                                    </div>
                                </td>
                                <td>
                                    {item.price}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.processing_time
                                    }</span>
                                </td>
                                <td className={item.stockStatus === "In stock" ? 'text-green-500 text-bold' : 'text-warning'} >{item.stockStatus}</td>
                                <th>
                                    <Link to={`/craft-details/${item._id}`}>
                                        <button className="btn  btn-xs">View details</button>
                                    </Link>
                                </th>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllItems;