import { Container } from "rsuite";
import { Container as GridContainer, Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { api } from "shared/api"

export const Analysis = () => {
	const [data, setData] = useState({})
	useEffect(() => {
		const getResponse = async () => {
			const res = await api("trust")
			const json = await res.json()
			setData(json)
		}
		getResponse()
		const interval = setInterval(() => {
			getResponse()
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Container>
			<Form>
				<GridContainer fluid>
						{new Array(12).fill(0).map((_, idx) => (
						<Row>
							<Col>
								<Form.Group
									key={"ABC"}
									as={Row}
									className="mb-1"
									controlId="formPlaintextEmail"
								>
									<Form.Label column sm="6" className="text-end">
										SAIDI {`${idx + 1}`}
									</Form.Label>
									<Col sm="3">
										<Form.Control
											className="px-1 py-1"
											readOnly
											value={data?.[idx]?.['saidi'] || 0}
										/>
									</Col>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group
									key={"ABC"}
									as={Row}
									className="mb-1"
									controlId="formPlaintextEmail"
								>
									<Form.Label column sm="6" className="text-end">
										SAIFI {`${idx + 1}`}
									</Form.Label>
									<Col sm="3">
										<Form.Control
											className="px-1 py-1"
											readOnly
											value={data?.[idx]?.['saidi'] || 0}
										/>
									</Col>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group
									key={"ABC"}
									as={Row}
									className="mb-1"
									controlId="formPlaintextEmail"
								>
									<Form.Label column sm="6" className="text-end">
										MAIFI {`${idx + 1}`}
									</Form.Label>
									<Col sm="3">
										<Form.Control
											className="px-1 py-1"
											readOnly
											value={data?.[idx]?.['saidi'] || 0}
										/>
									</Col>
								</Form.Group>
							</Col>
						</Row>
						))}
				</GridContainer>
			</Form>
		</Container>
	);
};
