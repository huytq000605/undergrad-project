import { Container } from "rsuite";
import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";

export const EnergyConsume = () => {
	return (
			<Card className="mx-1 mt-2">
				<Card.Header className="px-1 py-1" style={{ width: "100%", textTransform: "uppercase" }}>
					{`Các thông số tiêu thụ điện năng`}
				</Card.Header>
				<Card.Body className="px-2 py-2" style={{}}>
					<Form>
						<GridContainer fluid>
							<Row>
								<Col sm={12} md={6}>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Điện năng tiêu thụ`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kWh]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất phản kháng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVARh]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất hiệu dụng tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kW]
										</Form.Label>
									</Form.Group>
								</Col>
								<Col sm={12} md={6}>
								<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất biểu kiến`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVAh]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất biểu kiến tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVA]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất phản kháng tổng`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kVAR]
										</Form.Label>
									</Form.Group>
								</Col>
							</Row>
						</GridContainer>
					</Form>
				</Card.Body>
			</Card>
	);
};
