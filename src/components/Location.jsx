import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";

export default function Location({data, newUrl, setresidentInit, setResidentEnd, setActivePag, setCurrentPage}) {
    const [dimention, setDimention] = useState("");
    const [loop, setLoop] = useState(1);
    const [optionSelect, setOptionSelect] = useState([]);
    
    function stateinput() { // New dimension function
        const endId = dimention.indexOf('-');
        const id = dimention.slice(0, endId);
        if (id != "") {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then((res)=>{
                newUrl(res.data);
                setActivePag(1);
                setCurrentPage(1);
                setresidentInit(0);
                setResidentEnd(10);
            })
            .catch((error)=>console.log(error));    
        }
        setDimention("");
    }

    useEffect(() => { // Print option dimension 
        if (loop < 8) {
            let url = `https://rickandmortyapi.com/api/location?page=${loop}`;
            axios.get(url)
                .then((res) => {
                    setLoop(loop+1);
                    let page = res?.data.results.map(x => <option key={x.id}> { x.id + " - " +x.name } </option>)
                    setOptionSelect([...optionSelect, page]);
                }
                )
                .catch((error) => { console.log(error); });        
        }
    }, [optionSelect]);

    return (

        <div className="h-[24%] lg:h-[18%] w-full">
            <div className="h-[55%] lg:h-[50%] flex flex-col lg:flex-row">
                <div className="h-[70%] lg:h-full w-full lg:w-3/12 bg-[url('/img/LogRickNMorty.png')] bg-[length:60%] md:bg-[length:43%] lg:bg-[length:55%] bg-center bg-no-repeat order-1 lg:order-2"> {/* Logo */} </div>
                <div className="h-[30%] lg:h-full lg:w-9/12 flex justify-center items-center order-2 lg:order-1">
                    <input type="text" list="listImput" placeholder="type a location id" value={dimention} onChange={(e)=>setDimention(e.target.value)} className="w-[80%] h-4/6 lg:h-3/6 bg-slate-600/50 placeholder:text-center pl-2 text-green-600 focus:bg-slate-600/70 outline-0 capitalize rounded-bl-lg rounded-tl-lg"/>
                    <datalist id="listImput" className="cursor-pointer ">
                        { optionSelect }
                    </datalist>
                    <button className="w-[10%] h-4/6 lg:h-3/6 bg-green-700 text-white flex justify-center items-center hover:text-slate-300 rounded-br-lg rounded-tr-lg" onClick={stateinput}> <FaSearchLocation/> </button>
                </div>    
            </div>
            <div className="h-[45%] lg:h-[50%] flex flex-col justify-evenly capitalize">
                <h1 className="text-center font-bold text-white text-lg xl:text-xl"> {data?.name} </h1>
                <div className="flex flex-wrap text-center text-slate-400 text-xs xl:text-sm">
                    <h2 className="w-1/2 order-1 lg:w-1/3  ">Type: <span className="text-base text-slate-200"> {data?.type?data?.type:"Unknown"} </span> </h2>
                    <h2 className="w-full order-3 lg:w-1/3 lg:order-2">Dimension: <span className="text-base text-slate-200"> {data?.dimension?data?.dimension:"Unknown"} </span> </h2>
                    <h2 className="w-1/2 order-2 lg:w-1/3 lg:order-3">Population: <span className="text-base text-slate-200"> {data?.residents?data?.residents.length:"Unknown" } </span></h2>  
                </div>
            </div>
        </div>
    );
}
