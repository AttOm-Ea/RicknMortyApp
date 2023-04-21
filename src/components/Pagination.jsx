import { useEffect, useState } from "react";

export default function Pagination({data, pages, setPages, activePag, setActivePag}) {
    function newPages(residents) {
        const allpages = Math.ceil(residents / 10);
        allpages == 0 ? allpages = 1 : allpages;
        setPages(allpages);
    }

    function nextPag(activePag) {
        if (activePag < pages) {
            setActivePag(activePag + 1);
        }
    }

    function previusClick(activePag) {
        if (activePag > 1) {
            setActivePag(activePag - 1);
        }
    }
    useEffect(() => {
        newPages(data?.residents?.length);
    }, [data]);
    
    return(
        <div className="h-[10%] flex"> 
            <div className="w-2/4 h-full flex items-center m-auto">
                <div className="flex justify-center items-center w-1/3 h-full">
                    <button onClick={() => previusClick(activePag)} className="w-full h-1/2 hover:h-full hover:mr-2 bg-[url('.././img/PortalGun.webp')] bg-contain bg-no-repeat bg-center -scale-x-100"> </button>    
                </div>
                <div className="w-1/3 h-1/2 flex justify-center items-center text-white mt-7  bg-green-500/60 border border-green-900 rounded-full"> {activePag} - {pages} </div> 
                <div className="flex justify-center items-center w-1/3 h-full">
                    <button onClick={() => nextPag(activePag)} className="w-full h-1/2 hover:h-full hover:ml-2 bg-[url('.././img/PortalGun.webp')] bg-contain bg-no-repeat bg-center"> </button>    
                </div>
            </div>  
        </div>
    )
}
