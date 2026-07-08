import React from "react";


const ticketSections = [

  {
    title:"Account Opening",
    icon:"fa-user-plus",
    links:[
      {
        name:"Online Account Opening",
        url:"https://support.zerodha.com/category/account-opening/online-account-opening"
      },
      {
        name:"Offline Account Opening",
        url:"https://support.zerodha.com/category/account-opening"
      },
      {
        name:"Company, Partnership & HUF Account",
        url:"https://support.zerodha.com/category/account-opening"
      },
      {
        name:"NRI Account Opening",
        url:"https://support.zerodha.com/category/account-opening/nri"
      },
      {
        name:"Charges at Zerodha",
        url:"https://support.zerodha.com/category/account-opening/charges-at-zerodha"
      },
      {
        name:"3-in-1 Account",
        url:"https://support.zerodha.com/category/account-opening"
      },
      {
        name:"Getting Started",
        url:"https://support.zerodha.com/category/account-opening/getting-started"
      }
    ]
  },


  {
    title:"Your Zerodha Account",
    icon:"fa-user",
    links:[
      {
        name:"Profile",
        url:"https://support.zerodha.com/category/account-profile"
      },
      {
        name:"Login Credentials",
        url:"https://support.zerodha.com/"
      },
      {
        name:"Password Reset",
        url:"https://support.zerodha.com/"
      },
      {
        name:"Email & Mobile Update",
        url:"https://support.zerodha.com/"
      },
      {
        name:"Nominee",
        url:"https://support.zerodha.com/category/account-profile/nominee"
      },
      {
        name:"Bank Details",
        url:"https://support.zerodha.com/"
      },
      {
        name:"Account Closure",
        url:"https://support.zerodha.com/"
      }
    ]
  },


  {
    title:"Trading & Markets",
    icon:"fa-chart-line",
    links:[
      {
        name:"Equity Trading",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"F&O Trading",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"Commodity",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"Currency",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"Margins",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"Pledge Shares",
        url:"https://support.zerodha.com/category/trading-and-markets"
      },
      {
        name:"Corporate Actions",
        url:"https://support.zerodha.com/category/console"
      }
    ]
  },


  {
    title:"Funds",
    icon:"fa-wallet",
    links:[
      {
        name:"Add Funds",
        url:"https://support.zerodha.com/category/funds/add-money"
      },
      {
        name:"Withdraw Funds",
        url:"https://support.zerodha.com/category/funds/withdraw-money"
      },
      {
        name:"UPI Payments",
        url:"https://support.zerodha.com/category/funds"
      },
      {
        name:"Net Banking",
        url:"https://support.zerodha.com/category/funds"
      },
      {
        name:"Ledger",
        url:"https://support.zerodha.com/category/funds"
      },
      {
        name:"Reports",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Refund Status",
        url:"https://support.zerodha.com/"
      }
    ]
  },


  {
    title:"Console",
    icon:"fa-desktop",
    links:[
      {
        name:"Portfolio",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Reports",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Tax P&L",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Holdings",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Statements",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Downloads",
        url:"https://support.zerodha.com/category/console"
      },
      {
        name:"Mutual Funds",
        url:"https://support.zerodha.com/category/coin"
      }
    ]
  },


  {
    title:"Kite Platform",
    icon:"fa-chart-bar",
    links:[
      {
        name:"Orders",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Positions",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Holdings",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Watchlist",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Charts",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Market Depth",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      },
      {
        name:"Settings",
        url:"https://support.zerodha.com/category/trading-and-markets/kite"
      }
    ]
  }

];




function CreateTicket(){

return(

<div
className="container-fluid py-5"
style={{
background:"#f7f9fc",
minHeight:"100vh"
}}
>

<div className="container">


<div className="text-center mb-5">

<h1
style={{
fontWeight:"700"
}}
>
Support Center
</h1>


<p
style={{
color:"#666",
fontSize:"18px"
}}
>
Select a topic to create a support ticket.
</p>


</div>



<div className="row">


{
ticketSections.map((section,index)=>(


<div
className="col-lg-4 col-md-6 mb-4"
key={index}
>


<div
style={{
background:"#fff",
borderRadius:"18px",
padding:"28px",
height:"100%",
boxShadow:"0 8px 25px rgba(0,0,0,.08)"
}}
>


<h4
style={{
color:"#387ed1"
}}
>

<i 
className={`fa ${section.icon}`}
style={{
marginRight:"10px"
}}
></i>


{section.title}

</h4>



{
section.links.map((item,i)=>(


<a
key={i}
href={item.url}
target="_blank"
rel="noreferrer"

style={{
display:"block",
padding:"8px 0",
color:"#555",
textDecoration:"none",
fontSize:"15px"
}}

onMouseEnter={(e)=>{
e.target.style.color="#387ed1";
e.target.style.paddingLeft="10px";
}}

onMouseLeave={(e)=>{
e.target.style.color="#555";
e.target.style.paddingLeft="0px";
}}

>

{item.name}

</a>


))
}



</div>


</div>


))
}



</div>


</div>

</div>

)

}


export default CreateTicket;