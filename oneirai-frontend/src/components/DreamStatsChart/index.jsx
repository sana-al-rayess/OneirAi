import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import './dreamstatschat.css';

const DreamStatsChart = () => {
  const [data, setData] = useState(null);
  const [locationCharts, setLocationCharts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/dreamstat`);
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

        const canvasId = `locationChart-${location}`;

        const chart = new Chart(canvasId, {
          type: 'pie',
          data: {
            labels: categories,
            datasets: [
              {
                data: counts,
                backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                  '#FF9F40',
                ],
              },
            ],
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
      <h1>Pie Charts of User's Locations</h1>
      <div className='charts-container'>
        {data &&
          data.stats.map((locationData) => (
            <div key={locationData.location} className='chart-container'>
              <h3>{locationData.location}</h3>
              <canvas id={`locationChart-${locationData.location}`}></canvas>
            </div>
          ))}
      </div>
    </div>
  );
};
export default DreamStatsChart;