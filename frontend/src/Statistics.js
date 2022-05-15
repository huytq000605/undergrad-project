import { Container } from "rsuite";
import { Container as GridContainer, Row, Col } from "react-bootstrap";
import { StatisticComponent } from "./Statistics/StatisticComponent";
import { EnergyConsume } from "./Statistics/EnergyConsume";
import { Electric } from "./Statistics/Electric";

export const Statistics = () => {
	const names = ["A", "B", "C"];

	return (
		<Container>
				<GridContainer fluid>
					<Row>
						{names.map((name, index) => (
							<Col key={index} xs={12} md={12}>
								<StatisticComponent name={name} />
							</Col>
						))}
						<Col xs={12} md={12}>
							<EnergyConsume />
						</Col>
						<Col xs={12} md={12}>
							<Electric />
						</Col>
					</Row>
				</GridContainer>
		</Container>
	);
};
