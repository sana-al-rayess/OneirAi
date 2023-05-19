import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import "./polarchartarea.css";

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/admin',
 
});

const PolarAreaChart = () => {
  const [data, setData] = useState(null);
  const [locationCharts, setLocationCharts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    try {
      const response = await api.get(`/dreamstat`, config);
      setData(response.data);
      setIsLoading(false);
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

        const canvasId = `locationChart-${location}`;

        const chart = new Chart(canvasId, {
          type: 'polarArea',
          data: {
            labels: categories,

            datasets: [
              {
                data: counts,
                color: "white",
                backgroundColor: [
                  '#F2B544',
                  '#36A2EB',
                  '#F2EEB6',
                  '#3370A6',  //navy
                  '#9966FF',
                  '#FF9F40',
                ],

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
            }
            
          }
        });

        newLocationCharts.push(chart);
      });

      // Save the new chart instances to state
      setLocationCharts(newLocationCharts);
    }
  }, [data]);

  return (
   
      <div className='chart-panel'>
        <div className='title-chart'><h1>Polar Charts of User's Locations</h1></div>
        <div className='pie-container'>
          {isLoading ? (
            <div className='loading-spinner'>
              <i className='fa fa-spinner fa-spin'></i>
            </div>
          ) : (
            data &&
            data.stats.map((locationData) => (
              <div key={locationData.location} className='pie-chart-container'>
                <h3>{locationData.location}</h3>
                <canvas
                  id={`locationChart-${locationData.location}`}
                  className='chart-canvas-pie'
                ></canvas>
              </div>
            ))
          )}
        </div>
      </div>
    
  );
};


export default PolarAreaChart;
