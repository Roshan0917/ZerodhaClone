import React, {
  useState,
  useEffect,
  useMemo
} from "react";


import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";


import {
  Doughnut
} from "react-chartjs-2";



ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);





export function DoughnutChart({data}){


  const [isDark,setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );





  useEffect(()=>{


    const updateTheme = ()=>{


      setIsDark(
        localStorage.getItem("theme") === "dark"
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







  const options = useMemo(()=>({



    responsive:true,


    maintainAspectRatio:false,



    cutout:"65%",




    layout:{


      padding:10


    },





    plugins:{



      legend:{


        display:true,


        position:"bottom",



        labels:{


          color:
          isDark
          ? "#f3f4f6"
          : "#111827",



          padding:15,


          boxWidth:14,



          font:{


            size:12,


            weight:"600"


          }


        }


      },







      tooltip:{



        enabled:true,



        backgroundColor:
        isDark
        ? "#1f2937"
        : "#ffffff",



        titleColor:
        isDark
        ? "#ffffff"
        : "#111827",



        bodyColor:
        isDark
        ? "#f3f4f6"
        : "#111827",



        borderColor:
        isDark
        ? "#374151"
        : "#d1d5db",



        borderWidth:1


      }



    }




  }),[isDark]);








  return(


    <div
      className="doughnut-wrapper"
    >


      <Doughnut

        data={data}

        options={options}

      />



    </div>


  );


}