import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems/CraftItems";
import Banner from "../../Components/Banner/Banner";
import Art_Craft_Categories from "../../Components/Art&CraftCategories/Art_Craft_Categories";


const Home = () => {
    const items = useLoaderData()
    // console.log(items)
    return (
        <>
            <Banner
                data={items}
            ></Banner>
            {/* Craft items section */}
            <div id="estates" className="mt-10" >
                <h1 className="text-4xl font-bold text-center">Our Items</h1>
                <div className="mt-6 gap-3 grid grid-cols-1 lg:grid-cols-4" >
                    {
                        items.slice(0,12).map((item) =>
                            <CraftItems
                                key={item._id}
                                item={item}
                            ></CraftItems>
                        )
                    }
                </div>
            </div>
            <Art_Craft_Categories></Art_Craft_Categories>
        </>

    );
};

export default Home;