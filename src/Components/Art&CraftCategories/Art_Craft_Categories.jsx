import { useEffect, useState } from "react";
import Art_Craft_Categorie from "./Art_Craft_Categorie";


const Art_Craft_Categories = () => {
    const [subcatagory, setSubcatagory] = useState([])
    useEffect(() => {
        fetch('https://art-craft-store-server-eta.vercel.app/subcatagory')
            .then(res => res.json())
            .then(data => setSubcatagory(data))
    }, [])

    // console.log(subcatagory)
    return (
        <div className="mt-6 gap-3 grid grid-cols-1 lg:grid-cols-4">
            {subcatagory.map((item) => (
                <Art_Craft_Categorie
                key={item._id}
                item={item}
                ></Art_Craft_Categorie>
            ))}
        </div>
    );
};

export default Art_Craft_Categories;