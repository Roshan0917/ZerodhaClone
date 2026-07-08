import React, { useMemo, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalGraph({ data }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("themeChanged", updateTheme);

    return () => {
      window.removeEventListener("themeChanged", updateTheme);
    };
  }, []);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,

      animation: {
        duration: 1000,
      },

      plugins: {
        legend: {
          position: "top",
          labels: {
            color: isDark ? "#f3f4f6" : "#111827",
            font: {
              size: 13,
              weight: "600",
            },
          },
        },

        // 👇 IMPORTANT
        title: {
          display: false,
        },

        tooltip: {
          backgroundColor: isDark ? "#1f2937" : "#ffffff",
          titleColor: isDark ? "#ffffff" : "#111827",
          bodyColor: isDark ? "#f3f4f6" : "#111827",
          borderColor: isDark ? "#374151" : "#d1d5db",
          borderWidth: 1,
        },
      },

      scales: {
        x: {
          ticks: {
            color: isDark ? "#d1d5db" : "#374151",
          },
          grid: {
            color: isDark
              ? "rgba(255,255,255,0.08)"
              : "#ececec",
          },
        },

        y: {
          beginAtZero: true,

          ticks: {
            color: isDark ? "#d1d5db" : "#374151",
          },

          grid: {
            color: isDark
              ? "rgba(255,255,255,0.08)"
              : "#ececec",
          },
        },
      },

      elements: {
        bar: {
          borderRadius: 8,
          borderSkipped: false,
        },
      },
    }),
    [isDark]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}