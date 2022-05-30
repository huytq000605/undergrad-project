import { Container } from "rsuite";
import { Container as GridContainer, Row, Col } from "react-bootstrap";
import { StatisticComponent } from "./Statistics/StatisticComponent";
import { EnergyConsume } from "./Statistics/EnergyConsume";
import { Electric } from "./Statistics/Electric";
import { Environment } from "Statistics/Environment";

export const Analysis = () => {
	return (
		<Container>
				<GridContainer fluid>
					<Row>
						<Col>1</Col>
						<Col>2</Col>
						<Col>3</Col>
					</Row>
				</GridContainer>
		</Container>
	);
};
