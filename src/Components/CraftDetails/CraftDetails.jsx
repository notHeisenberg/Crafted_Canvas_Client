import {  useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import { ToastContainer } from "react-toastify";

const CraftDetails = () => {

    const { id } = useParams()
    console.log(id)
    const data  = useLoaderData()
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item._id == id);
            setSingleData(singleData);
        }
    }, [data, id]);


    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus } = singleData || {}



    return (
        <Card className="container mx-auto p-10 flex-row justify-center items-center gap-5 overflow-hidden">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-1/2 m-0 bg-slate-200 shrink-0 rounded-lg"
            >
                <img
                    src={image}
                    alt="card-image"
                    className="w-full h-[700px] "
                />
            </CardHeader>
            <CardBody className="space-y-5">

                <Typography color="gray" className="mb-4 text-4xl font-bold">
                    {item_name}
                </Typography>

                <hr className="border-dashed  bg-slate-400" />
                <Typography variant="h4" color="blue-gray" className="mb-2 flex gap-3">
                    Catagory: {subcategory_Name}
                    <p
                        className={singleData.stockStatus === 'In stock' ? `font-serif bg-transparent btn btn-sm border-2 btn-warning`
                            :
                            `font-serif bg-transparent btn btn-sm border-2 btn-error`
                        } >
                        {stockStatus}
                    </p>
                </Typography>
                <hr className="border-dashed  bg-slate-400" />

                <Typography color="gray" className="mb-8 font-normal text-[#131313B2]">
                    <span className="font-bold text-black">Descriptiopn : </span>{short_description}
                </Typography>
                <hr className="border-dashed  bg-slate-400" />
                <div className="flex justify-between items-center gap-12 text-[#131313B2]">
                    <div className="flex flex-wrap gap-2 justify-between mt-2 font-medium">

                        <div className="flex gap-2 items-center">
                            {/* <img width="32" height="32" src={priceimg} alt="price-tag-euro" /> */}
                            <h1>{price}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            {/* <img width="32" height="32" className="bg-none" src={placeimg} alt="" /> */}
                            <h1>{rating}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/length-ft.png" alt="length-ft" />
                            <p>{processing_time}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>{customization}</p>
                        </div>
                    </div>

                    {/* <div>
                                <Button onClick={handleWantToBuy} variant="text" className=" p-3 border text-white bg-[#50B1C9]">
                                    Want to Buy
                                </Button>

                            </div> */}

                </div>

            </CardBody>
            <ToastContainer />
        </Card>
    );
};

export default CraftDetails;