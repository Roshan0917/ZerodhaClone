import React, {
  useMemo,
  useState,
  useEffect
} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import {
  Bar
} from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);



export function VerticalGraph({data}) {


  const [isDark,setIsDark] = useState(
    localStorage.getItem("theme")==="dark"
  );



  useEffect(()=>{


    const updateTheme = ()=>{

      setIsDark(
        localStorage.getItem("theme")==="dark"
      );

    };


    window.addEventListener(
      "themeChanged",
      updateTheme
    );


    return()=>{

      window.removeEventListener(
        "themeChanged",
        updateTheme
      );

    };


  },[]);







  const chartData = useMemo(()=>{


    return {

      labels:data.labels,


      datasets:data.datasets.map((item)=>({


        ...item,


        backgroundColor:

          isDark
          ? "#60a5fa"
          : "#387ed1",



        borderRadius:10,


        borderSkipped:false,


        barThickness:60,


      }))


    };


  },[data,isDark]);










  const options = useMemo(()=>({



    responsive:true,


    maintainAspectRatio:false,



    animation:{


      duration:900


    },



    layout:{


      padding:{


        top:20,

        bottom:35,

        left:10,

        right:10


      }


    },






    plugins:{


      legend:{


        display:true,


        position:"top",


        labels:{


          color:
          isDark
          ? "#f3f4f6"
          :"#111827",


          font:{


            size:13,

            weight:"600"


          }


        }


      },




      tooltip:{


        backgroundColor:
        isDark
        ? "#1f2937"
        :"#ffffff",



        titleColor:
        isDark
        ? "#ffffff"
        :"#111827",



        bodyColor:
        isDark
        ? "#f3f4f6"
        :"#111827",



        borderColor:
        isDark
        ? "#374151"
        :"#d1d5db",



        borderWidth:1,



        callbacks:{


          label:(context)=>{


            return " ₹ "+context.raw.toLocaleString();


          }


        }


      }


    },









    scales:{


      x:{


        ticks:{


          color:
          isDark
          ? "#cbd5e1"
          :"#475569",


          font:{


            size:12,

            weight:"600"


          }


        },


        grid:{


          display:false


        }


      },







      y:{


        beginAtZero:true,


        grace:"10%",




        ticks:{


          color:
          isDark
          ? "#cbd5e1"
          :"#475569",


          padding:10,


          callback:(value)=>{


            return "₹"+value.toLocaleString();


          }


        },



        grid:{


          color:
          isDark
          ? "rgba(255,255,255,.08)"
          :"#e5e7eb"


        }


      }


    }





  }),[isDark]);









  return(

    <div className="vertical-chart">


      <Bar

        data={chartData}

        options={options}

      />


    </div>


  );


}