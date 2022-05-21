import {
	Container as GridContainer,
	Card,
	Form,
	Row,
	Col,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { api } from "../shared/api"

export const StatisticComponent = ({name}) => {
	const [data, setData] = useState({})
	useEffect(() => {
		const getResponse = async () => {
			const res = await api(`pha-${name}`)
			const json = await res.json()
			setData(json)
		}
		getResponse()
		const interval = setInterval(() => {
			getResponse()
		}, 5000)

		return () => clearInterval(interval)
	}, [name])

	return (
			<Card className="mx-1 mt-2">
				<Card.Header className="px-1 py-1" style={{ width: "100%", textTransform: "uppercase" }}>
					{`Các thông số pha ${name}`}
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
											{`Dòng điện pha ${name}`}
										</Form.Label>
										<Col sm="3">
											<Form.Control
												className="px-1 py-1"
												readOnly
												value={data['dong_dien'] || 0}
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
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_dieu_khien'] || 0}
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
												className="px-1 py-1"
												readOnly
												value={data['cos_alpha'] || 0}
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
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_hieu_dung'] || 0}
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
												className="px-1 py-1"
												readOnly
												value={data['cong_suat_phan_khang'] || 0}
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
