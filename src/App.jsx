import { useEffect, useState } from "react";
import Location from "./components/Location.jsx";
import Pagination from "./components/Pagination.jsx";
import ResidentInfo from "./components/ResidentInfo.jsx";
import { getRandomUbi } from "./helpers/random.js";
import { useAxios } from "./hooks/useAxios.jsx";

function App() {
  const [res, setRes] = useState({});
  const [allPag, setAllPag] = useState(0);
  const [activePag, setActivePag] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [residentInit, setresidentInit] = useState(0);
  const [residentEnd, setResidentEnd] = useState(10);

  const {data} = useAxios(`https://rickandmortyapi.com/api/location/${getRandomUbi()}`);

  useEffect(() => {
    setRes(data);  
  }, [data]);

  return (
    <div className="h-screen w-full bg-[url('/img/BgRickNMorty.jpg')] bg-center bg-cover">
      <div className="h-full w-full flex flex-col justify-between bg-[#0000005a]">
        <Location data={res} newUrl={setRes} setresidentInit={setresidentInit} setResidentEnd={setResidentEnd} setActivePag={setActivePag} setCurrentPage={setCurrentPage}/> {/* Search and general dimention  */}
        <ResidentInfo data={res} residentInit={residentInit} setresidentInit={setresidentInit} residentEnd={residentEnd} setResidentEnd={setResidentEnd} activePag={activePag} currentPage={currentPage} setCurrentPage={setCurrentPage}/> {/* Content cards */}
        <Pagination data={res} pages={allPag} setPages={setAllPag} activePag={activePag} setActivePag={setActivePag}/> {/* Pagination */}
      </div>
    </div>
  )
}

export default App
