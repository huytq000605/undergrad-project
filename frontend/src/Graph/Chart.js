import React, {Component} from 'react';
// eslint-disable-next-line
import { Line } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    console.log(this.state.chartData);
    console.log(this.state.chartData.currentData);
    console.log(this.state.chartData.currentData);
    console.log(this.state.chartData.currentData);
    console.log(this.props.location);
    console.log(this.props.displayLegend);
    console.log(this.props.legendPosition);
    return (
      <div className="chart">
        <Line
          data={this.state.chartData.currentData}
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
          data={this.state.chartData.voltageData}
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
          data={this.state.chartData.tempData}
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
