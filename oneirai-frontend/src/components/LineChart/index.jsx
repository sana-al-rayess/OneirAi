import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';


const LineChart = () => {
  const [data, setData] = useState(null);
  const [locationCharts, setLocationCharts] = useState([]);

  async function fetchData() {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/admin/dreamstat`, config);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const stats = data.stats;
      const newLocationCharts = [];

      // Destroy the existing chart instances
      locationCharts.forEach((chart) => chart.destroy());

      // Create a new chart for each location
      stats.forEach((locationData) => {
        const location = locationData.location;
        const dreams = locationData.dreams;
        const categories = dreams.map((dream) => dream.category);
        const counts = dreams.map((dream) => dream.count);

        const canvasId = `barChart-${location}`;

        const chart = new Chart(canvasId, {
          type: 'line',
          data: {
            labels: categories,
            datasets: [
              {
                label: 'Dream Counts',
                color: 'white',
                data: counts,
                backgroundColor: [
                  '#F2B544',
                  '#36A2EB',
                  '#F2EEB6',
                  '#3370A6',  //navy
                  '#9966FF',
                  '#FF9F40',
                ],
                borderColor: 'yellow'
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  color: 'white',

                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'white'
                },
                ticks: {
                  color: 'white'
                }
              },
              x: {
                grid: {
                  color: 'white'
                },
                ticks: {
                  color: 'white'
                },
              },

            },
          },
        });

        newLocationCharts.push(chart);
      });

      // Save the new chart instances to state
      setLocationCharts(newLocationCharts);
    }
  }, [data]);

  return (
    <div className='body-stats'>
      <div className='chart-panel'>
        <h1 className='title-chart'>Pie Charts of User's Locations</h1>
        <div className='charts-container'>
          {data &&
            data.stats.map((locationData) => (
              <div key={locationData.location} className='chart-container'>
                <h3>{locationData.location}</h3>
                <canvas id={`barChart-${locationData.location}`} className='chart-canvas-bars'></canvas>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default LineChart;
