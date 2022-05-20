import { Container, Row, Col } from "react-bootstrap";
import Chart from './Graph/Chart';
import { StatisticComponent } from "./Statistics/StatisticComponent";
import { EnergyConsume } from "./Statistics/EnergyConsume";
import { Electric } from "./Statistics/Electric";

export const Graph = () => {
	const labels = (() => {
		let labels = [];
		let time = new Date();
		while (labels.length <= 30) {
		  labels.push(time);
		  console.log(time);
		  time = new Date(time.getTime() - 600000);
		}
		return labels.reverse();
	})();
	
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	
	const state = {
		currentData:{
		  labels,
		  datasets: [
			{
			  label: 'Pha A',
			  data: labels.map(() => getRandomInt(1000)),
			  borderColor: 'rgb(255, 99, 132)',
			  backgroundColor: 'rgba(0, 0, 0, 0)',
			},
			{
			  label: 'Pha B',
			  data: labels.map(() => getRandomInt(1000)),
			  borderColor: 'rgb(53, 162, 235)',
			  backgroundColor: 'rgba(0, 0, 0, 0)',
			},
			{
			  label: 'Pha C',
			  data: labels.map(() => getRandomInt(1000)),
			  borderColor: 'rgb(53, 235, 59)',
			  backgroundColor: 'rgba(0, 0, 0, 0)',
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
			  backgroundColor: 'rgba(0, 0, 0, 0)',
			},
			{
			  label: 'Pha B',
			  data: labels.map(() => getRandomInt(1000)),
			  borderColor: 'rgb(53, 162, 235)',
			  backgroundColor: 'rgba(0, 0, 0, 0)',
			},
			{
			  label: 'Pha C',
			  data: labels.map(() => getRandomInt(1000)),
			  borderColor: 'rgb(53, 235, 59)',
			  backgroundColor: 'rgba(0, 0, 0, 0)',
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
			  backgroundColor: 'rgba(0, 0, 0, 0)',
			}
		  ]
		}
	}
	console.log(state);
	return (
		<Container>
			<div className="Graph">
        		<Chart chartData={state} location="Quận Đống Đa" legendPosition="bottom"/>
      		</div>
		</Container>
	)
}