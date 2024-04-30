
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const CraftItems = ({ item }) => {

    const { _id, image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus } = item || {}

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div data-aos="zoom-in" >

            <Card
                item={item}
                className={` container mx-auto mt-10  overflow-hidden  border hover:drop-shadow-sm`}
            >
                <Card
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className=" h-[350px] relative rounded-none rounded-t-lg ">
                    <img
                        src={image}
                        className="w-full h-full "
                        alt="card-image"
                    />

                    <p
                        className={stockStatus === 'In stock' ? `font-serif  btn btn-sm  w-24 btn-warning absolute inset-2`
                            :
                            `font-serif  btn btn-sm w-28 btn-error absolute inset-2`
                        } >
                        {stockStatus}
                    </p>
                </Card>
                <CardBody className="p-4">
                    <div className="space-y-1 mb-4 text-center">
                        <Typography variant="h6" className="opacity-70">{subcategory_Name }</Typography>
                        <Typography variant="h4" className="font-semibold">{item_name}</Typography>
                    </div>


                    <hr className="border-dashed  bg-slate-400" />
                    <div className="flex flex-wrap justify-between mt-2 font-medium">

                        <div className="flex gap-2 items-center">
                            {/* <img width="32" height="32" src={priceimg} alt="price-tag-euro" /> */}
                            <h1>{price}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            {/* <img width="32" height="32" className="bg-none" src={placeimg} alt="" /> */}
                            <h1>{rating}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            {/* <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/length-ft.png" alt="length-ft" /> */}
                            <p>{processing_time}</p>
                        </div>
                    </div>

                    <Link to={`/craft-details/${_id}`} >
                        <button className="btn btn-block btn-info" >View details</button>
                    </Link>

                </CardBody>
            </Card>

        </div>
    );
};

export default CraftItems;