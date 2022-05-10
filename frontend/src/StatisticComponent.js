import { Container } from "rsuite";
import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";

export const StatisticComponent = ({name}) => {
	return (
			<Card className="mx-1 mt-2">
				<Card.Header className="px-1 py-1" style={{ width: "100%", textTransform: "uppercase", fontSize: '0.75rem' }}>
					{`Các thông số pha ${name}`}
				</Card.Header>
				<Card.Body className="px-2 py-2" style={{ fontSize: '0.6rem'}}>
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
											{`Dòng điện pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
											  style={{ fontSize: '0.5rem'}}
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[A]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất điều khiển pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
											  style={{ fontSize: '0.5rem'}}
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
											{`Cos alpha pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
											  style={{ fontSize: '0.5rem'}}
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[N/A]
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
											{`Công suất hiệu dụng pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
											  style={{ fontSize: '0.5rem'}}
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[kW]
										</Form.Label>
									</Form.Group>
									<Form.Group
										as={Row}
										className="mb-1"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="6" className="text-end">
											{`Công suất phản kháng pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
											  style={{ fontSize: '0.5rem'}}
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
