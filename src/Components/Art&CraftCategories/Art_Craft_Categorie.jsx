import { Link } from "react-router-dom";


const Art_Craft_Categorie = ({ item }) => {
    return (
        <div>
            <div className="card h-80 bg-base-100 shadow-xl image-full">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-cyan-500">{item.subcategory_name}</h2>
                    <p className="opacity-70">{item.description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/crafts/subcategory/${item.subcategory_name}`}>
                            <button className="btn  btn-info">View category <br /> items</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Art_Craft_Categorie;