import React, { Component, lazy } from 'react';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

import Projection from './Projection';
import Organic from './Organic';
import Direct from './Direct';
import Paid from './Paid';
import Social from './Social';
import Others from './Others';


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')



// Main Chart

//Random Month
function month(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 6;
var month1 = [];
var month2 = [];
var month3 = [];
var month4 = [];
var month5 = [];

for (var i = 0; i <= elements; i++) {
  month1.push(month(50, 200));
  month2.push(month(60, 190));
  month3.push(month(70, 160));
  month4.push(month(80, 140));
  month5.push(month(90, 120));
}

//Random Week
function week(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 6;
var week1 = [];
var week2 = [];
var week3 = [];
var week4 = [];
var week5 = [];

for (var i = 0; i <= elements; i++) {
  week1.push(week(30, 180));
  week2.push(week(70, 220));
  week3.push(week(66, 122));
  week4.push(week(22, 160));
  week5.push(week(40, 110));
}

const mainChartMonthly = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: hexToRgba(brandPrimary),
      borderColor: brandPrimary,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: month1,
    },
    {
      label: 'New Users',
      backgroundColor: hexToRgba(brandSuccess),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: month2,
    },
    {
      label: 'Conversion',
      backgroundColor: hexToRgba(brandDanger),
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: month3,
    },
    {
      label: 'Order',
      backgroundColor: hexToRgba(brandWarning),
      borderColor: brandWarning,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: month4,
    },
    {
      label: 'Revenue',
      backgroundColor: hexToRgba(brandInfo),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: month5,
    },
  ],
};


const monthlyOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const mainChartWeekly = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: hexToRgba(brandPrimary, 0),
      borderColor: brandPrimary,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: week1,
    },
    {
      label: 'New Users',
      backgroundColor: hexToRgba(brandSuccess, 0),
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: week2,
    },
    {
      label: 'Conversion',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: hexToRgba(brandDanger, 0),
      borderWidth: 2,
      data: week3,
    },
    {
      label: 'Order',
      backgroundColor: 'transparent',
      borderColor: brandWarning,
      pointHoverBackgroundColor: hexToRgba(brandWarning, 0),
      borderWidth: 2,
      data: week4,
    },
    {
      label: 'Revenue',
      backgroundColor: 'transparent',
      borderColor: brandInfo,
      pointHoverBackgroundColor: hexToRgba(brandInfo, 0),
      borderWidth: 2,
      data: week5,
    },
  ],
};

const weeklyOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};


class ECommerce extends Component {
  render() {

    return (
      <div className="animated fadeIn">
        <Projection />
        <Organic />
        <Direct />
        <Paid />
        <Social />
        <Others />
      </div>
    );
  }
}

export default ECommerce;
