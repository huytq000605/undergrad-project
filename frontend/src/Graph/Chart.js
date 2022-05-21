import React, {Component} from 'react';
// eslint-disable-next-line
import { Line } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      currentData: props.chartData.currentData,
      voltageData: props.chartData.voltageData,
      tempData: props.chartData.tempData,
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  componentDidMount() {
    console.log('componentDidMount');

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const { labels } = this.state.currentData;

    this.interval = setInterval(() => {
      /* Call the Polling API */
      const newState = {
        currentData:{
          labels,
          datasets: [
          {
            label: 'Pha A',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Pha B',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235)',
            fill: false,
          },
          {
            label: 'Pha C',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(53, 235, 59)',
            backgroundColor: 'rgb(53, 235, 59)',
            fill: false,
          },
          ]
        },
        voltageData:{
          labels,
          datasets: [
          {
            label: 'Pha A',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            fill: false,
          },
          {
            label: 'Pha B',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235)',
            fill: false,
          },
          {
            label: 'Pha C',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(53, 235, 59)',
            backgroundColor: 'rgb(53, 235, 59)',
            fill: false,
          },
          ]
        },
        tempData:{
          labels,
          datasets: [
          {
            label: 'Nhiệt độ tủ điện',
            data: labels.map(() => getRandomInt(1000)),
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0)',
            fill: false,
          }
          ]
        }
      }
      this.setState({ 
        chartData: newState,
        currentData: newState.currentData,
        voltageData: newState.voltageData,
        tempData: newState.tempData,
      })
    }, 2000);
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.currentData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Thông số dòng điện tại nhà máy ' + this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.voltageData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Thông số điện áp tại nhà máy ' + this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.tempData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Thông số nhiệt độ tại nhà máy ' + this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
