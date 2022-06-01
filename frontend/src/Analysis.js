import { Container } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { StatisticComponent } from "./Statistics/StatisticComponent";
import { EnergyConsume } from "./Statistics/EnergyConsume";
import { Electric } from "./Statistics/Electric";
import { Environment } from "Statistics/Environment";

export const Analysis = () => {
	const testData = [];
	for (let i = 1; i <= 36; i++) {
		testData.push(i);
	}

	const result = [];
	while (testData.length) {
		result.push(testData.splice(0, 12));
	}

	console.log("result:", result);

	return (
		<Container>
			<Form>
				<GridContainer fluid>
					<Row>
						{result.map((data, index) => (
							<Col>
								{data.map((x) => (
									<Form.Group
										key={x}
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											Title:
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue={x}
											/>
										</Col>
									</Form.Group>
								))}
							</Col>
						))}
					</Row>
				</GridContainer>
			</Form>
		</Container>
	);
};
