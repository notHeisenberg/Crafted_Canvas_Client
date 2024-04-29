import { useEffect, useState } from "react";


const useFetchedData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/crafts')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, []);

    return { data }
};

export default useFetchedData;