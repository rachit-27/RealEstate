import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './SaveCountChart.scss'; // Import your styles

const SaveCountChart = ({ posts }) => {
  // Example static data for multiple posts
  // Each post has a title and a save count
  const samplePosts = [
    { title: 'Post 1', saveCount: 6 },
    { title: 'Post 2', saveCount: 10 },
    { title: 'Post 3', saveCount: 3 },
    { title: 'Post 4', saveCount: 8 },
  ];

  // Prepare data for the chart
  const labels = samplePosts.map(post => post.title);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Saves',
        data: samplePosts.map(post => post.saveCount),
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        barThickness: 40,
      },
    ],
  };

  return (
    <div className="chart-container" style={{ height: '300px', width: '100%' }}>
      <h2 className="chart-title">Post Save Counts</h2>
      <Bar 
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: false, // Disable animation
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `Saves: ${tooltipItem.raw}`,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(...samplePosts.map(post => post.saveCount)) + 2, // Dynamic max value
              title: {
                display: true,
                text: 'Count',
                color: '#333',
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
              ticks: {
                color: '#333',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Posts',
                color: '#333',
                font: {
                  size: 14,
                  weight: 'bold',
                },
              },
              ticks: {
                color: '#333',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default SaveCountChart;
