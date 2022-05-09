import { Container } from "rsuite";
import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";

export const Statistics = () => {
	return (
		<Container>
			<Card style={{ margin: "20px" }}>
				<Card.Header style={{ width: "100%", textTransform: "uppercase" }}>
					Các thông số pha A
				</Card.Header>
				<Card.Body>
					<Form>
						<GridContainer fluid>
							<Row>
								<Col sm={12} md={6}>
									<Form.Group
										as={Row}
										className="mb-3"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="7" className="text-end">
											Dòng điện pha A
										</Form.Label>
										<Col sm="2">
											<Form.Control
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
										className="mb-3"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="7" className="text-end">
											Công suất điều khiển pha A
										</Form.Label>
										<Col sm="2">
											<Form.Control
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
										className="mb-3"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="7" className="text-end">
											Cos alpha pha A
										</Form.Label>
										<Col sm="2">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[A]
										</Form.Label>
									</Form.Group>
								</Col>
								<Col sm={12} md={6}>
								<Form.Group
										as={Row}
										className="mb-3"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="7" className="text-end">
											Công suất hiệu dụng pha A
										</Form.Label>
										<Col sm="2">
											<Form.Control
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
										className="mb-3"
										controlId="formPlaintextEmail"
									>
										<Form.Label column sm="7" className="text-end">
											Công suất phản kháng pha A
										</Form.Label>
										<Col sm="2">
											<Form.Control
												className="px-1 py-1"
												readOnly
												defaultValue="0.00"
											/>
										</Col>
										<Form.Label column sm="3" className="text-start">
											[A]
										</Form.Label>
									</Form.Group>
								</Col>
							</Row>
						</GridContainer>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
};
