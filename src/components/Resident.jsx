import { useState } from "react";
import { useAxios } from "../hooks/useAxios";

export const Resident = ({url}) => {
    const [img, setImg] = useState('hidden');

    const {data:res} = useAxios(url);
    
    if (res) {
        setTimeout(() => {
            setImg("");
        }, 2000);        
    }

    return (
        <section className="w-1/2 sm:w-1/3 lg:w-1/5  h-2/4 md:h-2/4 flex flex-col py-1 px-2 md:py-1 md:px-2 lg:py-0">
            <div className={`w-10/12 h-[63%]  flex flex-col justify-center items-center bg-[url('/img/portalgif.gif')] bg-[length:140%] bg-center m-auto border-2 border-green-900 rounded-full z-50`}>
                <img src={res?.image} className={`${img} w-full h-full rounded-full transition-transform `} alt="" />
                <div className="w-2/4 h-4 -mt-4 flex justify-center items-center rounded-full  backdrop-blur">
                    <div className={`w-2 h-2 rounded-full ${ res?.status == "Alive"? "bg-green-600":"bg-red-800"}`}> </div>
                    <span className="pl-1 uppercase text-xs text-white"> {res?.status} </span>
                </div>
            </div>
            <div className="w-full h-2/3 flex items-end -mt-24 bg-green-600 border border-green-900 rounded-tr-xl rounded-tl-xl">
                <div className="w-full h-1/2 md:h-[60%] lg:h-1/2 px-1 pb-1 flex flex-col justify-center text-xs xl:text-sm text-green-900">
                    <h4 className="flex justify-center items-center mt-1 text-lg font-semibold text-white overflow-auto whitespace-nowrap"> {res?.name} </h4>
                    <div className="overflow-auto">
                        <div>Species <span className="text-slate-200 capitalize"> {res?.species?res.species:"..."} </span> </div>
                        <div>Origin <span className="text-slate-200 capitalize"> {res?.origin?res.origin.name:"..."} </span> </div>
                        <div>Times appear <span className="text-slate-200 capitalize"> {res?.episode?res.episode.length:"..."} </span> </div>    
                    </div>
                </div>
            </div>
        </section>
    );
};

