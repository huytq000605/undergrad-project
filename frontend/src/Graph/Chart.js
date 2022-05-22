import React, {Component} from 'react';
// eslint-disable-next-line
import { Line } from 'react-chartjs-2';
import pollingAPI from './Polling';
class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  async componentDidMount() {
    console.log('componentDidMount');
    let newState = await pollingAPI();
    // console.log(newState);
    this.setState({ 
      chartData: newState,
      currentData: newState.currentData,
      voltageData: newState.voltageData,
      tempData: newState.tempData,
    })

    this.interval = setInterval(async () => {
      /* Call the Polling API every 5 seconds */
      newState = await pollingAPI();
      // console.log(newState);
      this.setState({ 
        chartData: newState,
        currentData: newState.currentData,
        voltageData: newState.voltageData,
        tempData: newState.tempData,
      })
    }, 5000);
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
