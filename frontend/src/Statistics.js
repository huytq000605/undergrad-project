import { Container } from "rsuite";
import { Container as GridContainer, Row, Col } from "react-bootstrap";
import { StatisticComponent } from "./StatisticComponent";

export const Statistics = () => {
	const names = ["A", "B", "C", "Other", "Other"];

	return (
		<Container>
				<GridContainer fluid>
					<Row>
						{names.map((name, index) => (
							<Col key={index} xs={12} md={12}>
								<StatisticComponent name={name} />
							</Col>
						))}
					</Row>
				</GridContainer>
		</Container>
	);
};
