import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
window.Swal = Swal;


const MyItems = () => {
    const [items, setItem] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (item) => {
        // console.log(item)
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();


        const name = e.target.name.value;
        const image = e.target.image.value;
        const subcategory = e.target.subcategory.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = parseFloat(e.target.rating.value);
        const customization = e.target.customization.value;
        const processingTime = e.target.processingTime.value;
        const status = e.target.status.value;
        const email = user.email;

        console.log(image, name, subcategory, description, price, rating, customization, processingTime, status, email)

        const info = { image, name, subcategory, description, price, rating, customization, processingTime, status, email };

        fetch(`http://localhost:5000/crafts/${selectedItem._id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Custom width, padding, color, background.",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                    });
                }
                // e.target.reset()
                // setIsModalOpen(false)
            })

    };

    // Delete item
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: "DELETE"
                }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your craft has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    )
            }
        });
    };

    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/crafts/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [user])

    // console.log(items)
    return (
        <div className="container mx-auto relative ">
            <h2>Total items: {items.length}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="rounded-lg" src={item.image} alt={item.item_name} /></figure>
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
                                <button onClick={() => handleOpenModal(item)} className="btn btn-warning">Edit</button>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                isModalOpen && (
                    <div className=" gadgetContainer pt-10 absolute inset-0 w-full ">
                        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                            {/* Heading */}
                            <div className="mt-5 mb-8">
                                <p className=" relative text-center text-3xl font-semibold ">
                                    <span className="mr-3 text-[#FF497C]">
                                        <i className="bx bxs-alarm-add"></i>
                                    </span>
                                    <span className="dark:text-white">
                                        <span className="text-[#FF497C]">
                                            Update
                                        </span>
                                        Your Product
                                    </span>
                                    <button onClick={handleCloseModal} className="absolute right-2 btn btn-ghost border-none bg-[#FF497C] text-white">
                                        X
                                    </button>
                                </p>
                            </div>
                            {/* form */}
                            <form onSubmit={handleUpdateProduct} >
                                <div className="flex gap-8 ">
                                    <div className="flex-1">
                                        <label className="block mb-2 dark:text-white" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Name"
                                            id="name"
                                            name="name"
                                            defaultValue={selectedItem.item_name}
                                        />

                                        <label
                                            className="block mt-4 mb-2 dark:text-white"
                                            htmlFor="Subcategory Name"
                                        >
                                            Subcategory Name
                                        </label>
                                        <select
                                            name="subcategory"
                                            id="brand"
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Select Brand"
                                            defaultValue={selectedItem.subcategory_Name}
                                        >
                                            <option value="Embroidery" >
                                                Embroidery
                                            </option>
                                            <option value="Knitting & Crocheting" >
                                                Knitting & Crocheting
                                            </option>
                                            <option value="Quilting" >
                                                Quilting
                                            </option>
                                            <option value="Beadwork" >
                                                Beadwork
                                            </option>
                                            <option value="Tie-Dyeing" >
                                                Tie-Dyeing
                                            </option>
                                            <option value="Macrame" >
                                                Macrame
                                            </option>
                                        </select>

                                        <label
                                            className="block mt-4 mb-2 dark:text-white"
                                            htmlFor="price"
                                        >
                                            Price
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Enter Price"
                                            id="Price"
                                            name="price"
                                            defaultValue={selectedItem.price}
                                        />
                                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="customization">
                                            Customization
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Customization"
                                            id="type"
                                            name="customization"
                                            defaultValue={selectedItem.customization}
                                        />
                                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="stockStatus">
                                            Stock Status
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Stock Status"
                                            id="type"
                                            name="status"
                                            defaultValue={selectedItem.stockStatus}
                                        />
                                    </div>
                                    {/* Right side */}
                                    <div className="flex-1">
                                        <label className="block mb-2 dark:text-white" htmlFor="image">
                                            Image
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Enter Image URL"
                                            id="image"
                                            name="image"
                                            defaultValue={selectedItem.image}
                                        />
                                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                                            Short description
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Short description"
                                            id="type"
                                            name="description"
                                            defaultValue={selectedItem.short_description}
                                        />

                                        <label
                                            className="block mt-4 mb-2 dark:text-white"
                                            htmlFor="rating"
                                        >
                                            Rating
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            maxLength={5}
                                            max={5}
                                            min={0}
                                            step="0.1"
                                            type="number"
                                            placeholder="Enter Rating"
                                            id="rating"
                                            name="rating"
                                            defaultValue={selectedItem.rating}
                                        />
                                        <label className="block mb-2 mt-4 dark:text-white" htmlFor="Processing time">
                                            Processing time
                                        </label>
                                        <input
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Processing Time"
                                            id="type"
                                            name="processingTime"
                                            defaultValue={selectedItem.processing_time}
                                        />
                                    </div>
                                </div>

                                <input
                                    className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                                    type="submit"
                                    value="Update Product"
                                />
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItems;