"use client"; 

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CustomLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Define chart options
    const option = {
      title: {
        text: 'Customer Acquisition',
        left: 'center',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Users', 'Sessions'],
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
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
          name: 'Users',
          type: 'line',
          data: [400, 800, 1200, 1800, 1500, 2000, 1700, 1600, 2000, 2400, 2200, 2500],
          itemStyle: {
            color: '#5470C6',
          },
          smooth: true, // Makes the line smooth
        },
        {
          name: 'Sessions',
          type: 'line',
          data: [240, 480, 720, 900, 600, 1000, 1100, 1300, 1400, 1600, 1500, 1700],
          itemStyle: {
            color: '#91CC75',
          },
          smooth: true,
        },
      ],
    };

    // Set chart options
    chart.setOption(option);

    // Clean up the chart on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default CustomLineChart;
