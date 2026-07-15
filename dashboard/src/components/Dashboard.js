import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import OpenAccount from "./OpenAccount";
import AdminPanel from "./AdminPanel";

import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {


const [watchlistOpen,setWatchlistOpen] = useState(true);



useEffect(()=>{


const resizeHandler=()=>{


if(window.innerWidth <= 1100){

setWatchlistOpen(false);

}
else{

setWatchlistOpen(true);

}


};



resizeHandler();


window.addEventListener(
"resize",
resizeHandler
);


return ()=>{

window.removeEventListener(
"resize",
resizeHandler
);

};


},[]);




return(

<GeneralContextProvider>


<div className="dashboard-container">



{/* WATCHLIST */}

<aside

className={`watchlist-container 
${watchlistOpen ? "active" : ""}`}

>


<WatchList/>


</aside>





{/* TOGGLE */}

<button

className="watchlist-toggle"

onClick={()=>setWatchlistOpen(!watchlistOpen)}

>


{

watchlistOpen

?

<FaChevronLeft/>

:

<FaChevronRight/>

}


</button>






{/* MAIN CONTENT */}

<main className="content">


<Routes>


<Route
index
element={<Summary/>}
/>


<Route
path="orders"
element={<Orders/>}
/>


<Route
path="holdings"
element={<Holdings/>}
/>


<Route
path="positions"
element={<Positions/>}
/>


<Route
path="funds"
element={<Funds/>}
/>


<Route
path="apps"
element={<Apps/>}
/>


<Route
path="open-account"
element={<OpenAccount/>}
/>


<Route
path="admin"
element={<AdminPanel/>}
/>


</Routes>



</main>



</div>


</GeneralContextProvider>


)

}


export default Dashboard;