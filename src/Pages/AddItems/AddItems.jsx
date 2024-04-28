import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const AddItems = ({ update }) => {

    const { user } = useContext(AuthContext);
    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const subcategory = e.target.subcategory.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const customization = e.target.customization.value;
        const processingTime = e.target.processingTime.value;
        const status = e.target.status.value;
        const email = user.email;

        console.log(image, name, subcategory, description, price, rating, customization, processingTime, status, email)

        const info = { image, name, subcategory, description, price, rating, customization, processingTime, status, email };

        fetch("http://localhost:5000/crafts", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item added succesfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000

                    })
                }
            })

    };


    return (
        <div className="gadgetContainer pt-10">
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#FF497C]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white">
                            <span className="text-[#FF497C]">
                                {update ? "Update " : "Add "}
                            </span>
                            Your Product
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleAddProduct}>
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
                            >
                                <option value="Test" >
                                    Embroidery
                                </option>
                                <option value="Test2" >
                                    Knitting & Crocheting
                                </option>
                                <option value="Test3" >
                                    Quilting
                                </option>
                                <option value="Test3" >
                                    Beadwork
                                </option>
                                <option value="Test3" >
                                    Tie-Dyeing
                                </option>
                                <option value="Test3" >
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
                                type="number"
                                placeholder="Enter Rating"
                                id="rating"
                                name="rating"
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
                            />
                        </div>
                    </div>

                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddItems;