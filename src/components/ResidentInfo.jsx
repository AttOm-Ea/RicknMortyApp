import { useEffect, useState } from "react";
import { Resident } from "./Resident";

export default function ResidentInfo ({data, residentInit, setresidentInit, residentEnd, setResidentEnd, activePag, currentPage, setCurrentPage}) {
    let residents = data?.residents;

    const [fragResidents, setFragResidents] = useState([]);

    useEffect(() => {
        setFragResidents(residents?.slice(residentInit, residentEnd));
    }, [residents, residentEnd]);
    
    useEffect(() => { 
        if (currentPage != 1 || activePag > 1) {
            if (currentPage < activePag ) {
                setresidentInit(residentEnd);
                setResidentEnd(10 * activePag);
            }else{
                setResidentEnd(residentInit);
                setresidentInit(residentInit - 10);
            }    
            setCurrentPage(activePag);
        }
    }, [activePag]);

    return (
        <div className="h-4/6 lg:h-[72%] flex flex-wrap max-h-4/6 overflow-auto"> 
            {   fragResidents?.map(resident =>
                    <Resident key={resident} url={resident}/>
                )
            }
        </div>
    );
}

