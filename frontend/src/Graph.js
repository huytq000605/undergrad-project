import { Container } from "react-bootstrap";
import Chart from './Graph/Chart';

export const Graph = (props) => {
	// const labels = (() => {
	// 	let labels = [];
	// 	let time = new Date();
	// 	while (labels.length <= 30) {
	// 	  labels.push(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
	// 	  console.log(time);
	// 	  time = new Date(time.getTime() - 600000);
	// 	}
	// 	return labels.reverse();
	// })();
	
	// function getRandomInt(max) {
	// 	return Math.floor(Math.random() * max);
	// }
	
	// const state = {
	// 	currentData:{
	// 	  labels,
	// 	  datasets: [
	// 		{
	// 		  label: 'Pha A',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(255, 99, 132)',
	// 		  backgroundColor: 'rgb(255, 99, 132)',
	// 		  fill: false,
	// 		},
	// 		{
	// 		  label: 'Pha B',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(53, 162, 235)',
	// 		  backgroundColor: 'rgb(53, 162, 235)',
	// 		  fill: false,
	// 		},
	// 		{
	// 		  label: 'Pha C',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(53, 235, 59)',
	// 		  backgroundColor: 'rgb(53, 235, 59)',
	// 		  fill: false,
	// 		},
	// 	  ]
	// 	},
	// 	voltageData:{
	// 	  labels,
	// 	  datasets: [
	// 		{
	// 		  label: 'Pha A',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(255, 99, 132)',
	// 		  backgroundColor: 'rgb(255, 99, 132)',
	// 		  fill: false,
	// 		},
	// 		{
	// 		  label: 'Pha B',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(53, 162, 235)',
	// 		  backgroundColor: 'rgb(53, 162, 235)',
	// 		  fill: false,
	// 		},
	// 		{
	// 		  label: 'Pha C',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(53, 235, 59)',
	// 		  backgroundColor: 'rgb(53, 235, 59)',
	// 		  fill: false,
	// 		},
	// 	  ]
	// 	},
	// 	tempData:{
	// 	  labels,
	// 	  datasets: [
	// 		{
	// 		  label: 'Nhiệt độ tủ điện',
	// 		  data: labels.map(() => getRandomInt(1000)),
	// 		  borderColor: 'rgb(255, 0, 0)',
	// 		  backgroundColor: 'rgb(255, 0, 0)',
	// 		  fill: false,
	// 		}
	// 	  ]
	// 	}
	// }
	return (
		<Container>
			<div className="Graph">
        		<Chart location={props.state.location} legendPosition="bottom"/>
      		</div>
		</Container>
	)
}