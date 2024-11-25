// CustomBarChart.js
"use client";
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CustomBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const chart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: 'Revenue Statistics',
          left: 'center',
          textStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow', // Type of pointer - shadow for bar chart
          },
        },
        legend: {
          data: ['Orders', 'Revenue'],
          top: '10%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
            },
          },
        },
        series: [
          {
            name: 'Orders',
            type: 'bar',
            barWidth: '40%',
            data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4000, 3000, 2000],
            itemStyle: {
              color: '#5470C6',
            },
          },
          {
            name: 'Revenue',
            type: 'bar',
            barWidth: '40%',
            data: [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2400, 1398, 9800],
            itemStyle: {
              color: '#91CC75',
            },
          },
        ],
      };

      chart.setOption(option);

      // Clean up the chart on component unmount
      return () => {
        chart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default CustomBarChart;
