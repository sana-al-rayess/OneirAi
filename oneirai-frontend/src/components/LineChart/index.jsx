import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';


const LineChart = () => {
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

        const canvasId = `locationLineChart-${location}`;

        const chart = new Chart(canvasId, {
          type: 'line',
          data: {
            labels: categories,
            datasets: [
              {
                label: 'Dream Counts',
                data: counts,
                fill: false,
                borderColor: '#4BC0C0',
                tension: 0.1,
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
  

};
export default LineChart;
