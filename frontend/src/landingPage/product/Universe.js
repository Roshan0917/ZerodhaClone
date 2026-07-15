import React from "react";
import { Link } from "react-router-dom";


function Universe() {


const companies = [

{
img:"media/images/smallcaseLogo.png",
name:"Smallcase",
desc:"Thematic investment platform"
},

{
img:"media/images/streakLogo.png",
name:"Streak",
desc:"Algo & strategy trading"
},

{
img:"media/images/sensibullLogo.svg",
name:"Sensibull",
desc:"Options trading platform"
},

{
img:"media/images/dittoLogo.png",
name:"Ditto",
desc:"Insurance simplified"
},

{
img:"media/images/tijori.png",
name:"Tijori",
desc:"Fundamental stock research"
},

{
img:"media/images/goldenpiLogo.png",
name:"GoldenPi",
desc:"Invest in fixed-income products"
}

];



return (

<div className="container mt-5 mb-5">


<div className="text-center mb-5">


<h1>
The Zerodha Universe
</h1>


<p className="text-muted mt-3 px-3">

Extend your trading and investment experience even further with our partner platforms.

</p>


</div>





<div className="row text-center">


{
companies.map((item,index)=>(

<div 
className="col-lg-4 col-md-6 col-12 mb-5"
key={index}
>


<img

src={item.img}

alt={item.name}

className="img-fluid"

style={{

width:"170px",

height:"60px",

objectFit:"contain",

margin:"auto",

display:"block"

}}

/>


<p className="text-muted mt-3">

{item.desc}

</p>


</div>


))
}


</div>





<div className="text-center mt-3">


<Link

to="/signup"

className="btn btn-primary btn-lg px-5 py-3"

style={{

borderRadius:"10px",

textDecoration:"none"

}}

>

Signup Now

</Link>


</div>



</div>

);

}


export default Universe;