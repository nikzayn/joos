import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Chart extends Component {
  render() {
    const chartData = {
      labels: this.props.labels,
      datasets: [
        {
          label: 'Desktop Monthly',
          backgroundColor: "#B3F6AA",
          borderColor: brandSuccess,
          data: this.props.data
        }
      ]
    };
    return (
      <div className="chart">
        <Line
          data={chartData}
          options={{
            tooltips: {
              enabled: false,
              custom: CustomTooltips
            },
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false
                }
              ]
            },
            elements: {
              line: {
                borderWidth: 2
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
