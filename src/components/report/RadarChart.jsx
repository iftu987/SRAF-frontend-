import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = ({ domainScores = {} }) => {
  const labels = Object.keys(domainScores);
  const dataValues = Object.values(domainScores);

  const data = {
    labels: labels.length > 0 ? labels : ['Domain A', 'Domain B', 'Domain C', 'Domain D', 'Domain E'],
    datasets: [
      {
        label: 'Domain Readiness Score (%)',
        data: dataValues.length > 0 ? dataValues : [75, 75, 75, 75, 75],
        backgroundColor: 'rgba(99, 102, 241, 0.25)',
        borderColor: '#6366F1',
        pointBackgroundColor: '#8B5CF6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#8B5CF6',
        borderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#4B5563',
          font: { family: "'Inter', sans-serif", size: 13 }
        }
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(0, 0, 0, 0.08)' },
        grid: { color: 'rgba(0, 0, 0, 0.08)' },
        pointLabels: {
          color: '#4B5563',
          font: { family: "'Inter', sans-serif", size: 10 },
          callback: (label) => {
            if (label.length > 20) {
              return label.substring(0, 20) + '...';
            }
            return label;
          }
        },
        ticks: {
          color: '#6B7280',
          backdropColor: 'transparent',
          stepSize: 20
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', height: '420px', position: 'relative' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
