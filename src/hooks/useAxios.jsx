import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
    const [data, setData] = useState({});
    
    useEffect(()=>{
        console.log(url);
        axios.get(url)
        .then((res)=>setData(res.data))
        .catch((error)=>console.log(error));
    },[]);

    return {data};
};
