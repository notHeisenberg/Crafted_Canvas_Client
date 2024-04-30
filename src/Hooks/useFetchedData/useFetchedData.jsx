import { useEffect, useState } from "react";


const useFetchedData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://art-craft-store-server-eta.vercel.app/crafts')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, []);

    return { data }
};

export default useFetchedData;