import { Container } from "rsuite";
import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";
import { StatisticComponent } from "./StatisticComponent";

export const Statistics = () => {
	const names = ["A", "B", "C", "D", "E"];

	return (
		<Container>
			<div style={{ maxHeight: '100%', overflow: 'hidden' }}>
				<Row>
					{names.map((name, index) => (
						<Col key={index} xs={12} md={index === names.length - 1 ? 12 : 6}>
							<StatisticComponent name={name} />
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
};
