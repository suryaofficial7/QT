import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// Register the necessary components from Chart.js
ChartJS.register(CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August' , 'September' , 'October' , 'November' , 'December'],
    datasets: [
      {
        label: 'Sales 2024 (in Rs)',
        data: [12000, 15000, 8000, 10000, 17000, 13000, 11000 , 5432,12000,3000,17777,10000],
        backgroundColor: ['rgba(75, 192, 192, 0.4)','rgba(75, 92, 192, 0.4)','rgba(75, 192, 12, 0.4)','rgba(25, 12, 42, 0.4)',],
        borderColor: 'rgba(75, 75, 75, 1)',
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly in-ex for 2024',
      },
    },
  };

  return <Bar data={data} options={options} className='bg-transparent border-gray-700 scale-90 rounded-lg py-3  '  />;
  
}

export default LineChart